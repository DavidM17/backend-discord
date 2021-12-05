import UserModel from "../models/user.model";
import { GenericResponses } from "../../../shared/constants/generic-responses.constant";
import { Response } from "../../../shared/models/response.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const TOKEN = process.env.TOKEN || "";

export const saveUser = async (user: any): Promise<Response<any>> => {
  try {

    if (!(user.email && user.name && user.password && user.sex)) {
      return GenericResponses.INVALID_OBJECT();
    }

    const oldUser = await UserModel.findOne({ email: user.email });

    if(oldUser) return GenericResponses.ALREADY_EXIST();

    const newUser = new UserModel(user);

    const encryptedPassword = await bcrypt.hash(user.password, 10);

    user.password = encryptedPassword;

    await UserModel.create(user);

    return GenericResponses.SAVED_SUCCESS("Usuario creado");
  } catch (e) {
    return GenericResponses.ERROR();
  }
}

export const userAuth = async (credentials: any): Promise<Response<any>> => {
  try {

    const user: any = await UserModel.findOne({email: credentials.email});

    if(user && (await bcrypt.compare(credentials.password, user.password))) {

      const token = jwt.sign(
        { user_id: user._id, email: user.email },
        TOKEN,
        {
          expiresIn: "2h",
        }
      );

      return GenericResponses.FOUND_DATA("Token", token);
    }

    return GenericResponses.ERROR();
  } catch (e) {
    return GenericResponses.ERROR();
  }
}
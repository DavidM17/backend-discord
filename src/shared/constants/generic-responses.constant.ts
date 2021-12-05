import { Response } from "../models/response.model";

export class GenericResponses {

  static FOUND_DATA = (message: string, data: any): Response<any> => {
    const response = {
      code: 302,
      message: message,
      data: data
    }

    return response;
  }

  static SAVED_SUCCESS = (message: string): Response<void> => {
    const response = {
      code: 200,
      message: message
    }

    return response;
  }

  static ERROR = (): Response<void> => {
    const response = {
      code: 500,
      message: "Ha ocurrido un error, intente más tarde"
    }

    return response;
  }

  static INVALID_OBJECT = (): Response<void> => {
    const response = {
      code: 500,
      message: "Objeto invalido"
    }

    return response;
  }

  static ALREADY_EXIST = (): Response<void> => {
    const response = {
      code: 500,
      message: "Ya existe"
    }

    return response;
  }

}
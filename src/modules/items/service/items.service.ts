import ItemModel from "../models/item.model";
import { GenericResponses } from "../../../shared/constants/generic-responses.constant";
import { Response } from "../../../shared/models/response.model";
import { ITEMS_MESSAGES } from "../constants/items.constant";

export const showItems = async (): Promise<Response<any>> => {
  try {
    const data = await ItemModel.find({}).exec();

    return GenericResponses.FOUND_DATA(ITEMS_MESSAGES.FOUND_ITEMS, data);
  } catch (e) {
    return GenericResponses.ERROR();
  }
}

export const createItem = async (item: any): Promise<Response<string | void>> => {
  try {
    const newItem = new ItemModel(item);
    
    await newItem.save(); 
    
    return GenericResponses.SAVED_SUCCESS(ITEMS_MESSAGES.CREATED);
  } catch (e) {
    return GenericResponses.ERROR();
  }
}
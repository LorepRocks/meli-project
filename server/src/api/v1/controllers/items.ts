import axios from 'axios';
import { SearchData } from '../types';
import { buildItemsObj, buildItemWithDesc } from '../helpers/items';

export const getItems = async (query: any): Promise<SearchData> => {
  try {
    const response = await axios.get(
      `${process.env.BASE_API_URL}/${process.env.SEARCH_PATH}?q=${query}`
    );
    const data = buildItemsObj(response.data);
    return data;
  } catch (err) {
    throw { message: `There was an error getting items - ${err}` };
  }
};

export const getItemById = async (itemId: string) => {
  const url = `${process.env.BASE_API_URL}/items/${itemId}`;
  try {
    const response = await axios.get(url);
    const item = response.data;
    const descData = await axios.get(`${url}/description`);
    return buildItemWithDesc(item, descData.data);
  } catch (err) {
    throw { message: `There was an error getting items - ${err}` };
  }
};

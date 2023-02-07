import { Request, Response } from 'express';
import { HTTP_CODES, HTTP_MSG } from '../../../config/constants';
import { getItemById, getItems } from '../controllers/items';

export const getItemsService = async (req: Request, res: Response) => {
  const { q: query } = req.query;

  if (!query) {
    res.status(HTTP_CODES.BAD_REQUEST).send({ msg: HTTP_MSG.MISSING_QUERY });
    return;
  }

  try {
    const data = await getItems(query);
    res.status(HTTP_CODES.OK).send(data);
  } catch (err) {
    res.status(HTTP_CODES.SERVER).send({ msg: HTTP_MSG.SERVER_ERROR });
  }
};

export const getItemByIdService = async (req: Request, res: Response) => {
  const { id: itemId } = req.params;

  if (!itemId) {
    res.status(HTTP_CODES.BAD_REQUEST).send({ msg: HTTP_MSG.MISSING_QUERY });
    return;
  }

  try {
    const data = await getItemById(itemId);
    res.status(HTTP_CODES.OK).send(data);
  } catch (err) {
    res.status(HTTP_CODES.SERVER).send({ msg: HTTP_MSG.SERVER_ERROR });
  }
};

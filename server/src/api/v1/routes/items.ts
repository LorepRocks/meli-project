import express from 'express';
import { getItemsService, getItemByIdService } from '../services/items';

const itemsRouter = express.Router();

/**
 * @swagger
 * /api/v1/items:
 *   get:
 *      summary: Get a list of items based on search key word
 *      parameters:
 *        - name: q
 *          description: key word used for search items.
 *          in: query
 *          required: true
 *          type: string
 *      responses:
 *        400:
 *          description: missing query param q in request
 *        500:
 *          description: server error - probably errors during request
 *        200:
 *          description: OK - returning the items related to search key word
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  author:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       lastname:
 *                         type: string
 *                     description: author name & lastname
 *                  categories:
 *                      type: array
 *                      items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                           name:
 *                             type: string
 *                  items:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                           id:
 *                             type: string
 *                           title:
 *                             type: string
 *                           price:
 *                             type: object
 *                             properties:
 *                                currency:
 *                                  type: string
 *                                amount:
 *                                  type: number
 *                                decimals:
 *                                  type: number
 *                           picture:
 *                             type: string
 *                           condition:
 *                             type: string
 *                           free_shipping:
 *                             type: boolean
 *                           city:
 *                             type: string
 *
 */
itemsRouter.get('/items', getItemsService);

/**
 * @swagger
 * /api/v1/items/{id}:
 *   get:
 *      summary: Get the information for an specific item
 *      parameters:
 *        - name: id
 *          description: id of item
 *          in: path
 *          required: true
 *          type: string
 *      responses:
 *        400:
 *          description: missing item id param in request
 *        500:
 *          description: server error - probably errors during request
 *        200:
 *          description: OK - returning the information of item selected
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  author:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       lastname:
 *                         type: string
 *                     description: author name & lastname
 *                  item:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       title:
 *                         type: string
 *                       price:
 *                         type: object
 *                         properties:
 *                           currency:
 *                             type: string
 *                           amount:
 *                             type: number
 *                           decimals:
 *                             type: number
 *                       picture:
 *                         type: string
 *                       condition:
 *                         type: string
 *                       free_shipping:
 *                         type: boolean
 *                       city:
 *                         type: string
 *                       sold_quantity:
 *                         type: number
 *                       description:
 *                         type: string
 *
 */
itemsRouter.get('/items/:id', getItemByIdService);

export default itemsRouter;

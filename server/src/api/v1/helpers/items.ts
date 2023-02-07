import { Item, Category, SearchData } from '../types';
import { AUTHOR } from '../../../config/constants';

const buildItem = (item: any): Item => {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: parseFloat(item.price.toFixed(2).split('.')[1]),
    },
    picture: item.pictures ? item.pictures[0].secure_url : item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    sold_quantity: item.sold_quantity,
  };
};

export const mapItems = (data: any): Item[] => {
  const items: Item[] = [];
  data.map((item: any) => {
    items.push(buildItem(item));
  });

  return items;
};

export const mapCategories = (data: any): Category[] => {
  const categories: Category[] = [];

  const categoriesList = data.filter((filter: any) => filter.id === 'category')[0];
  const sortedCategories =
    categoriesList?.values.length > 0
      ? categoriesList.values.sort((a: any, b: any) => (b.results > a.results ? 1 : -1))
      : [];

  sortedCategories.map((category: Category) => {
    categories.push({
      id: category.id,
      name: category.name,
    });
  });

  return categories;
};

export const buildItemsObj = (data: any): SearchData => {
  const categories = mapCategories(data.available_filters);
  const items = mapItems(data.results);

  const result: SearchData = {
    author: AUTHOR,
    categories: categories,
    items: items,
  };

  return result;
};

export const buildItemWithDesc = (item: any, description: any) => {
  return {
    author: AUTHOR,
    item: {
      ...buildItem(item),
      description: description.plain_text,
    },
  };
};

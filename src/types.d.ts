export type Category = {
  id: string;
  name: string;
};

export type Price = {
  currency: string;
  amount: number;
  decimals: number;
};

export type Item = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
  city: string;
};
export type Result = {
  author?: {
    name: string;
    lastname: string;
  };
  categories?: Category[];
  items?: Item[];
  item?: Item;
};

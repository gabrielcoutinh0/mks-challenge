export type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  amount?: number;
};

export interface RootState {
  cart: {
    items: Product;
    isOpen: boolean;
    totalAmount: number;
    totalCount: number;
  };
}

const paramsURL = {
  page: 1,
  rows: 8,
  sortBy: "id",
  orderBy: "ASC",
};

export const url = `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=${paramsURL.page}&rows=${paramsURL.rows}&sortBy=${paramsURL.sortBy}&orderBy=${paramsURL.orderBy}`;

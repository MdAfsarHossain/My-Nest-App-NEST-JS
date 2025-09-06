import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    { id: 1, name: 'Mobile', price: 50000 },
    { id: 2, name: 'Laptop', price: 70000 },
    { id: 3, name: 'Desktop', price: 90000 },
  ];

  // Get All Products
  getAllProducts() {
    return this.products;
  }

  // Get Single Product by id
  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}

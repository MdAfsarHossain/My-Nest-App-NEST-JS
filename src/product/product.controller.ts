import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  //   Get all products
  @Get()
  getProducts() {
    return this.productService.getAllProducts();
  }

  //   Get single product by id
  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productService.getProductById(Number(id));
  }
}

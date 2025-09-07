/* eslint-disable prettier/prettier */
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  //   Get all products
  @Get()
  @UseGuards(AuthGuard)
  getProducts() {
    return this.productService.getAllProducts();
  }

  //   Get single product by id
  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productService.getProductById(Number(id));
  }
}

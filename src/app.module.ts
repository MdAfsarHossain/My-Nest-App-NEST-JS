import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
import { StudentModule } from './student/student.module';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';
import { UserRolesController } from './user-roles/user-roles.controller';
import { ExceptionController } from './exception/exception.controller';

@Module({
  imports: [EmployeeModule, CategoryModule, StudentModule, CustomerModule],
  controllers: [AppController, UserController, ProductController, StudentController, CustomerController, MynameController, UserRolesController, ExceptionController],
  providers: [AppService, ProductService, StudentService, CustomerService],
})
export class AppModule {}

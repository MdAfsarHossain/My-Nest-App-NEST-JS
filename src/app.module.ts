/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { CustomerController } from './customer/customer.controller';
import { CustomerModule } from './customer/customer.module';
import { CustomerService } from './customer/customer.service';
import { DatabaseController } from './database/database.controller';
import { DatabaseService } from './database/database.service';
import { EmployeeModule } from './employee/employee.module';
import { EvController } from './ev/ev.controller';
import { EvService } from './ev/ev.service';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { MynameController } from './myname/myname.controller';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { StudentController } from './student/student.controller';
import { StudentModule } from './student/student.module';
import { StudentService } from './student/student.service';
import { UserRolesController } from './user-roles/user-roles.controller';
import { UserController } from './user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EmployeeModule,
    CategoryModule,
    StudentModule,
    CustomerModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL!),
  ],
  controllers: [
    AppController,
    UserController,
    ProductController,
    StudentController,
    CustomerController,
    MynameController,
    UserRolesController,
    ExceptionController,
    DatabaseController,
    EvController,
  ],
  providers: [
    AppService,
    ProductService,
    StudentService,
    CustomerService,
    DatabaseService,
    EvService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

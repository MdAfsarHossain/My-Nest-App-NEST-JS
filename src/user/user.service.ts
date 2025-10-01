import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(): Promise<User> {
    const user = new this.userModel({
      name: 'Md. Anwar Hossain',
      address: {
        street: '123 Kachua',
        city: 'Chandpur',
      },
    });
    return user.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }
}

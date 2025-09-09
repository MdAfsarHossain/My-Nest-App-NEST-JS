import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CollegeStudent,
  CollegeStudentDocument,
} from './collegeStudent.schema';
import { Model } from 'mongoose';

@Injectable()
export class CollegeStudentService {
  constructor(
    @InjectModel(CollegeStudent.name)
    private collegeStudentModel: Model<CollegeStudentDocument>,
  ) {}

  async createStudent(data: Partial<CollegeStudent>): Promise<CollegeStudent> {
    const newStudent = new this.collegeStudentModel(data);

    return newStudent.save();
  }
}

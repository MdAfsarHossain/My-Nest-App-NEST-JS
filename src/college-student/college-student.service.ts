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

  async getAllStudents(): Promise<CollegeStudent[]> {
    return this.collegeStudentModel.find().exec();
  }

  async singleStudentById(id: string): Promise<CollegeStudent | null> {
    return this.collegeStudentModel.findById(id).exec();
  }

  async updateStudent(
    id: string,
    data: Partial<CollegeStudent>,
  ): Promise<CollegeStudent | null> {
    // return this.collegeStudentModel
    //   .findByIdAndUpdate(id, data, { new: true })
    //   .exec();

    const updated = await this.collegeStudentModel.findByIdAndUpdate(
      id,
      {
        name: data.name ?? null,
        age: data.age ?? null,
        email: data.email ?? null,
      },
      { overwrite: true, new: true },
    );

    return updated;
  }

  async patchStudent(
    id: string,
    data: Partial<CollegeStudent>,
  ): Promise<CollegeStudent | null> {
    return this.collegeStudentModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();
  }

  async deleteStudent(id: string): Promise<CollegeStudent | null> {
    return this.collegeStudentModel.findByIdAndDelete(id).exec();
  }
}

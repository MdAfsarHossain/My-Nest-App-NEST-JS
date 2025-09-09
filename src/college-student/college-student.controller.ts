import { Body, Controller, Post } from '@nestjs/common';
import { CollegeStudentService } from './college-student.service';
import { CollegeStudent } from './collegeStudent.schema';

@Controller('college-student')
export class CollegeStudentController {
  constructor(private readonly collegeStudentService: CollegeStudentService) {}

  @Post()
  async addStudent(@Body() data: Partial<CollegeStudent>) {
    return this.collegeStudentService.createStudent(data);
  }
}

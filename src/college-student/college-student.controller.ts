import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CollegeStudentService } from './college-student.service';
import { CollegeStudent } from './collegeStudent.schema';

@Controller('college-student')
export class CollegeStudentController {
  constructor(private readonly collegeStudentService: CollegeStudentService) {}

  @Post()
  async addStudent(@Body() data: Partial<CollegeStudent>) {
    return this.collegeStudentService.createStudent(data);
  }

  @Get()
  async getAllStudents() {
    return this.collegeStudentService.getAllStudents();
  }

  @Get(':id')
  async getSingleStudents(@Param('id') id: string) {
    return this.collegeStudentService.singleStudentById(id);
  }

  @Put(':id')
  async updateStudent(
    @Param('id') id: string,
    @Body() data: Partial<CollegeStudent>,
  ) {
    return this.collegeStudentService.updateStudent(id, data);
  }

  @Patch(':id')
  async patchStudent(
    @Param('id') id: string,
    @Body() data: Partial<CollegeStudent>,
  ) {
    return this.collegeStudentService.patchStudent(id, data);
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: string) {
    return this.collegeStudentService.deleteStudent(id);
  }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollegeStudent, CollegeStudentSchema } from './collegeStudent.schema';
import { CollegeStudentService } from './college-student.service';
import { CollegeStudentController } from './college-student.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CollegeStudent.name, schema: CollegeStudentSchema },
    ]),
  ],
  providers: [CollegeStudentService],
  controllers: [CollegeStudentController],
})
export class CollegeStudentModule {}

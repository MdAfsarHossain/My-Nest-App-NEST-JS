import { Test, TestingModule } from '@nestjs/testing';
import { CollegeStudentController } from './college-student.controller';

describe('CollegeStudentController', () => {
  let controller: CollegeStudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollegeStudentController],
    }).compile();

    controller = module.get<CollegeStudentController>(CollegeStudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

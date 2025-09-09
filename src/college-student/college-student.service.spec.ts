import { Test, TestingModule } from '@nestjs/testing';
import { CollegeStudentService } from './college-student.service';

describe('CollegeStudentService', () => {
  let service: CollegeStudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollegeStudentService],
    }).compile();

    service = module.get<CollegeStudentService>(CollegeStudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'Afsar', age: 25 },
    { id: 2, name: 'Tarek', age: 24 },
    { id: 3, name: 'Anwar', age: 26 },
  ];

  //   Get all students
  getAllStudents() {
    return this.students;
  }

  //   Get Single Student
  getStudentById(id: number) {
    const student = this.students.find((s) => s.id === id);

    if (!student) throw new NotFoundException('Student not found!');

    return student;
  }

  //   POST
  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };

    this.students.push(newStudent);
    return newStudent;
  }

  //   PUT
  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.students.findIndex((s) => s.id === id);

    if (index === -1) throw new NotFoundException('Student not found!');

    this.students[index] = { id, ...data };
    return this.students[index];
  }

  //   PATCH
  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.getStudentById(id);

    Object.assign(student, data);

    return student;
  }

  //   DELETE
  deleteStudent(id: number) {
    const index = this.students.findIndex((s) => s.id === id);

    if (index === -1) throw new NotFoundException('Student not found!');

    const deleted = this.students.splice(index, 1);

    return { message: 'Student Deleted', student: deleted[0] };
  }
}

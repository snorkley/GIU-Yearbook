import { Component, input } from '@angular/core';
import { Student } from '../../models/student.model';
@Component({
selector: 'app-student-card',
imports: [],
templateUrl: './student-card.html',
styleUrl: './student-card.css',
})
export class StudentCard {
// The parent page will give us one student through this input.
readonly student = input.required<Student>();
}

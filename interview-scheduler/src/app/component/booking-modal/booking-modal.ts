import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingModelService } from '../../service/booking-model/booking-model-service';
import { FormsModule } from '@angular/forms';

  export interface Candidate {
  id: number;
  name: string;
}

export interface Interviewer {
  id: number;
  name: string;
  role?: string;
}

export interface Slot {
  time: string;
  booked: boolean;
}

@Component({
  selector: 'app-booking-modal',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './booking-modal.html',
  styleUrls: ['./booking-modal.css'],
})


export class BookingModalComponent {

  isOpen = false;

  // Sample data for demo (replace with API data)
  candidates: Candidate[] = [
    { id: 1, name: 'Sarah Jenkins' },
    { id: 2, name: 'Michael Ross' },
    { id: 3, name: 'Aisha Roberts' },
  ];

  interviewers: Interviewer[] = [
    { id: 1, name: 'David Miller', role: 'Product Design' },
    { id: 2, name: 'Elena Rodriguez', role: 'Engineering' },
    { id: 3, name: 'Liam Wilson', role: 'HR' },
  ];

  slots: Slot[] = [
    { time: '09:00 AM', booked: false },
    { time: '10:30 AM', booked: true },
    { time: '12:00 PM', booked: false },
    { time: '01:30 PM', booked: false },
    { time: '03:00 PM', booked: false },
    { time: '04:30 PM', booked: false },
  ];

  selectedCandidateId?: number;
  selectedInterviewerId?: number;
  selectedDate: string = '';
  selectedTime?: string;

  constructor(private modalService: BookingModelService) {
    this.modalService.isOpen$.subscribe(open => this.isOpen = open);
  }

  closeModal() {
    this.modalService.close();
  }

  // Confirm booking event
  confirmBooking() {
    if (!this.selectedCandidateId || !this.selectedInterviewerId || !this.selectedDate || !this.selectedTime) {
      alert('Please select candidate, interviewer, date, and time');
      return;
    }

    const bookingData = {
      candidateId: this.selectedCandidateId,
      interviewerId: this.selectedInterviewerId,
      date: this.selectedDate,
      time: this.selectedTime
    };

    console.log('Booking confirmed:', bookingData);
    this.closeModal();
  }
}

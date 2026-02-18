import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingModelService } from '../../service/booking-model/booking-model-service';


@Component({
  selector: 'app-booking-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-modal.html',
  styleUrls: ['./booking-modal.css'],
})
export class BookingModalComponent {
  isOpen = false;

  constructor(private modalService: BookingModelService) {
    this.modalService.isOpen$.subscribe(open => this.isOpen = open);
  }

  closeModal() {
    this.modalService.close();
  }

}

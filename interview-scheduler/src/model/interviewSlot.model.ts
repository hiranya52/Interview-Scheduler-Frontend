import { Booking } from "./booking.model";

export interface InterviewSlot {
  time: string;
  slotType: 'AVAILABLE' | 'BOOKED' | 'CONFLICT';
  booking?: Booking | null;
}

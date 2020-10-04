import { Subjects } from './subjects';

export interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    version: number;
    title: string;
    departure: string;
    arrival: string;
    price: number;
    userId: string;
  };
}

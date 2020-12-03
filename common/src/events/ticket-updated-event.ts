import { Subjects } from './subjects';

export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    version: number;
    title: string;
    departure: string;
    arrival: string;
    price: number;
    userId: string;
    deliverieId?: string;
  };
}

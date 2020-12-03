import { Subjects } from './subjects';

export interface DeliverieCancelledEvent {
  subject: Subjects.DeliverieCancelled;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}

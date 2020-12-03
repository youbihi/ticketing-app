import { Subjects } from './subjects';
import { DeliverieStatus } from './types/deliverie-status';

export interface DeliverieCreatedEvent {
  subject: Subjects.DeliverieCreated;
  data: {
    id: string;
    version: number;
    status: DeliverieStatus;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}

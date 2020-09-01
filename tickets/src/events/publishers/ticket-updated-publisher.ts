import { Publisher, Subjects, TicketUpdatedEvent } from '@vemup/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}

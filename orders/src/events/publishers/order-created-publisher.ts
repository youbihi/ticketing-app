import { Publisher, OrderCreatedEvent, Subjects } from '@vemup/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

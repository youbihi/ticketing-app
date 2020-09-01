import { Subjects, Publisher, OrderCancelledEvent } from '@vemup/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}

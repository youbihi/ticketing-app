import { Subjects, Publisher, PaymentCreatedEvent } from '@vemup/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}

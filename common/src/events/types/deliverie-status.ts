export enum DeliverieStatus {
  // When the deliverie has been created, but the
  // ticket it is trying to deliverie has not been reserved
  Created = 'created',

  // The ticket the deliverie is trying to reserve has already
  // been reserved, or when the user has cancelled the deliverie.
  // The deliverie expires before payment
  Cancelled = 'cancelled',

  // The deliverie has successfully reserved the ticket
  AwaitingPayment = 'awaiting:payment',

  // The deliverie has reserved the ticket and the user has
  // provided payment successfully
  Complete = 'complete',
}

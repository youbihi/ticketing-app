import React from 'react';
import { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import useRequest from '../hooks/use-request';

const TicketDetails = (ticket) => {
  const [ticketDetails, setTicketDetails] = useState({ ticketId: '' });

  let history = useHistory();

  useEffect(() => {
    setTicketDetails(ticket);
  }, [ticket]);

  console.log('ticket details : ', ticketDetails);

  const { doRequest, errors } = useRequest({
    url: '/api/orders',
    method: 'post',
    body: {
      ticketId: ticket.id,
    },
    onSuccess: (order) => history.push(`/orderdetails`, order),
  });

  const onSubmit = async () => {
    await doRequest({
      ticketId: ticketDetails.ticket.id,
    });
  };

  return (
    <div>
      <h1>Ticket details</h1>
      {ticketDetails.ticket ? (
        <div>
          <h4>Departure: {ticketDetails.ticket.departure}</h4>
          <h4>Arrival: {ticketDetails.ticket.arrival}</h4>
          <h5>Description: {ticketDetails.ticket.title}</h5>
          <h4>Price: {ticketDetails.ticket.price} €</h4>
        </div>
      ) : null}
      {errors}
      <button onClick={() => onSubmit()} className="btn btn-primary">
        Purchase
      </button>
    </div>
  );
};

export default TicketDetails;

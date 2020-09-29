import React from 'react';
import { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import useRequest from '../hooks/use-request';

const TicketDetails = (ticket) => {
  const [ticketDetails, setTicketDetails] = useState({});

  let history = useHistory();

  const { doRequest, errors } = useRequest({
    url: '/api/orders',
    method: 'post',
    body: {
      ticketId: ticket.id,
    },
    onSuccess: (order) => history.push(`/orders/${order.id}`),
  });

  useEffect(() => {
    setTicketDetails(ticket);
  }, [ticket]);

  console.log('ticket details : ', ticketDetails);

  return (
    <div>
      <h1>Ticket details</h1>
      {ticketDetails.ticket ? (
        <div>
          <h4>Title: {ticketDetails.ticket.title}</h4>
          <h4>Price: {ticketDetails.ticket.price} €</h4>
        </div>
      ) : null}
      {errors}
      <button onClick={() => doRequest()} className="btn btn-primary">
        Purchase
      </button>
    </div>
  );
};

export default TicketDetails;

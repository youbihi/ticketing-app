import React from 'react';

import { useHistory } from 'react-router-dom';

import useRequest from '../hooks/use-request';

const TicketDetails = ({ ticket }) => {
  let history = useHistory();

  const { doRequest, errors } = useRequest({
    url: '/api/orders',
    method: 'post',
    body: {
      ticketId: ticket.id,
    },
    onSuccess: (order) => history.push(`/orders/${order.id}`),
  });

  return (
    <div>
      <h1>{ticket.title}</h1>
      <h4>Price: {ticket.price}</h4>
      {errors}
      <button onClick={() => doRequest()} className="btn btn-primary">
        Purchase
      </button>
    </div>
  );
};

export default TicketDetails;

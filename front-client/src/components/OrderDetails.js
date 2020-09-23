import React from 'react';
import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router-dom';

import useRequest from '../hooks/use-request';

const OrderDetails = ({ order, currentUser }) => {
  let history = useHistory();

  const [timeLeft, setTimeLeft] = useState(0);
  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id,
    },
    onSuccess: () => history.push('/orders'),
  });

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  if (timeLeft < 0) {
    return <div>Order Expired</div>;
  }

  return (
    <div>
      <h1> Order Details:</h1>
      <p>Title: {order.ticket.title}</p>
      <p>Price : {order.ticket.price}</p>
      <p>Time left to pay: {timeLeft} seconds</p>
      <p>
        <StripeCheckout
          token={({ id }) => doRequest({ token: id })}
          stripeKey="pk_test_51HMEVxDI94wAMX4VTKcOSV3g8z500iRlcOxnarj04XcCpJlsUxFwjgOplcgsIt8zf2pCy8E15IC6b9HgX6qPGjBy00E0WglxTh"
          amount={order.ticket.price * 100}
          email={currentUser.email}
        />
      </p>
      {errors}
    </div>
  );
};

export default OrderDetails;

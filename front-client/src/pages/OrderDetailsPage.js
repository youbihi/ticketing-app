import React, { Component } from 'react';
import OrderDetails from '../components/OrderDetails';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const OrderDetailsPage = () => {
  const location = useLocation();

  console.log('location.state: ', location.state);

  return (
    <div>
      <OrderDetails
        order={location.state}
        currentUser={useSelector((state) => state.user)}
      />
    </div>
  );
};

export default OrderDetailsPage;

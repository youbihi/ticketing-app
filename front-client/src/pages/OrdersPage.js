import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import api from '../api/api';

import OrdersList from '../components/OrdersList';

const OrdersPage = () => {
  const [orders_list, setOrders_list] = useState([]);

  useEffect(() => {
    api.order.getall().then((data) => setOrders_list(data));
  }, []);

  return (
    <div>
      <OrdersList
        orders={orders_list}
        currentUser={useSelector((state) => state.user)}
      />
    </div>
  );
};

export default OrdersPage;

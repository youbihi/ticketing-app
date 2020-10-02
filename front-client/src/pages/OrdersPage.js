import React from 'react';
import { useEffect, useState } from 'react';

import api from '../api/api';

import OrdersList from '../components/OrdersList';

const OrdersPage = () => {
  const [orders_list, setOrders_list] = useState([]);

  useEffect(() => {
    api.order.getall().then((data) => setOrders_list(data));
  }, []);

  return (
    <div>
      <OrdersList orders={orders_list} />
    </div>
  );
};

export default OrdersPage;

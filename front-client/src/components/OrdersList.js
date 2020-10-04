import React from 'react';
import { useEffect, useState } from 'react';

const OrdersList = ({ orders, currentUser }) => {
  const [orderList, setorderList] = useState([]);
  const [User, setUser] = useState({});

  console.log('orderList: ', orderList);

  useEffect(() => {
    setorderList(orders);
    setUser(currentUser);
  }, [orders, currentUser]);

  const allmyorders = orderList
    .filter((order) => order.userId == User.id)
    .map((order) => {
      return (
        <tr key={order.id}>
          <td>{order.ticket.departure}</td>
          <td>{order.ticket.arrival}</td>
          <td>{order.ticket.title}</td>
          <td>{order.status}</td>
          <td>{order.ticket.price}</td>
        </tr>
      );
    });

  return (
    <ul>
      <div>
        <h1>Bellow all your orders</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Departure City</th>
              <th>Arrival City</th>
              <th>Description</th>
              <th>Status</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{allmyorders}</tbody>
        </table>
      </div>
    </ul>
  );
};

export default OrdersList;

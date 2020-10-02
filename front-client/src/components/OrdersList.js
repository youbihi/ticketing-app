import React from 'react';

const OrdersList = ({ orders }) => {
  let allmyorders = [orders].map((order) => {
    console.log('all the orders: ', orders);
    if (order.id) {
      console.log('here is the order: ', order);
      return (
        <tr key={order.id}>
          <td>{order.ticket.title}</td>
          <td>{order.status}</td>
          <td>{order.ticket.price}</td>
        </tr>
      );
    } else {
      return null;
    }
  });

  return (
    <ul>
      <div>
        <h1>Bellow all your orders</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Price</th>
            </tr>
          </thead>
          {allmyorders ? <tbody>{allmyorders}</tbody> : null}
        </table>
      </div>
    </ul>
  );
};

export default OrdersList;

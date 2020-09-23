import React from 'react';

const OrdersList = ({ orders }) => {
  console.log(orders);

  let allmyorders = [orders].map((order) => {
    return (
      <tr key={order.id}>
        <td>{order.ticket.title}</td>
        <td>{order.status}</td>
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
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{allmyorders}</tbody>
        </table>
      </div>
    </ul>
  );
};

export default OrdersList;

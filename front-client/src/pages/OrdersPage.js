import React, { Component } from 'react';
import OrdersList from '../components/OrdersList';

class OrdersPage extends Component {
  render() {
    return (
      <div>
        <OrdersList
          orders={
            ({
              id: '546546ds4dqsd',
              status: 'ongoin',
              ticket: { title: 'title blabla', price: 50 },
            },
            {
              id: 'cdzezfzfzef',
              status: 'canccelled',
              ticket: { title: 'Loulou', price: 60 },
            })
          }
        />
      </div>
    );
  }
}

export default OrdersPage;

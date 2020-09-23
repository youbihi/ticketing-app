import React, { Component } from 'react';
import OrderDetails from '../components/OrderDetails';

class OrderDetailsPage extends Component {
  render() {
    //need to get all the data about the order and the user

    return (
      <div>
        <OrderDetails
          order={{
            id: '546546ds4dqsd',
            status: 'ongoin',
            ticket: { title: 'title blabla', price: 50 },
          }}
          currentUser={{ id: 'uhdsiudsgsiu', email: 'dsgyqusd@oidjsqs.com' }}
        />
      </div>
    );
  }
}

export default OrderDetailsPage;

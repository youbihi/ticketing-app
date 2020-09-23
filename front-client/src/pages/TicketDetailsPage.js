import React, { Component } from 'react';
import TicketDetails from '../components/TicketDetails';

class TicketDetailsPage extends Component {
  render() {
    //need to get all the data about the ticket

    /*here is an ewample 
TicketShow.getInitialProps = async (context, client) => {
  const { ticketId } = context.query;
  const { data } = await client.get(`/api/tickets/${ticketId}`);

  return { ticket: data };
};
**/

    return (
      <div>
        <TicketDetails
          ticket={{
            id: '546546ds4dqsd',
            title: 'title blabla',
            price: 50,
          }}
        />
      </div>
    );
  }
}

export default TicketDetailsPage;

import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../api/api';

const HomePage = () => {
  const [tickets_list, setTickets_list] = useState([]);

  useEffect(() => {
    api.ticket.getall().then((data) => setTickets_list(data));
  }, []);

  console.log('state ticket list: ', tickets_list);

  const ticketList = tickets_list.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.price} €</td>
        <td>
          <Link to={{ pathname: `/tickets/view-ticket`, state: { ticket } }}>
            <a>View</a>
          </Link>
        </td>
        <td>{ticket.userId}</td>
      </tr>
    );
  });

  return (
    <div>
      <h2>Bellow all tickets available</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
            <th>Owner</th>
          </tr>
        </thead>
        {{ ticketList } ? <tbody>{ticketList}</tbody> : null}
      </table>
    </div>
  );
};

export default HomePage;

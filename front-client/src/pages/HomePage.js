import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import api from '../api/api';

const HomePage = () => {
  const dispatch = useDispatch();

  const fetchTickets = async () => {
    const { data } = await api.ticket.getall().then((data) =>
      dispatch({
        type: 'TICKET_FETCHED',
        data,
      })
    );

    return { tickets: data };
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const tickets = useSelector((state) => state.ticket_list);

  const ticketList = () => {
    if (tickets) {
      return tickets.map((ticket) => {
        return (
          <tr key={ticket.id}>
            <td>{ticket.title}</td>
            <td>{ticket.price}</td>
            <td>
              <Link to={`/tickets/${ticket.id}`}>
                <a>View</a>
              </Link>
            </td>
          </tr>
        );
      });
    } else {
      return null;
    }
  };

  return (
    <div>
      <h1>Bellow all tickets available</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        {ticketList ? <tbody>{ticketList}</tbody> : null}
      </table>
    </div>
  );
};

export default HomePage;

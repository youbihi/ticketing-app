import React, { Component } from 'react';
import TicketDetails from '../components/TicketDetails';
import { useLocation } from 'react-router-dom';

const TicketDetailsPage = () => {
  const location = useLocation();

  return (
    <div>
      <TicketDetails ticket={location.state.ticket} />
    </div>
  );
};

export default TicketDetailsPage;

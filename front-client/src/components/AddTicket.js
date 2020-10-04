import React from 'react';
import { useState } from 'react';

import useRequest from '../hooks/use-request';
import { useHistory } from 'react-router-dom';

const AddTicket = () => {
  let history = useHistory();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');

  const { doRequest, errors } = useRequest({
    url: '/api/tickets',
    method: 'post',
    body: {
      title,
      price,
      departure,
      arrival,
    },
    onSuccess: () => history.push('/'),
  });

  const onSubmit = (event) => {
    event.preventDefault();

    doRequest();
  };

  const onBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setPrice(value.toFixed(2));
  };

  return (
    <div>
      <h1>Create a Ticket</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Departure City</label>
          <input
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Arrival City</label>
          <input
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Price in €</label>
          <input
            value={price}
            onBlur={onBlur}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
          />
        </div>
        {errors}
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddTicket;

import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      const response = await axios[method](url, { ...body, ...props });

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      console.log('here is the response: ', err.response);
      if (err.response) {
        setErrors(
          <div className="alert alert-danger">
            <h4>Ooops....</h4>
            <ul className="my-0">
              {err.response
                ? err.response.data.errors.map((err) => (
                    <li key={err.message}>{err.message}</li>
                  ))
                : null}
            </ul>
          </div>
        );
      }
    }
  };

  return { doRequest, errors };
};

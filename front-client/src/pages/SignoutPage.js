import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useRequest from '../hooks/use-request';

const SignoutPage = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const { doRequest } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () =>
      dispatch({
        type: 'USER_LOGGED_OUT',
        payload: {},
      }).then(history.push('/')),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing you out...</div>;
};

export default SignoutPage;

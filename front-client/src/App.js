import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

export default () => {
  return (
    <div className="container">
      <h1>Airline ticketing app</h1>
      <PostCreate />
      <hr />
      <h1>BlogPost</h1>
      <PostList />
    </div>
  );
};

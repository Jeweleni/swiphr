import React from 'react';
import { useParams } from 'react-router';

const Orders = () => {
    const { bID } = useParams();
  return (
    <h1>Orders {bID}</h1>
  )
}

export default Orders
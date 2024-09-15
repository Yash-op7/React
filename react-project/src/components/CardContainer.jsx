import Card from './Card';
import data from '../data.json';
import React, { useState } from 'react';

const CardContainer = () => {
  const [displayAllText, setDisplayAllText] = useState(false);
  return (
    <>
      {data.map((val) => (
        <Card value={val} />
      ))}
    </>
  );
};

export default CardContainer;

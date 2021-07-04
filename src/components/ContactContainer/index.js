import React from 'react';
import './index.scss';

export default function ContactContainer({ children = [] }) {
  const cards = children.filter((n) => n)[0];
  const half = Math.ceil(cards.length / 2);
  const firstColumn = cards.slice(0, half);
  const secondColumnd = cards.slice(half, cards.length);
  return (
    <div className='contactContainer'>
      <div>{firstColumn}</div>
      <div>{secondColumnd}</div>
    </div>
  );
}

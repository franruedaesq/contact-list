import React from 'react';
import './index.scss';

export default function ContactContainer({ cards = [] }) {
  if(!cards.length) return null;
  const half = Math.ceil(cards.length / 2);
  const firstColumn = cards.slice(0, half);
  const secondColumn = cards.slice(half, cards.length);
  return (
    <div className='contact-container'>
      <div>{firstColumn}</div>
      <div>{secondColumn}</div>
    </div>
  );
}

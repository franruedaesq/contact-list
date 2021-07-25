import React from 'react';
import './index.scss';

export default function Tab({ label, onClick, activeTab, quantity }) {
  const itemClick = () => {
    onClick(label);
  };

  const item = 'tab-list-item';
  const activeItem = 'tab-list-item--active';

  const className = label !== activeTab ? item : `${item} ${activeItem}`;

  return (
    <li
      className={!quantity ? 'tab-list-item notClick' : className}
      onClick={itemClick}
    >
      <span className={`letter ${quantity === 0 ? 'empty' : ''}`}>
        {label}
        <small className='subindex'>{quantity}</small>
      </span>
    </li>
  );
}

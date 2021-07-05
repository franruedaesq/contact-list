import React from 'react';
import { useSelector } from 'react-redux';

export default function Tab({ label, onClick, activeTab, quantity }) {
  const selectedTab = useSelector((state) => state.tab.selectedTab);
  const itemClick = () => {
    onClick(label);
  };

  const item = 'tab-list-item';
  const activeItem = 'tab-list-active';

  const className = label !== selectedTab ? item : `${item} ${activeItem}`;

  return (
    <li className={className} onClick={itemClick}>
      <span className={`letter ${quantity === 0 ? 'empty' : ''}`}>
        {label}
        <small className='subindex'>{quantity}</small>
      </span>
    </li>
  );
}

import React from 'react';

export default function Tab({ label, onClick, activeTab }) {
  const itemClick = () => {
    onClick(label);
  };

  let className = 'tab-list-item';
  if (activeTab === label) {
    className += ' tab-list-active';
  }

  return (
    <li className={className} onClick={itemClick}>
      {label}
    </li>
  );
}

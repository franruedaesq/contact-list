import React from 'react';
import './index.scss';

export default function ContactItem({ contactName }) {
  return <div className='contactItem'>{contactName}</div>;
}

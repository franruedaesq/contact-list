import React, { useState, useEffect } from 'react';
import './index.scss';
import { setSelectedContact } from '../../redux/contacts/contactsSlice';
import { useDispatch } from 'react-redux';

export default function ContactCard({ data, activeId }) {
  const {
    name,
    lastName,
    email,
    phone,
    street,
    city,
    state,
    postCode,
    steetNumber,
    img,
    id,
  } = data;
  const dispatch = useDispatch();
  const [showCard, setShowCard] = useState(false);

  const handleClick = () => {
    dispatch(setSelectedContact(id));
    console.log(showCard);
    if (!showCard) {
      setShowCard(!showCard);
    }
  };

  const closeCard = () => {
    dispatch(setSelectedContact(''));
    setShowCard(false);
  };

  useEffect(() => {
    setShowCard(activeId === id);
  }, [id, activeId]);

  return (
    <article
      className={`contactCard ${showCard ? 'contactCard--show' : ''}`}
      onClick={handleClick}
    >
      <h3
        className={`contactCard_title contactCard_title${
          showCard ? '--show' : ''
        }`}
      >
        {name} {lastName}
      </h3>
      <div
        className={`contactCard_body ${
          showCard ? 'contactCard_body--show' : 'contactCard_body--hide'
        }`}
      >
        <picture className='contactCard_img'>
          <source srcset={img} media='(min-width: 800px)' />
          <img src={img} alt={`${name} ${lastName}`} />
        </picture>
        <div>
          <span className='contactCard_item'>
            <strong>E-mail:</strong>
            {email}
          </span>
          <span className='contactCard_item'>
            <strong>Phone:</strong>
            {phone}
          </span>
          <span className='contactCard_item'>
            <strong>Street:</strong>
            {steetNumber} {street}
          </span>
          <span className='contactCard_item'>
            <strong>City:</strong>
            {city}
          </span>
          <span className='contactCard_item'>
            <strong>State:</strong>
            {state}
          </span>
          <span className='contactCard_item'>
            <strong>Postcode:</strong>
            {postCode}
          </span>
        </div>
      </div>
      <button
        className={`contactCard_close ${
          showCard ? 'contactCard_close--show' : ''
        }`}
        aria-label='Close Contact Card'
        onClick={closeCard}
      >
        &times;
      </button>
    </article>
  );
}

import React, { useState, useEffect } from 'react';
import './index.scss';
import { setSelectedContact } from 'redux/contacts/contactsSlice';
import { useDispatch } from 'react-redux';

export default function ContactCard({ data, activeId, index }) {
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
    userName,
  } = data;
  const dispatch = useDispatch();
  const [showCard, setShowCard] = useState(false);
  const handleClick = () => {
    dispatch(setSelectedContact(id));
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
      data-testid='contact-card_container'
      className={`contact-card ${
        showCard ? 'contact-card--show' : 'contact-card--hide'
      }`}
      onClick={handleClick}
    >
      <h3
        className={`contact-card_title contact-card_title${
          showCard ? '--show' : ''
        }`}
      >
        {name} {lastName}
      </h3>
      <div
        className={`contact-card_body ${
          showCard ? 'contact-card_body--show' : 'contact-card_body--hide'
        }`}
      >
        <div className='contact-card_header'>
          <h3>
            {name} {lastName}
          </h3>
          <picture
            className={`contact-card_img ${
              showCard ? 'contact-card_img--show' : 'contact-card_img--hide'
            }`}
          >
            <source srcSet={img} media='(min-width: 800px)' />
            <img src={img} alt={`${name} ${lastName}`} />
            <span>@{userName}</span>
          </picture>
          <span
            className={`contact-card__username ${
              showCard
                ? 'contact-card__username--show'
                : 'contact-card__username--hide'
            }`}
          >
            @{userName}
          </span>
        </div>
        <div>
          {email && (
            <span className='contact-card_item'>
              <strong>E-mail:</strong>
              {email}
            </span>
          )}
          {phone && (
            <span className='contact-card_item'>
              <strong>Phone:</strong>
              {phone}
            </span>
          )}
          {steetNumber && (
            <span className='contact-card_item'>
              <strong>Street:</strong>
              {steetNumber} {street}
            </span>
          )}
          {city && (
            <span className='contact-card_item'>
              <strong>City:</strong>
              {city}
            </span>
          )}
          {state && (
            <span className='contact-card_item'>
              <strong>State:</strong>
              {state}
            </span>
          )}
          {postCode && (
            <span className='contact-card_item'>
              <strong>Postcode:</strong>
              {postCode}
            </span>
          )}
        </div>
      </div>
      <button
        data-testid='contact-card_close'
        className={`contact-card_close ${
          showCard ? 'contact-card_close--show' : ''
        }`}
        aria-label='Close Contact Card'
        onClick={closeCard}
      >
        &times;
      </button>
    </article>
  );
}

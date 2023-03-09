import React from 'react';
import './Modal.scss';

export const Modal = ({open}) => {

  // if (!open) return null

  return (
  <div className='Modal'>
    <div className='Modal__line__one'>
      <div className='Modal__line__one__title'>
          <img src="/img/person_icon.svg" alt="person icon" />
          <h2 id="UserDetails">Zgłaszający</h2>
      </div>
      <div className='Modal__line__one__data'>
      <div className='Modal__line__one__data--info'>
      <p>Imię i nazwisko</p>
      <div></div>
      </div>
      <div className='Modal__line__one__data--info'>
        <p>adres:</p>
      </div>
      <div className='Modal__line__one__data--info'><p>miejscowość:</p></div>
      <div className='Modal__line__one__data--info'><p>telefon:</p></div>
      <div className='Modal__line__one__data--info'><p>e-mail:</p></div>
      </div>
      
    </div>
    <div className='Modal__line__two'></div>
    
  </div>
  );
};

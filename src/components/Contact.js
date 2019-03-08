/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';


export const Contact = () => (
  <div className="screen  invert  contact">
    <div className="subtitle">
      <h2 className="subtitle-text">Contact</h2>
      <div className="subtitle-dots" />
    </div>

    <div className="contact-item">
      <div className="input-container">
        <label>Name</label>
        <input
          name="name"
          type="text"
          placeholder="</>"
        />
      </div>
      <span className="contact-item-dots2" />
    </div>

    <div className="contact-item">
      <div className="input-container">
        <label>Email</label>
        <input
          name="email"
          type="text"
          placeholder="</>"
        />
      </div>
      <span className="contact-item-dots2" />
    </div>

    <div className="contact-item">
      <div className="input-container">
        <label>tellMe</label>
        <textarea
          name="tellme"
          placeholder="</>"
        />
      </div>
      <span className="contact-item-dots2" />
    </div>

    <div className="contact-item  jc-end">
      <button type="button">Send</button>
      <span className="contact-item-dots2" />
    </div>

    <div className="close hover">
      <div className="close-tag">/</div>
      <div className="subtitle-dots" />
    </div>
    <div className="close">
      <div className="close-tag">/</div>
    </div>
  </div>
);

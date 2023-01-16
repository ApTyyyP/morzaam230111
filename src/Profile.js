import React from 'react';

export default function Profile(props) {
  const { photoUrl, photo, name, position, phone, email } = props.item;

  return (
    <div className="card-inner">
      <div className="card-info">
        <img src={photoUrl + photo} alt={photo} />
        <div className="userName">{name}</div>
        <div>{position}</div>
        <p>Phone {phone}</p>
        <p>URL http://example.com</p>
        <p>Email {email}</p>
      </div>
    </div>
  );
}

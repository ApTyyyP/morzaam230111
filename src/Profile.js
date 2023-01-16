import React from 'react';

export default function Profile(props) {
  const { photo, name, position, phone, email } = props.item;

  return (
    <div className="modal__card-inner">
      <div className="modal__card-info">
        <div className="modal__card-info-user">
          <img src={"./foto/" + photo} alt={photo} />
          <div className="userName">{name}</div>
          <div>{position}</div>
        </div>
        <table>
          <tr>
            <th>Phone</th>
            <td>{phone}</td>
          </tr>
          <tr>
            <th>URL</th>
            <td>
              <a href="http://example.com">http://example.com</a>
            </td>
          </tr>
          <tr>
            <th>Email</th>
            <td>
              <a href={"mailto:"+ email}>{email}</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

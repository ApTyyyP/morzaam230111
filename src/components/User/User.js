import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import InitData from '../../initData';
import Profile from '../../Profile';
// import { v4 as uuidv4 } from 'uuid';

export default function User() {
  const [modalActive, setModalActive] = useState(false);
  // const id = uuidv4();

  return (
    <div className="container">
      <div className="card-item">
        {InitData.map((item) => {
          return (
            <div className="card-inner">
              <div className="card-info">
                <div className="card-info-img">
                  <img src={'./foto/' + item.photo} alt={item.photo} />
                </div>
                <div className="card-info-name">
                  <div className="userName">{item.name}</div>
                  <div className="userNickName">{item.nickname}</div>
                </div>
              </div>
              <button
                className="btn btn-view"
                onClick={() => setModalActive(true)}
              >
                View
              </button>
              <Modal active={modalActive} setActive={setModalActive}>
                <Profile item={item} />
              </Modal>
            </div>
          );
        })}
        {/* <button className="btn btn-view" onClick={() => setModalActive(true)}>View</button> */}
        <button className="btn btn-view-all">View all</button>
      </div>
    </div>
  );
}

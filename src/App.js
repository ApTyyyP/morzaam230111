import InitData from './initData.json';

import './App.css';

const photoUrl = './foto/';

function App() {
  return (
    <div className="container">
      <div className="card-item">
        {InitData.map((item) => {
          return (
            <div className="card-inner">
              <div className="card-info">
                {/* <div className="card-img"> */}
                <div className="card-info-img">
                  <img src={photoUrl + item.photo} alt={item.photo} />
                </div>
                {/* </div> */}
                <div className="card-info-name">
                  <div className="userName">{item.name}</div>
                  {/* <div>{item.position}</div> */}
                  <div className="userNickName">{item.nickname}</div>
                  {/* <p>Phone {item.phone}</p>
                <p>URL http://example.com</p>
                <p>Email {item.email}</p> */}
                </div>
              </div>
              <button className="btn btn-view">View</button>
              {/* <button>View all</button> */}
            </div>
          );
        })}
        <button className="btn btn-view-all">View all</button>
      </div>
    </div>
  );
}

export default App;

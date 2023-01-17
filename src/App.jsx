import User from './components/User/User';
import { v4 as uuid } from 'uuid';

import './App.css';

const App = () => {
  const id = uuid();

  return (
    <div className="App">
      <h1>{id}</h1>
      <User key={id} />
    </div>
  );
};

export default App;


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Routes, Router, Route  } from 'react-router-dom';
import Detail from './screens/Detail';
import Main from './screens/Main';
import Button from './screens/Button';
import Contents from './screens/Contents';




const App = () => {
  return (
    <div>
   <Main />
   <Button />
   <Contents />
   <Show />
   </div>
  );
}

export default App
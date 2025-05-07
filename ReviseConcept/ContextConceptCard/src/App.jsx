import { Routes, Route } from 'react-router-dom';
import './App.css';
import Card from './Components/Card';
import FinalCard from './Components/FinalCard';
import UserContextProvider from './Contexts/UserContextProvider';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <UserContextProvider>
            <Card />
          </UserContextProvider>
        }
      />
      <Route
        path='/final'
        element={
          <UserContextProvider>
            <FinalCard />
          </UserContextProvider>
        }
      />
    </Routes>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import BaseLayout from './Componets/Layout/BaseLayout';
import Signup from './Componets/Signup';
import Login from './Componets/LogIn';
import Home from './Componets/Home';
import Blogs from './Componets/Blogs';

function App() {
  return (
    <div className="App">
      <BaseLayout>
        <Routes>
          <Route path='/signup' element={
            <Signup />
          } />
          <Route path='/login' element={
            <Login/>
          } />
          <Route path='/home' element={
            <Home/>
          } />
          <Route path='/blogs' element={
            <Blogs/>
          } />
        </Routes>
      </BaseLayout>
    </div>
  );
}

export default App;

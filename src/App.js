import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import NotFound from './components/notFound/NotFound';


function App() {

  const [rooms, setRooms] = useState();

  const getRooms = async () =>{

    try {

      const response = await api.get("/api/v1/rooms");
      
      console.log(new Date().toLocaleString());
      console.log(response.data);
      
      setRooms(response.data);

    }
    catch (err) {
      console.log(err);
    }

  }

  useEffect (() =>{
    getRooms();
  }, [])

  return (

    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home rooms={rooms}/>}></Route>
          <Route path="*" element = {<NotFound/>}></Route>
        </Route>
      </Routes>

    </div>

  );
}

export default App;

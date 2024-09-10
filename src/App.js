import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import { Routes, Route, createBrowserRouter, createRoutesFromElements, BrowserRouter, RouterProvider, Router } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Video from './components/video/Video';
import About from './components/about/About';
import NotFound from './components/notFound/NotFound';

function App() {

  const [rooms, setRooms] = useState();

  const getRooms = async () =>{

    try {

      const response = await api.get("/api/v1/room/allRooms");
      
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
      <header>
        <Header/>
      </header>
      <main>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home rooms={rooms}/>} />
          <Route path="video/:ytVideoId" element={<Video />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
      </main>
    </div>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';


function App() {

  const [rooms, setRooms] = useState();

  const getRooms = async () =>{

    try {

      const response = await  api.get("api/v1/rooms");

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
     
    </div>
  );
}

export default App;

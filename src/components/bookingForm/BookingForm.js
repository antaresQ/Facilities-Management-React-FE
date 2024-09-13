import './BookingForm.css';
import {Form, Button} from 'react-bootstrap';
import {React, useState, useEffect} from 'react';
import api from '../../api/axiosConfig';

import DateTimeInput from 'react-datetime-picker/dist/DateTimeInput';

const BookingForm = ({handleSubmit, defaultValue}) => {

  const [rooms, setRooms] = useState();

  const [eventName, setEventName] = useState('');
  const [speakerName, setSpeakerName] = useState('');
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());
  const [selectedRooms, setSelectedRooms] = useState([]);
  
  async function getBookingForm() {

    let dateTime = new Date();
    dateTime = dateTime.setMinutes(dateTime.getMinutes() - dateTime.getTimezoneOffset());
    dateTime = new Date(dateTime).toISOString().slice(0,16);
    setStartDateTime(dateTime);
    setEndDateTime(dateTime);
  
    const response = await api.get("/api/v1/room/allRooms");
    setRooms(response.data);
  }

  useEffect(() => {
    getBookingForm();
  }, [])

  const addBooking = async (e) => {
    
    e.preventDefault();

    let newBooking = {};
    newBooking.eventName = eventName;
    newBooking.speakerName = speakerName;
    newBooking.startDateTime = startDateTime;
    newBooking.endDateTime = endDateTime;
    newBooking.roomIds = selectedRooms;

    try
    {
      const response = await api.post('/api/v1/booking/createBooking', newBooking);

      console.log(response.data);
    }
    catch(err)
    {
      console.log(err);
    }

  }

  return (

    <div className='container mt-4'>
      <Form>
        <Form.Group className='mb-4' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Event Name</Form.Label>
            <Form.Control type='text' placeholder='Sharh Tafsir Ibn Kathir' value={eventName} onChange={(e) => setEventName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label>Speaker Name</Form.Label>
          <Form.Control type='text' placeholder='Ustaz Ahmad Ibn Abdul Halim' value={speakerName} onChange={(e) => setSpeakerName(e.target.value)} ></Form.Control>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label>Start Date & Time</Form.Label>
          <Form.Control type='datetime-local' value={startDateTime} onChange={(e) => setStartDateTime(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label>End Date & Time</Form.Label>
          <Form.Control type='datetime-local' value={endDateTime} onChange={(e) => setEndDateTime(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label>Rooms</Form.Label>
          <Form.Control as='select' multiple defaultValue={selectedRooms} onChange={e => setSelectedRooms([].slice.call(e.target.selectedOptions).map(item => item.value))}>
          {
            rooms?.map((room) => {

              return (
                <option key={room.roomId} value={room.roomId}>{room.name}</option>
              );

            })
          }
          </Form.Control>
        </Form.Group>
        <Button variant='outline-info' onClick={addBooking}>Submit</Button>
      </Form>
    </div>

  )

}

export default BookingForm
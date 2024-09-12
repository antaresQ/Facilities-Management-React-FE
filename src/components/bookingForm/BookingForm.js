import './BookingForm.css';
import {Form, Button} from 'react-bootstrap';
import {React, useState, useEffect} from 'react';
import api from '../../api/axiosConfig';

import DateTimeInput from 'react-datetime-picker/dist/DateTimeInput';

const BookingForm = ({handleSubmit, defaultValue}) => {

  const [rooms, setRooms] = useState();
  const [dateTimeNow, setDateTimeNow] = useState();
  const [roomsSelect, setSelectedRooms] = useState();
  
  async function getBookingForm() {

    let dateTime = new Date();
    dateTime = dateTime.setMinutes(dateTime.getMinutes() - dateTime.getTimezoneOffset());
    dateTime = new Date(dateTime).toISOString().slice(0,16);
    setDateTimeNow(dateTime);
  
    const response = await api.get("/api/v1/room/allRooms");
    setRooms(response.data);
    setSelectedRooms([]);
  }

  useEffect(() => {
    getBookingForm();
  }, [])

  return (

    <Form>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Event Name</Form.Label>
            <Form.Control type='text' placeholder='Sharh Tafsir Ibn Kathir' defaultValue={defaultValue}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Speaker Name</Form.Label>
          <Form.Control type='text' placeholder='Ustaz Ahmad Ibn Abdul Halim'></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Start Date & Time</Form.Label>
          <Form.Control type='datetime-local' defaultValue={dateTimeNow}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>End Date & Time</Form.Label>
          <Form.Control type='datetime-local' defaultValue={dateTimeNow}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Rooms</Form.Label>
          <Form.Control as='select' multiple onChange={e => setSelectedRooms([].slice.call(e.target.selectedOptions).map(item => item.value))}>
          {
            rooms?.map((room) => {

              return (
                <option key={room.roomId} value={room.roomId}>{room.name}</option>
              );

            })
          }
          </Form.Control>
        </Form.Group>
        <br/>
        <Button variant='outline-info' onClick={handleSubmit}>Submit</Button>
    </Form>

  )

}

export default BookingForm
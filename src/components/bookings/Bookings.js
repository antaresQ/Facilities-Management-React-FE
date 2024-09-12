import { useEffect, useRef } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import React from 'react'
import BookingForm from '../bookingForm/BookingForm';


const Bookings = ({getRoomData, room, bookings, setBooking}) => {

    const booking = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getRoomData(roomId);
    }, [])

    const addBooking = async (e) => {
        e.preventDefault();

        const rev = booking.current;

        try
        {
            //const response = await api.post("/api/v1/bookings",{bookingBody: booking.value, roomId: roomId});
            const updatedBookings = [...bookings, {body: booking.value}];

            booking.value = "";

            setBookings(updatedBookings);
        }
        catch(err)
        {
            console.log(err);
        }
    }

    return (
        <Container>
            <Row>
                <Col><h3>Bookings</h3></Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <img src={room.imageUrl} alt="" />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <BookingForm handleSubmit={addBooking} booking={booking} labelText="" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        bookings?.map((b) =>{
                            return(
                                <>
                                    <Row>
                                        <Col>
                                            {b}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    )
}
 
export default Bookings
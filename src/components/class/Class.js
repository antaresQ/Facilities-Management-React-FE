import './Class.css';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';
//import React from 'react'

const Class = ({rooms}) => {
  return (
    <div className= 'room-carousel-container'>
        <Carousel>
            {
                rooms?.map((room) =>{
                    return(
                        <Paper key={room.id}>
                            <div className='room card container'>
                                <div className='room-card'>
                                    <div className="room-name">
                                        <h4>Name: {room.name}</h4>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Class
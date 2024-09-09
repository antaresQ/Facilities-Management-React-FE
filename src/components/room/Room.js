import './Room.css';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons/faCirclePlay';
import { Link } from 'react-router-dom';
//import React from 'react'

const Room = ({rooms}) => {
  return (
    <div className= 'room-carousel-container'>
        <Carousel>
            {
                rooms?.map((room) =>{
                    return(
                        <Paper key={room.id}>
                            <div className='room card container'>
                                <div className='room-card'>
                                    <div className="room-detail">
                                        <div className='room-Image'>
                                            <img src={room.imageUrl} alt="" />
                                        </div>
                                        <div className='room-name'>
                                            <h4>Name: {room.name}</h4>
                                        </div>
                                        <div className="room-type">
                                            Type: {room.roomType}
                                        </div>
                                        <div className='room-buttons-container'>
                                            <Link to={(room.VideoUrl != null) ? `/Video/${room.videoUrl.substring(room.videoUrl.length - 11)}` : null}>
                                                <div className="play-button-icon-container">
                                                    <FontAwesomeIcon className='play-button-icon'
                                                        icon={faCirclePlay}
                                                    />
                                                </div>
                                            </Link>
                                        </div>
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

export default Room
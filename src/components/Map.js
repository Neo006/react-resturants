import React from "react";
import Grid from "@material-ui/core/Grid";
import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import RoomIcon from '@material-ui/icons/Room';
import {makeStyles} from "@material-ui/core/styles";
const TOKEN="pk.eyJ1IjoibmVvMDA2IiwiYSI6ImNrZzl2bjFmbjAxNzYydHBkMjg1NjVycm0ifQ.UhZ6uNyKKO_uyOozNemy_Q";

const useStyles = makeStyles({
    markerIcon: {
        zIndex: 99,
    },
});

const Map = ({resturants, showPopup, closePopup}) => {
    const classes = useStyles();
    const [viewport, setViewport] = useState({
        width: '100%',
        height: 500,
        latitude: 40.177200,
        longitude: 44.503490,
        zoom: 13
    });

    const hidePopup = () => {
        return closePopup();
    }

    return (
        <Grid item xs={12} md={6}>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={TOKEN}
                mapStyle="mapbox://styles/neo006/ckgamwmpf4nda19qo11qd32uh"
                onViewportChange={nextViewport => setViewport(nextViewport)}
            >
                {resturants.map(res => (
                    <Marker key={res.id} latitude={res.coordinates.latitude} longitude={res.coordinates.longitude} offsetLeft={-20} offsetTop={-10}>
                        {<RoomIcon className={classes.markerIcon} fontSize="small" color="secondary" />}
                    </Marker>
                ))}

               {showPopup.length && (
                    <Popup
                        latitude={showPopup[0].coordinates.latitude}
                        longitude={showPopup[0].coordinates.longitude}
                        closeButton={true}
                        onClose={hidePopup}
                    >
                        <h4 style={{margin: "0"}}>{showPopup[0].name}</h4>
                        <div>{showPopup[0].description}</div>
                    </Popup>
                )}
            </ReactMapGL>
        </Grid>
    )
}

export default Map;
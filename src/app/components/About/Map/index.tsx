import React, { useEffect, useMemo, useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"

import { Loader } from '../../common/Loader';

import './index.scss';

export const Map = () => {
    const [zoom, setZoom] = useState(3);
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.MAPS_API_KEY! });

    const position = useMemo(() => ({ lng: 22.56, lat: 51.25 }), []);

    useEffect(() => {
        setTimeout(() => {
            setZoom(6)
        }, 1000);
    }, []);

    return (
        <div className='map'>
            {isLoaded
                ?
                <GoogleMap
                    zoom={zoom}
                    center={position}
                    mapContainerClassName='map__container'
                    options={{ mapId: '2889f91c543c823d', disableDefaultUI: true }}
                >
                    <Marker position={position} />
                </GoogleMap>
                :
                <Loader spinnerSize='50px' />
            }
        </div>
    )
}

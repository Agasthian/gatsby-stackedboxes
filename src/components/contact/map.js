import React from 'react';
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap
} from 'react-google-maps';

import mapStyles from './map.styles';

const Mapfunction = props => {
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 13.079, lng: 80.209 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 13.079, lng: 80.209 }} />
      )}
    </GoogleMap>
  );
};

const WrapperMap = withScriptjs(withGoogleMap(Mapfunction));

const Map = () => {
  return (
    <div>
      <WrapperMap
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};
export default Map;

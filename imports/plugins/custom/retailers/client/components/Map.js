import React from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps"

const Map = ({ children, onMapMounted }) => (
  <GoogleMap
    defaultCenter={{ lat: 43.6966119, lng: 7.2873863 }}
    defaultZoom={10}
    ref={onMapMounted}
  >
    {children}
  </GoogleMap>
);

export default withGoogleMap(Map);

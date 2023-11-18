 
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div style={{with:'50px'}}>{text}</div>;

const Map=()=>{
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    return(
     <>

<div  className=' d-flex justfiy-content-center' style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>

     </>

    )
 }

 export default Map;
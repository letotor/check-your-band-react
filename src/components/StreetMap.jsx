import React,{useState,useEffect} from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup,Circle,CircleMarker } from 'react-leaflet'
import './StreetMap.css'


const StreetMap = () => {
  const URL_DIRECTUS = `https://7kb0t63m.directus.app/items/locations`;

  const fillBlueOptions = { fillColor: 'blue' }
  const blackOptions = { color: 'black' }
  const limeOptions = { color: 'lime' }
  const purpleOptions = { color: 'purple' }
  const redOptions = { color: 'red' }


  const center = [51.505, -0.09]
  
  const [data, setData] = useState([]);

  // console.log({ gender, species, homeworld })
  useEffect(() => {
    fetch(URL_DIRECTUS)
      .then((res) => res.json())
      .then((res) => setData(res))

  }, [])



  console.log(data)
  // const gps= {data}.map(elt=>{

  //   console.log(elt.locations);
  // })
  const position = [51.505, -0.09]
  const  postionTab =()=>{
    let count =0;
   return  Array.from({length:10}).
    map((element) => {
      count = (count * 10 + 1) / 10;
      return element = [position[0] + count,position[1] +count]
    })

  }

  let posTAb = postionTab();

  
    posTAb.forEach((element) => {
      console.log(element)
    })
  return (
    <>
      <div className="leaflet d-flex justify-content-center m-30">
        <div className="d-flex  justify-content-center">
          <h1>FUCKING MAP in main component  🌎</h1>
      
         
        </div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
       
     
          {posTAb.forEach((element) => {
            <Marker position={[element[0],element[1]]}>
             <Popup>
               A pretty CSS3 popup. <br /> Easily customizable.
             </Popup>
           </Marker>
           }
          )}


           <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>

        <Marker position={[52,9]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> 
       
          <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
          <CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}>
            <Popup>Popup in CircleMarker</Popup>
          </CircleMarker>
        </MapContainer>,
          
         
      </div>


    </>
  )
}

export default StreetMap
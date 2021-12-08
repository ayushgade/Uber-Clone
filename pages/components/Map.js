import React from 'React'
import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from "!mapbox-gl"

mapboxgl.accessToken = 
'pk.eyJ1IjoiYWF5dXNoZ2FkZSIsImEiOiJja3dydGcxdW8waW94Mm9sc3BwejVtYnhrIn0.rW4mKD5cTSP_YsWky5fLvg';


const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29011, 39.39172],
          zoom: 3,
        });
      },[]);
    return <Wrapper id='map'></Wrapper>
}

const Wrapper = tw.div`
flex-1 h-40
`
export default Map;

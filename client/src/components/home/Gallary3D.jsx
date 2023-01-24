import React,{useEffect,useState} from "react";
// import "./gallary3D.css";
import { Carousel, CarouselItem } from 'react-round-carousel';
import 'react-round-carousel/src/index.css';
import personalImage from "../../icons/Logo.svg";
import Button from '../styled-components/button'
import './gallary3D.css'
//
import Breguet1 from '../../icons/Breguet/Breguet1.jpg'
import Breguet3 from '../../icons/Breguet/Breguet3.jpg'
//
import LeCoultre1 from '../../icons/LeColter/Jaeger-LeCoultre1.jpg'
import LeCoultre2 from '../../icons/LeColter/Jaeger-LeCoultre2.jpg'
import LeCoultre3 from '../../icons/LeColter/Jaeger-LeCoultre3.jpg'
import LeCoultre4 from '../../icons/LeColter/Jaeger-LeCoultre4.jpg'
import LeCoultre5 from '../../icons/LeColter/Jaeger-LeCoultre5.jpg'
import LeCoultre6 from '../../icons/LeColter/Jaeger-LeCoultre6.jpg'
import LeCoultre7 from '../../icons/LeColter/Jaeger-LeCoultre7.jpg'
//
import audemars1  from '../../icons/audemars piguet/audemars piguet1.jpg'
import audemars2  from '../../icons/audemars piguet/audemars piguet2.jpg'
//
import Rolex1  from '../../icons/Rolex/rolex1.webp'
import Rolex2  from '../../icons/Rolex/1200px-Rolex_logo.svg.png'







function Gallary3D() { 
const items =[Breguet1,audemars2,audemars1,Rolex1,Breguet3,Rolex2,LeCoultre1,LeCoultre3,LeCoultre4,LeCoultre5,LeCoultre6,LeCoultre7]
const [itemWidth ,setItemWidth] = useState('470')
useEffect(()=>{
  window.addEventListener('resize', function(event) {
      if(event.target.innerWidth<= '750'){
        setItemWidth('10')
      }
      else{
        setItemWidth('300')
      }
  }, true);
},[])
let slides = items  
    .map((i, index: number) => ({
      alt: i.split('/').pop().split('.')[0],
      image: i,
      content: (
        <div>
          <strong>{i.split('/').pop().split('.')[0]}</strong>
          <span> {index + 1}</span>
        </div>
      )
    }));
  
    return (
    <>
 <Carousel items={slides} itemWidth={itemWidth}/>
    </>
  );
}

export default Gallary3D;

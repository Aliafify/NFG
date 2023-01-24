import React, {  useState } from "react";
import {Contain,Col} from "../styled-components/index";
import './metion.css'
function Metion() {
  const taps = ["documentation", "tracking", "selling",'marketing','archives'];

  console.log(window.innerWidth);
  
  const Text = {documentation:'Everything around you has value that is registered and proven to its owner, such as real estate and cars that you own, except for your watches, which makes them a great danger in the future.',
  tracking:'With the many incidents of thefts of valuables, not registering them can never be retrieved. Collectibles such as watches and jewelry are easy to move around, but through our relations with world markets, we can track them, God willing.',
  selling:'When selling your watch, the first question you may face is that you prove to the buyer that it is original, and with the abundance of imitations, people have been afraid to buy except from the watch companies themselves, but when you register your watch, our company will represent you in front of the buyer and guarantee his full right',
  marketing:'Registering your watch raises its market value, as your watch will have a company representing it and guaranteeing the right of the buyer. Thus, the desire to buy your watch will be higher than another watch that the buyer does not know its true nature.',
  archives:'Many watches, after aging, increase the demand for them, and people start looking for them, but with the passage of time, the owner may lose the information of his watch and its attachments, and this leads to a decrease in your watches, as the acquisition must be for the entire history of the watch, but after several years, while registering your reference watch, we will have all its information when what i liked'}
  //
  const [currentText ,setCurrentText]=useState(Text.documentation)
  //


  return (
    <>
      <Contain perfix='metion-container'>
        
        <Col  perfix={'home-board-cont'} width='100%'>
          
          <Col
           
            perfix={'home-board-nav'}
          >
            {taps.map((t) => (
              <button key={t} className='sub-nav-bttn' id={t} onClick={()=>{setCurrentText(Text[t])}}> {t}</button>
              
            ))}
          </Col>
          <Col  fg="1" perfix='home-board-text'>
            <div className='board-home-text-cont'>

            <p className='board-home'>
              {currentText}
            </p>
            </div>
          </Col>
        </Col>
      </Contain>
    
    </>
  );
}

export default Metion;

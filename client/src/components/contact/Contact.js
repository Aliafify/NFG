import React, { useState } from 'react'
import Header from '../About/header'
import Form from './form'
import Section from './section';
import mail from "../../icons/mail.svg";
import {BsFacebook,BsLinkedin,BsFillMapFill,BsFillEnvelopeOpenFill,BsFillTelephoneFill} from 'react-icons/bs'
import {AiOutlineLinkedin,AiOutlineTwitter} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'
import "./contact.css";
                        // left 
const Left =({data,light})=>{
  const ctIcons=[<BsFillMapFill/>,<BsFillEnvelopeOpenFill/>,<BsFillTelephoneFill/>]
  return(
    <>
    <h3 className='contact-header'>DON'T BE SHY !</h3>
    <p className= {`discription ${light?"font-sun-mode":""}`} >
    Feel free to get in touch with me.
     I am always open to discussing new projects,
      creative ideas or opportunities to be part of your visions.
    </p>
    
{data.map((c,i)=><div className='ct'><span className='ct-icon'>{ctIcons[i]}</span><Ct key={i} ct={c} light={light}/></div>)}

      {/* //social-links */}

<div className='social-cont'>
<a    
                 className='sociall' 
                 href={'https://facebook.com'}
                 > 
            <BsFacebook  color='rgb(23, 120, 242)'/> 
        </a>
        <a    
                 className={'sociall '} 
                 href={'https://facebook.com'}
                 > 
 <AiOutlineTwitter color='rgb(53, 120, 242)' size='4em'/>
        </a>
        <a    
                 className={'sociall '} 
                 href={'https://facebook.com'}
                 > 
<AiOutlineLinkedin size='4em' color='#0072b1'/>
        </a>
        <a    
                 className={'sociall '} 
                 href={'https://github.com/Aliafify'}
                 > 
 <FiGithub color='rgb(64, 120, 192)' size='4em' />
        </a>
        </div>
    
    </>
  )
}
//       left contents
function Ct({ct,light}){

  return(
    <>
    <div className='contact-cont'>
    <p className={`contact-title ${light?"font-sun-mode-low":""}`} data-content={ct.icon}>{ct.name}<br/>
    <span className={`contact-discription ${light?"font-sun-mode":""}`}>{ct.discription}</span>
    </p>
    </div>
    </>
  )
}

function Contact({light}) {
  const contactInfo = [
    {name:"ADDRESS POINT",
    discription:"123 Stree New York City , United States Of America 750065",
    icon:mail},
    {name:"MAIL ME ",
    discription:"ali.afify93746@gmail.com",
    icon:mail},
    {name:"CALL ME    ",
    discription:" +201210949604",
    icon:mail},

                     ]
  const [data, setData] = useState(contactInfo);
  return (<>
<Header light={light} header={{word1:"get in",word2:"touch",bgtitle:"contact"}}/>
<Section>
  <div>
<Left data={data} light={light}/>
  </div>
  <div>
<Form light={light}/>

  </div>
</Section>
</>
    )
}

export default Contact
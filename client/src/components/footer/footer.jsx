import React from 'react'
import './footer.css';
import {Contain, Col} from "../styled-components/index"
import LangSwitcher from "../home/languageSwitcher";
import MainMenu from "../home/mainMenu";
import SocialMedia from '../socialMedia'
import logo from '../../icons/Logo.png'
function Footer() {
  return (
   <footer>
    
     <Contain border='0px' perfix='footer-container'>
       <Col perfix='ft-cont'  fg='1' dir='column' width='100%' >
        <Contain>
           <Col perfix='lang-col' border='0px' width='50%' justify='space-between' align='center'>
             <LangSwitcher/>
           </Col>
           <Col width='25%'></Col>
           <Col width='25%'>
             <img src={logo} alt='NFG_Company_logo' width='100px'/>
           </Col>

           </Contain>
           <Contain  >
           <Col perfix='footer-cont' width='100%' >
           <Col perfix='lang2' border='0px' dir='column' fg='1'>
            {/* <h5>Main Pages</h5> */}
            <MainMenu/>
           </Col>
          <Col perfix='lang2' dir='column' border='0px' fg='1'>
             <SocialMedia/>
          </Col>
          </Col>
          </Contain>
          <p className='copy-write'>

          <a id='copy-write' href='/'>
          <span>&#169;</span>NFG_company_{new Date().getFullYear()}.
          </a>
          <a id='dev' href='/'>
          Developed_By_Ali Afify
          </a>

          </p>
          
       </Col>
      </Contain> 
   </footer>
  )
}

export default Footer
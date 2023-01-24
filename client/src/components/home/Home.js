import React from "react";
import "./home.css";
import {Contain,Col} from "../styled-components/index";
// import Hr from '../Hr'
import Metion from './metion.jsx'
import HeroSectionn from './heroSection.jsx'
// import Footer from "../footer/footer.jsx"
import SubHero from './subHero.jsx'
function Home() {

  return (<>  
  
    <div className='vertival-cont'>
     <HeroSectionn/>
     <SubHero/>
     <section className='who-us-cont'>
        <Contain>
          <Col width='80%' dir='column' justify='flex-start' perfix='who-us-sub-cont'>
            <h2>
              NFG__
            </h2>
            <h3>
              Limited Property Assurance Company 

            </h3>
            <p>
            We are a Saudi company that organizes precious watches and registers their ownership for their owners so that they have a reliable reference. The organization benefits and protects the owners of precious watches, and for this reason the importance of registering these properties is of benefit.
            </p>

          </Col>
        </Contain>
     </section>
     <Metion/>

      </div>
    </>
  );
}

export default Home;

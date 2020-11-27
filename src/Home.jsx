import React from 'react'
import Common from './Common';
import image from '../src/images/developer.jpg'


const Home = (props) => {
      return(
            <>
                  <Common
                        name="Grow your bussiness with"
                        imgsrc={image}
                        visit="/service"
                        btnName="Get Started"
                  />
            </>
      )
}

export default Home;
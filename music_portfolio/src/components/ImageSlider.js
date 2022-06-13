import React from 'react'
import { Carousel } from 'react-bootstrap';
export default function ImageSlider() {
  return (
    <div>
       <Carousel>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>SOmetimes i ran away from this world,hoping to seek magnificent refuge. But then i remember i have a guitar</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/black-female-singer-singing-into-microphone-in-recording-studio-picture-id1284317705?b=1&k=20&m=1284317705&s=170667a&w=0&h=F7UoOb_dF4Jmsx2eYkWuehZn_EHvF6iYZtS260Cxn_o="
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>So i sang this song to my EX-girl friend and we got back together.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wallpaperaccess.com/full/1163082.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>The good thing about good music is that when it hits you, you feel no pain</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
{/* FOOTER */}



    </div>
   


    
  )
}

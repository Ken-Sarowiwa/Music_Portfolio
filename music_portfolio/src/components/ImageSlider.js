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
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

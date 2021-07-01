
import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/Landing.css';

class Landing extends React.Component {

  render() {

    return (
      <>
        <div id='landingText'>

            <h1 id='welcome' >Welcome to Character Sonnet!</h1>
            <p id='welcomeText'>
              A free to use, character creater, and manager for Dungeons & Dragons. <br/> Log in to use our site, refer to the pictures below to see how it works, and start creating!
            </p>

          <Carousel id='images' touch='true'>

            <Carousel.Item key={"0"}>
              <img

                src={`https://via.placeholder.com/800x400/000000/FFFFFF?text= .`}
                alt="oh no"
              />
              <Carousel.Caption>
                <h2>Character Sheet</h2>
                {/* <p>{book.status}</p> */}
                <p>You can create your very own dungeon and dragons character here!</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item key={"1"}>
              <img

                src={`https://via.placeholder.com/800x400/000000/FFFFFF/?text= .`}
                alt="oh no"

              />
              <Carousel.Caption>
                <h2>Character Dashboard</h2>
                {/* <p>{book.status}</p> */}
                <p>You can create, store, and edit your characters!</p>

              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item key={"2"}>
              <img

                src={`https://via.placeholder.com/800x400/000000/FFFFFF?text= .`}
                alt="oh no"
              />
              <Carousel.Caption>
                <h2>Character Creator</h2>
                {/* <p>{book.status}</p> */}
                <p>There are many options to choose from!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>


        </div>
      </>
    )

  }

}


export default Landing
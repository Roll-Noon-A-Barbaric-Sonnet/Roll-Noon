
import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/Landing.css';
import { Jumbotron } from 'react-bootstrap';

class Landing extends React.Component {

  render() {

    return (
      <>
        <div id='jumboCarousel'>
          <Jumbotron>
            <h1>Welcome to Character Sonnet!</h1>
            <p>
              We are a free to use character creater and manager for Dungeons and Dragons. Please Log in to use our site and refer to the pictures provided to see how it works.
            </p>

          </Jumbotron>
          <Carousel touch='true'>

            <Carousel.Item key={"0"}>
              <img

                src={`https://via.placeholder.com/500x400/000000/FFFFFF`}
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

                src={`https://via.placeholder.com/500x400/000000/FFFFFF/?text=CharacterBuilder`}
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

                src={`https://via.placeholder.com/500x400/000000/FFFFFF`}
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
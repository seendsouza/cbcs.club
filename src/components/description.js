import React, {Component} from "react";
import styled from 'react-emotion';
import '../stylesheets/tailwind';
import '../stylesheets/description.css';

//fix import pls
/*const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;*/

class Description extends Component {
  render() {
    return (
<div className="Home">                                                                                          
        <BigTitle>Welcome to CBCS!</BigTitle>
        <h2>The unofficial home of CB Computer Science.</h2>
        <p>If you're new, no worries! We'll be teaching the basics of computer science at our weekly club meetings (Day 1 @ 
lunch in room 226), as well as prepare for upcoming competitions. <br /> For seasoned veterans or beginners that want to try
 their hand, feel free to refine your skills by joining one of our upcoming events. All our events include online grading, s
o you can receive feedback and results on your code submissions in real-time.<br />If you are in need for some resources, ha
ve a look below.
            </p>

        </div>
                );
  }
}

export default Description;

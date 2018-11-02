import React, {Component} from "react";
import '../stylesheets/home.css';

class Home extends Component {
  render() {
    return (<div className="Home">
      <div class="section1">
        <h1>Welcome to CBCS!</h1>
        <h2>The unofficial home of CB Computer Science.</h2>
        <p>If you're new, no worries! We'll be teaching the basics of computer science at our weekly club meetings (Day 1 @ lunch in room 226), as well as prepare for upcoming competitions. <br /> For seasoned veterans or beginners that want to try their hand, feel free to refine your skills by joining one of our upcoming events. All our events include online grading, so you can receive feedback and results on your code submissions in real-time.<br />If you are in need for some resources, have a look below.
            </p>
          </div>
          <div class="section2">
            <h1>Resources</h1>
            <h2>The dark web</h2>
          </div>
          <div class="section1">
            <h1>Upcoming Events</h1>
            <h2>The next meeting XD</h2>
          </div>

        </div>
        );
  }
}

export default Home;

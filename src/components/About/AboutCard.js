import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prashant Pandey </span>
            from <span className="purple"> Lucknow, India.</span>
            <br /> I am a Software Developer and Completed Bachelors in Computer Science and Engineering.
            <br />
            <br />
            I am Passionate about pursuing my career in a software development domain.
           With a strong background in Fullstack Development, including expertise in HTML, CSS, JavaScript, ReactJS, Git .
           <br />
           <br />
            Additionally, I am currently looking for Opportunity.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Help myself to learn something new
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Prashant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import blog from "../../Assets/Projects/Blog.png"
import netflix from "../../Assets/Projects/netflix.png"
import recipes from "../../Assets/Projects/recipes.png"
import notekeeper from "../../Assets/Projects/notekeeper.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/prashantpandey05/chatify-frontend.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Task Manager"
              description="A to-do list is a helpful tool for organizing and prioritizing tasks and activities. It can be tailored to your specific needs and can include any tasks or goals you want to accomplish. "
              ghLink="https://github.com/prashantpandey05/todoapp.git"
              demoLink="https://todo-prashant.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog-Website"
              description="It is a simple Blog-Website.This Blog-Website Based on MERN stack.It is connected by MongoDB database."
              ghLink="https://github.com/prashantpandey05/BlogWebsite.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix-Clone"
              description="It is a Netflix-Clone.This Based on MERN stack.Crafted a Netflix-inspired application using React, Redux Toolkit, Node.js, Express, Firebase, and MongoDB."
              ghLink="https://github.com/prashantpandey05/Netflix-clone.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipes}
              isBlog={false}
              title="Recipe-Finder"
              description="It is a Recipe-Finder website.This is a React project. Just enter ingredients into recipe search engine and It'll instantly return a list of tasty recipes for you to enjoy."
              ghLink="https://github.com/prashantpandey05/recipe.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notekeeper}
              isBlog={false}
              title="Note-Keeper"
              description="It is a Note-Keeper website.This is a MERN Stack Project."
              ghLink="https://github.com/prashantpandey05/NoteKeeper.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

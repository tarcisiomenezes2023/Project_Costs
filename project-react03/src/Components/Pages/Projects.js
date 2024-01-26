import React, { useEffect } from 'react'
import Message from '../layout/Message'
import { useLocation } from 'react-router-dom';
import styles from './Projects.module.css';
import { Link } from 'react-router-dom';
import ProjectCard from '../Project/ProjectCard';
import { useState } from 'react';
import Container from '../layout/Container';
import Loading from '../layout/Loading';


function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false)


  const location = useLocation();
  let message = '';

  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json', 
      },
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setProjects(data);
        setRemoveLoading(true)
      })
      .catch(err => console.log(err));
    }, 3000)
  }, []);

    function removeProject(id) {

      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(resp => resp.json())
      .then(data => {
        setProjects(projects.filter((project) => project.id !== id))
        /* Message */
      })

      .catch(err => console.log(err))
    }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>My Projects</h1>
        <Link to="/newproject" className={styles.ButtonProject}>
          <h2>New project</h2>
        </Link>
      </div>
      {message && <Message type="success" msg={message} />}
      <Container>
      {projects.length > 0 &&
  projects.map((project) => (
    <ProjectCard 
      key={project.id} 
      name={project.name}
      id={project.id}
      budget={project.budget}
      category={project.category ? project.category.name : 'Unknown Category'} 
      handleRemove={removeProject}
    />
  ))}
    {!removeLoading && <Loading />}
    {removeLoading && projects.length === 0 && (
      <p>There's no created projects</p>
    )}
      </Container>
    </div>
  );
}

export default Projects;

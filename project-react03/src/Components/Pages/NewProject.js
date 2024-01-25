import React from 'react';
import ProjectForm from '../Project/ProjectForm';
import styles from './NewProjects.module.css';
import { useNavigate } from 'react-router-dom';

function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    console.log('Attempting to create project:', project);

    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('Post successful. Response data:', data);
        /* redirect */
        navigate('/projects', { state: { message: 'Successfully created project!' } });
      })
      .catch((err) => console.error('Error creating project:', err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Create a new project</h1>
      <p>Create your project and add to your services!</p>
      <ProjectForm handleSubmit={createPost} btnText="Create project" />
    </div>
  );
}

export default NewProject;

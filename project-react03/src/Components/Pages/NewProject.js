import React from 'react';
import ProjectForm from '../Project/ProjectForm';
import styles from './NewProjects.module.css';

function NewProject() {
  return (
    <div className={styles.newproject_container}>
      <h1>Create a new project</h1>
      <p>Create your project and add to your services!</p>
      <ProjectForm btnText="Create project" />
    </div>
  );
}

export default NewProject;

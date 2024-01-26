import React from 'react';
import styles from './Project.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';
import Container from '../layout/Container';

function Project() {
  const { id } = useParams();

  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
        });
    }, 3000);
  }, [id]);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            <div className={styles.details_container}>
              <h1>Project: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {showProjectForm ? 'Close' : 'Edit project'}
              </button>
              {!showProjectForm ? (
                <div className={styles.project_info}>
                    <p>
                    <span>Category:</span> {project.category.name}
                    </p>
                    <p>
                        <span>Total budget:</span> ${project.budget}
                    </p>
                    <p>
                        <span>Total Utilized:</span> ${project.cost}
                    </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                    <p>Project details</p>
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;
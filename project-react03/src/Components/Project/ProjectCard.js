import React from 'react';
import styles from './ProjectCard.module.css';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

function ProjectCard({id, name, budget, category, handleRemove}) {

  const remove = (e) => {
     e.preventDefault()
     handleRemove(id)
  }
  return (
    <div className={styles.container_project_card}>
    <div className={styles.project_card}>
        <h4>{name}</h4>
        <p>
            <span>Budget:</span> ${budget}
        </p>
        <p className={styles.category_text}>
            <span className={`${styles[category.toLowerCase()]}`}></span> {category}
        </p>
        <div className={styles.project_card_actions}>
            <Link to="/">
              <BsPencil /> Edit
            </Link>   
            <button onClick={remove}>
               <BsFillTrashFill /> Remove
            </button>
        </div>
    </div>
    </div>
  )
}

export default ProjectCard


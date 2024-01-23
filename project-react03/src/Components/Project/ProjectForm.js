import React from 'react';
import styles from './ProjectForm.module.css';
import Input from '../form/Input';

function ProjectForm() {
  return (
    <form className={styles.form}>
        <Input type="text" text="Name of the project" name="name"
        placeholder="Insert the name of the project"/>
        <div>
        <input type='number' placeholder='Insert the total budget' />
        </div>
        <div>
        <select name='category_id'>
            <option disabled selected>Select the category</option>
        </select>
        </div>
        <div>
            <input type='submit' value="Create Project" />
        </div>
    </form>
  )
}

export default ProjectForm

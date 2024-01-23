import React from 'react';
import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm(props) {
  return (
    <form className={styles.form}>
      <Input type="text" text="Name of the project" name="name" placeholder="Insert the name of the project" />
      <Input type="number" text="Budget of the project" name="Budget" placeholder="Insert the total budget" />
      <Select name="category_id" text="Select a category" />
      <SubmitButton text={props.btnText} />
    </form>
  );
}

export default ProjectForm;

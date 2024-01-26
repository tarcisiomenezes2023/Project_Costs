import React from 'react'
import styles from './Loading.module.css';


function Loading() {
  return (
    <div className={styles.loader_container}>
        <img className={styles.loader} src='/Loading.png' alt='Loading' />
      
    </div>
  )
}

export default Loading

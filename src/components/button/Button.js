import React from 'react'
import styles from './button.module.css'

export default function Button(props) {
  return (
    <div className={styles.button}>
        {props.label}
    </div>
  )
}



import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Card = ({ imgSource, text }) => {
  return (
    <div>
      <div style={{ background: `url(${imgSource})`, backgroundPosition: "center", backgroundSize: "cover", width: "100%", margin: 10 }}>
      </div>
      <div>
        {text}
      </div>
    </div>
  )
}
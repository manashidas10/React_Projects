import React from 'react';
import styles from './Card.module.css';

export default function Card() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Card Title</h2>
      <p>This is a card built with CSS Modules!</p>
    </div>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import constructionImg from "../../assets/minji/construction.jpg"
import styles from './PlaceHolderPage.module.css';

const PlaceHolderPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className={styles.container}>
      <button onClick={handleGoBack} className={styles.button}>← Go Back</button>
      <div className={styles.content}>
        <img src={constructionImg} alt="Under Construction" className={styles.image} />
        <h1 className={styles.title}>This page is under construction</h1>
        <p className={styles.message}>We're working hard to bring you new features. Please check back soon!</p>
      </div>
    </div>
  );
};

export default PlaceHolderPage;

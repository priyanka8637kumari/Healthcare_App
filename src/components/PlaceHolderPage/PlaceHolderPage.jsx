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
      <img src={constructionImg} alt="Under Construction" className={styles.image} />
      <h1 className={styles.title}>Sorry, this page is still under construction</h1>
      <button onClick={handleGoBack} className={styles.button}>Go Back</button>
    </div>
  );
};

export default PlaceHolderPage;

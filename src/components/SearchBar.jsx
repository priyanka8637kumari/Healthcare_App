import React from 'react';
import styles from "./SearchBar.module.css";
import { useLocation } from 'react-router-dom'; // Import useLocation hook

const SearchBar = () => {
  const location = useLocation(); 
  let placeholderText = "Search patients, records, appointments...";
  if (location.pathname === '/labtech-dashboard') {
    placeholderText = "Sök laboratorietester, patienter..."; 
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder={placeholderText} 
        className={styles.searchBar} 
      />
    </div>
  );
};

export default SearchBar;

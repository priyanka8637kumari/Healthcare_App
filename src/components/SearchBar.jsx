import React from 'react';
import styles from "./SearchBar.module.css"

const SearchBar = () => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Search patients, records, appointments..." 
        className={styles.searchBar} 
      />
    </div>
  );
};

export default SearchBar;


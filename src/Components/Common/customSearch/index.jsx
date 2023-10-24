import React, { useState } from 'react';
import Search from '../../../assets/icons/search.png'
import './Style.scss'

const CustomSearchInput = ({ placeholder, onSearchChange,iconShow }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    if (onSearchChange) {
      onSearchChange(newValue);
    }
  };

  return (
      <div className="searchDiv">
          {
              iconShow&&<img src={Search} alt="search" height={15} />
          }
      
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default CustomSearchInput;

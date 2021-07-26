import React from 'react';

const SearchBox = ({searchChange, searchField}) =>{
    return(
        <div>
          <input 
            type='search' 
            placeholder='Search here' 
            onChange={searchChange}/>  
        </div>        
    );
}

export default SearchBox;
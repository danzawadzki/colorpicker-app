import React from "react";

const SearchbarInput = (props) => {

    //Destructuring props object
    const {handleChange, value} = props;

    return (
        <input type="text"
               id="searchKeyword"
               value={props.searchKeyword}
               onChange={props.handleChange}
               className="searchBar__input form-control"
               placeholder="Search for..."
               aria-label="Search for..."/>
    )
};

export default SearchbarInput;
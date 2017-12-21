import React from "react";
import PropTypes from "prop-types";
import "./Searchbar.css"

/**
 * The search bar input component.
 * 
 * @param props
 * @prop {String} searchKeyword - The keyword to filter colors array.
 * @prop {Function} handleChange - The handler to onChange event.
 * @returns {XML}
 * @constructor
 */
const SearchbarInput = (props) => {

    //Destructuring props object
    const {handleChange, searchKeyword} = props;

    return (
        <input type="text"
               id="searchKeyword"
               value={searchKeyword}
               onChange={handleChange}
               className="form-control searchbar__input"
               placeholder="Search for..."
               aria-label="Search for..."/>
    )
};

/** PropTypes */
SearchbarInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
    searchKeyword: PropTypes.string,
};

export default SearchbarInput;
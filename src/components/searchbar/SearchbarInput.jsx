import React from "react";

/**
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
               className="searchBar__input form-control"
               placeholder="Search for..."
               aria-label="Search for..."/>
    )
};

/** PropTypes */
SearchbarInput.propTypes = {
    handleChange: PropTypes.func.isRequired,


}

export default SearchbarInput;
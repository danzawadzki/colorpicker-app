import React from "react";
import "./Searchbar.css";

/**
 * The search bar icon component.
 *
 * @returns {ReactElement||XML}
 * @constructor
 */
const SearchbarIcon = () => {
    return (
        <span className="searchbar__icon">
            <i className="fa fa-search"
               aria-hidden="true"/>
        </span>
    )
};

/** PropTypes */
SearchbarIcon.propTypes = {};

export default SearchbarIcon;
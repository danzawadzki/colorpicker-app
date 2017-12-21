import React from "react";
import PropTypes from "prop-types";
import {hexToRgba} from "../../modules/helpers";

/**
 * The action button for list single color object.
 *
 * @param props
 * @param {String} hex - The color code in hex format.
 * @param {Function} setBackgroundColor -
 * @returns {ReactElement || XML}
 * @constructor
 */
const SearchbarSuggestionsListItemButton = (props) => {

    //Destructuring props object
    const {hex, setBackgroundColor} = props;

    return (
        <button
            type="button"
            className="ml-2 btn btn-sm btn-outline-secondary"
            onClick={() => {
                setBackgroundColor(hexToRgba(hex, .5))
            }}>
            <i className="fa fa-check" aria-hidden="true"/>
        </button>
    )
};

/** PropTypes */
SearchbarSuggestionsListItemButton.propTypes = {
    setBackgroundColor: PropTypes.func.isRequired,
    hex: PropTypes.string.isRequired
};

export default SearchbarSuggestionsListItemButton;
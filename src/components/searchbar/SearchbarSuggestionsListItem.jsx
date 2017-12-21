import React from "react";
import PropTypes from "prop-types";
import SearchbarSuggestionsListItemButton from "./SearchbarSuggestionsListItemButton";

/**
 * The single suggested color component. Containing color name and button component.
 *
 * @param props
 * @prop {String} name - The color name.
 * @prop {String} hex - The color code in hex format.
 * @prop {Function} setBackgroundColor -
 * @returns {ReactElement || XML}
 * @constructor
 */
const SearchbarSuggestionsListItem = (props) => {

    //Destructuring props object
    const {name, hex, setBackgroundColor} = props;

    return (
        <li>
            {name}
            <SearchbarSuggestionsListItemButton
                hex={hex}
                setBackgroundColor={setBackgroundColor}/>
        </li>
    )
};

/** PropTypes */
SearchbarSuggestionsListItemButton.propTypes = {
    setBackgroundColor: PropTypes.func.isRequired,
    name: PropTypes.string,
    hex: PropTypes.string
};

export default SearchbarSuggestionsListItem;
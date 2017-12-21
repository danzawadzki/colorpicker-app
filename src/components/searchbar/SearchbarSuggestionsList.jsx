import React from "react";
import PropTypes from "prop-types";
import SearchbarSuggestionsListItem from "./SearchbarSuggestionsListItem";

/**
 * The list component containing suggested color objects.
 *
 * @param props
 * @prop {Array} suggestionsArray - The array of objects representing suggested colors [name,hex].
 * @prop {Function} setBackgroundColor - The setter for app background color.
 * @returns {XML}
 * @constructor
 */
const SearchbarSuggestionsList = (props) => {

    //Destructuring props object
    const {suggestionsArray, setBackgroundColor} = props;

    return (
        <ul>
            {suggestionsArray.length > 0
                ? suggestionsArray.map((item, index) =>
                    <SearchbarSuggestionsListItem
                        key={index}
                        name={item.name}
                        hex={item.hex}
                        setBackgroundColor={setBackgroundColor}/>)
                : null}
        </ul>
    )
};

/** PropTypes */
SearchbarSuggestionsList.propTypes = {
    setBackgroundColor: PropTypes.func.isRequired,
    suggestionsArray: PropTypes.array
};

export default SearchbarSuggestionsList;
import React from "react";
import SearchbarSuggestionsListItem from "./SearchbarSuggestionsListItem";

const SearchbarSuggestionsList = (props) => {
    const {suggestionsArray} = props;
    return (
        <ul>
            {suggestionsArray.length > 0 ? suggestionsArray.map((item, index) =>
                <SearchbarSuggestionsListItem key={index} name={item.name} hex={item.hex}/>) : null}
        </ul>
    )
};

export default SearchbarSuggestionsList;
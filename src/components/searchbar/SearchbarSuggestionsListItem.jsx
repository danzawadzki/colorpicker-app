import React from "react";
import SearchbarSuggestionsListItemButton from "./SearchbarSuggestionsListItemButton";

const SearchbarSuggestionsListItem = (props) => {
    const {name, hex} = props;
    return (
        <li>
            {name}
            <SearchbarSuggestionsListItemButton hex={hex}/>
        </li>
    )
};

export default SearchbarSuggestionsListItem;
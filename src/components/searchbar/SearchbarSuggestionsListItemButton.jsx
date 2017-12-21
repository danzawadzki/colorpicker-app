import React from "react";
import {hexToRgba} from "../../modules/helpers";

const SearchbarSuggestionsListItemButton = (props) => {

    const {hex} = props;
    return (
        <button value="Choose" onClick={() => {
            const color = `rgba(${hexToRgba(hex, .5)})`;
            console.log(color);
            document.body.style.backgroundColor = color;
        }}/>
    )
}

export default SearchbarSuggestionsListItemButton;
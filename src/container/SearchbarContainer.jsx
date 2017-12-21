import React, {Component} from "react";
import {fetchColorsArray} from "../modules/fetchers";
import {handleChange} from "../modules/handlers";
import SearchbarInput from "../components/searchbar/SearchbarInput";
import SearchbarIcon from "../components/searchbar/SearchbarIcon";
import SearchbarSuggestionsList from "../components/searchbar/SearchbarSuggestionsList";

class SearchbarContainer extends Component {
    constructor() {
        super();
        this.state = {
            searchKeyword: "",
            suggestionsArray: [],
            data: []
        };
        this.setColorsArray = this.setColorsArray.bind(this);
        this.handleChange = handleChange.bind(this);
    }

    componentDidMount() {
        this.setColorsArray();
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("call");
        if (nextState.searchKeyword !== this.state.searchKeyword && nextState.searchKeyword.length > 1) {
            let filteredData = [...this.state.data].filter(item =>
                item.name.includes(nextState.searchKeyword));
            console.log(filteredData);
            this.setState({
                suggestionsArray: filteredData
            })

        } else if (nextState.searchKeyword !== this.state.searchKeyword) {
            this.setState({
                suggestionsArray: []
            })
        }
    }

    async setColorsArray() {
        let data = await fetchColorsArray();
        console.log(data);
        try {
            this.setState({
                data: data
            })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <SearchbarInput
                    value={this.state.searchKeyword}
                    handleChange={this.handleChange}/>
                <SearchbarIcon/>
                <SearchbarSuggestionsList
                    suggestionsArray={this.state.suggestionsArray}/>
            </div>
        )
    }
}

export default SearchbarContainer;
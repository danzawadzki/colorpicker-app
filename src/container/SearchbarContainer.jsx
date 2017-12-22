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
            colorsArray: []
        };
        this.setColorsArray = this.setColorsArray.bind(this);
        this.handleChange = handleChange.bind(this);
    }


    componentDidMount() {
        //Fetching colors array only once after the component did mount.
        this.setColorsArray();
    }

    componentWillUpdate(nextProps, nextState) {
        //Search keyword have to be different from previous and minimum 2 letters length.
        if (nextState.searchKeyword !== this.state.searchKeyword
            && nextState.searchKeyword.length > 1) {

            //Spreading colors array to filter only names containing keyword
            let filteredColorsArray = [...this.state.colorsArray].filter(item =>
                item.name
                    .toLowerCase()
                    .includes(nextState.searchKeyword.toLowerCase()));
            this.setState({
                suggestionsArray: filteredColorsArray
            })

        } else if (nextState.searchKeyword !== this.state.searchKeyword) {
            this.setState({
                suggestionsArray: []
            })
        }
    }

    /**
     * The setter for the API response with colors array.
     * @returns {Promise<Array>}
     */
    async setColorsArray() {
        let colorsArray = await fetchColorsArray();
        try {
            this.setState({
                colorsArray: colorsArray
            })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <div className="input-group">
                    <SearchbarInput
                        value={this.state.searchKeyword}
                        handleChange={this.handleChange}/>
                    <SearchbarIcon/>
                </div>
                <SearchbarSuggestionsList
                    setBackgroundColor={this.props.setBackgroundColor}
                    suggestionsArray={this.state.suggestionsArray}/>
            </div>
        )
    }
}

/** PropTypes */
SearchbarContainer.propTypes = {};

export default SearchbarContainer;
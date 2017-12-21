import React, {Component} from 'react';
import {fetchColorsArray} from "./modules/fetchers";
import SearchbarContainer from "./container/SearchbarContainer";

class App extends Component {
    render() {
        return (
            <div>
                <SearchbarContainer/>
            </div>
        );
    }
}

export default App;

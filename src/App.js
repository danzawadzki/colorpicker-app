import React, {Component} from 'react';
import SearchbarContainer from "./container/SearchbarContainer";
import "./App.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            backgroundColor: '255, 255, 255, .5'
        };

        this.setBackgroundColor = this.setBackgroundColor.bind(this);
    }

    /**
     * Setter to the app background color prop
     * @param {String} color - The color code in rgba format.
     */
    setBackgroundColor(color) {
        this.setState({
            backgroundColor: color
        })
    }

    render() {
        return (
            <div id="app" style={{backgroundColor: `rgba(${this.state.backgroundColor})`}}>
                <div className="container">
                    <div className="row">
                        <SearchbarContainer
                            setBackgroundColor={this.setBackgroundColor}/>
                    </div>
                </div>
            </div>
        );
    }
}

/** PropTypes */
App.propTypes = {};

export default App;

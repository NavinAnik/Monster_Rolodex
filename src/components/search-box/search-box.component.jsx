import {Component} from "react";

class SearchBox extends Component{

    render() {

        return(
            <input
                className={'searchBox ${this.props.className}'}
                type = 'search'
                placeholder = {this.props.placeHolder}
                onChange = {this.props.onChangeHandeler}
                />
        )
    }
}

export default SearchBox;
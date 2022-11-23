import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component{
    render(){
// console.log(this.props)
        return(
        <input 
        className={this.props.className} 
        type='search' 
        placeholder= {this.props.placeholders}
        onChange={ this.props.onChangeHandler}

        />
        )
    }
}

export default SearchBox;
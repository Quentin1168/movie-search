import React, { Component } from 'react'

 
class SearchBar extends Component {
    state = { }
    render() { 
        return (  
            <div>
                <input placeholder = "Searching for Deep's mum ..."/>
                <button>Search Deez Nutz</button>
            </div>
        );
    }
}
 
export default SearchBar
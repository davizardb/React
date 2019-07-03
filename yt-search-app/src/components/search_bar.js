import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props){
        super(props)

        this.state = {term: ''}
        // this.onInputChange = this.onInputChange.bind(this)
    }

    render(){
        // return <input onChange={this.onInputChange}/>
        // return <input onChange={(event)=>console.log(event.target.value)}/>
        return (
            <div className='search-bar'>
                <input
                    placeholder='Pesquisar' 
                    value={this.state.term}
                    onChange={event=>this.onInputChange(event.target.value)}/>
                {/* Value of the input: {this.state.term}  */}
            </div>    
        )
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}    


    // onInputChange(event){
    //     console.log(event.target.value);        
    // }



// const SearchBar = () =>{
//     return <input/>
// }

export default SearchBar
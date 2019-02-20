import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchByRepoName, resetSearch } from '../../store/actions';

class SearchForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            q: '',
        }

        this._onChange.bind(this);
    }

    _onChange = (event) => {
        let value = event.target.value;
        this.setState({
            q: value,
        });
        if(value.length === 0) {
            setTimeout(()=> {
                this.props.resetSearch();
            }, 2000);
        }
        else if(value.length > 2){
            setTimeout(()=> {
                this.props.searchByRepoName(value, 1);
            }, 1000);
            
        } 
    }

    render(){
        const { q } = this.state;

        return (
            <div className='container'>
                <input 
                    type='text' 
                    name='search' 
                    placeholder='  Search by repo name, type more than 2 char ..  '
                    value={q} 
                    onChange={this._onChange} 
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ searchByRepoName, resetSearch }, dispatch);
};
  
export default connect(null, mapDispatchToProps)(SearchForm);
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
        this._onSubmit.bind(this);
    }

    _onChange = (event) => {
        let value = event.target.value;
        this._search(value);
        this.setState({
            q: value,
        });
    }

    _onSubmit = (event) => {
        event.preventDefault();
        const { q } = this.state;
        this._search(q);
    }

    _search = (value) => {
        // add delay to make sure all async request are ended
        if(value.length === 0) {
            setTimeout(
                () => this.props.resetSearch(),
                3000
            )
        }
        else if(value.length > 2){
            this.props.searchByRepoName(value, 1);
        } 
    }

    render(){
        const { q } = this.state;

        return (
            <div className='container'>
            <form onSubmit={this._onSubmit}>
                <input 
                    type='text' 
                    name='search' 
                    placeholder='  Search by repo name, type more than 2 char ..  '
                    value={q} 
                    onChange={this._onChange} 
                />
            </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ searchByRepoName, resetSearch }, dispatch);
};
  
export default connect(null, mapDispatchToProps)(SearchForm);
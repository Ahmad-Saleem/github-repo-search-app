import React, { Component } from 'react';

export default class SearchForm extends Component {

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
        })
    }

    render(){
        const { q } = this.state;

        return (
            <div className='container'>
                <input 
                    type='text' 
                    name='search' 
                    placeholder='  Search by repo name ...  '
                    value={q} 
                    onChange={this._onChange} 
                />
            </div>
        )
    }
}
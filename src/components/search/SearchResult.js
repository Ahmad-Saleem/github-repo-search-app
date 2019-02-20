import React, { Component } from 'react';
import { RepoCard } from '../card';

export default class SearchResult extends Component {
    render(){
        return (
            <div className='container'> 
                <div className='list'>
                    <div className='list-item'>
                        <RepoCard data={null} />
                    </div>
                </div>
            </div>
        )
    }
}
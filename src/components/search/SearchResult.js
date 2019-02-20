import React, { Component } from 'react';
import { connect } from "react-redux";

import { RepoCard } from '../card';
import Loader from '../misc/Loader';

class SearchResult extends Component {

    render(){
        const { results } = this.props;
        const validate = results.data && results.data.items && results.status === 'success' && results.query != '';
        return (
            <div className='container'> 
                {
                    results.status && results.status === 'pendding' &&
                    <Loader />
                }
                {
                    validate && 
                    <div className="results-count">
                        {results.data.total_count} results
                    </div>
                }
                <div className='list'>

                        { 
                            validate && 
                            results.data.items.map(item => 
                                <div className='list-item' key={item.id}>
                                    <RepoCard data={item} />
                                </div>
                            )
                        }
                    
                </div>

            </div>
        )
    }
}


const mapStateToProps = ({ search }) => {
    return {results: search.results };
};

export default connect(mapStateToProps)(SearchResult);
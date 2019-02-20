import React, { Component } from 'react';
import { Layout } from '../components/layout';
import { SearchForm, SearchResult } from '../components/search';

export default class Home extends Component{
    render(){
        return (
            <Layout>
                <SearchForm />
                <SearchResult />
            </Layout>
        );
    }
}
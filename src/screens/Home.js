import React, { Component, Suspense } from 'react';
import { Layout } from '../components/layout';
import Loader from '../components/misc/Loader';
import ErrorBoundary from '../components/misc/ErrorBoundary';

const SearchForm = React.lazy(() => import('../components/search/SearchForm'));
const SearchResult = React.lazy(() => import('../components/search/SearchResult'));

export default class Home extends Component{
    render(){
        return (
            <Layout>
                <ErrorBoundary>
                    <Suspense fallback={<Loader />}>
                        <SearchForm />
                        <SearchResult />
                    </Suspense>  
                </ErrorBoundary>
            </Layout>
        );
    }
}
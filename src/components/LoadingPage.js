import React from 'react';
import PropTypes from 'prop-types';

const LoadingPage = (props) => (

    <div className="loader">
        <img className="loader__image" src="/images/loader.gif" alt=""/>
    </div>
);

LoadingPage.propTypes = {};
LoadingPage.defaultProps = {};

export default LoadingPage;

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error){
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log("ErrorInfo", errorInfo);

    }

    render() {
        return (
            this.state.hasError ?
                <h1>Error</h1> : this.props.children
        )
    }
}

export default ErrorBoundary;

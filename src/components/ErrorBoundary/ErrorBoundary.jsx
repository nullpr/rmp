import React from 'react';

import './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
  state = { error: null, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { errorInfo, error } = this.state;
    if (errorInfo) {
      return (
        <div className="error-boundary">
          <h2 className="error-boundary-title">
            Sorry. Something went wrong :(
          </h2>
          <div className="error-boundary-details">
            <p>
              {error && <strong>{error.toString()}</strong>}
              <br />
              {errorInfo.componentStack}
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export { ErrorBoundary };

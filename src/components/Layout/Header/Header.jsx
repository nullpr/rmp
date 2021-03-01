import React from 'react';

import './Header.scss';

const Header = () => (
    <header className="header">
        <span className="header-logo"><strong>netflix</strong>roulette</span>
        <div className="find-movie">
            <h2 className="find-movie-title">Find your movie</h2>
            <form className="find-movie-form">
                <input
                    type="search"
                    className="find-movie-form-input"
                    placeholder="What do you want to watch?"
                    required
                />
                <button type="submit" className="btn-primary btn" >Search</button>
            </form>
        </div>
    </header>
);

export {Header};

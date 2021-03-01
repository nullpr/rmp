import React from 'react';
import "./../styles/main.scss"
import {Layout} from "./Layout";
import {Movies} from "./Movies";

const App = () => {
    return (
        <Layout>
            <Movies/>
        </Layout>
    );
}

export default App;
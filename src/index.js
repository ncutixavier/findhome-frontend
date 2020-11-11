import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header__title">find-home-app</div>
                <div class="loading">
                    <div class="loader"></div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

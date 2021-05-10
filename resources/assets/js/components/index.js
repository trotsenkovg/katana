import React from "react";
import ReactDOM, {render} from "react-dom";

const App = () => {
    return (
            <div className="App">
                <h1 align="center">Katana React</h1>
            </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

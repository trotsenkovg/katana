import React from "react";
import ReactDOM, {render} from "react-dom";

const App = () => {
    return (
        <div className="p-6 max-w-sm mx-auto my-40 bg-white rounded-xl shadow-md flex items-center space-x-4 bg-rinnegan bg-center select-none">
            <div className="text-center">
                <div className="text-xl font-medium text-white">Katana</div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

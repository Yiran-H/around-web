import React, { useState } from "react";
import '../styles/App.css';

import { TOKEN_KEY } from "../constants";

import TopBar from "./TopBar";
import Main from "./Main";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem(TOKEN_KEY) ? true : false
    );
    const logout = () => {
        console.log("log out");
        localStorage.removeItem(TOKEN_KEY);
        setIsLoggedIn(false);
    };
    const loggedIn = (token) => {
        if (token) {
            localStorage.setItem(TOKEN_KEY, token);//persistent login
            setIsLoggedIn(true);//display logout button
        }
    };
    return (
        <div className="App">
            <TopBar isLoggedIn={isLoggedIn} handleLogout={logout} />
            <Main isLoggedIn={isLoggedIn} handleLoggedIn={loggedIn} />
        </div>
    );
}

export default App;


import React from 'react';
import Logout from '../Logout';

const Header = ({setIsAdding, setIsAuthenticated}) => {
    return(
        <header>
            <h1>Employees' Data Management Software</h1>
            <div style={{ marginTop: "30px", marginBottom: "20px"}}>
                <button onClick={() => setIsAdding(true)}>Add Employee</button>
                <Logout setIsAuthenticated={setIsAuthenticated} />
            </div>
        </header>
    );
};

export default Header;
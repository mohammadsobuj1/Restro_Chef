import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "  text-gray-300 border-b-2 border-gray-300 font-extrabold " : ""}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;
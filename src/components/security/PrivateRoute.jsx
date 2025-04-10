// src/components/PrivateRoute.jsx
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const PrivateRoute = ({ children }) => {
    const [user, setUser] = useState(undefined); // undefined = carregando

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    if (user === undefined) return null; // ou um loader

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

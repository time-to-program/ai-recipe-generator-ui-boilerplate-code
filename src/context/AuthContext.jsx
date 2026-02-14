import { createContext, useContext, useState, useEffect } from 'react';
import { dummyUser } from '../data/dummyData';

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Auto-login with dummy user for boilerplate
        setUser(dummyUser);
    }, []);

    const login = async (email, password) => {
        // UI-only login (no API call)
        setUser(dummyUser);
        return { success: true };
    };

    const register = async (name, email, password) => {
        // UI-only register (no API call)
        setUser({ ...dummyUser, name });
        return { success: true };
    };

    const logout = () => {
        // Just clear user (no API call)
        setUser(null);
    };

    const value = {
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

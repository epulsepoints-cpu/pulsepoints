import { useContext, createContext, useState, useEffect, createElement } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth';
const AuthContext = createContext(undefined);
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [auth]);
    const signIn = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        }
        catch (error) {
            console.error('Error signing in:', error);
            throw error;
        }
    };
    const signUp = async (email, password) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            return result.user;
        }
        catch (error) {
            console.error('Error signing up:', error);
            throw error;
        }
    };
    const signOut = async () => {
        try {
            await firebaseSignOut(auth);
        }
        catch (error) {
            console.error('Error signing out:', error);
            throw error;
        }
    };
    const value = {
        user,
        loading,
        signIn,
        signUp,
        signOut
    };
    // Use createElement instead of JSX
    return createElement(AuthContext.Provider, { value }, children);
}
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
// Helper function to check if user is authenticated
export function useIsAuthenticated() {
    const { user, loading } = useAuth();
    return { isAuthenticated: !!user, loading, user };
}

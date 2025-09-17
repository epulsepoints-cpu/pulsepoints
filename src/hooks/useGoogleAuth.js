import { useState, useEffect } from 'react';
import { auth, isMobileApp } from '../services/firebase';
import { signInWithGoogle, getGoogleRedirectResult, signOut } from '../services/googleAuth';
export const useGoogleAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // Check for redirect result on component mount (web only)
    useEffect(() => {
        if (!isMobileApp) {
            const checkRedirect = async () => {
                try {
                    setLoading(true);
                    const { user, error } = await getGoogleRedirectResult();
                    if (error) {
                        setError(error);
                    }
                    else if (user) {
                        setUser(user);
                    }
                }
                catch (err) {
                    setError(err);
                }
                finally {
                    setLoading(false);
                }
            };
            checkRedirect();
        }
    }, []);
    // Listen for auth state changes
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            setUser(authUser);
            setLoading(false);
        }, (err) => {
            setError(err);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);
    const login = async () => {
        try {
            setLoading(true);
            setError(null);
            const { user: authUser, error: authError } = await signInWithGoogle();
            if (authError) {
                setError(authError);
            }
            // For mobile, we'll get the user directly
            if (isMobileApp && authUser) {
                setUser(authUser);
            }
            return { user: authUser, error: authError };
        }
        catch (err) {
            setError(err);
            return { user: null, error: err };
        }
        finally {
            // Only set loading to false on mobile since redirect will navigate away on web
            if (isMobileApp) {
                setLoading(false);
            }
        }
    };
    const logout = async () => {
        try {
            setLoading(true);
            await signOut();
            setUser(null);
        }
        catch (err) {
            setError(err);
        }
        finally {
            setLoading(false);
        }
    };
    return {
        user,
        loading,
        error,
        login,
        logout
    };
};
export default useGoogleAuth;

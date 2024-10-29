import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

const googleProvider = new GoogleAuthProvider();

/**
 * Signs in the user with Google using a popup.
 * @returns {Promise<Object|null>} The user object if successful, or null if failed.
 */
export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log("Successfully signed in with Google:", result.user);
        return result.user; // Return the user object
    } catch (error) {
        console.error("Error signing in with Google:", error);
        return null; // Return null in case of error
    }
};

/**
 * Signs out the current user.
 * @returns {Promise<void>}
 */
export const logout = async () => {
    try {
        await signOut(auth);
        console.log("Successfully signed out");
    } catch (error) {
        console.error("Error signing out:", error);
    }
};
import { db } from "./firebaseConfig";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const productsCollection = collection(db, "products");

// Get all products
export const getProducts = async () => {
    try {
        const querySnapshot = await getDocs(productsCollection);
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // Include the document ID
    } catch (error) {
        console.error("Error getting products: ", error);
        throw error; // Rethrow the error for further handling if necessary
    }
}

// Add a new product
export const addProduct = async (product) => {
    try {
        const docRef = await addDoc(productsCollection, product);
        return docRef.id; // Return the ID of the added document
    } catch (error) {
        console.error("Error adding product: ", error);
        throw error; // Rethrow the error for further handling if necessary
    }
}

// You can also implement update and delete functions similarly
export const updateProduct = async (id, updatedProduct) => {
    try {
        const productDoc = doc(db, "products", id);
        await updateDoc(productDoc, updatedProduct);
    } catch (error) {
        console.error("Error updating product: ", error);
        throw error;
    }
}

export const deleteProduct = async (id) => {
    try {
        const productDoc = doc(db, "products", id);
        await deleteDoc(productDoc);
    } catch (error) {
        console.error("Error deleting product: ", error);
        throw error;
    }
}
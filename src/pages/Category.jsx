import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemListContainerComponent from "../components/ItemListContainer/ItemListContainerComponent";

// Import firebase products collection reference
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const Category = () => {

  const [categoryProducts, setCategoryProducts] = useState([]);  
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    
    // Get reference to products collection
    const productsRef = collection(db, "products");

   // Create query
   const q = query(productsRef, where("category", "==", categoryId));

   // Execute query
   getDocs(q).then(snapshot => {
     setCategoryProducts(snapshot.docs.map(doc => doc.data()));
   });

 }, [categoryId]);

  return (
    <div>
      {categoryProducts.length > 0 ? (
        <ItemListContainerComponent productsData={categoryProducts} />
      ) : (
        <p>No products in this category.</p>
      )}
    </div>
  );
};

export default Category;


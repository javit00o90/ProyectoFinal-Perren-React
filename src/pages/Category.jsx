import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemListContainerComponent from "../components/ItemListContainer/ItemListContainerComponent";

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const Category = () => {

  const [categoryProducts, setCategoryProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const productsRef = collection(db, "products");

    const q = query(productsRef, where("category", "==", categoryId));

    getDocs(q).then(snapshot => {
      setCategoryProducts(snapshot.docs.map(doc => doc.data()));
    });

  }, [categoryId]);

  return (
    <div>
      {categoryProducts.length > 0 ? (
        <ItemListContainerComponent productsData={categoryProducts} />
      ) : (
        <p>No hay productos en esta categoría.</p>
      )}
    </div>
  );
};

export default Category;


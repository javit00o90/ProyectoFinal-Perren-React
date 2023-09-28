import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemListContainerComponent from "../components/ItemListContainer/ItemListContainerComponent";
import MyLoader from "../components/LoaderComponent/loaderComponent";

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const Category = () => {

  const [categoryProducts, setCategoryProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const productsRef = collection(db, "products");

    const q = query(productsRef, where("category", "==", categoryId));

    getDocs(q)
      .then((snapshot) => {
        const productsWithIds = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategoryProducts(productsWithIds);
      })
      .catch((error) => {
        console.error("Error obteniendo productos:", error);
      });
  }, [categoryId]);

  return (
    <div>
      {categoryProducts.length > 0 ? (
        <ItemListContainerComponent productsData={categoryProducts} />
      ) : (
        <MyLoader />
      )}
    </div>
  );
};

export default Category;


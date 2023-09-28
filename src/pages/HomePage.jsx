import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemListContainerComponent from "../components/ItemListContainer/ItemListContainerComponent";
import MyLoader from "../components/LoaderComponent/loaderComponent"

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const productsCollection = collection(db, "products");

    getDocs(productsCollection)
      .then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <MyLoader />
      ) : (
        <ItemListContainerComponent productsData={products} />
      )}
    </div>
  );
};

export default HomePage;

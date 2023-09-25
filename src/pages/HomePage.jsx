// import { useEffect, useState } from "react";
// import { collection, getDocs, getFirestore } from "firebase/firestore";
// import ItemListContainerComponent from "../components/ItemListContainer/ItemListContainerComponent";


// const HomePage = () => {
//   //  const {products, loading} = useProducts();

//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     //Inicializar la base de datos
//     const db = getFirestore();

//     //Inicializamos la coleccion
//     const productsCollection = collection(db, "products");

//     //Obtener los datos de la coleccion
//     getDocs(productsCollection).then((snapshot) => {
//       setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//     });
//   }, []);

//   return <ItemListContainerComponent productsData={products} />;
// };

// export default HomePage;

import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemListContainerComponent from "../components/ItemListContainer/ItemListContainerComponent";
import MyLoader from "../components/LoaderComponent/loaderComponent";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    //Inicializar la base de datos
    const db = getFirestore();

    //Inicializamos la coleccion
    const productsCollection = collection(db, "products");

    //Obtener los datos de la coleccion
    getDocs(productsCollection)
      .then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false on error as well
      });
  }, []);

  return (
    <div>
      {loading ? (
        // Display loader component while loading
        <MyLoader />
      ) : (
        // Display the ItemListContainerComponent once data is loaded
        <ItemListContainerComponent productsData={products} />
      )}
    </div>
  );
};

export default HomePage;

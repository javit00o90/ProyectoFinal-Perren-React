import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainerComponent";
import { useParams } from "react-router-dom";


const ItemDetails = () => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productItem = doc(db, "products", itemId);
    getDoc(productItem).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
    });
  }, [itemId]);

  return <ItemDetailContainer productData={product} />;
};

export default ItemDetails;
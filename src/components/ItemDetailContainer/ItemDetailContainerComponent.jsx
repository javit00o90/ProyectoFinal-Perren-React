/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import styles from "./ItemDetailContainerComponent.module.css";

const ItemDetailContainerComponent = ({productData}) => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={productData.img} />
      <Card.ImgOverlay>
        <div className={styles.cardTxtBox}>
        <Card.Title className={styles.cardTxtTitle}>{productData.name}</Card.Title>
        <Card.Text className={styles.cardTxt}>
        {productData.description}
        </Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ItemDetailContainerComponent;
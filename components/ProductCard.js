import styles from '../styles/Home.module.css'

const ProductCard = ({ cardDetails }) => {
    return (
        <div className={styles.card}>
            <h1>{cardDetails.club}</h1>
            <img src={cardDetails.imageSrc} height={150} />
            <h2 className={styles.productName}>{cardDetails.productName}</h2>
            <p class="price">${cardDetails.productPrice}</p>
            <p><button>Add to Cart</button></p>
        </div>
    );
}

export default ProductCard;
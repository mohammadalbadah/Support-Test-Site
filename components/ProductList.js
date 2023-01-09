import ProductCard from "./ProductCard";
import styles from '../styles/Home.module.css'


const realProducts = [{
    club: 'Real Madrid',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0448/3609/4115/products/HF0292-RMCFMZ0075-02_500x480.jpg?v=1655974535',
    productName: "Mens Home Authentic Shirt 22/23",
    productPrice: '140.00'
},
{
    club: 'Real Madrid',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0448/3609/4115/products/RMCFMS0173-01_500x480.jpg?v=1671195336',
    productName: 'Tracksuit Jacket adidas Men Training',
    productPrice: '85.00'
}, {
    club: 'Real Madrid',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0448/3609/4115/products/RMCFMP0128-01_500x480.jpg?v=1671195262',
    productName: "Bottoms Technical PRO adidas Men's Training Purple",
    productPrice: '85.00'
}, {
    club: 'Real Madrid',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0448/3609/4115/products/RMCFMS0171-01_500x480.jpg?v=1671458610',
    productName: 'Warm-up sweatshirt adidas Man',
    productPrice: '110.00'
}]

const ProductList = ({ }) => {
    return (
        <>
            <div className={styles.grid}>
                {
                    realProducts.map((product) => (
                        <ProductCard cardDetails={product} />
                    ))
                }
            </div>
        </>
    );
}

export default ProductList;
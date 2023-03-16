import ProductCard from "./ProductCard";
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';


const realProducts = [{
    id: 1,
    club: 'Real Madrid',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0448/3609/4115/products/HF0292-RMCFMZ0075-02_500x480.jpg?v=1655974535',
    productName: "Mens Home Authentic Shirt 22/23",
    productPrice: '140.00'
},
{
    id: 2,
    club: 'Real Madrid',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0448/3609/4115/products/RMCFMS0173-01_500x480.jpg?v=1671195336',
    productName: 'Tracksuit Jacket adidas Men Training',
    productPrice: '85.00'
}, {
    id: 3,
    club: 'Real Madrid',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0448/3609/4115/products/RMCFMP0128-01_500x480.jpg?v=1671195262',
    productName: "Bottoms Technical PRO adidas Men's Training Purple",
    productPrice: '85.00'
}, {
    id: 4,
    club: 'Real Madrid',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0448/3609/4115/products/RMCFMS0171-01_500x480.jpg?v=1671458610',
    productName: 'Warm-up sweatshirt adidas Man',
    productPrice: '110.00'
}]

const arsenalProducts = [{
    id: 1,
    club: 'Real Madrid',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0448/3609/4115/products/HF0292-RMCFMZ0075-02_500x480.jpg?v=1655974535',
    productName: "Mens Home Authentic Shirt 22/23",
    productPrice: '140.00'
}]

const barcelonaProducts = [{
    id: 3,
    club: 'Real Madrid',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0448/3609/4115/products/RMCFMP0128-01_500x480.jpg?v=1671195262',
    productName: "Bottoms Technical PRO adidas Men's Training Purple",
    productPrice: '85.00'
}, {
    id: 4,
    club: 'Real Madrid',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0448/3609/4115/products/RMCFMS0171-01_500x480.jpg?v=1671458610',
    productName: 'Warm-up sweatshirt adidas Man',
    productPrice: '110.00'
}]

const ProductList = ({ }) => {
    const router = useRouter();
    var query = router.asPath.split('?')[1];
    if (query == 'arsenal') {
        return (
            <>
                <div className={styles.grid}>
                    {
                        arsenalProducts.map((product) => (
                            <ProductCard key={product.id} cardDetails={product} />
                        ))
                    }
                </div>
            </>
        );
    }
    else if (query == 'barcelona') {
        return (
            <>
                <div className={styles.grid}>
                    {
                        barcelonaProducts.map((product) => (
                            <ProductCard key={product.id} cardDetails={product} />
                        ))
                    }
                </div>
            </>
        );
    } else if (query == 'realmadrid') {
        return (
            <>
                <div className={styles.grid}>
                    {
                        realProducts.map((product) => (
                            <ProductCard key={product.id} cardDetails={product} />
                        ))
                    }
                </div>
            </>
        );
    }
    else return;
}

export default ProductList;
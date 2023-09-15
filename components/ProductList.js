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
    club: 'Arsenal',
    imageSrc: 'https://i1.adis.ws/i/ArsenalDirect/mh35903_f5?$810x810$&.jpg',
    productName: "ARSENAL 22/23 HOME SHIRT",
    productPrice: '130.00'
}, {
    id: 2,
    club: 'Arsenal',
    imageSrc: 'https://i1.adis.ws/i/ArsenalDirect/mht4451_f5?$810x810$&.jpg',
    productName: "ARSENAL 22/23 BLUE PRE-MATCH SHIRT",
    productPrice: '115.00'
}, {
    id: 3,
    club: 'Arsenal',
    imageSrc: 'https://i1.adis.ws/i/ArsenalDirect/mhz9991_f?$810x810$&.jpg',
    productName: "ARSENAL FRANCE PACK TRACK PANTS",
    productPrice: '140.00'
}, {
    id: 4,
    club: 'Arsenal',
    imageSrc: 'https://i1.adis.ws/i/ArsenalDirect/mht4456_f?$810x810$&.jpg',
    productName: "ARSENAL CALLIGRAPHY PADDED JACKET",
    productPrice: '180.00'
}]

const barcelonaProducts = [{
    id: 1,
    club: 'Barcelona',
    imageSrc: 'https://store.fcbarcelona.com/medias/700x1060-23200M-GAVI-1.jpg?context=bWFzdGVyfGltYWdlc3wyODIzNTN8aW1hZ2UvanBlZ3xoYWEvaDdkLzg5NTUzODcwMTkyOTQvNzAweDEwNjAvMjMyMDBNX0dBVklfMS5qcGd8YTY1ODI4OWU1ZGViMjNmMGMyODYxNmM0MWYxZWYxYzFlZTU5MWRlNDBkNDM1ZmRlYzVjMDQ1YWE2NTMyZjg1NQ',
    productName: "FC Barcelona away shirt 22/23",
    productPrice: '165.00'
}, {
    id: 2,
    club: 'Barcelona',
    imageSrc: 'https://store.fcbarcelona.com/medias/700x1060-DJ8616-451-3.jpg?context=bWFzdGVyfGltYWdlc3wzNDc0NTZ8aW1hZ2UvanBlZ3xoNDEvaDdiLzg5MzYwMDMyNzI3MzQvNzAweDEwNjAvREo4NjE2LTQ1MV8zLmpwZ3wyZGE2YzA3MzA1MWNmZjQ2M2ZjN2FlYzEzNjdjNzM2NjdhNGMyYWVkMTJhNDBjZGFiZWUwY2FiMzAzYzQ0NzYx',
    productName: "FC Barcelona Tracksuit 22/23 – Women",
    productPrice: '130.00'
}, {
    id: 3,
    club: 'Barcelona',
    imageSrc: 'https://store.fcbarcelona.com/medias/700x1060-DV1878-399-1.jpg?context=bWFzdGVyfGltYWdlc3wyNDc4MzF8aW1hZ2UvanBlZ3xoZDMvaGYzLzg5NTc5Nzg3MDU5NTAvNzAweDEwNjAvRFYxODc4LTM5OV8xLmpwZ3w4ZGQwOWFiMzYyZWIyZDQ4MzNhYWQ4YzIzOTdiODJlYTQ3NDkxMTk1N2UxMjUxNzhkYjdhMGNmYmFkZWNlNTMy',
    productName: "FC Barcelona Goalkeeper Shirt 22/23",
    productPrice: '100.00'
}, {
    id: 4,
    club: 'Barcelona',
    imageSrc: 'https://store.fcbarcelona.com/medias/700x1060-DX4752-277-1.jpg?context=bWFzdGVyfGltYWdlc3wyMzM3MTh8aW1hZ2UvanBlZ3xoN2IvaDljLzg5Njk5MTc0MzE4MzgvNzAweDEwNjAvRFg0NzUyLTI3N18xLmpwZ3w5MTdlMjhjYmEyZGE1YmVhNzg5NmI0MjdkMDM4NTFhZjE0OWQxM2NiYTE3NWE4YWNiYWE3YjlkY2QzYTgzY2Uw',
    productName: "Beige Barça Nike Jacket",
    productPrice: '120.00'
}]

const ProductList = () => {
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
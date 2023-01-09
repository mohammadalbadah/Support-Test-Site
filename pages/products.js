import styles from '../styles/Home.module.css'
import ProductList from '../components/ProductList'

const Products = () => {
    var page = window.location.search
    return (
        <>
            <ProductList prodcut_data={page} />
        </>
    )
}

export default Products;
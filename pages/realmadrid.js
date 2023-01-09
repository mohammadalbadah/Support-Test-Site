import styles from '../styles/Home.module.css'

const RealMadrid = () => {
    return (
        <>
            <div >
                <h1 className={styles.title}>Real Madrid shop</h1>
                <li className={styles.grid}>
                    <div className={styles.card}>
                        <img src={'https://sfycdn.speedsize.com/0da1b4be-72cc-4e2b-a773-a86265ac3de7/https://cdn.shopify.com/s/files/1/0610/7620/9894/products/ADHA2660-001_700x.jpg?v=1663479190'} height={150} />
                        <h2>test</h2>
                        <p class="price">$19.99</p>
                        <p>test</p>
                        <p><button>Add to Cart</button></p>
                    </div>
                    <div className={styles.card}>
                        <img src={'https://sfycdn.speedsize.com/0da1b4be-72cc-4e2b-a773-a86265ac3de7/https://cdn.shopify.com/s/files/1/0610/7620/9894/products/ADHA2660-001_700x.jpg?v=1663479190'} height={150} />
                        <h2>test</h2>
                        <p class="price">$19.99</p>
                        <p>test</p>
                        <p><button>Add to Cart</button></p>
                    </div>
                    <div className={styles.card}>
                        <img src={'https://sfycdn.speedsize.com/0da1b4be-72cc-4e2b-a773-a86265ac3de7/https://cdn.shopify.com/s/files/1/0610/7620/9894/products/ADHA2660-001_700x.jpg?v=1663479190'} height={150} />
                        <h2>test</h2>
                        <p class="price">$19.99</p>
                        <p>test</p>
                        <p><button>Add to Cart</button></p>
                    </div>
                    <div className={styles.card}>
                        <img src={'https://sfycdn.speedsize.com/0da1b4be-72cc-4e2b-a773-a86265ac3de7/https://cdn.shopify.com/s/files/1/0610/7620/9894/products/ADHA2660-001_700x.jpg?v=1663479190'} height={150} />
                        <h2>test</h2>
                        <p class="price">$19.99</p>
                        <p>test</p>
                        <p><button>Add to Cart</button></p>
                    </div>
                </li>
            </div>
        </>
    );
}

export default RealMadrid;
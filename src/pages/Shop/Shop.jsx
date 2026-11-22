import styles from "./Shop.module.css"
import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

function Shop() {


    return (
        <div className={styles.shop}>
            <h1>Test Shop</h1>

            <div className={styles.productSection}>
                {products.map((product) => (
                    <ProductCard
                    key={product.id}
                    product={product}
                    />
                ))}
            </div>
        </div>
    )
}

export default Shop;
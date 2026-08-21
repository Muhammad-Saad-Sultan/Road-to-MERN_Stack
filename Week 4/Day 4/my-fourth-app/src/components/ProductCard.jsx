const ProductCard = ({product}) => {
    return (
        <div className="product-card">
            <p>{product.name}</p>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <p>Available: {product.inStock ? (
                <span>Yes</span>
            ) : (
                <span className="not-available">No</span>
            )}</p>
        </div>
    )
}

export default ProductCard;

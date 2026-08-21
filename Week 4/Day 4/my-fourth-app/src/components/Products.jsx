import ProductCard from "./ProductCard";

const Products = ({products, filter, sort}) => {
    const filteredProducts = filter === '' ? products : products.filter((product) => product.category === filter);
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if(sort === 'ascending') {
        return a.price - b.price;
        } else if(sort === 'descending') {
        return b.price - a.price;
        } else {
        return 0;
        }
    });
    return (
        <div className="products-container">
            {sortedProducts.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    )
}

export default Products

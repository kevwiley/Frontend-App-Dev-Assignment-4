import "./ProductCard.css"

//product card has image on top, the name, description and price under it.
function ProductCard({ product, onAddToCart }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image"/>
            <div className="product-info">
                <h2>{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>

                <button onClick={() => onAddToCart(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
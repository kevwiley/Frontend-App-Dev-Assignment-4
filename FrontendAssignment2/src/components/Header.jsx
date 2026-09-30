import "./Header.css";

//header will have a home, products, about, and contacts section may be made buttons in the future
function Header({storeName, cartCount}) {
    return (
        <header className="header">
            <h1>{storeName}</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
            <div className="cart-container">
                <span className="cart-icon">🛒</span>
                <span className="cart-count">{cartCount}</span>
            </div>



        </header>
    );
}

export default Header;
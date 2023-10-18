import "./ProductCardForm.css";

const ProductCardForm = () => {
  return (
    <div className="product1">
      <img className="product-child" alt="" src="/rectangle-30.svg" />
      <div className="product-sell">Product Sell</div>
      <div className="in-stock-parent">
        <div className="in-stock">32 in stock</div>
        <div className="div">$ 45.99</div>
        <div className="div1">20</div>
        <div className="abstract-3d-parent">
          <div className="abstract-3d">Abstract 3D</div>
          <div className="lorem-ipsum-dolor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <img
            className="unsplashwh2fhl0v-eo-icon"
            alt=""
            src="/unsplashwh2fhl0v-eo@2x.png"
          />
        </div>
      </div>
      <div className="sarphens-illustration-parent">
        <div className="sarphens-illustration">Sarphens Illustration</div>
        <div className="in-stock1">32 in stock</div>
        <div className="div2">$ 45.99</div>
        <div className="div3">20</div>
        <div className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <img
          className="unsplashwh2fhl0v-eo-icon"
          alt=""
          src="/unsplasha2j-namzag@2x.png"
        />
      </div>
      <div className="landing-page-3d-max-parent">
        <div className="sarphens-illustration">Landing Page 3D max</div>
        <div className="in-stock1">32 in stock</div>
        <div className="div2">$ 45.99</div>
        <div className="div3">20</div>
        <div className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <img
          className="unsplashwh2fhl0v-eo-icon"
          alt=""
          src="/unsplashrazu-r66vuc@2x.png"
        />
      </div>
      <div className="collab-illustration-parent">
        <div className="sarphens-illustration">Collab Illustration</div>
        <div className="in-stock1">32 in stock</div>
        <div className="div2">$ 45.99</div>
        <div className="div3">20</div>
        <div className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <img
          className="unsplashwh2fhl0v-eo-icon"
          alt=""
          src="/unsplashcpccybprfa@2x.png"
        />
      </div>
      <div className="group-parent">
        <div className="product-name-parent">
          <div className="product-name">Product Name</div>
          <div className="stock">Stock</div>
          <div className="price">Price</div>
          <div className="total-sales">Total Sales</div>
        </div>
        <div className="group-child" />
      </div>
      <div className="rectangle-parent">
        <div className="group-item" />
        <input 
          type="text"
          className="search2"
          placeholder="Search"
        />
        <button type="submit" className="search-button">
          <img className="search-1-icon1" alt="" src="/search-1.svg" />
        </button>
      </div>
      <div className="rectangle-group">
        <div className="group-inner" />
        <img className="chevron-down-1-icon" alt="" src="/chevrondown-1.svg" />
        <div className="last-30-days">Last 30 days</div>
      </div>
    </div>
  );
};

export default ProductCardForm;

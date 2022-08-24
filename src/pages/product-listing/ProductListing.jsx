import "./productListing.css";
import {
    useReducer
} from "react";
import {
    products
} from "../../data/productData";
import {
    Navbar,
    ProductCard,
    Filter
} from "../../components";
import {
    sortProducts,
    filterProducts
} from "../../utils/filterMethods";
import {
    filterReducer
} from "../../reducers/filterReducer";

const ProductListing = () => {
    const [filteredProductsState, filterDispatch] = useReducer(filterReducer, {
        products,
        sortBy: "",
        sizes: [],
        categories: [],
        idealFor: [],
      });
    
      const sortedProducts = sortProducts(filteredProductsState.sortBy, filteredProductsState.products);
      const filteredProductsList = filterProducts(filteredProductsState, sortedProducts);
    
      return (
        <div className="product-listing-layout">
          <Navbar />
          <Filter filterDispatch={filterDispatch} filteredProductsState={filteredProductsState} />
    
          <div className="main-products py-2">
            {filteredProductsList.length === 0 && (
              <h1 className="text-2xl text-center">No Products Found</h1>
            )}
            {filteredProductsList.map(product => (
              <ProductCard key={product.objId} product={product} />
            ))}
          </div>
        </div>
      );
}

export {ProductListing};
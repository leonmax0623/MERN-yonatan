import Link from "next/link";
import { Fragment, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import {
  getDiscountPrice, getIndividualCategories,
  getIndividualColors,
  getIndividualTags, getProducts, setActiveSort
} from "../../lib/product";
import { ProductRating } from "../Product";
import API from '../../api';

const ShopSidebar = ({ categories, colors, popularProducts, searchProducts, getSortParams }) => {
  // const categories = getIndividualCategories(products);
  // const colors = getIndividualColors(products);
  // const tags = getIndividualTags(products);
  // const popularProducts = getProducts(products, "Bracelets", "popular", 3);
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    
    searchProducts(search);
  }

  return (
    <div className="shop-sidebar">
      <div className="single-sidebar-widget space-mb--40">
        {/* search widget */}
        <div className="search-widget">
          <form onSubmit={handleSearch}>
            <input type="search" placeholder="Search products ..." value={search} onChange={e => setSearch(e.target.value)} />
            <button type="submit">
              <IoIosSearch />
            </button>
          </form>
        </div>
      </div>

      {/* category list */}
      <div className="single-sidebar-widget space-mb--40">
        <h2 className="single-sidebar-widget__title space-mb--30">
          Categories
        </h2>
        {categories.length > 0 ? (
          <ul className="single-sidebar-widget__list single-sidebar-widget__list--category">
            <li>
              <button
                onClick={(e) => {
                  getSortParams("category", "");
                  setActiveSort(e);
                }}
                className="active"
              >
                All categories
              </button>
            </li>
            {categories.map((category, i) => {
              return (
                <li key={i}>
                  <button
                    onClick={(e) => {
                      getSortParams("category", category);
                      setActiveSort(e);
                    }}
                  >
                    {category}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          "No categories found"
        )}
      </div>

      {/* color list */}
      <div className="single-sidebar-widget space-mb--40">
        <h2 className="single-sidebar-widget__title space-mb--30">Colors</h2>
        {colors.length > 0 ? (
          <ul className="single-sidebar-widget__list single-sidebar-widget__list--color">
            {colors.map((color, i) => {
              return (
                <li key={i}>
                  <button
                    onClick={(e) => {
                      getSortParams("color", color.colorName);
                      setActiveSort(e);
                    }}
                    style={{ backgroundColor: color.colorCode }}
                  ></button>
                </li>
              );
            })}
            <li>
              <button
                onClick={(e) => {
                  getSortParams("color", "");
                  setActiveSort(e);
                }}
              >
                x
              </button>
            </li>
          </ul>
        ) : (
          "No colors found"
        )}
      </div>

      {/* popular products */}
      <div className="single-sidebar-widget space-mb--40">
        <h2 className="single-sidebar-widget__title space-mb--30">
          Popular products
        </h2>
        {popularProducts.length > 0 ? (
          <div className="widget-product-wrapper">
            {popularProducts.map((product, i) => {
              const discountedPrice = getDiscountPrice(
                product.price,
                product.discount
              ).toFixed(2);
              const productPrice = product.price.toFixed(2);
              return (
                <div className="single-widget-product-wrapper" key={i}>
                  <div className="single-widget-product">
                    <div className="single-widget-product__image">
                      <Link
                        href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                        as={
                          process.env.PUBLIC_URL +
                          "/shop/product-basic/" +
                          product.slug
                        }
                      >
                        <a className="image-wrap">
                          <img
                            src={process.env.PUBLIC_URL + product.thumbImage[0]}
                            className="img-fluid"
                            alt={product.name}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="single-widget-product__content">
                      <div className="single-widget-product__content__top">
                        <h3 className="product-title space-mb--10">
                          <Link
                            href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                            as={
                              process.env.PUBLIC_URL +
                              "/shop/product-basic/" +
                              product.slug
                            }
                          >
                            <a>{product.name}</a>
                          </Link>
                        </h3>
                        <div className="price space-mb--10">
                          {product.discount > 0 ? (
                            <Fragment>
                              <span className="main-price discounted">
                                ${productPrice}
                              </span>
                              <span className="discounted-price">
                                ${discountedPrice}
                              </span>
                            </Fragment>
                          ) : (
                            <span className="main-price">${productPrice}</span>
                          )}
                        </div>
                        <div className="rating">
                          <ProductRating ratingValue={product.rating} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          "No products found"
        )}
      </div>
    </div>
  );
};

export default ShopSidebar;

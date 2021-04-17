import React from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements';

/** Here i recieve props assigned to products component, and those are headings
 * and data, which than i plug in in their due places.
 * 
 * All that information, which is refered to here:
 * 
 * <ProductCard key={index}>
      <ProductImg src={product.img} alt={product.alt} />
      <ProductInfo>
      <ProductTitle>{product.name}</ProductTitle>
      <ProductDesc>{product.desc}</ProductDesc>
      <ProductPrice>{product.price}</ProductPrice>
      <ProductButton>{product.button}</ProductButton>
 * 
 * all this is given in data.js is such a manner:
 * {
    img: product1,
    alt: 'Pizza',
    name: 'Supreme Pizza',
    desc:
      'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '$19.99',
    button: 'Add to Cart'
  }
 * 
 * So, when i say {product.name}, its the same as saying: "Supreme Puzza", in this particlar case.
 * 
 * The rest is discussed earlier files already, such as Hero/index.js
 * 
 */

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>

        {data.map((product, index) => {

          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );

        })}
      </ProductWrapper>
      
    </ProductsContainer>
  );
};

export default Products;

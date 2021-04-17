import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

/**
 * This is what i have inside global style:
 * 
 * I do need to use a tool called createGlobalStyle to, well, create a global style. 
 * This is a part of styled-components, which i need to have installed beforehand, naturally, 
 * and only then i can use it.
 * 
 * import { createGlobalStyle } from 'styled-components';
 * 
 * Then, i create general styles using it as shown bellow: 
 *
 *  export const GlobalStyle = createGlobalStyle`
 *    {
 *      box-sizing: border-box;
 *      margin:0;
 *      padding: 0;
 *      font-family: 'Kanit', sans-serif;
 *       
 *    }
`;
 * This general styles are applied here, and it makes sence, since this is a file
 * which hold everything generally. General things go in General Files, so to speak.
 *
 * 
 * Router
 * a piece of electronic equipment that connects computer networks to each other, and sends information between networks
 * 
 * By this definition, i can deduce that router connects all the different parts of my react application.
 * 
 * That is the very thing i import up there like this:
 * 
 *        import { BrowserRouter as Router } from 'react-router-dom';
 *
 * 
 * About <Hero />
 * Once i export an element from a file, i can use it in others file, such as App.js.
 * Here i use everything i have coded for Hero, since i gather them, meaning Navbar
 * and Sidebar, together there, in Hero component.
 * 
 */

/**
 * I do have two different objects inside data.js, and they have different names.
 * thats is the difference i see in data attribute for Products component.
 * 
 * How do i get access do productData and productDataTwo? I have imported a file
 * which has these object arrays inside, and since i have written them with exports 
 * after const keyword (export const productData = [..., and 
 * export const productDataTwo = [), they automatically become available to be 
 * refered by names.
 * 
 * ----------------------------------------------------------------------------------
 * 
 * There is also a heading with heading text, and this is an example of hardCoding 
 * data to a component, which is passed to it same as data, and is used with the
 * same technique. 
 * 
 * No other component has a data passed inside in such a manner.
 */

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;

import React,{useState} from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Products from './components/Products/Products';
import data from './datafile.json';

function App() {
  const [products,setProducts]=useState(data);
  return (
    <div className="layout">

      <Header/>
      <main>
        <div className='wrapper'>

         <Products products={products}></Products>
          <div className='filterElm'>Filter</div>

        </div>
      </main>
      <Footer></Footer>
      
    </div>
  );
}

export default App;

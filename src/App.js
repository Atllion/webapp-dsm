import logo from './logo.svg';
import './App.css';
import Producto from './Products/Producto';
import { useState } from 'react';
import Header from './Componentes/UI/Header';
import Footer from './Componentes/UI/Footer'


function App() {
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

  const [productos, setProductos] = useState(
    [
      {
        id: 1,
        nombre: 'Ratón óptico',
        precio: 15.50,
        fecha: new Date(2023, 2, 2),
        urlImagen: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_92392060/fee_786_587_png'
      },
      {
        id: 2,
        nombre: 'Pantalla 4k',
        precio: 25.50,
        fecha: new Date(2023, 2, 2),
        urlImagen: 'https://www.profesionalreview.com/wp-content/uploads/2020/04/Qu%C3%A9-es-el-contraste-de-una-pantalla.jpg'
      },
      {
        id: 3,
        nombre: 'Teclado mecánico',
        precio: 9.50,
        fecha: new Date(2024, 2, 2),
        urlImagen: 'https://img.pccomponentes.com/articles/69/690205/1200-razer-huntsman-v2-teclado-gaming-purple-switch.jpg'
      },
      {
        id: 4,
        nombre: 'Alfombrilla',
        precio: 10.5,
        fecha: new Date(2024, 2, 5),
        urlImagen: 'https://img.ltwebstatic.com/images3_pi/2022/09/30/1664517209cbf124495a5e0ffae28fde08403d7cd0_thumbnail_600x.webp'
      }
    ]
  )

  return (
    <div>
        <div>
          <Header/>
         <Producto />
         <Footer/>
        </div>
    </div>
  );
}

export default App;

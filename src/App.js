import './App.css';
import Producto from './Products/Producto';
import { useState } from 'react';
import Header from './Componentes/UI/Header';
import Footer from './Componentes/UI/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Pedidos from './Pages/Pedidos';
import ErrorPage from './Pages/ErrorPage';
import Compra from './Pages/Compra';
import Formulario from './Pages/Formulario';
import NuevoPedido from './Pages/NuevoPedido';
import DetalleProducto from './Pages/DetalleProducto';

function App() {
  const [todosProductos, setTodosProductos] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadProducto, setCantidadProducto] = useState(0);
  const [products, setProducts] = useState([]);
  /*
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
  */

  const contenidoProductos= 
  <>
    <Producto total={total} setTotal={setTotal} cantidadProducto={cantidadProducto} setCantidadProducto={setCantidadProducto} todosProductos={todosProductos} setTodosProductos={setTodosProductos} products={products} setProducts={setProducts}/>
  </>

  const contenidoCompra=
 <>
 <Compra total={total} setTotal={setTotal} cantidadProducto={cantidadProducto} setCantidadProducto={setCantidadProducto} todosProductos={todosProductos} setTodosProductos={setTodosProductos} products={products} setProducts={setProducts}/>
</>

const contenidoFormulario=
<>
<Formulario total={total} setTotal={setTotal} cantidadProducto={cantidadProducto} setCantidadProducto={setCantidadProducto} todosProductos={todosProductos} setTodosProductos={setTodosProductos} products={products} setProducts={setProducts}/>
</>

const contenidoDetalleProducto=
<>
<DetalleProducto total={total} setTotal={setTotal} cantidadProducto={cantidadProducto} setCantidadProducto={setCantidadProducto} todosProductos={todosProductos} setTodosProductos={setTodosProductos} products={products} setProducts={setProducts}/>
</>
  return (
    <div>
      <Header total={total} setTotal={setTotal} cantidadProducto={cantidadProducto} setCantidadProducto={setCantidadProducto} todosProductos={todosProductos} setTodosProductos={setTodosProductos} products={products} setProducts={setProducts}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pedidos'element={<Pedidos/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/productos' element={contenidoProductos}/>
        <Route path='/productos/:id' element={contenidoDetalleProducto}/>
        <Route path='/compra' element={contenidoCompra}/>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/formulario' element={contenidoFormulario}/>
        <Route path='/nuevoPedido' element={<NuevoPedido/>}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;

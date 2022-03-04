import { BrowserRouter, Route, Routes} from 'react-router-dom';
/* import ListProducts from './components/listProducts'; */
import Search from './components/search';
import Products from './views/products'
import DescriptionProduct from './views/descriptionProduct'

function App() {
  return (
    <BrowserRouter>
      <Search/>
      <Routes>
        <Route path='/items' element={<Products/>}/>
        <Route path='/items/:id' element={<DescriptionProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

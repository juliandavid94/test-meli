import { Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ListProducts from '../components/listProducts';
import Breadcrumbs from '../components/breadcrumbs';
import Error from './error';

const Products = () => {
    let { search } = useLocation();
    const query = new URLSearchParams(search).get('search');
    const [dataProducts, setDataProducts] = useState();
    const [loader, setLoader] = useState(false);
    localStorage.removeItem('breadcrumbs')

    useEffect(() => {
        searchProducts();
    }, [query]);

    const searchProducts = async () => {
        await fetch(`http://localhost:3000/api/items/?q=${query}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (!data.status) {
                setDataProducts(data)
                setLoader(true);
            }
        })
        .catch((error) => console.log('aqui hay un error'));
        
    }
    
    console.log(dataProducts);
    return(loader && dataProducts.categories !== undefined &&
        <>
            <Breadcrumbs data = {dataProducts.categories}/>
            <div style={{margin: '0 15%'}}>
            {typeof dataProducts !== 'undefined' ?
            dataProducts.items.map((item, i) => {
                return (
                    <ListProducts key={i}
                    id = {item.id}
                    image = {item.picture}
                    price = {item.price.amount}
                    tittle = {item.title}
                    address = {item.address.state_name}
                    tags = {item.tags}
                    />
                )
            }) 
            : <Error/>}
            </div>
        </>
    )
    /* } */
}

export default Products
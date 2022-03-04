import { Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ListProducts from '../components/ListProducts';
import Breadcrumbs from '../components/Breadcrumbs';
import Error from './error';
import connection from '../utils/channel';

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
        const data = await connection(query, 'product');
        if (!data.status) {
            setDataProducts(data)
            setLoader(true);
        }
        
    }
    
    /* console.log(dataProducts); */
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
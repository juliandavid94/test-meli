import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/breadcrumbs";
import DetailProduct from "../components/detailProduct";
import Error from "./error";

const DescriptionProduct = () => {
    const { id } = useParams();
    const [productItems, setProductItems] = useState();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        getDescriptionProduct();
    }, [id]);

    const getDescriptionProduct = async() => {
        await fetch(`http://localhost:3000/api/items/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (!data.status) {
                setProductItems(data);
                setLoader(true);
            }
        })
        .catch((error) => console.log(error));
    }
    return(loader &&
        <>
        <Breadcrumbs/>
        {typeof productItems !== 'undefined' ? 
        <DetailProduct data={productItems.item}/>
        : <Error/>}
        </>
    ) 
}

export default DescriptionProduct
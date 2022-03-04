import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import DetailProduct from "../components/DetailProduct/DetailProduct";
import connection from "../utils/channel";
import Error from "./error";
/**
 * View for the product description
 * @returns view rendering for the detail product with breadcrumbs component
 */
const DescriptionProduct = () => {
    const { id } = useParams();
    const [productItems, setProductItems] = useState();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        getDescriptionProduct();
    }, [id]);
    /**
     * @function getDescriptionProduct Return de api search for the description products
     */
    const getDescriptionProduct = async() => {
        const data = await connection(id, 'description');
        console.log(data);
        if (!data.status) {
            setProductItems(data);
            setLoader(true);
        }
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
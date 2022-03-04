import { render } from "@testing-library/react";
import connection from "../utils/channel";
import DescriptionProduct from "./DescriptionProduct";

const data = {"author": {"lastname": "Rojas Ordoñez", "name": "Julian David"}, "categories": null, "items": [{"address": {"city_id": "TUxBQk7a0TcwOTRa", "city_name": "Núñez", "state_id": "AR-C", "state_name": "Capital Federal"}, "condition": "new", "free_shipping": true, "id": "MLA1116911265", "picture": "http://http2.mlstatic.com/D_972580-MLA48600236953_122021-I.jpg", "price": {"amount": 36850, "currency": 
"ARS"}, "sold_quantity": 214, "tags": ["extended_warranty_eligible", "good_quality_picture", "good_quality_thumbnail", "loyalty_discount_eligible", "immediate_payment", "cart_eligible", "shipping_guaranteed", "best_seller_candidate"], "title": "Tablet  Lenovo Tab K10 Tb-x6c6x 10.3  Con Red Móvil 64gb Abyss Blue 4gb De Memoria Ram"}, {"address": {"city_id": "TUxBQkZMTzg5MjFa", "city_name": "Floresta", "state_id": "AR-C", "state_name": "Capital Federal"}, "condition": "new", "free_shipping": false, "id": "MLA1124925805", "picture": "http://http2.mlstatic.com/D_600099-MLA40939775511_022020-I.jpg", "price": {"amount": 590, "currency": "ARS"}, "sold_quantity": 670, "tags": ["good_quality_picture", "good_quality_thumbnail", "immediate_payment", "cart_eligible", "shipping_guaranteed", "best_seller_candidate"], "title": 
"Balanza De Cocina Digital Electronic Sf-400 Pesa Hasta 10kg Blanca"}, {"address": {"city_id": null, "city_name": "Tortuguitas", "state_id": "AR-B", "state_name": "Buenos Aires"}, "condition": "new", "free_shipping": true, "id": "MLA1115891412", "picture": "http://http2.mlstatic.com/D_795594-MLA46192592195_052021-I.jpg", "price": {"amount": 13900, "currency": "ARS"}, "sold_quantity": 547, "tags": ["loyalty_discount_eligible", "brand_verified", "good_quality_picture", "good_quality_thumbnail", "immediate_payment", "cart_eligible", "shipping_guaranteed", "best_seller_candidate"], "title": "Stanley Termo Clásico 1 L Con Tapón Cebador De Acero Inoxidable Rojo"}, {"address": {"city_id": null, "city_name": "Villa Celina", "state_id": "AR-B", "state_name": "Buenos Aires"}, "condition": "new", "free_shipping": true, "id": "MLA1105441801", "picture": "http://http2.mlstatic.com/D_639855-MLA45385147182_032021-I.jpg", "price": {"amount": 33999, "currency": "ARS"}, "sold_quantity": 10210, "tags": ["loyalty_discount_eligible", "3x_campaign", "extended_warranty_eligible", "good_quality_picture", "good_quality_thumbnail", "immediate_payment", "shipping_guaranteed", "best_seller_candidate", "meli_choice_candidate"], "title": "Samsung Galaxy A12 64 Gb Azul 4 Gb Ram"}]};

describe("DescriptionProduct", () => {
    
    it('renders', async() => {
        const data_res = await connection(10, "product")
        const {container} = render(<DescriptionProduct />);
        expect(container).toMatchSnapshot();
        expect(data_res).toBeCalled();
    });
});
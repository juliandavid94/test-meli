import { render } from "@testing-library/react";
import DetailProduct from "./DetailProduct";

describe("DetailProduct", () => {
    it('renders', () => {
        const productDetail = {
            id: "MLA928456240",
            title: "Teclado Gamer Vsg Pulsar Qwerty Español Latinoamérica Color Negro Con Luz Rgb",
            price: {
                currency: "ARS",
                amount: 2099
            },
            picture: "http://http2.mlstatic.com/D_880330-MLA45465275430_042021-I.jpg",
            condition: "new",
            free_shipping: false,
            sold_quantity: 25,
            tags: [
                'loyalty_discount_eligible',
                'good_quality_picture',
                'good_quality_thumbnail',
                'lightning_deal',
                'immediate_payment',
                'cart_eligible'
            ],
            description: "Este teclado VSG de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.\n\nDistinción a todo color\nSu retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.\n\nTecnología antighosting\nEste dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo.",
            img: [
                {
                    id: "880330-MLA45465275430_042021",
                    url: "http://http2.mlstatic.com/D_880330-MLA45465275430_042021-O.jpg",
                    secure_url: "https://http2.mlstatic.com/D_880330-MLA45465275430_042021-O.jpg",
                    size: "500x246",
                    max_size: "1791x882",
                    quality: ""
                },
                {
                    id: "829112-MLA45465266587_042021",
                    url: "http://http2.mlstatic.com/D_829112-MLA45465266587_042021-O.jpg",
                    secure_url: "https://http2.mlstatic.com/D_829112-MLA45465266587_042021-O.jpg",
                    size: "500x274",
                    max_size: "1196x657",
                    quality: ""
                }
            ]
        };
        const {container} = render(<DetailProduct data={productDetail}/>);
        expect(container).toMatchSnapshot();
    });
})
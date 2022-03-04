import { render } from "@testing-library/react";
import ListProducts from "./ListProducts";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Link: ({ children, ...rest }) => <a data-testid="link" {...rest} >{children}</a>
}));

describe("ListProducts", () => {

    it('renders', () => {
        
        const id = 'MLA928456240';
        const image = 'http://http2.mlstatic.com/D_880330-MLA45465275430_042021-I.jpg';
        const price = 2099;
        const tittle = 'Teclado Gamer Vsg Pulsar Qwerty Español Latinoamérica Color Negro Con Luz Rgb';
        const address = 'Capital Federal';
        const tags = [
            'loyalty_discount_eligible',
            'good_quality_picture',
            'good_quality_thumbnail',
            'lightning_deal',
            'immediate_payment',
            'cart_eligible',
        ];
        const {container} = render(
        <ListProducts id={id}
            image = {image}
            price = {price}
            tittle = {tittle}
            address = {address}
            tags = {tags}/>);
        expect(container).toMatchSnapshot();
    });
});
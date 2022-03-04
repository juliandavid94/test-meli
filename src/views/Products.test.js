import { render } from "@testing-library/react";
import Products from "./products";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => {
        return {
            pathname: '/items',
            state: {},
            key: '',
            search: 'iphone',
            hash: '',
        }
    }
}));

describe("Products", () => {
    
    it('renders', async() => {
        
        const categories = ['computacion'];
        const {container} = render(<Products data={categories}/>);
        expect(container).toMatchSnapshot();
    });
});
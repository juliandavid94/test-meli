import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Breadcrumbs from './Breadcrumbs'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => {
        return {
            pathname: '/items',
            state: {},
            key: '',
            search: 'iphone',
            hash: ''
        }
    }
}));


describe("Breadcrumbs", () => {
    const localStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        clear: jest.fn()
    };
    
    global.localStorage = localStorageMock;
    it('renders', () => {
        const categories = ['computacion'];
        const {container} = render(<Breadcrumbs data={categories}/>);
        expect(container).toMatchSnapshot();
    });
});
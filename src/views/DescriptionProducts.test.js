import { render } from "@testing-library/react";
import DescriptionProduct from "./DescriptionProduct";
import fetchMock from 'jest-fetch-mock';

describe("DescriptionProduct", () => {
    
    it('renders', async() => {
        fetchMock.mockResponseOnce(JSON.stringify({ author:{name: 'julian'} }));
        const categories = ['computacion'];
        const {container} = render(<DescriptionProduct data={categories}/>);
        expect(container).toMatchSnapshot();
    });
});
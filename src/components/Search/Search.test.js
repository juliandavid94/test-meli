import { fireEvent, render } from "@testing-library/react";
import Search from "./Search";
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(() => 'bar')
}));

describe("Search", () => {
    const view = render(<Search/>);
    it('render', () => {
        expect(view.container).toMatchSnapshot();
    });

    it('should keypress Enter input text', () => {
        const onKeyPressMock = jest.fn();
        const event = {
            key: 'Enter',
            preventDefault() {},
            target: { value: 'iphone' }
        };
        const component = shallow(<Search onKeyPress={onKeyPressMock} />);
        component.find('input').simulate('keyPress', event);
    });

    it('should keypress Enter input text value', () => {
        const onKeyChangeMock = jest.fn();
        const event = {
            key: 'Enter',
            preventDefault() {},
            target: { value: 'iphone' }
        };
        const component = shallow(<Search onChange={onKeyChangeMock} />);
        component.find('input').simulate('change', event);
    });

    it('should keypress "a" text', () => {
        const onKeyPressMock = jest.fn();
        const event = {
            key: 'A',
            preventDefault() {},
            target: { value: 'iphone' }
        };
        const component = shallow(<Search onKeyPress={onKeyPressMock} />);
        component.find('input').simulate('keyPress', event);
    });
});
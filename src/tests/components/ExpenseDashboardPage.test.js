import React from 'react';
import { shallow } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import ExpenseDashboardPage from '../../components/Header';

test('should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});

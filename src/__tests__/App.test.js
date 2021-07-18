import {render, screen} from '@testing-library/react';
import {shallow} from 'enzyme';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders description', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('p').text()).toContain(
    'Edit src/App.js and save to reload.',
  );
});

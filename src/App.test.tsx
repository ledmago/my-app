import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Components/Card';
import { defaultImg } from "./config.json"
test('renders learn react link', () => {
  render(<Card name="Test Image test image test image test image test image" img='http://null.com' id='1' location='Test Location' />);
  const AvatarImg = screen.getByTestId("avatarImg");
  setTimeout(() => {
    expect(AvatarImg).toHaveAttribute('src', defaultImg);
  }, 1500);
  const shortName = screen.getByTestId("shortName");
  expect(shortName).toHaveTextContent('Test Image test imag...');

});

test('renders learn react link s', () => {
  console.log('')

});


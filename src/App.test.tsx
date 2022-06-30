import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Components/Card';
import { defaultImg } from "./config.json"
import App from "./App"
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

test('Card Component content appropriate', async () => {
  render(<Card name="Test Image test image test image test image test image" img='http://null.com' id='1' location='Test Location' />);


  const shortName = screen.getByTestId("shortName");
  expect(shortName).toHaveTextContent('Test Image test imag...');
  expect(screen.getByTestId("testLocation")).toHaveTextContent('Test Location');




});

test('General App state', async () => {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });

  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>);
  await delay(1500)

  const AppJs = screen.getAllByTestId("cardComponent");
  expect(AppJs).toHaveLength(40);






});


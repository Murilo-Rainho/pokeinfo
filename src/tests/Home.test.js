import { render, screen } from '@testing-library/react';
// import { waitForElement } from '@testing-library/react';
import App from '../App';

describe('Testing Header component and his essencials funcionalities', () => {
  it('should has render the Home component', async () => {
    render(<App />);

    // Is deprecated.
    // const home = await waitForElement(
    //   () =>  screen.getByTestId('home-exist')
    // );

    const home = await screen.findByTestId('home-exist');

    expect(home).toBeInTheDocument();
  });
});

import { findByText, fireEvent, render } from '@testing-library/react';

import App from './app';
import { ComponentToTest } from './ComponentToTest';
import { SimpleFetchWithProviders } from './SimpleFetch';
import nock from 'nock';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<ComponentToTest />);
    
    expect(getByText(/This is not the message you are looking for/gi)).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<ComponentToTest message="MEEP MEEP" />);
    
    expect(getByText(/MEEP MEEP/gi)).toBeTruthy();
  });

  it('snappshot test', () => {
    const { getByText } = render(<ComponentToTest message="MEEP MEEP" />);
    
    expect(getByText(/MEEP MEEP/gi)).toMatchSnapshot();
  });

  it('event function test', () => {
    const testFunction = jest.fn();
    
    const { getByText } = render(<ComponentToTest 
      message="MEEP MEEP" 
      clickAction={testFunction}
      />);
    const button = getByText('Klicka på mig');
    
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )

    expect(testFunction).toBeCalledTimes(1);
    expect(testFunction).toBeCalledWith("MEEP MEEP");
  });

});


/*

fireEvent(
  getByText(container, 'Submit'),
  new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  }),
)

fireEvent.change(input, {target: {value: '2020-05-24'}})
*/

/*

const nock = require('nock')

const scope = nock('https://api.github.com')
  .get('/repos/atom/atom/license')
  .reply(200, {
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
  })
  
*/
import { render } from '@testing-library/react';

import DumbledoreUi from './dumbledore-ui';

describe('DumbledoreUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DumbledoreUi />);
    expect(baseElement).toBeTruthy();
  });
});

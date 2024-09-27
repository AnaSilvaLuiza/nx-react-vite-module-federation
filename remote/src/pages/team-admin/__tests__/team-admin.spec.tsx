import { render } from '@testing-library/react';

import TeamAdmin from '../team-admin';

describe('TeamAdmin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TeamAdmin />);
    expect(baseElement).toBeTruthy();
  });
});

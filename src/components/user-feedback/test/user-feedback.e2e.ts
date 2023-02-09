import { newE2EPage } from '@stencil/core/testing';

describe('user-feedback', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<user-feedback></user-feedback>');

    const element = await page.find('user-feedback');
    expect(element).toHaveClass('hydrated');
  });
});

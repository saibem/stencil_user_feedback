import { newE2EPage } from '@stencil/core/testing';

describe('dynamic-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dynamic-component></dynamic-component>');

    const element = await page.find('dynamic-component');
    expect(element).toHaveClass('hydrated');
  });
});

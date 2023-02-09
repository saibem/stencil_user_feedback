import { newSpecPage } from '@stencil/core/testing';
import { UserFeedback } from '../user-feedback';

describe('user-feedback', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UserFeedback],
      html: `<user-feedback></user-feedback>`,
    });
    expect(page.root).toEqualHtml(`
      <user-feedback>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </user-feedback>
    `);
  });
});

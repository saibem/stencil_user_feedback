import { newSpecPage } from '@stencil/core/testing';
import { DynamicComponent } from '../dynamic-component';

describe('dynamic-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DynamicComponent],
      html: `<dynamic-component></dynamic-component>`,
    });
    expect(page.root).toEqualHtml(`
      <dynamic-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dynamic-component>
    `);
  });
});

/**
 * React 19: Storybook / @storybook/test use `act` from react-dom. Without this flag,
 * React logs "The current testing environment is not configured to support act(...)".
 */
(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/styles/index.css';
import '../src/styles/theme-p2.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        locales: 'en',
      },
    },
    a11y: {
      test: 'todo',
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
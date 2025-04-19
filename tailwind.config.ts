import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        background: 'var(--background-color)',
        text: 'var(--text-color)',
      },
    },
  },
  plugins: [],
};

export default config;

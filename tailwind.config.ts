import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx,mdx}',
    './src/styles/**/*.{css}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

// tailwind.config.mjs (à la racine du projet)
export default {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-poppins)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  
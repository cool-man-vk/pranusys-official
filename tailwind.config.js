/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'ssm': {'min':'320px','max':'768px'},
    },
    extend: {},
  },
  plugins: [],
}


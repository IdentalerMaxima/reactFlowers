Installálás nulláról:

npm create vite@latest
(egyeni/React/JavaScript)

cd egyeni
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

tailwind.config.js:
...
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
...


src/main.css:

@tailwind base;
@tailwind components;
@tailwind utilities;
...

npm run dev


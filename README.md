```sh
- npm i
- npx tailwindcss init -p
- Add {
      content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
}
- add to index.css {
    @tailwind base;
@tailwind components;
@tailwind utilities;
}
- npm run dev
```
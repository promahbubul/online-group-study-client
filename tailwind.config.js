/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          "url('https://unsplash.com/photos/Eti6ph51H4A/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzJ8fHN0dWR5fGVufDB8fHx8MTY5OTU3OTM0M3ww&force=true&w=1920')",
      },
    },
  },
  plugins: [require("daisyui")],
};

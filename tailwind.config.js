/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html","./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite', // Slower version of bounce
        'bounce-slow-1': 'bounce 2s 1', // Slower version of bounce
        'pulse-slow':'pulse 2s infinite',
        'ping-slow':'ping 1s 1'
      },
      blur:{
        'light':'blur(10px)'
      }
    },
  },
  plugins: [],
}


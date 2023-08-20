/** @type {import('tailwindcss').Config} */
export const content = ['index.html'];
export const theme = {
  container: {
    center: true,
  },

  
  extend: {
    colors: {
      dark: '#0f172a',
      background: '#10162A',
      halo : '#59CAF3',
      secondary: '#64748b',
      button: '#3FACFC',
      abu : '#3F3D3D',
    },
    screen: {
    '2xl' : '1320px',
    }
  },
};
export const plugins = [];


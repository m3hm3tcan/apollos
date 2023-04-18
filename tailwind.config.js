module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        services: 'url("/src/assets/img/outline-text/services.svg")',
        videos: 'url("/src/assets/img/outline-text/videos.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/img/bg-img.jpg')",
      },
      colors: {
        primary: '#FFF',
        secondary: '#1C1D24',
        tertiary: '#FFFFFF',
        accent: {
          DEFAULT: '#858585',
          hover: '#000000',
        },
        paragraph: '#000',
      },
    },
  },
  plugins: [],
};

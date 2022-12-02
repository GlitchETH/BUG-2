const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.slate[100],
          to_bg: colors.slate[200],
        },
        titles: colors.slate[50],
        links: {
          txt: colors.slate[50],
          hover_txt: colors.slate[50],
        },
        loading_spinner: colors.indigo[500],
        popups: {
          bg: colors.slate[600],
          txt: colors.slate[50],
          internal_border: colors.slate[200],
        },
        warning: {
          txt: colors.slate[50],
          bg: colors.red[700],
          border: colors.red[700],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: colors.slate[50],
          bg: colors.red[600],
          border: colors.red[600],
          hover_txt: colors.slate[50],
          hover_bg: colors.red[400],
          hover_border: colors.red[400],
        },
        btn_primary: {
          txt: colors.slate[50],
          bg: colors.red[900],
          border: colors.red[900],
          hover_txt: colors.white,
          hover_bg: colors.red[400],
          hover_border: colors.red[400],
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[600],
          border: colors.red[600],
          hover_txt: colors.white,
          hover_bg: colors.red[400],
          hover_border: colors.red[400],
        },
        label: colors.slate[50],
        txt_input: {
          txt: colors.slate[50],
          bg: colors.white,
          border: colors.slate[200],
          focus_txt: colors.slate[50],
          focus_bg: colors.slate[50],
          focus_border: colors.slate[600],
          placeholder_txt: colors.slate[50],
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.slate[50],
          bg: colors.slate[50],
        },

        // Mint widget
        token_preview: colors.slate[600],
      },
    },
  },
  variants: {},
  plugins: [],
};

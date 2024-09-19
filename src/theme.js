// color design tokens export
export const tokens = {
  primary: {
    500: "#FFFFFF",
  },
  secondary: {
    300: "#333752",
    500: "#000000",
    700: "#00001B",
    800: "#212121",
    900: "#011627",
  },
  tertiary: {
    300: "#F8E2ED",
    500: "#FFF1DC",
  },
  grey: {
    300: "#D7DBEC",
    500: "#7E84A3",
    700: "#333752",
    800: "#979797",
    900: "#D9D9D9",
  },
  alt: {
    300: "#789eff",
    500: "#1e5eff",
    700: "#123899",
    800: "#0c2666",
    900: "#1E5EFF",
  },
  info: {
    500: "#4FC0FF",
  },
  success: {
    400: "#8CEE10",
    500: "#06A561",
  },
  error: {
    300: "#C74821",
    500: "#F12B43",
    600: "#F0142F",
  },
  warning: {
    500: "#FBDD4E",
    600: "#FF862F",
  },
  dark: {
    400: "#151B26",
    500: "#000",
  },
};
// mui theme settings
export const themeSettings = () => {
  return {
    palette: {
      mode: "dark",
      // palette values for dark mode
      primary: {
        ...tokens.primary,
        main: tokens.primary[500],
      },
      secondary: {
        ...tokens.secondary,
        light: tokens.secondary[300],
        main: tokens.secondary[500],
        dark: tokens.secondary[700],
      },
      tertiary: {
        ...tokens.tertiary,
        light: tokens.tertiary[300],
        main: tokens.tertiary[500],
      },
      grey: {
        ...tokens.grey,
        light: tokens.grey[300],
        main: tokens.grey[500],
        dark: tokens.grey[700],
      },
      alt: {
        ...tokens.alt,
        main: tokens.alt[500],
      },
      background: {
        default: tokens.primary[500],
        alt: tokens.secondary[500],
      },
      info: {
        ...tokens.info,
        main: tokens.info[500],
      },
      success: {
        ...tokens.success,
        main: tokens.success[500],
      },
      error: {
        ...tokens.error,
        light: tokens.error[300],
        main: tokens.error[500],
      },
      warning: {
        ...tokens.warning,
        main: tokens.warning[500],
      },
      dark: {
        ...tokens.dark,
        main: tokens.dark[500],
      },
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 36,
        fontWeight: "400",
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
        fontWeight: "400",
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
        fontWeight: "400",
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 18,
        fontWeight: "400",
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
        fontWeight: "400",
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: "400",
      },
    },
  };
};

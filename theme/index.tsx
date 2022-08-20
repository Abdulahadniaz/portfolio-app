import {
  extendTheme,
  StyleFunctionProps,
  theme as base,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  colors: {
    portwhite: {
      100: "#fdcedc",
      200: "#fb9db9",
      300: "#f96c96",
      400: "#f73b73",
      500: "#ffffff",
      600: "#949495",
      700: "#930630",
      800: "#620420",
      900: "#310210",
    },
    //   auxpink: {
    //     100: "#fdcedc",
    //     200: "#fb9db9",
    //     300: "#f96c96",
    //     400: "#f73b73",
    //     500: "#f50a50",
    //     600: "#c40840",
    //     700: "#930630",
    //     800: "#620420",
    //     900: "#310210",
    //   },
    //   auxblue: {
    //     100: "#77798f",
    //     200: "#61627d",
    //     300: "#4a4c6a",
    //     400: "#343558",
    //     500: "#1d1f45",
    //     600: "#1a1c3e",
    //     700: "#171937",
    //     800: "#141630",
    //     900: "#111329",
    //   },
  },
  fonts: {
    body: `Inter, ${base.fonts.body}`,
    heading: `Inter, ${base.fonts.heading}`,
  },
  components: {
    Link: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: mode("portwhite.500", "white")(props),
      }),
    },

    Heading: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: mode("portwhite.500", "white")(props),
      }),
      sizes: {
        xs: {
          fontSize: "10px",
        },
        base: {
          fontSize: "14px",
        },

        sm: {
          fontSize: "24px",
        },
        md: {
          fontSize: "36px",
        },
        lg: {
          fontSize: "48px",
        },
        xl: {
          fontSize: "64px",
        },
      },
    },
    Text: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: mode("portwhite.600", "white")(props),
        // fontWeight: "normal",
      }),
      sizes: {
        xs: {
          fontSize: "14px",
        },
        sm: {
          fontSize: "24px",
        },
        md: {
          fontSize: "36px",
        },
        lg: {
          fontSize: "48px",
        },
        xl: {
          fontSize: "64px",
        },
      },
    },
    //   Button: {
    //     variants: {
    //       solid: {
    //         bg: "auxpink.500",
    //         color: "white",
    //         _hover: {
    //           bg: "auxpink.600",
    //         },
    //         _active: {
    //           bg: "auxpink.700",
    //         },
    //       },
    //       link: {
    //         color: "auxpink.500",
    //         _hover: {
    //           color: "auxpink.700",
    //           textDecoration: "none",
    //         },
    //         _active: {
    //           color: "auxpink.900",
    //         },
    //       },
    //     },
    //   },
    //   Link: {
    //     baseStyle: (props: StyleFunctionProps) => ({
    //       color: mode("auxblue.200", "whiteAlpha.700")(props),
    //       _hover: {
    //         color: mode("auxblue.500", "whiteAlpha.900")(props),
    //         textDecoration: "none",
    //       },
    //     }),
    //     variants: {
    //       active: (props: StyleFunctionProps) => ({
    //         color: mode("auxblue.500", "whiteAlpha.900")(props),
    //       }),
    //     },
    //   },
  },
});

export default theme;

import { Theme, useThemeUI, ThemeUIContextValue } from "theme-ui";

const makeTheme = <T extends Theme>(t: T) => t;

const theme = makeTheme({
  colors: {
    text: "#111314",
    background: "#fff",
    link: "#0154FF",
  },
  fonts: {
    body:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    monospace: "Menlo, monospace",
  },
  sizes: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    13: "3.25rem",
    14: "3.5rem",
    15: "3.75rem",
    16: "4rem",
  },
  styles: {
    a: {
      position: "relative",
      paddingY: "2",
      ":hover": {
        color: "link",
        cursor: "pointer",
        ":before": {
          width: "100%",
        },
      },
      ":before": {
        content: '""',
        position: "absolute",
        height: "1px",
        width: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "link",
        transition: "width 500ms cubic-bezier(0.2, 1, 0.2, 1)",
      },
    },
  },
});

export type ExactTheme = typeof theme;

interface ExactContextValue extends Omit<ThemeUIContextValue, "theme"> {
  theme: ExactTheme;
}
export const useTheme = (useThemeUI as unknown) as () => ExactContextValue;

export default theme;

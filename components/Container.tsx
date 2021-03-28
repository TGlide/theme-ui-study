import { ReactNode } from "react";
import { ThemeUIStyleObject, Box, Grid } from "theme-ui";
import { PolyProps } from "../interfaces/polymorphic";
import { useTheme } from "../theme";

interface ContainerProps {
  sx?: ThemeUIStyleObject;
  children: ReactNode;
}

function Container<C extends React.ElementType = typeof Box>({
  as,
  sx,
  children,
  ...props
}: PolyProps<C, ContainerProps>): JSX.Element {
  const { theme } = useTheme();
  const { sizes } = theme;

  const Component = as || Grid;

  return (
    <Component
      sx={{ paddingX: sizes[8], paddingY: sizes[8], ...sx }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Container;

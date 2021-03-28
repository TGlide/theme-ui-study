import React from "react";

// https://www.benmvp.com/blog/polymorphic-react-components-typescript/

export interface AsProp<C extends React.ElementType> {
  as?: C;
}

export type PolyProps<C extends React.ElementType, P = unknown> = AsProp<C> &
  Omit<React.ComponentPropsWithRef<C>, keyof AsProp<C>> &
  P;

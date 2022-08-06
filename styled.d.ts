import "styled-components";
import { defaulTheme } from "./components/Theme";

declare module "styled-components" {
  export type DefaultTheme = typeof defaulTheme;
}

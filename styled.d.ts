import "styled-components";
import { defaulTheme } from "./components/Theme";

type Theme = typeof defaulTheme;
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

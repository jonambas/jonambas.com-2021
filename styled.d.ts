import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    space: Record<string, string>;
    colors: Record<string, string>;
    borders: Record<string, string>;
    fonts: Record<string, string>;
  }
}

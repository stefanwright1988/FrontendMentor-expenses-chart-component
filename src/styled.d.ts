// styled.d.ts
import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadiusLarge: string;
    borderRadiusSmall: string;
    fontFamily: string;
    palette: {
      darkbrown: string;
      mediumbrown: string;
      cream: string;
      verypaleorange: string;
      softred: string;
      cyan: string;
    };
    mobileBreak: string;
    desktopBreak: string;
  }
}

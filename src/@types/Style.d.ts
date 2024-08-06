import 'styled-components';
import { Theme } from '../Style/Theme';

type themeType = typeof Theme;

declare module 'styled-components' {
    export interface DefaultTheme extends themeType {}
}


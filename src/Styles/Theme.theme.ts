import 'styled-components';
import { Colors } from './Colors';

declare module 'styled-components' {
    export interface DefaultTheme extends Colors { }
}
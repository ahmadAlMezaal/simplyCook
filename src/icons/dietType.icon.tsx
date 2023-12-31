import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg';
import { colors } from '../constants/colors';

export const SvgVegan = ({ isSelected }: { isSelected: boolean }) => <Svg
    width={34}
    height={34}
    fill={isSelected ? colors.activeIcon : colors.passiveIcon}
>
    <Path
        stroke={isSelected ? colors.activeIcon : colors.passiveIcon}
        d="M5.677 0S0 5.446 0 11.641s5.82 8.365 5.82 8.365c-2.177-5.723-1.858-8.82-.72-12.649 0 7.252 2.163 11.498 2.163 11.498s4.325-4.053 3.272-10.053C9.779 4.498 5.677 0 5.677 0Zm12.796 13.85c-10.045 0-10.727 10.006-10.727 10.006s2.859-2.933 5.53-3.945c6.573-2.485 12.974 1.008 12.974 1.008s-7.007-1.2-10.09 0c-5.873 2.29-9.78 8.334-11.306 10.728a1.462 1.462 0 0 0 .385 1.97c.617.445 1.73.245 2.118-.528.823-1.648 2.632-5.064 3.08-5.628 0 0 3.304 1.778 9.331 1.778 8.169 0 14.094-9.236 14.094-9.236s-6.646-6.153-15.389-6.153Z"
    />
</Svg>;

export const SvgOmnivore = ({ isSelected }: { isSelected: boolean }) => <Svg
    width={40}
    height={40}
    fill={isSelected ? colors.activeIcon : colors.passiveIcon}
>
    <G clipPath="url(#a)">
        <Path
            fill={isSelected ? colors.activeIcon : colors.passiveIcon}
            d="M26.538 21.524c-.567-1.568-.746-3.498-.492-5.298.45-3.261-.03-5.896-1.559-8.543C21.461 2.442 14.731.423 9.79 3.276c-4.941 2.853-6.558 9.69-3.533 14.932 1.529 2.647 3.57 4.381 6.622 5.622 1.683.679 3.266 1.799 4.342 3.076a2.59 2.59 0 0 0 2.634.819l2.43 4.209c.174.301.168.667-.014.905a3.488 3.488 0 0 0 .105 4.4c.923 1.107 2.512 1.532 3.86 1.038a3.513 3.513 0 0 0 2.257-2.61 3.487 3.487 0 0 0 3.383-.647c1.106-.922 1.532-2.51 1.036-3.86-.57-1.571-2.117-2.515-3.755-2.295-.302.04-.622-.137-.796-.44l-2.43-4.208a2.59 2.59 0 0 0 .607-2.693Zm4.427 9.967a1.77 1.77 0 0 1-.517 1.915 1.725 1.725 0 0 1-1.435.395c-.516-.09-.753-.511-1.013-.962-.242-.42-.688-.182-1.107.06-.42.242-.597.482-.355.901.26.452.435.87.255 1.361a1.73 1.73 0 0 1-1.064 1.048 1.769 1.769 0 0 1-1.913-.515c-.541-.644-.239-1.36.268-2.017.619-.808.913-1.922.381-2.844l-2.507-3.927 1.763-1.31L26.667 30c.532.921 1.331.702 2.346.57.818-.11 1.663.128 1.952.92Z"
        />
    </G>
    <Defs>
        <ClipPath id="a">
            <Path fill="#fff" d="M0 0h40v40H0z" />
        </ClipPath>
    </Defs>
</Svg>;

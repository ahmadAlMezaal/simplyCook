import Svg, { G, Defs, ClipPath, Path } from 'react-native-svg';
import { colors } from '../constants/colors';

export const SvgTwoPerson = ({ isSelected }: { isSelected: boolean }) => <Svg
    width={40}
    height={40}
    fill="none"
>
    <G
        stroke={isSelected ? colors.activeIcon : colors.passiveIcon}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.333}
        clipPath="url(#a)"
    >
        <Path d="M30.093 35.88v-3.473a6.944 6.944 0 0 0-6.945-6.944H9.26a6.945 6.945 0 0 0-6.944 6.944v3.473M16.204 18.518a6.944 6.944 0 1 0 0-13.888 6.944 6.944 0 0 0 0 13.889ZM38.194 35.88v-3.472a6.945 6.945 0 0 0-5.208-6.719M26.042 4.856a6.945 6.945 0 0 1 0 13.455" />
    </G>
    <Defs>
        <ClipPath id="a">
            <Path fill="#fff" d="M0 0h40v40H0z" />
        </ClipPath>
    </Defs>
</Svg>;

export const SvgFourPerson = ({ isSelected }: { isSelected: boolean }) => <Svg
    width={40}
    height={40}
    fill="none"
>
    <Path
        stroke={isSelected ? colors.activeIcon : colors.passiveIcon}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.222}
        d="M22.174 31.836v-2.609a5.218 5.218 0 0 0-5.217-5.217H6.522a5.218 5.218 0 0 0-5.218 5.217v2.609M11.739 18.792a5.217 5.217 0 1 0 0-10.434 5.217 5.217 0 0 0 0 10.434ZM28.26 31.836v-2.609a5.217 5.217 0 0 0-3.912-5.047M19.13 8.527a5.217 5.217 0 0 1 0 10.109M33.478 31.836v-2.609a5.217 5.217 0 0 0-3.913-5.047M24.348 8.527a5.218 5.218 0 0 1 0 10.109M38.696 31.836v-2.609a5.218 5.218 0 0 0-3.913-5.047M29.565 8.527a5.217 5.217 0 0 1 0 10.109"
    />
</Svg>;

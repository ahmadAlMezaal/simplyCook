import Svg, { Path } from 'react-native-svg';

type Props = {
    isSelected: boolean
}

export const SvgHeart: React.FC<Props> = ({ isSelected }) => <Svg
    width={26}
    height={23}
    fill={isSelected ? '#E73B35' : 'none'}
>
    <Path
        stroke="#E73B35"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22.953 3.188a6.187 6.187 0 0 0-8.753 0l-1.192 1.193-1.193-1.193a6.189 6.189 0 0 0-8.752 8.753l1.192 1.192 8.753 8.753 8.752-8.753 1.193-1.192a6.186 6.186 0 0 0 0-8.753v0Z"
    />
</Svg>;

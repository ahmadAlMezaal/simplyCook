import { RadioButtonListType } from '#types/enum';
import { RadioButtonOptionList } from '#types/models';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { RadioButton } from './radioButton.component';

type RadioButtonListProps = {
    radioButtonList: RadioButtonOptionList;
    handleSelectChoice: (index: number) => void;
    selectedChoice: number;
    containerStyle?: ViewStyle
}

export const RadioButtonList: React.FC<RadioButtonListProps> = (props) => {

    const isHorizontal = props.radioButtonList.type === RadioButtonListType.horizontal;
    return <View style={props.containerStyle}>
        <Text style={styles.title}>{props.radioButtonList.title}</Text>
        <View style={isHorizontal ? styles.row : styles.col}>
            {
                props.radioButtonList.items.map(
                    (item, index) => <Pressable
                        key={String(index)}
                        onPress={() => props.handleSelectChoice(index)}
                        style={
                            [
                                isHorizontal ?
                                    { marginLeft: index !== 0 ? 8 : 0 } :
                                    { marginTop: index !== 0 ? 16 : 0 }
                                ,
                                {
                                    flex: 1 / 2,
                                }
                            ]
                        }>
                        <RadioButton isHorizontal={isHorizontal} radioButton={item} isSelected={props.selectedChoice === index} />
                    </Pressable>
                )
            }
        </View>
    </View>;
};

const styles = StyleSheet.create(
    {
        title: {
            fontSize: 16,
            paddingBottom: 16,
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        col: {
            justifyContent: 'center',
        },
    }
);

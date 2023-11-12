import { RadioButtonOption } from '#types/models';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    radioButton: RadioButtonOption;
    isSelected: boolean;
    isHorizontal: boolean;
}

export const RadioButton: React.FC<Props> = (props) => {

    return <View style={
        [
            styles.radioButtonContainer,
            props.isHorizontal ? styles.horizontalStyle : styles.verticalStyle,
            styles.row,
            props.isSelected ? styles.activeBorderColor : styles.passiveBorderColor
        ]
    }>
        {
            props.isSelected ?
                <View style={[styles.radioButton, styles.filledRadioButton]}>
                    <View style={styles.filledRadioButtonInner} />
                </View> :
                <View style={[styles.radioButton, styles.emptyRadioButton]} />
        }
        {props.radioButton.icon && <View style={{ marginLeft: 10, }}>
            {props.radioButton.icon(props.isSelected)}
        </View>
        }
        <Text style={styles.radioButtonText}>{props.radioButton.title}</Text>
    </View>;
};

const styles = StyleSheet.create(
    {
        radioButtonContainer: {
            paddingVertical: 24,
            paddingHorizontal: 13,
            borderRadius: 15,
        },
        passiveBorderColor: {
            borderWidth: 1,
            borderColor: '#D4D4D4',
        },
        activeBorderColor: {
            borderWidth: 2,
            borderColor: '#63A431'
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        radioButtonText: {
            fontSize: 16,
            marginLeft: 10,
        },
        radioButton: {
            width: 25,
            height: 25,
            borderRadius: 13,
        },
        filledRadioButton: {
            borderColor: '#63A431',
            borderWidth: 2,
            alignItems: 'center',
            justifyContent: 'center',
        },
        filledRadioButtonInner: {
            backgroundColor: '#C1D108',
            height: 17,
            width: 17,
            borderRadius: 9,
        },
        emptyRadioButton: {
            borderColor: '#D4D4D4',
            borderWidth: 1,
        },
        verticalStyle: {
            flexGrow: 1,
        },
        horizontalStyle: {
            width: '100%',
        }
    }
);

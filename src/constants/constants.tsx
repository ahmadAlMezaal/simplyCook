import { RadioButtonListType } from '#types/enum';
import { Bullet, RadioButtonOptionList as RadioButtonOptionList } from '#types/models';
import { SvgOmnivore, SvgVegan } from '../icons/dietType.icon';
import { SvgFourPerson, SvgTwoPerson } from '../icons/person.icon';

export const bullets: Bullet[] = [
    {
        isStarted: true,
        isCompleted: true,
        title: 'Deliveries'
    },
    {
        isStarted: true,
        isCompleted: false,
        title: 'Food preferences'
    },
    {
        isStarted: false,
        isCompleted: false,
        title: 'Confirm'
    },
    {
        isStarted: false,
        isCompleted: false,
        title: 'Done'
    },
];

export const allergiesRadioButtonList: RadioButtonOptionList = {
    title: 'Do you have any allergies?',
    type: RadioButtonListType.horizontal,
    items: [
        { title: 'Yes' },
        { title: 'No' }
    ],
};

export const consumerCountRadioButtonList: RadioButtonOptionList = {
    title: 'I usually cook for...',
    type: RadioButtonListType.vertical,
    items: [
        {
            title: '2 people',
            icon: (isSelected: boolean) => <SvgTwoPerson isSelected={isSelected} />
        },
        {
            title: '4 people',
            icon: (isSelected: boolean) => <SvgFourPerson isSelected={isSelected} />
        }
    ],
};

export const dietList: RadioButtonOptionList = {
    title: 'I am...',
    type: RadioButtonListType.vertical,
    items: [
        {
            title: 'Vegetarian',
            icon: (isSelected: boolean) => <SvgFourPerson isSelected={isSelected} />
        },
        {
            title: 'Vegan',
            icon: (isSelected: boolean) => <SvgVegan isSelected={isSelected} />
        },
        {
            title: 'None of these',
            icon: (isSelected: boolean) => <SvgOmnivore isSelected={isSelected} />
        },
    ],
};

export const targetAllergens = ['Crustaceans', 'Fish', 'Eggs'];

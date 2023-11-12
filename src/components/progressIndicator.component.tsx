import { View, StyleSheet, Image, Text } from 'react-native';
import React from 'react';
import { Bullet } from '#types/models';

type LineProps = {
    isCompleted: boolean;
}

type BulletProps = {
    index: number;
    bullet: Bullet;
}

type ProgressIndicatorProps = {
    bullets: Bullet[];
}

const Line: React.FC<LineProps> = ({ isCompleted: isActive }) => (
    <View style={[styles.line, isActive ? styles.activeLine : styles.inactiveLine]} />
);

const BulletComponent: React.FC<BulletProps> = ({ bullet, index }) => {

    const isActive = bullet.isCompleted || bullet.isStarted;
    return <View style={styles.bulletContainer}>
        <View style={[styles.bullet, isActive ? styles.activeBullet : styles.inactiveBullet]} >
            {
                bullet.isCompleted && bullet.isStarted ?
                    <Image source={require('#assets/tick.png')} /> :
                    <Text style={styles.index}>{index + 1}</Text>
            }
        </View>
        {/* <Text>Delivery</Text> */}
    </View>;
};

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ bullets }) => <View style={styles.container}>
    {
        bullets.map(
            (item, index) => <React.Fragment key={index}>
                <BulletComponent index={index} bullet={item} />
                {index < 3 && <Line isCompleted={item.isCompleted} />}
            </React.Fragment>
        )
    }
</View>;

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        bulletContainer: {
        },
        bullet: {
            width: 24,
            height: 24,
            borderRadius: 12,
            zIndex: 2,
            elevation: 2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        activeBullet: {
            backgroundColor: '#45A562',
        },
        inactiveBullet: {
            backgroundColor: '#D4D4D4',
        },
        line: {
            flex: 1,
            height: 4,
            marginHorizontal: -2,
            zIndex: -1,
            marginTop: -2,
        },
        activeLine: {
            backgroundColor: '#45A562',
        },
        inactiveLine: {
            backgroundColor: '#D4D4D4',
        },
        index: {
            color: 'white',
            fontWeight: 'bold',
        }
    }
);

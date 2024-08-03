'use strict'
import { ActivityIndicator, Dimensions, Image, StyleSheet, View } from 'react-native';
import Color from '../../configs/color.config';
import fontsConfig from '../../configs/fonts.config';



export const { width, height } = Dimensions.get('window');
export const icon = require('./../assets/imgs/logo.png');
export function Splash() {

    return (
        <View style={[styles.container]}>
            <Image style={[styles.logo]} source={icon} resizeMode='cover' />
            <ActivityIndicator style={{ marginTop: 30 }} size={'large'} color={Color.primary_color_white} />
        </ View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.primary_color,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: width * 0.7,
        height: width * 0.7
    }

})


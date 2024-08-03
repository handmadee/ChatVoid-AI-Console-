'use strict'

import React from "react"
import { SafeAreaView, StyleSheet, View } from "react-native"
import FastImage from 'react-native-fast-image'
import Text from "../components/Text.components"
import Color from '../../configs/color.config';
import fontsConfig from "../../configs/fonts.config"
import { width, height } from "./Splash"
import ColumnComponents from "../components/Column.components"
import Button from "../components/Button.components"
import { ArrowRight, ArrowRight2 } from "iconsax-react-native"
const icon = require('./../assets/imgs/onboaring.png')


export function Onbroading() {
    return (
        <SafeAreaView style={[styles.container]}>
            <ColumnComponents flex={1}
                justifyContent="space-evenly"
                style={[{ width: width * 0.9, height: height * 0.9, alignSelf: 'center' }]} >
                <View>
                    <Text text="You AI Assistant" color={Color.primary_color}
                        size={23}
                        font={fontsConfig.bold}
                        textAlign="center"
                    />
                    <Text text="   Using this software,you can ask you
                questions and receive articles using
                artificial intelligence assistant" color={Color.primary_color_gray}
                        size={15}
                        font={fontsConfig.medium}
                        textAlign="center"
                        styles={{ width: width * 0.8, lineHeight: 20, marginVertical: 20 }}
                    />
                </View>
                <FastImage
                    style={styles.image}
                    source={icon}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <Button title="Continue"
                    type="primary"
                    iconPosition="right"
                    styles={{
                        width: width * .9,
                        height: height * .07
                    }}
                    icon={<ArrowRight
                        size="32"
                        color={Color.primary_color_white}
                        style={{
                            position: 'absolute',
                            right: 20
                        }}
                    />}
                    isShadow={true}
                    textLine={19}
                    textStyleProps={
                        {
                            fontFamily: fontsConfig.bold
                        }
                    }

                />
            </ColumnComponents>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row'
    },
    image: {
        width: width * 0.7,
        height: height * 0.5
    }

})
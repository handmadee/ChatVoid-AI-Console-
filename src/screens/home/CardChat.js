'use strict';
import React from "react";
import PropTypes from 'prop-types';
import { Image, Platform, StyleSheet, View } from "react-native";
import Text from "../../components/Text.components";
import { width } from "../Splash";
import colorConfig from "../../../configs/color.config";
import fontsConfig from "../../../configs/fonts.config";

const CardChat = ({ role, text }) => {
    const styles = StyleSheet.create({
        cardText: {
            width: width * 0.85,
            padding: 15,
            marginVertical: 5,
            alignSelf: role === 'ai' ? 'flex-end' : 'flex-start',
            marginLeft: role !== 'ai' && width * 0.1,
            marginRight: role === 'ai' && width * 0.05,
            backgroundColor: role === 'ai' ? colorConfig.primary_color : colorConfig.primary_color_card,
            borderTopLeftRadius: role === 'ai' ? 50 : 20,
            borderBottomLeftRadius: role === 'ai' ? 50 : 0,
            borderBottomRightRadius: role === 'ai' ? 50 : 20,
            borderTopRightRadius: Platform.OS === 'ios' ? 15 : 10,
            ...Platform.select({
                ios: {
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 4,
                    shadowColor: '#000000',
                    shadowOpacity: 0.25,
                },
                android: { elevation: 4 }
            })
        },
        icon: {
            width: width * 0.07,
            height: width * 0.07,
            padding: 5,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            backgroundColor: colorConfig.primary_color_white,
            position: 'absolute',
            bottom: -20,
            left: -20,
            ...Platform.select({
                ios: {
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 4,
                    shadowColor: '#000000',
                    shadowOpacity: 0.15,
                },
                android: { elevation: 4 }
            })
        },
        svgIcon: {
            width: '80%',
            height: '80%',
        }
    });

    return (
        <View style={styles.cardText}>
            {role !== 'ai' && (
                <View style={styles.icon}>
                    <Image source={require('./../../assets/icon/icon_logo.png')} style={styles.svgIcon} />
                </View>
            )}
            <Text
                lineHeight={18}
                letterSpacing={1}
                textAlign='left'
                styles={{ width: '90%', marginLeft: 10 }}
                text={text}
                font={fontsConfig.bold}
                size={13}
                color={role === 'ai' ? colorConfig.primary_color_white : colorConfig.primary_color_text_gray}
            />
        </View>
    );
};

CardChat.propTypes = {
    role: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default React.memo(CardChat);

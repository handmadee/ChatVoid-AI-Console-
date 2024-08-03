'use strict'
import React, { useCallback, useRef, useState, useEffect } from "react"
import { Animated, FlatList, Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableWithoutFeedback, View } from "react-native"
import Text from "../../components/Text.components"
import { height, width } from "../Splash"
import colorConfig from "../../../configs/color.config"
import fontsConfig from "../../../configs/fonts.config"
import CardChat from "./CardChat"
import { ArrowLeft, Microphone2, Send, Export, VolumeHigh, Image as Image2 } from "iconsax-react-native"
import Row from "../../components/Row.components"
import ColumnComponents from "../../components/Column.components"
import Button from "../../components/Button.components"
const iconmini = require('./../../assets/icon/icon_logo.png');


const PormtChat = ({ onPress, index = 0 }) => {
    const [text, setText] = useState('');
    const handlerPostText = useCallback(() => {
        if (text.trim() === '') return;
        onPress({
            role: 'ai',
            text: text
        })
        return setText('')
    }, [text])
    const styles = StyleSheet.create({
        ipText: {
            height: height * .065,
            padding: Platform.OS === 'ios' ? 10 : 5,
            position: 'absolute',
            bottom: Platform.OS === 'ios' ? index == 0 ? height * .005 : index - 15 : height * .05,
            alignSelf: 'center',
            borderRadius: Platform.OS === 'ios' ? 20 : 25,
            backgroundColor: 'white',
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

    })
    return (
        <Row
            styles={
                styles.ipText
            }
        >
            <Image2
                size="24" color={colorConfig.primary_color} variant="Bold" />
            <TextInput
                style={
                    {
                        width: width * .75,
                        fontFamily: fontsConfig.bold,
                    }
                }
                placeholder="Write your message ..."
                placeholderTextColor="#A1A1A1"
                onChangeText={setText}
                onSubmitEditing={handlerPostText}
                value={text}
            />
            <Row>
                <Microphone2 size="24" color={colorConfig.primary_icon_mic} />
                <Send
                    onPress={handlerPostText} size="24" color={colorConfig.primary_color} variant="Bold" />
            </Row>
        </Row>
    )

}

const HeaderChat = () => {

    return (
        <Row justifyContent="space-around"
            styles={{
                padding: 10,
                borderBottomColor: colorConfig.primary_border_bottom,
                borderBottomWidth: 1
            }}
        >
            <Row>
                <ArrowLeft size="24" color={colorConfig.primary_icon} fontWeight={"bold"} />
                <Image style={{ marginHorizontal: 10 }} source={iconmini} />
                <ColumnComponents alignItems="flex-start">
                    <Text text="ConsoleChat" color={colorConfig.primary_color}
                        size={20}
                        lineHeight={25}
                        font={fontsConfig.bold} weight={'bold'} />
                    <Row>
                        <View style={{ width: 10, height: 10, borderRadius: 50, backgroundColor: 'green', marginRight: 10 }} />
                        <Text text="Online" color="green" />
                    </Row>
                </ColumnComponents>
            </Row>
            <Row styles={{ width: width * .2 }}
                justifyContent="space-around"
            >
                <VolumeHigh size="24" color={colorConfig.primary_icon} fontWeight={"bold"} />
                <Export size="24" color={colorConfig.primary_icon} fontWeight={"bold"} />
            </Row>
        </Row>
    )
}

export default function Home() {
    const [message, setMessage] = useState([{
        role: 'admin',
        text: "I'm Console Chat AI"
    }]);
    const handlerSend = (content) => {
        setMessage(prevMessages => {
            const newMessages = [...prevMessages, content];
            if (flatListRef.current) {
                setTimeout(() => flatListRef.current.scrollToEnd({ animated: true }), 0);
            }
            return newMessages;
        });
    }
    const flatListRef = useRef(null);
    // key board
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {

            setKeyboardHeight(e.endCoordinates.height);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardHeight(0);
        });
        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            {/* Header */}
            <HeaderChat />
            <View style={{
                height: keyboardHeight == 0 ? height * .75 : Platform.OS == 'ios' ? (height * .77) - keyboardHeight : (height * .79) - keyboardHeight,
            }}>
                <FlatList
                    ref={flatListRef}
                    data={message}
                    renderItem={(item) => {
                        return (
                            <CardChat role={item.item.role} text={item.item.text} key={item.index} />
                        )
                    }}
                    showsVerticalScrollIndicator={false}
                    // Performance settings
                    removeClippedSubviews={true} // Unmount components when outside of window
                    initialNumToRender={2} // Reduce initial render amount
                    maxToRenderPerBatch={1} // Reduce number in each render batch
                    updateCellsBatchingPeriod={100} // Increase time between renders
                    windowSize={7}

                />
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <PormtChat onPress={handlerSend} index={keyboardHeight} />

            </TouchableWithoutFeedback>
            {/* Content */}






        </KeyboardAvoidingView >
    )
}

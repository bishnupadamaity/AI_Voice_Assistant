import {
    View,
    Text,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Features from '../components/Features';
import { dummyMessages } from '../constants';

export default function HomeScreen() {
    const [messages, setMessages] = useState(dummyMessages);
    const [recording, setRecording] = useState(false);
    const [speaking, setSpeaking] = useState(true);

    
    const clear = () => {
        setMessages([]);
    }
    const stopSpeaking = () => {
        setSpeaking(false);
    }
    return (
        <View className="flex-1 bg-white">
            <SafeAreaView className="flex-1 flex mx-5">
                {/* bot icon  */}
                <View className="flex-row justify-center">
                    <Image
                        source={require('../images/Robot.png')}
                        style={{ width: hp(15), height: hp(15) }}
                    />
                </View>
                {/* features || messages */}
                {messages.length > 0 ? (
                    <View className=" space-y-2" style={{ height: hp(70) }}>
                        <Text
                            style={{ fontSize: wp(5) }}
                            className="text-gray-700 font-semibold ml-1">
                            Assistant
                        </Text>
                        <View
                            style={{ height: hp(58) }}
                            className="bg-neutral-200 rounded-3xl p-4">
                            <ScrollView
                                bounces={false}
                                className="space-y-4"
                                showsVerticalScrollIndicator={false}>
                                {messages.map((message, index) => {
                                    if (message.role === 'assistant') {
                                        if (message.content.includes('https')) {
                                            // ans ai image
                                            return (
                                                <View key={index} className="flex-row justify-start">
                                                    <View className="p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none">
                                                        <Image
                                                            source={{ uri: message.content }}
                                                            style={{ width: wp(60), height: wp(60) }}
                                                            className="rounded-2xl"
                                                            resizeMode="contain"
                                                        />
                                                    </View>
                                                </View>
                                            );
                                        } else {
                                            return (
                                                <View key={index} className="flex-row">
                                                    <View
                                                        style={{ maxWidth: wp(65) }}
                                                        className="bg-emerald-100 rounded-xl p-2 rounded-tl-none">
                                                        <Text className="text-gray-600">
                                                            {message.content}
                                                        </Text>
                                                    </View>
                                                </View>
                                            );
                                        }
                                    } else {
                                        // user input
                                        return (
                                            <View key={index} className="flex-row justify-end">
                                                <View
                                                    style={{ maxWidth: wp(65) }}
                                                    className="bg-white rounded-xl p-2 rounded-tr-none">
                                                    <Text className="text-gray-600">
                                                        {message.content}
                                                    </Text>
                                                </View>
                                            </View>
                                        );
                                    }
                                })}
                            </ScrollView>
                        </View>
                    </View>
                ) : (
                    <Features />
                )}

                {/* recording , clear and stop button  */}
                <View className="flex justify-center items-center">
                    {recording ? (
                        <TouchableOpacity>
                            <Image
                                className="rounded-full"
                                source={require('../images/Mic_Red.png')}
                                style={{ width: hp(10), height: hp(10) }}
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity>
                            <Image
                                className="rounded-full"
                                source={require('../images/Mic_Green.png')}
                                style={{ width: hp(10), height: hp(10) }}
                            />
                        </TouchableOpacity>
                    )}
                    {
                        messages.length > 0 && (
                            <TouchableOpacity onPress={clear} className="bg-neutral-400 rounded-3xl p-2 absolute right-10">
                                <Text className="text-white font-semibold" >Clear</Text>
                            </TouchableOpacity>
                        )
                    }
                    {
                        speaking && (
                            <TouchableOpacity onPress={stopSpeaking} className="bg-red-400 rounded-3xl p-2 absolute left-10">
                                <Text className="text-white font-semibold" >Stop</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
            </SafeAreaView>
        </View>
    );
}

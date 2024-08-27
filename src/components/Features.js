import { View, Text, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function Features() {
    return (
        <View style={{ height: hp(70) }} className="space-y-4" >
            <Text style={{ fontSize: wp(6.5) }} className="font-semibold text-gray-700 px-1" >Features</Text>
            <View className="bg-emerald-200 p-4 rounded-xl space-y-2" >
                <View className="flex-row items-center space-x-1">
                    <Image source={require('../images/Robot.png')} style={{ width: wp(4), height: wp(4) }} />
                    <Text style={{ fontSize: wp(4.8) }} className="font-semibold text-gray-700" >ChatGPT</Text>
                </View>
                <Text style={{ fontSize: wp(3.8) }} className="text-gray-600 font-medium" >ChatGPT can provide you with instant and knowledgeable responses, assist uou with creative ideas on a wide range of topics.</Text>
            </View>
            <View className="bg-purple-200 p-4 rounded-xl space-y-2" >
                <View className="flex-row items-center space-x-1">
                    <Image source={require('../images/Robot.png')} style={{ width: wp(4), height: wp(4) }} />
                    <Text style={{ fontSize: wp(4.8) }} className="font-semibold text-gray-700" >DALL-E</Text>
                </View>
                <Text style={{ fontSize: wp(3.8) }} className="text-gray-600 font-medium" >DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.</Text>
            </View>
            <View className="bg-cyan-200 p-4 rounded-xl space-y-2" >
                <View className="flex-row items-center space-x-1">
                    <Image source={require('../images/Robot.png')} style={{ width: wp(4), height: wp(4) }} />
                    <Text style={{ fontSize: wp(4.8) }} className="font-semibold text-gray-700" >Smart AI</Text>
                </View>
                <Text style={{ fontSize: wp(3.8) }} className="text-gray-600 font-medium" >A Powerful voice assistant with the abilities of ChatGOT and Dall-E, providing you the best of both words.</Text>
            </View>
        </View>
    )
}
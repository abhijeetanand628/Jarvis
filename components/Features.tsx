import React from 'react';
import { View, Text, Image } from'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Features() {
  return (
    <View style={{flex: 1, justifyContent: 'flex-start'}}>
      <Text style={{fontSize: wp(6.5), marginLeft: wp(5), color: "#374151", fontWeight: '500'}}>Features</Text>
      <View style={{backgroundColor: 	'#A7F3D0', borderRadius: wp(3.5), padding: wp(5), marginVertical: hp(1.5), marginHorizontal: wp(5), minHeight: hp(15)}}>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
          <Image source={require('../assets/images/gpticon.jpg')}
            style={{width: wp(8), height: hp(4), marginRight: wp(2) }}
            resizeMode="contain"
          />
          <Text style={{color: "#374151", fontWeight: 'bold', fontSize: wp(6)}}>ChatGPT</Text>
        </View>
        <View>
          <Text style={{fontSize: wp(3.8), color: "#374151", fontWeight: '500'}}>ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.</Text>
        </View>
      </View>

      <View style={{backgroundColor: 'rgb(224, 183, 255)', borderRadius: wp(3.5), padding: wp(5), marginVertical: hp(1.5), marginHorizontal: wp(5), minHeight: hp(15)}}>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
          <Image source={require('../assets/images/dalle.png')}
            style={{width: wp(8), height: hp(4), marginRight: wp(2) }}
            resizeMode="contain"
          />
          <Text style={{color: "#374151", fontWeight: 'bold', fontSize: wp(6)}}>DALL-E</Text>
        </View>
        <View>
          <Text style={{fontSize: wp(3.8), color: "#374151", fontWeight: '500'}}>DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.</Text>
        </View>
      </View>

      <View style={{backgroundColor: 	'cyan', borderRadius: wp(3.5), padding: wp(5), marginVertical: hp(1.5), marginHorizontal: wp(5), minHeight: hp(15)}}>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
          <Image source={require('../assets/images/smartai.png')}
            style={{width: wp(8), height: hp(4), marginRight: wp(2) }}
            resizeMode="contain"
          />
          <Text style={{color: "#374151", fontWeight: 'bold', fontSize: wp(6)}}>Smart AI</Text>
        </View>
        <View>
          <Text style={{fontSize: wp(3.8), color: "#374151", fontWeight: '500'}}>A powerful voice assistant with the abilities of ChatGPT and DALL-E, providing you the best of both worlds.</Text>
        </View>
      </View>

    </View>
  )
}
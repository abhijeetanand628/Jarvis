import { Text, View, Image, TouchableOpacity } from "react-native";
import React from 'react';
import { useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function WelcomeScreen() {

    const router = useRouter();

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{flex: 1, marginTop: hp(10.5), alignItems: 'center', justifyContent: "center"}}>
        <Text style={{fontSize: wp(10), color: "#374151", fontWeight: 'bold'}}>Jarvis</Text>
        <Text style={{fontSize: wp(4), color: "#4B5563", padding: 5, fontWeight: '500' }}>
          The Future is here, powered by AI.
          </Text>
      </View>
      <View style={{flex: 4, justifyContent: "flex-start"}}>
        <Image source ={require('../assets/images/boticon.png')} 
        style={{ width: wp(100), height: hp(50), resizeMode: 'contain', alignSelf: 'center' }} />
      </View>
      <View style={{flex: 1.1}}>
        <TouchableOpacity style={{backgroundColor: 'green', alignItems: "center", borderRadius: wp(4), paddingVertical: hp(1.4), width: wp("88%"), alignSelf: "center" }}
        onPress={() => router.push('/home')}
        >
        <Text style={{fontSize: wp(6.4), color: 'white' }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
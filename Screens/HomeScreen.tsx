import React, {useState} from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from '../components/Features';
import { dummyMessages } from '../constants';

export default function HomeScreen() {
    const [messages, setMessages] = useState(dummyMessages);
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{flex: 0.45, justifyContent: 'center', alignItems: "center"}}>
            <Image source={require('../assets/images/bot.png')} 
                style={{width: wp(30), height: hp(20)}} />
        </View>
        {
            messages.length > 0 ? (
                <View style={{flex: 1}}>
                    <Text style={{ fontSize: wp(6.5), marginLeft: wp(5), color: "#374151", fontWeight: '500'}}>Assistant</Text>
                    <View style={{backgroundColor: '#e5e5e5', borderRadius: wp(3.5), padding: wp(2), marginVertical: hp(1.5), marginHorizontal: wp(5), minHeight: hp(45)}}>
                        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                            {
                                messages.map((message, index) => {
                                    if(message.role == 'assistant') {
                                        if(message.content.includes('https')) {
                                            // ITS AN AI IMAGE
                                            return (
                                                <View key={index} style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                                                    <View style={{padding: wp(1), backgroundColor: '#d1fae5' }}>
                                                        <Image source = {{uri: message.content}} 
                                                            style={{borderRadius: wp(2), width: wp(60), height: hp(30)}}
                                                            resizeMode='cover'
                                                            />
                                                    </View>
                                                </View>
                                            )
                                        } else {
                                            // TEXT RESPONSE
                                            return (
                                                <View key={index} 
                                                    style={{width: wp(70), backgroundColor: '#d1fae5', borderRadius: wp(3), padding: wp(2), minHeight: wp(0.2), marginVertical: hp(1)}}>
                                                    <Text>{message.content}</Text>
                                                </View>
                                        )
                                        }
                                    } else {
                                        // USER INPUT
                                        return (
                                            <View key={index} 
                                                style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                                <View style={{width: wp(70), backgroundColor: 'white', borderRadius: wp(3), padding: wp(2), minHeight: wp(0.2), marginVertical: hp(1)}}>
                                                    <Text>{message.content}</Text>
                                                </View>
                                            </View>
                                        )
                                    }
                                })
                            }

                        </ScrollView>
                    </View>
                </View>
            ) : (
                <Features />
            )
        }

        <View style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity>
                <Image style={{borderRadius: wp(8), width: wp(20), height: hp(8), padding: wp(10), marginBottom: wp(2)}} source={require('../assets/images/recordingicon.jpg')} />
            </TouchableOpacity>
        </View>

    </View>
  );
}

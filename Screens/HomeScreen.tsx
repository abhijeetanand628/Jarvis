import React, {useState, useEffect} from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from '../components/Features';
import { dummyMessages } from '../constants';
import LottieView from 'lottie-react-native';
import Voice from '@react-native-community/voice';

export default function HomeScreen() {
    const [messages, setMessages] = useState(dummyMessages);
    const [recording, setRecording] = useState(false);
    const [speaking, setSpeaking] = useState(true);

    const speechStartHandler = e => {
        console.log('speech start handler');
    }

    const speechEndHandler = e => {
        setRecording(false);
        console.log('speech end handler');
    }

    const speechResultsHandler = e => {
        console.log('voice event: ',e);
    }

    const speechErrorHandler = e => {
        console.log('speech error handler: ',e);
    }

    const startRecording = async() => {
        setRecording(true);
        try{
            await Voice.start('en-US'); // en-GB
        } catch(error)
        {
            console.log('error : ', error);
        }
    }

    const stopRecording = async() => {
        try{
            await Voice.stop();
        } catch(error)
        {
            console.log('error : ', error);
        } finally{
            setRecording(false);
            // FETCH RESPONSE
        }
    }

    const clear = () => {
        setMessages([]);
    }

    const stopSpeaking = () => {
        setSpeaking(false);
    }

    useEffect(() => {
        Voice.onSpeechStart = speechStartHandler;
        Voice.onSpeechEnd = speechEndHandler;
        Voice.onSpeechResults = speechResultsHandler;
        Voice.onSpeechError = speechErrorHandler;

        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        }
    },[])

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{flex: 0.50, justifyContent: 'center', alignItems: "center"}}>
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

        <View style={{flex: 0.2, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}>

            {
                speaking && (
                    <TouchableOpacity 
                        onPress={stopSpeaking}
                        style={{backgroundColor: "#EF4444", borderRadius: wp(4), padding: wp(1.5)}} >
                        <Text style={{color: 'white', fontWeight: '500', fontSize: wp(4.5)}}>Stop</Text>
                    </TouchableOpacity>
                )
            }

            {
                recording ? (
                    <TouchableOpacity onPress={stopRecording}>
                        <LottieView style={{borderRadius: wp(8), width: wp(28), height: hp(11), marginBottom: wp(0.8)}} 
                            resizeMode= "contain"
                            source={require('../assets/images/voice.json')} 
                            autoPlay
                            loop
                            />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={startRecording}>
                        <Image style={{borderRadius: wp(8), width: wp(27), height: hp(10), marginBottom: wp(1)}} 
                            resizeMode= "contain"
                            source={require('../assets/images/recordingicon.jpg')} />
                    </TouchableOpacity>
                )
            }

            {
                messages.length > 0 && (
                    <TouchableOpacity 
                        onPress={clear}
                        style={{backgroundColor: "#9CA3AF", borderRadius: wp(4), padding: wp(1.5)}} >
                        <Text style={{color: 'white', fontWeight: '500', fontSize: wp(4.5)}}>Clear</Text>
                    </TouchableOpacity>
                )
            }
            
        </View>

    </View>
  );
}

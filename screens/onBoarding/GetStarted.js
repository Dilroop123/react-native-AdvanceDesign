import React, { useState } from 'react';
import { I18nManager, StyleSheet, Dimensions, Text, View ,Image} from 'react-native';
import Swiper from 'react-native-swiper';
import { Card, Button } from 'react-native-elements'
import { multiply } from 'react-native-reanimated';
const isRTL = I18nManager.isRTL;
const { width, height } = Dimensions.get('window');
const SLIDE_HEIGHT = 0.51 * height;



const GetStarted = ({navigation,route}) => {







    return (
        <View style={styles.container}>
            <View style={styles.slider}>
                {/*<Text style={{ fontWeight: 'bold', fontSize: 200, color: '#fff' }}>OUT</Text>*/}
                <View style={styles.underlay}>
                              <Image source={require('../../assets/bg.jpg')} style={styles.picture}/>
                          </View>
            </View>


            <View style={styles.footer}>
                <View style={styles.footerMagic} >
               
                              <Image source={require('../../assets/bg.jpg')} style={styles.picture}/>
                          
                </View>
                <View style={styles.footerContent}>


                    <View style={{ marginTop: 50, alignItems: 'center', paddingHorizontal: 26 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 22, textAlign: 'center' }}>Lets Get Started</Text>
                        <Text style={{ fontSize: 16, color: 'gray', marginTop: 10 }}>Login to your account below or signup for amazing experience</Text>

                        <Button
                            title='Have an account?Login'
                            onPress={()=>navigation.navigate('StayConnected')}
                            buttonStyle={{ backgroundColor: '#2CB9B0', borderRadius: 24, paddingHorizontal: 20, marginTop: 30 }}
                        />

                        <Button
                            title='Join us.its Free'
                            buttonStyle={{ backgroundColor: '#D3D3D3', borderRadius: 24, paddingHorizontal: 55, marginTop: 12 }}
                        />

                        <Button
                            title='Forget Password'
                            buttonStyle={{ backgroundColor: '#D3D3D3', borderRadius: 24, paddingHorizontal: 55, marginTop: 12 }}
                        />

                    </View>




                </View>
            </View>


        </View>
    );
}

export default GetStarted;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
       
    },
    slider: {
        
        height: SLIDE_HEIGHT,
        borderBottomEndRadius: 75,
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    footer: {
        flex: 1
    },
    slidecontainerTextRight: {

        height: 100,
        transform: [
            { translateY: (SLIDE_HEIGHT - 100) / 2 },
            { translateX: (-width) / 2 + 50 },
            { rotate: '90deg' }],
        justifyContent: 'center'
    },
    footerContent: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 75,
        paddingHorizontal: 24
    },
    title: {
        fontSize: 75,
        textAlign: 'center',
        color: '#fff'

    },
    footerMagic: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'cyan'
    },
    backgroundImage: {
        ...StyleSheet.absoluteFill,
        borderRadius:25
      },
      underlay:{
        ...StyleSheet.absoluteFill,
        justifyContent:'flex-end',
       
    },
    picture:{
        ...StyleSheet.absoluteFill,
        height:SLIDE_HEIGHT,
        width:'100%',
        borderBottomRightRadius: 75
    },
});



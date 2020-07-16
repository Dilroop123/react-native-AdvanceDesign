import React, { useState } from 'react';
import { I18nManager, StyleSheet, Dimensions, Text, View ,Image} from 'react-native';
import Swiper from 'react-native-swiper';
import { Card, Button } from 'react-native-elements'
import { multiply } from 'react-native-reanimated';
const isRTL = I18nManager.isRTL;
const { width, height } = Dimensions.get('window');
const SLIDE_HEIGHT = 0.51 * height;



const StayConnected = () => {







    return (
        <View style={styles.container}>
            <View style={styles.header}>
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
                        <Text style={{color:'gray',fontSize:12}}>STAY CONNECTED</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 22, textAlign: 'center' }}>See What your Friends are Wearing</Text>
                        <Text style={{ fontSize: 16, color: 'gray', marginTop: 10 }}>Login to your account below or signup for amazing experience</Text>

                        <Button
                            title='Connect Facebook'
                            buttonStyle={{ backgroundColor: '#2CB9B0', borderRadius: 24, paddingHorizontal: 20, marginTop: 30 }}
                        />

                    </View>

    </View>
            </View>
               <View style={{height:0.20 * height,backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>
              <View style={{backgroundColor:'white',padding:15,borderRadius:30}}>
                  <Text>X</Text>
              </View>
               </View>

        </View>
    );
}

export default StayConnected;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
       
    },
    header: {
        
        height: 0.30 * height,
       
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomStartRadius:75
    },
    footer: {
        flex: 1,
       
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
        borderTopRightRadius: 75,
        borderBottomLeftRadius:55,
        borderBottomRightRadius:55,
        paddingHorizontal: 24,
      height:'25%'
    },
    title: {
        fontSize: 75,
        textAlign: 'center',
        color: '#fff'

    },
    footerMagic: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'black',
       
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
        height: 0.30 * height,
        width:'100%',
        borderBottomLeftRadius: 75
    },
});



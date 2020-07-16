import React, { useState } from 'react';
import { I18nManager, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Text, Image, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { Card, Button } from 'react-native-elements'
import Color from 'color';
import { multiply } from 'react-native-reanimated';
const isRTL = I18nManager.isRTL;
const { width, height } = Dimensions.get('window');
const SLIDE_HEIGHT = 0.61 * height;

const slides = [
    {
        id: 0,
        title: 'Relaxed',
        picture: require('../../assets/1.png'),
        color: '#BFEAF5'
    },
    {
        id: 1,
        title: 'Playful',
        picture: require('../../assets/2.png'),

        color: '#BEECC4'
    },
    {
        id: 2,
        title: 'Excentric',
        picture: require('../../assets/3.png'),
        color: '#FFE4D9'

    },
    {
        id: 3,
        title: 'Funky',
        picture: require('../../assets/4.png'),
        color: '#FFDDDD'

    },
];

const footerData = [
    {
        id: 0,
        title: 'Find Your Outfits',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo'
    },
    {
        id: 1,
        title: 'Hear it first,Wear it First',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo'
    },
    {
        id: 2,
        title: 'Your Style,Your Way',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo'

    },
    {
        id: 3,
        title: 'Look Good , Feel Good',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo'

    },
];

const OnBoarding = ({ navigation, route }) => {
    let textInput = null;
    const [activeIndex, setActiveIndex] = useState(0);
    const [footerSelectedData, SetFooterSelectedData] = useState(footerData[0])
    const [bgcolor, setBgcolor] = useState('#BFEAF5');


    const onIndexChanged = (index) => {

        setBgcolor(slides[index].color);
        SetFooterSelectedData(footerData[index])
        let NewactiveIndex;
        if (isRTL) {

            NewactiveIndex = slides.length - 1 - index;
        } else {

            NewactiveIndex = index;
        }
        setActiveIndex(NewactiveIndex);
    };

    const previousSlide = () => {

        textInput.scrollBy(-1, true);
    };

    const nextSlide = () => {

        if (activeIndex == 3) {
            navigation.navigate('GetStarted');
        } else {
            textInput.scrollBy(1, true);
        }

    };


    var sliderStyle = StyleSheet.flatten([
        styles.slider,
        {
            backgroundColor: bgcolor
        }
    ])

    var footerStyle = StyleSheet.flatten([
        styles.footerMagic,
        {
            backgroundColor: bgcolor
        }
    ])

    var cardOverlayStyle = StyleSheet.flatten([
        styles.cardOverlay,
        {
            backgroundColor: Color(bgcolor).alpha(0.2)
        }
    ])

    return (
        <View style={styles.container}>
            <View style={sliderStyle}>
                <Swiper


                    ref={(swiper) => { textInput = swiper; }}
                    index={isRTL ? slides.length - 1 : 0}
                    onIndexChanged={onIndexChanged}
                    loop={false}
                    showsPagination={false}>
                    {slides.map((item) => (
                     
                            

                           <View key={item.id}>
                          <View style={styles.underlay}>
                              <Image source={item.picture} style={styles.picture}/>
                          </View>
                            <View  style={styles.slidecontainerTextRight}>
                                <Text style={styles.title}>{item.title}</Text>

                            </View>
                            </View>
                
                    ))}
                </Swiper>

            </View>
            <View style={styles.footer}>
                <View style={footerStyle} />
                <View style={styles.footerContent}>


                     <View style={styles.row}>
                        {slides.map((item, i) => (
                            <View
                                key={item.id}
                                style={[
                                    styles.dot,
                                    activeIndex === i ? styles.bgDark : styles.bgLight
                                ]}
                            />
                        ))}
                    </View>


                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{footerSelectedData.title}</Text>
                        <Text style={{ marginTop: 10, color: 'gray', paddingHorizontal: 30 }}>{footerSelectedData.description}</Text>
                        <Button
                            title={footerSelectedData.id == 3 ? 'Lets Get Started' : 'Next'} onPress={nextSlide} buttonStyle={{ backgroundColor: footerSelectedData.id == 3 ? '#2CB9B0' : '#D3D3D3', borderRadius: 24, paddingHorizontal: 80, marginTop: 40 }} />

                    </View>



                </View>
            </View>


        </View>
    );
}

export default OnBoarding;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    slider: {
        height: '65%',
        borderBottomEndRadius: 75
    },
    footer: {
        flex: 1
    },
   
    underlay:{
        ...StyleSheet.absoluteFill,
        justifyContent:'flex-end'
    },
    picture:{
        ...StyleSheet.absoluteFill,
        height:430,
        width:350
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
        justifyContent: 'center'
    },
    title: {
        fontSize: 75,
        textAlign: 'center',
        color: '#fff'

    },
    footerMagic: {
        ...StyleSheet.absoluteFill
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    dot: {
        margin: 4,
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    bgDark: {
        backgroundColor: '#2CB9B0',
    },
    bgLight: {
        backgroundColor: '#D3D3D3',
        opacity: 0.3,
    }
});



import React from "react";
import propTypes  from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; 
import { LinearGradient } from "expo-linear-gradient";



const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#141E30", "#243B55"],
        title: "Сиди дома",
        subtitle: "Ты видишь на улице пиздес?",
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#3a7bd5", "#3a6073"],
        title: "Возми зонтик",
        subtitle: "Ты видишь на улице пиздес?",
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#3E5151", "#DECBA4"],
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#000046", "#1CB5E0"],
    },
    Dust: {
        iconName: "weather-wind-variant",
        gradient: ["#B79891", "#94716B"],
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#56CCF2", "#2F80ED"],
        title:"Погода supper"
    },
    Snow: {
        iconName: "snow",
    },
    Smoke: {
        iconName: "weather-wind",
        gradient: ["#56CCF2", "#2F80ED"],
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#606c88", "#3f4c6b"],
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#757F9A", "#D7DDE8"],
        title: "Облачно",
        subtitle: "Вазми зонтик",
    },
};


export default function Weather({temp,condition}){
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
            <MaterialCommunityIcons
                name={weatherOptions[condition].iconName}
                size={96}
                color={"#fff"}
            />
            <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow","Mist","Smoke","Haze","Dust","Fog","Sand","Dust","Ash","Squall","Tornado","Clear","Clouds"]).isRequired
};


const  styles = StyleSheet.create({
    container:{
        flex:1,
    },
    halfContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    temp:{
        fontSize:42,
        color:"#fff",
    },
    title:{
        color:"#fff",
        fontWeight:"300",
        fontSize: 44,
        marginBottom:10,
        textAlign:'left'
    },
    subtitle:{
        color:"#fff",
        fontWeight:"300",
        fontSize:24,
        textAlign:'left'
    },
    textContainer:{
        flex:1,
        justifyContent:"center",
        paddingHorizontal:40,
        alignItems:"flex-start"
    }
})
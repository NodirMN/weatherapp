import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from "react-native";
import Loading from './Loadin';
import * as Location from "expo-location";
import React from 'react';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "36794b3fa99703c059aa5c479fd82ec5";

export default class extends React.Component {

    state = {
      isLoading:true
    }

    getWeather = async (latitude, longitude) =>{
        const { data:{main:{temp}, weather} } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,);

          this.setState({ isLoading: false, temp: temp, condition:weather[0].main}),
          console.log(data)
    }

  getLocation = async () => {
    try {
      await Location.requestBackgroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("I can't find location", "I`m sorry :(")
    }
  }
  componentDidMount(){
      this.getLocation();
  
  }
  render (){
    const {isLoading, temp, condition} = this.state
      return isLoading ? (
        <Loading />
      ) : (
        <Weather temp={Math.round(temp)} condition={condition} />
      );
  }

}



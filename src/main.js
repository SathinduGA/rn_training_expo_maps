import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Button } from 'react-native';

export default class Application extends React.Component {
  
  onMapChange = (region) => {
    console.log(region);
  }

  navigateToSpecificLocation = (latitude, longitude) => {
    let temp = {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
    };
    this.MAP_REF.animateToRegion(temp, 1000);
  } 

  buttonAction = () =>{
    this.navigateToSpecificLocation(6.9201804113259415,79.86039010807872);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <MapView 
          style={styles.mapStyle}
          ref={component => this.MAP_REF = component}
          zoomEnabled={true}
          showsUserLocation={true}
          followsUserLocation={true}
          onRegionChangeComplete={(region) => this.onMapChange(region)} />

        <Button
          style={styles.button}
          title="Press Me"
          onPress={() => this.buttonAction()}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    width: '100%',
    height: '100%',
  },
  button: {
    position: 'absolute',
    bottom: 30,
    right: 30
}
});
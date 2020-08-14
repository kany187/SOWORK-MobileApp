import React from "react";
import styled from "styled-components";
import MapView from "react-native-maps";
import * as Permissions from "expo-permissions";

class Map extends React.Component {
  state = {
    latitude: null,
    longitude: null
  };

  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);

    if (status != "granted") {
      const response = await Permissions.askAsync(Permissions.LOCATION);
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        this.setState({ latitude, longitude }),
      error => console.log("Error:", error)
    );
  }

  render() {
    const { latitude, longitude } = this.state;
    if (latitude) {
      return (
        <MapView
          showsUserLocation
          style={{ flex: 1 }}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
      );
    }
    return <Container></Container>;
  }
}

export default Map;

const Container = styled.View`
  flex: 1;
`;

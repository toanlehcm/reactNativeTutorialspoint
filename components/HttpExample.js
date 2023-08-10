import React, { Component } from 'react'
import { View, Text } from 'react-native'

class HttpExample extends Component {
  state = {
    data: ''
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          data: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        <div>
          <Text>Title: </Text>
          <Text>{this.state.data.title}</Text>
        </div>

        <div>
          <Text>Body: </Text>
          <Text>{this.state.data.body}</Text>
        </div>
      </View >
    )
  }
}

export default HttpExample
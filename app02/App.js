import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };

    this.somar = this.somar.bind(this)
    this.subtrair = this.subtrair.bind(this)
  }

  somar(){
  this.setState({
    contador: this.state.contador + 1,
    });
  }

  subtrair(){
    if(this.state.contador > 0){
      this.setState({
        contador: this.state.contador - 1,
      });
    }
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}> Contador de Pessoas </Text>
        
        <Text style={styles.result}> {this.state.contador} </Text>
        <Button style={styles.button} title="+" onPress={this.somar} />
        <Button title="-" onPress={this.subtrair} />

        
      </View>
    );
  }
}

export default App;

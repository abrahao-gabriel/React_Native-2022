import React, { Component } from 'react';
import { View, Text, Button,Image} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado:""
    };
    this.calcular = this.calcular.bind(this);
  }
  calcular(){
    this.setState({
      resultado: Math.floor(Math.random() * 10)
    })
  }
 
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.texto}> {'Jogo do N° aleatório'} </Text>  
      <Image
          source={{ uri: 'https://static.thenounproject.com/png/2453698-200.png'}}
          style={styles.img}
        />
      <Text style={styles.resultado}> {'Pense um N° de 1 a 10'} </Text>  
      <Text style={styles.input}>{this.state.resultado}</Text>
            <Button title="Descobrir" onPress={this.calcular} />
      </View>
    );
  }
}
 
export default App;
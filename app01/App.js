import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
 
    let nome = 'Gabriel de Almeida Abrahão';
    let img = 'https://64.media.tumblr.com/45444955b4ca2135f27975424b5fe834/9282fef07a9848e1-4f/s400x600/a0a2f83da41bd968ed5e8de8cb24686e9c96f6a9.png';
 
    return(
      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
      <Image
          source={{ uri: img }}
          style={{ width: 200, height: 200}}/>
        <Text style={{fontSize:15, fontWeight: 'bold', marginTop:12}}>Dados Pessoais:</Text>
        <Text>{nome}</Text>

        <Text style={{fontSize:15, fontWeight: 'bold', marginTop:12}}>Formação:</Text>
        <Text>Formando em Sistemas para Internet</Text>
 
        <Text style={{fontSize:15, fontWeight: 'bold', marginTop:12}}>Experiência:</Text>
        <Text>Técnico em Informática, Suporte Técnico.</Text>

        <Text style={{fontSize:15, fontWeight: 'bold', marginTop:12}}>Projetos:</Text>
        <Text>Gametracking - TCC</Text>
 

 
      </View>
    )
  }
}
 
export default App;


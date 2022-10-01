import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,Image } from 'react-native';
 
class App extends Component{
 
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.h1}>{'Anúncios'}</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
        <View style={styles.card}><Image
          source={{ uri: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRslt8Vt7WROPnbnn_mHSzHXPyGtBxH0O2PQ8A5gwf-JReq5ZlUuk80PKp3X9Bo6Gi3KgO8d9QObHX-cAc66sSi-n3ZeJqG7YgY8fduJsOLhDabpN1lwc5sBw&usqp=CAE'}}
           style={styles.img}
        />
        <Text style={styles.nome}>{'Fusca Rosa'}</Text>
        <Text style={styles.valor}>{'R$ 3.900,00'}</Text>
        </View>
        <View style={styles.card}><Image
          source={{ uri: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTspxN902MrbmNawrt71zY38dUsit0U9ExHxImGMs8wRQbiu1R0O9roGxwGI9BxQGbf3vxnibSjcHzQEwsRQZVBpEXi6C6k8ItENSwMXMCf9ugeAGL8DXzR&usqp=CAE'}}
           style={styles.img}
        />
        <Text style={styles.nome}>{'Rodinho de Pia'}</Text>
        <Text style={styles.valor}>{'R$ 9,99'}</Text>
        </View>
        <View style={styles.card}><Image
          source={{ uri: 'https://cdn.motor1.com/images/mgl/qnNpJ/s3/corrida-de-fiat-uno-com-escada.jpg'}}
           style={styles.img}
        />
        <Text style={styles.nome}>{'Fiat Uno + Escada'}</Text>
        <Text style={styles.valor}>{'R$ 12.000,00'}</Text>
        </View>
        <View style={styles.card}><Image
          source={{ uri: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRdm7fJjZg28C4QQF7XAl3rQfgUgTTaWt9SPB6rLZYpbuEpmhmO_DutLRnCQR1QzkyyDXmUHrfELjI-Gy-SN_s0PuHYcvg0ZNjKdx09kAe6F3eGZ_IgER6B&usqp=CAE'}}
           style={styles.img}
        />
        <Text style={styles.nome}>{'Nintendo Switch'}</Text>
        <Text style={styles.valorAnti}>{'R$ 2.199,90'}</Text>
        </View>
          
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    marginTop:80,
    flex: 1
  },
  h1:{
    fontSize:50,
    textAlign: 'center',
    marginBottom:30
  },
  nome:{
    fontSize:20,
    textAlign: 'center',
    marginBottom:30
  },
  valor:{
    fontSize:16,
    textAlign: 'center',
  },
  valorAnti:{
    fontSize:14,
    textAlign: 'center',
  },
  img:{
    width: 150, 
    height: 150, 
    alignSelf: 'center', 
    marginTop:10,
    marginBottom:10
},
  card:{
    height: 250,
    width: 160,
  }
})

 
export default App;
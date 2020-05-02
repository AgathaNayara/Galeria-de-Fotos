import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button
} from 'react-native'
const images_paths =[require('./assets/p0.png'),
require('./assets/p1.png'),require('./assets/p2.png'),
require('./assets/p3.png'),require('./assets/p4.png'),
require('./assets/p5.png'),require('./assets/p6.png')];

export default class App extends React.Component {
  state ={
    counter:0
  }
  voltar(){
    var tempCount = this.state.counter;
    tempCount-=1;
    if(tempCount <0){
      tempCount = 0;
      alert("primeira imagem")
    }
    this.setState({counter:tempCount})
  }
  avancar(){
    var tempCount = this.state.counter;
    tempCount+=1;
    if(tempCount > images_paths.length -1){
      tempCount = images_paths.length-1;
      alert("ultima imagem")
    }
    this.setState({counter:tempCount})
  }
  render() {
    const {counter} = this.state
    return (

      <View style= {{
      padding: 16, 
      backgroundColor: 'purple', 
      flex: 1}}>

      <Image
      source={images_paths[counter]}
      style={{
      alignSelf : 'center', 
      height: 200,
      width: 200,
      margin: 10}}
      />

      <Button 
       title= 'IMAGEM ANTERIOR' 
       color= 'pink'
       onPress= {()=>{this.avancar()}}/>

      <Button
       title= 'PRÓXIMA IMAGEM' 
       color= 'pink'
       onPress= {()=>{this.voltar()}}/>
      </View>
    )
  }
  
}

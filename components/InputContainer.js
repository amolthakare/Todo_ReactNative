import { useState } from 'react'
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'

const InputContainer = (props) => {
    const [enterText,setEnterText]= useState('');
    function goalInputHandler(text){
        setEnterText(text)
    }
    function handleAddgoal(){
        props.onAddGoal(enterText);
        setEnterText('');
    }
  return (
    <Modal visible={props.visible}>
        <View style={style.inputContainer}>
            <TextInput placeholder='enter your goal' style={style.inputText} onChangeText={goalInputHandler} value={enterText}></TextInput>
            <View style={style.buttonContainer}>
                <View style={style.button}>
                    <Button title='Cancel' onPress={props.onCancel} color='#f31282'/>
                </View>
                <View style={style.button}>
                    <Button title='Add Goal' onPress={handleAddgoal}/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

const style = StyleSheet.create({
    buttonContainer:{
        flexDirection:'row',
        marginTop:16,
        gap:10,
    },
    inputContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#cdddf7',
    },
    inputText:{
        width:"100%",
        borderWidth:1,
        borderColor:'grey',
        padding:10,
        margin:10,
    },
    button:{
        width:'50%',
        padding:10,
    },
})

export default InputContainer
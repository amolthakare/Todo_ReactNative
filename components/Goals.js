import { Pressable, StyleSheet, Text, View } from "react-native"

const Goals = (props) => {
  return (
    <View style={styles.goalItem}>
        <Pressable android_ripple={{color:'#4872fa'}} onPress={props.onDelete.bind(this, props.id)} style={({ pressed }) => pressed && styles.pressedItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
    </View>
  )
}

export default Goals

const styles = StyleSheet.create({
    goalText:{
        padding:8,
        backgroundColor:'#8da6f7',
    },
    goalItem:{
        margin:8,
    },
    pressedItem: {
        opacity: 0.5,
    },
})
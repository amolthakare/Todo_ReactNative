import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import InputContainer from './components/InputContainer';
import { useState } from 'react';
import Goals from './components/Goals';

export default function App() {
  const [openModal,setOpenModal]=useState(false);
  const [courseGoals,setCourseGoals] = useState([]);
  function addGoalHandler(){
    setOpenModal(false)
  }
  function startGoalHandler(){
    setOpenModal(true)
  }
  function endAddGoal(){
    setOpenModal(false)
  }
  function addGoalHandler(inputtext){
    setCourseGoals((goals)=>[...goals,{text:inputtext,id:Math.random().toString()},]);
    endAddGoal()
  }
  function handleDelete(id){
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  console.log(courseGoals)
  return (
    <>
      <StatusBar style='dark'/>
      <View style={styles.container}>
        <View>
          <Button title='add new goal' onPress={startGoalHandler}/>
        </View>
        <InputContainer visible={openModal} onAddGoal={addGoalHandler} onCancel={endAddGoal}/>
        <View style={styles.goalContainer}>
            <FlatList data={courseGoals} 
              renderItem={(itemData)=>{
                return (
                  <Goals text={itemData.item.text} id={itemData.item.id} onDelete={handleDelete}></Goals>
                )
              }}
              alwaysBounceVertical={false}
              keyExtractor={(item,index)=>{
                return item.id;
              }}
            >

            </FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    paddingHorizontal:16,
  },
  goalContainer:{
    flex:5,
  }
});

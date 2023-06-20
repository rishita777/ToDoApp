
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import { Feather } from '@expo/vector-icons';

// const deviceWidth = Dimensions.get('window').width;

// function App() {
//   const [notes, setNotes] = useState([]);
//   const [note, setNote] = useState('');

//   const addNote = () => {
//     if (note.length !== 0) {
//       setNotes([...notes, { task: note, completed: false }]);
//       setNote('');
//     }
//   };

//   const deleteNote = (index) => {
//     const updatedNotes = [...notes];
//     updatedNotes.splice(index, 1);
//     setNotes(updatedNotes);
//   };

//   const CompletNode = (index) => {
//     const updatedNotes = [...notes];
//     updatedNotes[index].completed = !updatedNotes[index].completed;
//     setNotes(updatedNotes);
//   };

//   return (
//     <View>
//       <Text style={styles.heading}>TODO LIST </Text>
//       <Text style={{fontWeight:'bold',marginBottom:30,fontSize:25,marginLeft:60}}>Add Todo 🗎 </Text>
//       <View style={styles.form}>
       
//         <TextInput
//           value={note}
//           onChangeText={setNote}
//           placeholder="Enter the task"
//           style={styles.field}
//         />
//         <View>
//           <TouchableOpacity onPress={addNote}>
//             <Text style={styles.btn}>+</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       {notes.length === 0 ? (
//         <Text style={{ fontSize: 28, marginTop: 20, textAlign: 'center' }}>
//           No Task added..
//         </Text>
//       ) : (
//         <View>
//            <Text style={{fontWeight:'bold',marginBottom:30,fontSize:18,color:'blue',marginLeft:80}}>All Todos 🗎 </Text>
//           {notes.map((note, index) => (
//             <View key={index} style={styles.noteContainer}>
//               <TouchableOpacity
//                 style={styles.taskContainer}
//                 onPress={() => CompletNode(index)}
//               >
//                 <Feather
//                   name={note.completed ? 'check-circle' : 'circle'}
//                   size={24}
//                   color={note.completed ? 'green' : 'black'}
//                 />
//                 <Text
//                   style={[
//                     styles.noteText,
//                     note.completed && styles.completedTask,
//                   ]}
//                 >
//                   {note.task}
//                 </Text>

//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => deleteNote(index)}>
//                 <Text style={styles.deleteBtn}>Delete</Text>
//               </TouchableOpacity>
//             </View>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   heading: {
//     fontSize: 28,
//     marginVertical: 40,
//     width: deviceWidth,
//     textAlign: 'center',
//     color: 'blue',
//     fontWeight: 'bold',
//     textShadowColor: 'blue',
//     textShadowRadius: 2,
//   },
//   field: {
//     borderColor: 'black',
//     borderWidth: 1,
//     width: 2 * (deviceWidth / 4),
//     borderRadius: 40,
//     paddingLeft: 20,
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//   },
//   btn: {
//     fontSize: 28,
//     height: 50,
//     width: 50,
//     textAlign: 'center',
//     backgroundColor: 'gray',
//     borderRadius: 50,
//     paddingTop: 4,
//   },
 
 
//   noteContainer: {
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent:'space-between',
//         marginVertical: 5,
//         marginHorizontal: 16,
//         padding: 10,
//         borderRadius: 40,
//         elevation: 4,
//         backgroundColor: 'white',
//       },
//       noteText: {
//         flex: 1,
//         fontSize: 22,
//         color:'green',
//         borderColor:'blue',
//         borderWidth: 1,
//         display:'flex',
//         flexDirection: 'column',
//         paddingLeft:50,
//         paddingTop:50,
//         paddingBottom:50,
//         paddingRight:50,
//         height:70,
//         width:220,
//         backgroundColor:'lightblue'
//       },
//       completedTask: {
//         textDecorationLine: 'line-through',
//         color: 'green',
//       },
//       deleteBtn: {
//         fontSize: 18,
//         color: 'red',
//         marginLeft: 10
//       },
//     });
    
//     export default App;

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const deviceWidth = Dimensions.get('window').width;

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addNote = () => {
    if (note.length !== 0) {
      setNotes([...notes, { task: note, completed: false }]);
      setNote('');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const completeTask = (index) => {
    const updatedNotes = [...notes];
    const completedTask = updatedNotes.splice(index, 1)[0];
    completedTask.completed = true;
    setNotes(updatedNotes);
    setCompletedTasks([...completedTasks, completedTask]);
  };

  return (
    <View>
      <Text style={styles.heading}>TODO LIST</Text>
      <Text style={{color:'purple',fontWeight:'bold', marginBottom: 10,
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,}}>Add Todo 🗎</Text>
      <View style={styles.form}>
        <TextInput
          value={note}
          onChangeText={setNote}
          placeholder="Enter the task"
          style={styles.field}
        />
        <View>
          <TouchableOpacity onPress={addNote}>
            <Text style={styles.btn}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      {notes.length === 0 ? (
        <Text style={styles.noTaskText}>No Task added..</Text>
      ) : (
        <View style={styles.taskContainer}>
          <Text style={styles.subHeading}>All Todos 🗎</Text>
          {notes.map((note, index) => (
            <View key={index} style={styles.noteContainer}>
              <TouchableOpacity
                style={styles.taskItem}
                onPress={() => completeTask(index)}
              >
                <Feather
                  name={note.completed ? 'check-square' : 'square'}
                  size={24}
                  color={note.completed ? 'green' : 'green'}
                />
                <Text
                  style={[
                    styles.noteText,
                    note.completed && styles.completedTask,
                  ]}
                >
                  {note.task}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteNote(index)}>
                <Text style={styles.deleteBtn}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
      {completedTasks.length > 0 && (
        <View style={styles.completedTasksContainer}>
          <Text style={styles.subHeading}>Completed Todos ✅</Text>
          {completedTasks.map((completedTask, index) => (
            <View key={index} style={styles.noteContainer}>
              <Text style={styles.completedNoteText}>
                {completedTask.task}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    marginVertical: 40,
    width: deviceWidth,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    textShadowColor: 'blue',
    textShadowRadius: 2,
  },
  subHeading: {
    fontWeight: 'bold',color:'blue',
    marginBottom: 10,
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  field: {
    borderColor: 'blue',
    borderWidth: 1,
    width: 2 * (deviceWidth / 4),
    borderRadius: 40,
    paddingLeft: 20,
    marginBottom: 10,
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  btn: {
    fontSize: 28,
    height: 50,
    width: 50,
    textAlign: 'center',
    backgroundColor: 'pink',
    borderRadius: 50,
    paddingTop: 4,
  },
  taskContainer: {
    marginHorizontal: 20,
  },
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: 'white',
  },
  cardContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: 'white',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noteText: {
    flex: 1,
    fontSize: 22,
    color:'blue',
    borderColor:'blue',
    borderWidth: 1,
    display:'flex',
    flexDirection: 'column',
    paddingLeft:50,
    paddingTop:50,
    paddingBottom:50,
    paddingRight:50,
   height:150,width:150,
    backgroundColor:'pink'
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: 'green',
  },
  deleteBtn: {
    fontSize: 18,
    color: 'red',
    marginLeft: 10,
  },
  noTaskText: {
    fontSize: 28,
    marginTop: 20,
    textAlign: 'center',
  },
  completedTasksContainer: {
    marginTop: 20,
  },
  completedNoteText: {
    fontSize: 18,
    color: 'green',
    marginLeft: 10,
  },
});


export default App;


import { StyleSheet} from 'react-native';

const AddTasksStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: '#FFFFFF',
  },
  btn:{
      
      width: "95%",
      backgroundColor: "#FF0000",
      
      marginTop: 30,
      justifyContent: "center",
    //   alignContent: "center",
    borderRadius: 20,
      height: 40,
      margin: 10,
  },
  mdl:{
    flex: 4,
    backgroundColor: "#000000",
  }
});

export default AddTasksStyles;
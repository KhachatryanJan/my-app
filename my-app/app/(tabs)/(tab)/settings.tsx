import { Text, View } from "react-native";
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';


export default function Settings(){
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: 'column'
        },
        view:{
            width:50,
            height:50,
            borderRadius: 50,
            backgroundColor: 'rgba(155, 153, 153, 0.47)',
            marginTop:60,
            marginLeft:10
        },
        text2:{
            marginTop:-40,
            marginLeft:70,
            fontSize:24
        },
        view2:{
           flexDirection:"row",
          marginLeft:5,
           marginTop:50,
           gap:20
        },
        view3:{
           width:120,
           height:40,
           borderRadius: 20,
           backgroundColor: 'rgba(155, 153, 153, 0.47)',
        },
        text3:{
            marginLeft:20
        },
        view4:{
            width:160,
            height:40,
            borderRadius: 20,
            backgroundColor: 'rgba(155, 153, 153, 0.47)',
        },
        text4:{
            marginLeft:20
        },
        text5:{
            marginLeft:20,
            fontSize:24,
            marginTop:50
        },
        text6:{
            marginLeft:20,
            fontSize:24,
            marginTop:50
        },
        text55:{
            marginLeft:20,
            fontSize:12,
        },
        text66:{
            marginLeft:20,
            fontSize:12,
        }
    })
    return(
        <><View style={styles.view}></View>
        <Text style={styles.text2}>Hello!</Text>
        <View style={styles.view2}>
            <View style={styles.view3}>
                <Text style={styles.text3}>Skitka</Text>
                <Text style={styles.text3}>do 30 %</Text>
            </View>
            <View style={styles.view4}>
            <Text style={styles.text4}>Opllata ...</Text>
            <Text style={styles.text4}>do 47 000 d</Text>
            </View>
        </View>
        <Text style={styles.text5}>Delivery</Text>
        <Text style={styles.text55}>Lorem ipsum dolor sit amet.</Text>
        <Text style={styles.text6}>Digging</Text>
        <Text style={styles.text66}>Lorem ipsum dolor sit amet.</Text>
        </>
    )
}
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor:'#15202B',
    },
    list: {
        marginTop:10,
        padding:10,
      },
      title:{
        fontSize:20,
        margin:10,
        fontWeight: 'bold',
        color:'white',
        alignSelf:'center'
      },
      descriptionContainer:{
        flexDirection: 'row',
        paddingRight: 50,
        backgroundColor:'#495B63',
        borderRadius:10,
        padding:20
      },
      image:{
        width: 50,
        height: 50,
        borderRadius: 25
      },
      textDescription: {
        marginLeft: 10,
        color: 'white'
      },
      bd:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:'10%',
        marginRight:'10%',
        margin:5
      },
      text:{
        fontSize:19,
        color:'white'
      }
})

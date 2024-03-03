import {StyleSheet, Dimensions} from 'react-native';

const dimension = Dimensions.get('screen');
const deviceWidth = dimension.width;
const deviceHeight = dimension.height;
const Styles = StyleSheet.create({
  body: {
    height: deviceHeight,
  },
  header: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 20,
    elevation: 2,
    margin: 5,
    overflow: 'hidden',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  addressText:{
    padding:10,
    color: '#000'
  },
  text:{
    color:'#000',
  },
  tile: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 20,
    elevation: 2,
    margin: 5,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  tileInner: {
    height: 80,
    display: 'flex',
    flexDirection: 'row'
  },
  tileInnerText:{
    padding:10,
    display:'flex',
    justifyContent:'center'
  },
  h1: {
    color: 'black',
  },
  aligntItemsCenter: {
    alignItems: 'center',
  },
  marginVertical10: {
    marginVertical: 10,
  },
  marginTop10: {
    marginTop: 10,
  },
  padding10: {
    padding: 10,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: '#00000080',
  },
  modalView: {
    width: '90%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 7,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10,
  },
  modalText: {
    marginTop: 10,
    textAlign: 'center',
    color: '#000'
  },
  pill: {
    padding: 4,
    margin: 2,
    borderRadius: 10,
    backgroundColor: '#FFA50080',
    alignSelf: 'flex-start',
  },
  pillText: {
    fontSize: 8,
  },
  pillsGroup: {
    overflow: 'scroll',
  },
  flatlist: {
    marginBottom: 50,
  },
  dropdown: {
    marginVertical: 5,
    color: '#000'
  },
  dropdownFlex: {
    display: 'flex',
    flexDirection: 'row',
    width: deviceWidth,
    padding: 10,
  },
  dropdownGroup: {
    width: '50%',
    backgroundColor: 'white',
    padding: 10,
  },
});

export default Styles;

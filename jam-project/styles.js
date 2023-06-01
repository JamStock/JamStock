import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export const StylesColors = StyleSheet.create({
  mainColor: "#D3EAFF",
  subColorLight: "#E3F2FF",
  subColorDeep: "#A5C7FB",
  grayColor: "#BDBDBD",
  whiteColor: "#FFFFFF"
});

export const StylesText = StyleSheet.create({
  smallSize: 12,
  regularSize: 16,
  mediumSize: 20,
  largeSize: 25,
  extraLargeSize: 35,

  thinWeight: 200,
  normalWeight: 400,
  boldWeight: 700,
  extraBoldWeight: 900
});

export const Styles = StyleSheet.create({
  //! 탑 메뉴 영역
  topRoot: {
    width: '100%',
    height: '7%',
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    position: 'absolute', 
    top: 0, 
    // left: 10,
    flex: 0,
    marginTop: Constants.statusBarHeight,
    // borderWidth: 1,
    // borderColor: 'red'
  },
  topWrap: {
    width: "30%",
    height: "100%", 
    paddingLeft: 5,
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center",
    // justifyContent: "center",
  },
  //! 탑 메뉴 - 로고 부분
  logoWrap: {
    height: "100%", 
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: 'red'
  },
  logoText: {
    fontSize: StylesText.extraLargeSize
  },
  logoImage: {
    width: 40, 
    height: 40, 
    marginLeft: 5, 
    // marginTop: -5
  },
  //! 햄버거 버튼 영역
  hambergerWrap: {
    width: "35%", 
    height: "100%", 
    marginLeft: 20, 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "space-around",
    alignItems: "center",
  },
  hambergerBar: {
    width: '100%',
    height: "20%",
    backgroundColor: StylesColors.whiteColor,
    borderRadius: 10,
  },
  //! 홈 화면
  homeRoot: {
    marginTop: Constants.statusBarHeight,
    marginBottom: Constants.BottomTabBarHeight,
    width: '100%', 
    height: '100%', 
    backgroundColor: StylesColors.mainColor,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'red',
    position:'relative',
    flex:1
  },
  homeWrap: {
    width: '100%', 
    height: '40%',
    backgroundColor: StylesColors.subColorLight,
    // flex: 1,
    borderWidth: 1,
    borderColor: 'red'
  },
  container2: {
    width: 80, 
    height: 80, 
    backgroundColor: "beige"
  },
  container3: {
    width: 50, 
    height: 50, 
    backgroundColor:"indianred",
    alignSelf:'center', 
    // elevation:50 //앞으로 나와있는 효과
  },

  // ! 바텀메뉴 스타일 부분
  bottomBox: {
    width: '100%',
    height: '10%',
    backgroundColor:'#A5C7FB',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    margin:0,
    padding:0,
    position:'absolute',
    bottom:0,
    marginBottom: Constants.BottomTabBarHeight,
  },
  bottomView:{
    height: '100%',
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    margin:0,
    padding:0
  },
  // ! 바텀메뉴 터치버튼 부분
  bottomTouch:{
    height: '100%',
    width: '100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    // shadowColor: '#fff',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.7
  },

  // ! 바텀메뉴 이미지 부분
  bottomImg:{
    width:'100%',
    height:'70%',
    resizeMode:'contain'
  },

  // ! 바텀메뉴 글씨 부분
  bottomText:{
    width:'100%',
    height:'30%',
    textAlign:'center',
    fontSize:StylesText.regularSize
  }
});


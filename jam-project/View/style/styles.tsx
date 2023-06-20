import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

/**
 * 앱 테마 컬러 리스트
 * mainColor: '#D3EAFF'
 * subColorLight: '#E3F2FF'
 * subColorDeep: '#A5C7FB'
 * grayColor: '#BDBDBD'
 */

export const StylesColors = StyleSheet.create({
  mainColor: {
    backgroundColor: '#D3EAFF'
  },
  subColorLight: {
    backgroundColor: '#E3F2FF'
  },
  subColorDeep: {
    backgroundColor: '#A5C7FB',
    borderBottomColor: '#A5C7FB'
  },
  grayColor: {
    backgroundColor: '#BDBDBD'
  },
  whiteColor: {
    backgroundColor: '#FFFFFF'
  },
  pinkColor: {
    backgroundColor: "#FFC1C1"
  },
  purpleColor: {
    backgroundColor: "#D8CEFF"
  },
  yellowColor: {
    backgroundColor: "#FAE7B6"
  }
});

export const StylesText = StyleSheet.create({
  sizeExtraSmall: {
    fontSize: 12
  },
  sizeSmall: {
    fontSize: 16
  },
  sizeMedium: {
    fontSize: 20
  },
  sizeLarge: {
    fontSize: 25
  },
  sizeExtraLarge: {
    fontSize: 35
  },
  weightThin: {
    fontWeight: '200'
  },
  weightNormal: {
    fontWeight: '400'
  },
  weightBold: {
    fontWeight: '700'
  },
  weightExtraBold: {
    fontWeight: '900'
  }
});

export const Styles = StyleSheet.create({
  //! 탑 메뉴 영역
  topRoot: {
    width: '100%',
    height: '7%',
    marginTop: '2%',
    padding: '2%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    flex: 0,
    zIndex: 1
  },
  topWrap: {
    width: '30%',
    height: '100%',
    paddingLeft: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  //! 탑 메뉴 - 로고 부분
  logoWrap: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: StylesText.sizeExtraLarge.fontSize
  },
  logoImage: {
    width: 40,
    height: 40,
    marginLeft: 5,
  },
  //! 햄버거 버튼 영역
  hambergerWrap: {
    width: '35%',
    height: '100%',
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  hambergerBar: {
    width: '100%',
    height: '20%',
    backgroundColor: StylesColors.whiteColor.backgroundColor,
    borderRadius: 10,
  },
  //! 홈 화면 - 검색창
  serchBox: {
    width: '95%',
    height: '6%',
    backgroundColor: StylesColors.whiteColor.backgroundColor,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 10,
  },
  serchBar: {
    width: '80%',
    height: '100%',
    textAlign: 'center',
  },
  serchButton: {
    width: '20%',
    height: '100%',
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 20,
  },
  serchButtonText: {
    marginTop: '10%',
    fontSize: StylesText.sizeSmall.fontSize,
    textAlign: 'center',
    color: StylesColors.whiteColor.backgroundColor,
    fontWeight: StylesText.weightExtraBold.fontWeight
  },
  //! 홈 화면
  homeRoot: {
    marginTop: Constants.statusBarHeight,
    marginBottom: Constants.BottomTabBarHeight,
    width: '100%',
    height: '100%',
    backgroundColor: StylesColors.mainColor.backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    flex: 1
  },
  homeArea: {
    width: '100%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  homeWrap: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  homePopular: {
    width: '100%',
    height: '45%',
    backgroundColor: StylesColors.subColorLight.backgroundColor,
    borderRadius: 20,
  },
  titleText: {
    marginTop: 20,
    marginLeft: 15,
    fontSize: StylesText.sizeLarge.fontSize,
    fontWeight: StylesText.weightExtraBold.fontWeight
  },
  rankText: {
    marginTop: 15,
    marginLeft: 20,
    fontSize: StylesText.sizeMedium.fontSize,
    fontWeight: StylesText.weightExtraBold.fontWeight
  },
  homeLove: {
    width: '100%',
    height: '45%',
    backgroundColor: '#E3F2FF',
    borderRadius: 20,
  },
  container2: {
    width: 80,
    height: 80,
    backgroundColor: 'beige'
  },
  container3: {
    width: 50,
    height: 50,
    backgroundColor: 'indianred',
    alignSelf: 'center',
  },

  // ! 바텀메뉴 스타일 부분
  bottomBox: {
    width: '100%',
    height: '10%',
    backgroundColor: StylesColors.mainColor.backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 0,
    padding: 0,
    position: 'absolute',
    bottom: 0,
    zIndex: 1
  },
  bottomView: {
    height: '100%',
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0
  },
  // ! 바텀메뉴 터치버튼 부분
  bottomTouch: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },

  // ! 바텀메뉴 이미지 부분
  bottomImg: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain'
  },

  // ! 바텀메뉴 글씨 부분
  bottomText: {
    width: '100%',
    height: '30%',
    textAlign: 'center',
    fontSize: StylesText.sizeSmall.fontSize
  },

  //! 햄버거 메뉴
  hamBox: {
    marginTop: Constants.statusBarHeight,
    marginLeft: '50%',
    marginBottom: Constants.BottomTabBarHeight,
    width: '1000%',
    height: '1780%',
    backgroundColor: StylesColors.mainColor.backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    flex: 1,
    position: 'absolute',
    transition: 'left 0.6s ease',
    zIndex: 2,
    right: -17,
    top: -46
  },
  hamTop: {
    width: '100%',
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  hamCategory: {
    width: '100%',
    height: '90%',
    backgroundColor: StylesColors.subColorLight.backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  //! 햄버거 - 이름 
  hamName: {
    width: '40%',
    marginTop: 10,
    marginLeft: 10,
    fontSize: StylesText.sizeSmall.fontSize,
    fontWeight: StylesText.weightExtraBold.fontWeight,

  },
  //! 햄버거 - 회원가입, 로그인 버튼
  hamButton: {
    width: '30%',
    height: '30%',
    marginLeft: 5,
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    marginTop: 10,
    textAlign: 'center',

  },
  hamButtonText: {
    marginTop: 3,
    textAlign: 'center',
    fontSize: StylesText.sizeSmall.fontSize,
    fontWeight: StylesText.weightBold.fontWeight,

  },
  //! 햄버거 - 메뉴 리스트
  hamCategoryList: {
    width: '90%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  hamListWrap: {
    width: '80%',
    height: '10%',
    borderBottomWidth: 1,
    borderColor: StylesColors.grayColor.backgroundColor

  },
  hamListText: {
    textAlign: 'center',
  },
  //! 로그인 화면
  loginBox: {
    marginTop: Constants.statusBarHeight,
    marginBottom: Constants.BottomTabBarHeight,
    width: '100%',
    height: '100%',
    backgroundColor: StylesColors.mainColor.backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',

  },
  backButton: {
    width: '6%',
    height: '6%',
    marginRight: '85%',
    marginTop: '2%',
  },
  loginTitle: {
    width: '25%',
    height: '7%',
    fontSize: StylesText.sizeExtraLarge.fontSize,
    marginRight: '62%',
    marginTop: '5%',

  },
  loginImage: {
    width: '25%',
    height: '12%',
    resizeMode: 'contain',
    marginTop: '10%',
    marginBottom: '10%',
  },
  idPwWrap: {
    width: '85%',
    height: '5%',
    marginTop: '6%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',


  },
  idPwText: {
    width: '15%',
    height: '100%',
    fontSize: StylesText.sizeLarge.fontSize,
    textAlign: 'center',
    marginTop: '3%'
  },
  idPwInput: {
    width: '82%',
    height: '100%',
    backgroundColor: StylesColors.whiteColor.backgroundColor,
    borderRadius: 20,
    textAlign: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 4,

  },
  //! 계정찾기, 회원가입 버튼
  loginPageBtnWrap: {
    width: '80%',
    height: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15%',

  },
  loginPageBtn: {
    width: '45%',
    height: '100%',
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,

  },
  loginPageBtnText: {
    fontSize: StylesText.sizeMedium.fontSize,
    textAlign: 'center',
    marginTop: 7
  },
  //! 로그인 버튼
  loginPageLoginBtn: {
    width: '80%',
    height: '5%',
    marginTop: '3%',
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,

  },
  //! 회원가입 페이지
  signUpTitleWrap: {
    width: '100%',
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  signUpTitle: {
    width: '30%',
    height: '50%',
    fontSize: 33,
    textAlign: 'center',
    marginLeft: '5%',
  },
  signUpImage: {
    width: '10%',
    height: '50%',
    resizeMode: 'contain',
    marginLeft: '2%',
  },

  //! 회원가입 목록
  signUpListWrap: {
    width: '100%',
    height: '5%',
    marginTop: '6%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  signUpListText: {
    width: '30%',
    height: '65%',
    fontSize: StylesText.sizeSmall.fontSize,
    fontWeight: StylesText.weightBold.fontWeight,
    textAlign: 'center',

  },
  signUpInput: {
    width: '65%',
    height: '100%',
    backgroundColor: StylesColors.whiteColor.backgroundColor,
    borderRadius: 20,
    textAlign: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 4,

  },
  //! 회원가입 - 유효성 검사 멘트
  signUpValidation:{
    fontSize: StylesText.sizeSmall.fontSize, 
    textAlign: 'center', 
    marginTop: 9
  },
  //! 회원가입, 계정찾기 쪽 버튼
  signUpNFindBtn: {
    width: '35%',
    height: '5%',
    marginTop: '10%',
    marginLeft: '50%',
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 20,


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,

  },

  //! 계정찾기 페이지
  accountTitle:{
    width: '75%',
    height: '50%',
    fontSize: 33,
    textAlign: 'center',
    marginLeft: '5%',
  },
  accountBtn:{
    width: '35%',
    height: '5%',
    marginTop: '5%',
    marginLeft: '50%',
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 20,


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },

  //! 주식 검색화면
  myLoveCpy: {
    width: '100%',
    height: '45%',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    marginTop: '2%',
    alignItems: 'center',
    backgroundColor: StylesColors.subColorLight.backgroundColor,
    padding: '1%',
    flex:1,

    // borderWidth: 1,
    // borderColor: 'red'
  },
  userLoveCpy: {
    width: '100%',
    height: '45%',
    marginTop: '2%',
    backgroundColor: StylesColors.subColorLight.backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

    // borderWidth: 1,
    // borderColor: 'red'
  },
  searchListText: {
    // width: '40%',
    // height: '80%',
    fontSize: StylesText.sizeMedium.fontSize,
    textAlign: 'center',
    // marginTop: '2%',

    // borderWidth: 1,
    // borderColor: 'red'

  },
  myLoveImage:{
    width: '10%',
    height: '90%',
    resizeMode: 'contain',

    // borderWidth: 1,
    // borderColor: 'red'
  },
  myLoveListWrap:{
    width: '95%',
    height: '13%',
    marginTop: '3%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    
    // borderWidth: 1,
    // borderColor: 'red'
  },
  userLoveListWrap:{
    width: '95%',
    height: '13%',
    marginTop: '3%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    // borderWidth: 1,
    // borderColor: 'red'
  },

  //! 주식종목 상세 페이지
  cpyDetailBox: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    top: '8%',

  },
  companyInfo:{
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

  },
  companyTitile: {
    fontSize: StylesText.sizeLarge.fontSize,
    textAlign: 'center',
    marginLeft: '2%',

  },
  companyHeartImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    

  },
  companyMoney:{
    fontSize: StylesText.sizeLarge.fontSize,
    textAlign: 'center',
    marginLeft: '2%',
    position: 'absolute',
    left: '71%',

  },
  companyTabWrap: {
    width: '100%', 
    height: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'flex-end',

    // borderWidth: 1,
    // borderColor: 'red',
  },
  companyTabBtn: {
    width: '24%',
    height: '70%',
    borderRadius:10,
    backgroundColor: StylesColors.subColorDeep.backgroundColor,

    // borderWidth: 1,
    // borderColor: 'red',
  },
  companyTabText: {
    height: '40%', 
    fontSize: StylesText.sizeLarge.fontSize, 
    textAlign: 'center',
    marginTop: '20%',
  },
  companyCont: {
    width: '100%', 
    height: '100%', 
    position: 'absolute', 
    top: '18%', 
    backgroundColor: StylesColors.subColorLight.backgroundColor, 
    
  },

  //! 회사 소개 부분
  companyIntroWrap: {
    width: '100%', 
    height: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',

  },

  //! 회사 재무 부분
  companyFinanceWrap: {
    width: '100%', 
    height: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',

 
  },

  //! 회사 이자 내역 부분
  companyInterestWrap: {
    width: '100%', 
    height: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',

  
  },
  
  //! 종목 상세화면 - 구매
  buyWrap: {
    width: '100%', 
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  buyInputWrap: {
    width: '95%', 
    height: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 10,

  },
  buyInput:{
    width: '25%',
    height: '70%',
    backgroundColor: StylesColors.subColorLight.backgroundColor,

  },
  buyButton: {
    width: '60%',
    height: '100%',
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartButton: {
    width: '30%',
    height: '100%',
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyInfo: {
    height: '40%', 
    backgroundColor: StylesColors.subColorDeep.backgroundColor, 
    borderRadius: 20, 
    display:'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-around', 
    alignItems: 'center',
    marginLeft: '15%',
    padding: '3%'
  },
  //! 주식 호가 스타일
  askingTitleWrap: {
    width: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    marginTop:'3%'
  },
  askingTitle: {
    fontSize: StylesText.sizeMedium.fontSize, 
    fontWeight: StylesText.weightBold.fontWeight
  },
  askingNameWrap: {
    width: '100%', 
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop:'3%'
  },
  askingName: {
    fontSize: StylesText.sizeSmall.fontSize, 
    fontWeight: StylesText.weightBold.fontWeight,
  },
  askingWrap: {
    width: '100%', 
    height: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    flex: 1,

  },
  askingPCWrap: {
    width: '100%', 
    height: '100%', 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '2%',

    // margin: '1%',
    flex: 1,
  },
  askingPCText: {
    fontSize: StylesText.sizeSmall.fontSize,
  },
  // ! 장바구니 
  cartBox: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: StylesColors.mainColor.backgroundColor,
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginBottom: Constants.BottomTabBarHeight,
    alignItems: "center",
    justifyContent: "center"
  },
  cartBuy: {
    width: "100%",
    height: "35%",
    marginBottom: 50,
  },
  cartBuyList: {
    width: "100%",
    height: "70%",
    backgroundColor: StylesColors.subColorLight.backgroundColor,
    display: "flex",
    flexDirection: "column",

  },
  cartLists: {
    width: "100%",
    height: "60%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: StylesColors.subColorDeep.backgroundColor,
  },
  cartList: {
    width: "100%",
    height: "60%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cartListItemCompany: {
    width: "30%",
    height: "100%",
    textAlign: "left",
    // fontSize:StylesText.sizeSmall.fontSize
  },
  cartListItemEA: {
    width: "30%",
    height: "100%",
    textAlign: "right",
    // fontSize:StylesText.sizeSmall.fontSize
  },
  cartListItemPrice: {
    width: "30%",
    height: "100%",
    textAlign: "center",
    // fontSize:StylesText.sizeMedium.fontSize
  },
  cartListClick: {
    width: "10%",
    height: "100%",
    display: "flex",
    flexDirection: "row-reverse"
  },
  cartPrice: {
    width: "100%",
    height: "15%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10
  },
  cartPriceText: {
    width: "50%",
    height: "100%",
    textAlign: 'center'

  },
  cartTotalPrice: {
    width: "100%",
    height: "20%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cartTotalPriceText: {
    width: "50%",
    height: "100%",
    fontSize: StylesText.sizeMedium.fontSize,
    textAlign: 'center'

  },
  cartSell: {
    width: "100%",
    height: "35%",
    marginBottom: 30
  },
  cartSellList: {
    width: "100%",
    height: "70%",
    backgroundColor: StylesColors.subColorLight.backgroundColor,
  },


  // ! 목록 이름 & 버튼 스타일
  cartTitle: {
    width: "100%",
    height: "15%",
    backgroundColor: StylesColors.subColorLight.backgroundColor,
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  cartTitleText: {
    width: "30%",
    // height:10,
    fontSize: StylesText.sizeMedium.fontSize,
    left: 20,
    top: 10
  },
  cartchoose: {
    width: "22%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  cartButtons: {
    width: "100%",
    height: "15%",
    display: "flex",
    flexDirection: "row-reverse",
  },
  cartButtonBox: {
    width: 120,
    height: 40,
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 10,
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginTop: 10
  },

  // ! 지갑 
  walletBox: {
    width: '100%',
    height: '100%',
    backgroundColor: StylesColors.mainColor.backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginBottom: Constants.BottomTabBarHeight,
    justifyContent: 'center',
  },
  walletContainer: {
    width: '100%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: StylesColors.subColorLight.backgroundColor,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  walletAssetTotal: {
    width: '100%',
    height: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  walletAssetName: {
    width: '35%',
    height: '50%',
    fontSize: StylesText.sizeMedium.fontSize,
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10
  },
  walletAssetMoney: {
    width: '45%',
    height: '50%',
    fontSize: StylesText.sizeMedium.fontSize,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
    borderBottomColor: StylesColors.subColorDeep.backgroundColor,
    borderBottomWidth: 3,
    borderStyle: 'solid'
  },
  walletProcess: {
    width: '90%',
    height: '15%',
    backgroundColor: StylesColors.mainColor.backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  walletProcessStep: {
    width: '30%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  walletProfit: {
    width: '90%',
    height: '15%',
    backgroundColor: StylesColors.mainColor.backgroundColor,
    display: 'flex',
    flexDirection: 'column',
  },
  walletProfitTotal: {
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  walletbank: {
    width: '90%',
    height: '20%',
    backgroundColor: StylesColors.mainColor.backgroundColor,
    display: 'flex',
    flexDirection: 'column',
  },
  walletbankLists: {
    width: '100%',
    height: '30%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  walletbankList: {
    width: '25%',
    height: '100%',
    padding: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  walletBankList: {
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },

  // ! 추천페이지 ( Box 는 용어 가이드랑 같이 씀 )
  recommandBox: {
    width: '100%',
    height: '100%',
    backgroundColor: StylesColors.mainColor.backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginBottom: Constants.BottomTabBarHeight,
    justifyContent: 'center',
  },
  recommandTheme: {
    width: '100%',
    height: '25%',
    backgroundColor: StylesColors.mainColor.backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  recommandKeywordPink: {
    width: '20%',
    height: '20%',
    backgroundColor: StylesColors.pinkColor.backgroundColor,
    borderRadius: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  recommandKeywordPurple: {
    width: '20%',
    height: '20%',
    backgroundColor: StylesColors.purpleColor.backgroundColor,
    borderRadius: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  recommandKeywordYellow: {
    width: '20%',
    height: '20%',
    backgroundColor: StylesColors.yellowColor.backgroundColor,
    borderRadius: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  recommandCompany: {
    width: '100%',
    height: '75%',
    backgroundColor: StylesColors.subColorLight.backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex:1
  },
  recomandCompanyBallBig: {
    width: 110,
    height: 110,
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
    margin: 3
  },
  recomandCompanyBallMedium: {
    width: 100,
    height: 100,
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
    margin: 6
  },
  recomandCompanyBallSmall: {
    width: 90,
    height: 90,
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
    margin: 5
  },
  recommandCompanyName:{
    width:'100%',
    fontSize:StylesText.sizeSmall.fontSize,
    textAlign:'center',
  },

  // ! 실시간 페이지
  rankingBox: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: StylesColors.mainColor.backgroundColor,
    marginTop: Constants.statusBarHeight,
    marginBottom: Constants.BottomTabBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ranking: {
    width: '100%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: StylesColors.subColorLight.backgroundColor,
  },
  rankingMenu: {
    width: '100%',
    height: '5%',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '2%',
    paddingRight: '2%'
  },
  rankingMenuButton: {
    width: '25%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  rankingList: {
    width: '100%',
    height: '95%',
    display: 'flex',
    flexDirection: 'column',
  },
  // ! 랭킹 회사별 ( FlatList )
  rankingCompany: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  // ! 랭킹 회사이름
  rankingCompanyName: {
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
  rankingCompanyText: {
    margin: '5%',
    fontSize: StylesText.sizeSmall.fontSize
  }
  ,
  // ! 랭킹 회사 랭킹금액
  rankingCompanyPrice: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "row-reverse",
  },

  // ! 용어 가이드
  guideBox: {
    width: '100%',
    height: '100%',
    backgroundColor: StylesColors.mainColor.backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    // flexWrap:"wrap",
    position: 'relative',
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginBottom: Constants.BottomTabBarHeight,
    justifyContent: 'center',
  },

  guideTheme: {
    width: '100%',
    height: '15%',
    backgroundColor: StylesColors.mainColor.backgroundColor,
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    top: "17%",
    zIndex: 1
  },
  guideKeywordPink: {
    width: '20%',
    height: '15%',
    backgroundColor: StylesColors.pinkColor.backgroundColor,
    borderRadius: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  guideKeywordPurple: {
    width: '20%',
    height: '15%',
    backgroundColor: StylesColors.purpleColor.backgroundColor,
    borderRadius: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  guideKeywordYellow: {
    width: '20%',
    height: '15%',
    backgroundColor: StylesColors.yellowColor.backgroundColor,
    borderRadius: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  guideScroll: {
    width: "100%",
    height: "100%",
    // flex:1,
    // top:50
  },
  guideContent: {
    width: '100%',
    height: '200%',
    backgroundColor: StylesColors.subColorLight.backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: "wrap",
    alignItems: 'center',
    position: 'relative',
    top: "17%",
    padding: 5,
    zIndex: 1
  },
  guideLift: {
    width: 200,
    height: 130
  },
  guidePigLeft: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 70,
    left: 20
  },
  guideSayleft: {
    width: 150,
    height: 50,
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 30,
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    left: 40
  },

  guideText: {
    width: "100%",
    textAlign: "center"
  },

  guideRight: {
    width: 200,
    height: 130,
  },
  guidePigRight: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 100,
    right: 30
  },
  guideSayRight: {
    width: 150,
    height: 50,
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 30,
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    left: 10,
    top: 35
  },
  guideRightBig: {
    width: 200,
    height: 130,
  },
  guidePigRightBig: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 225,
    right: 30
  },
  guideSayRightBig: {
    width: 230,
    height: 150,
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 30,
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    right: 65,
    top: 60
  },

  // ! 마이페이지 - 수정 전
  myPageBox: {
    width: "100%",
    height: "100%",
    backgroundColor: StylesColors.subColorLight.backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight,
    marginBottom: Constants.BottomTabBarHeight,
  },
  myPageMain: {
    width: "100%",
    height: "85%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  myPagePhoto: {
    width: "100%",
    height: "30%",
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // flex:1
    // top:30
  },
  myPagePhotoView: {
    width: "40%",
    height: "77%",
    borderRadius: 80,
    backgroundColor: StylesColors.whiteColor.backgroundColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  myPagePhotoAdd: {
    width: 30,
    height: 30,
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    position: 'relative',
    borderRadius: 30,
    bottom: 30,
    left: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  myPageInfoBox: {
    width: "100%",
    height: "15%",
    display: 'flex',
    flexDirection: 'column',
    borderBottomColor: StylesColors.subColorDeep.borderBottomColor,
    borderBottomWidth: 1,
  },
  myPageInfo: {
    width: "100%",
    height: "30%",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  myPageTitle: {
    width: "30%",
    // height: "100%",
    fontSize: StylesText.sizeMedium.fontSize,
    textAlign: 'center'
  },
  myPageText: {
    width: "70%",
    // height: "100%",
    fontSize: StylesText.sizeMedium.fontSize,
    textAlign: 'left'
  },

  myPageAlarm: {
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "column",
    paddingTop: 15
  },
  myPageTitleBig: {
    width: "30%",
    height: "30%",
    fontSize: StylesText.sizeLarge.fontSize,
    textAlign: 'center'
  },

  myPageAlarmText: {
    width: "100%",
    height: "25%",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  myPageEdits: {
    width: "30%",
    height: "15%",
    borderRadius: 30,
  },
  myPageEdit: {
    width: 120,
    height: 60,
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 10,
    display: 'flex',
    alignItems: "center",
    justifyContent: "center"
  },

  // ! 마이페이지 - 수정 후 ( 아래 빼곤 수정 전과 동일 )
  myPageAlarmEdit: {
    width: "100%",
    height: "20%",
    display: "flex",
    flexDirection: "column",
    paddingTop: 15
  },
  myPagePasswordEdit: {
    width: "100%",
    height: "15%",
    display: "flex",
    flexDirection: "column",
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: StylesColors.subColorDeep.borderBottomColor,

  },

  myPagePasswordText: {
    width: "100%",
    height: "35%",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // padding:5
  },

  myPageTitleBigEdit: {
    width: "45%",
    height: "30%",
    fontSize: StylesText.sizeLarge.fontSize,
    textAlign: 'center',
    marginBottom: 13
  },

  myPageTitleEdit: {
    width: "35%",
    // height: "50%",
    fontSize: StylesText.sizeMedium.fontSize,
    textAlign: 'center',
    marginLeft: 5
  },
  myPageTextEdit: {
    width: "40%",
    // height: "100%",
    fontSize: StylesText.sizeMedium.fontSize,
    textAlign: 'left',
    backgroundColor: StylesColors.whiteColor.backgroundColor
  },

  //  ! 완료 버튼
  myPageEditing: {
    width: "100%",
    height: "10%",
    borderRadius: 30,
    display: "flex",
    flexDirection: "row-reverse",
  },
  myPageEditDone: {
    width: 80,
    height: 35,
    backgroundColor: StylesColors.subColorDeep.backgroundColor,
    borderRadius: 10,
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    marginTop: 20
  },

  // ! 첫 입장 모달창
  entranceBox:{
    width:400,
    height:300,
    display:'flex',
    flexDirection:'column',
    // alignItems:''
  },
  

});
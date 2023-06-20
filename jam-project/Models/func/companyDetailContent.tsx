import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import {Styles, StylesColors, StylesText} from '../../View/style/styles'
import urlIpt from './fetchURL'

interface Companydata {
  sellCount: number
  sellPrice: number
  buyCount: number
  buyPrice: number
}

const buyList = (data: Companydata) => {
  console.log("flat value: ", data)

  return (
    <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row', flex: 1,}}>
      <View>
        <Text style={Styles.rankingCompanyText}>다른 사람들은 얼마에 살까?</Text>
      </View>
      <View>
        <View>
          <Text style={Styles.rankingCompanyText}>구매 금액</Text>
          <Text style={Styles.rankingCompanyText}>{data.buyPrice}</Text>
        </View>
        <View style={Styles.rankingCompanyPrice}>
          <Text style={Styles.rankingCompanyText}>구매 가능 수량</Text>
          <Text style={Styles.rankingCompanyText}>{data.buyCount}</Text>
        </View>
      </View>
      
    </View>
  )
  
}
const sellList = (data: Companydata) => {
  console.log("flat value: ", data)
  return (
    <View style={Styles.rankingCompanyPrice}>
      <View>
        <Text style={Styles.rankingCompanyText}>판매 금액</Text>
        <Text style={Styles.rankingCompanyText}>{data.sellPrice}</Text>
      </View>
      <View style={Styles.rankingCompanyPrice}>
        <Text style={Styles.rankingCompanyText}>판매 가능 수량</Text>
        <Text style={Styles.rankingCompanyText}>{data.sellCount}</Text>
      </View>
    </View>
  )
  // return (
  //   <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row', flex: 1,}}>
  //     <View>
  //       <Text style={Styles.rankingCompanyText}>다른 사람들은 얼마에 팔까?</Text>
  //     </View>
  //     <View>
  //       <View>
  //         <Text style={Styles.rankingCompanyText}>판매 금액</Text>
  //         <Text style={Styles.rankingCompanyText}>{data.sellPrice}</Text>
  //       </View>
  //       <View style={Styles.rankingCompanyPrice}>
  //         <Text style={Styles.rankingCompanyText}>판매 가능 수량</Text>
  //         <Text style={Styles.rankingCompanyText}>{data.sellCount}</Text>
  //       </View>
  //     </View>
  //   </View>
  // )
}

export default function ContentReturn(activeTab: string, cmpCode:string, cmpName:string, cmpPr:string, navigation: any) {
  
  
  const _URL = `${urlIpt}:5000/stock/buySell`

  const [buyText, setbuyText] = useState('');
  const [sellText, setsellText] = useState('');
  const [buyCountText, setBuyCountText] = useState('');
  const [sellCountText, setSellCountText] = useState('');
  const [sellP, setSellP] = useState('');
  const [sellC, setSellC] = useState('');
  const [buyP, setBuyP] = useState('');
  const [buyC, setBuyC] = useState('');
  const [hight, sethight] = useState('');
  const [low, setlow] = useState('');
  const askingData = [] as any

  const codeObj = {
    "code": cmpCode
  }
  
  const BuySellResult = () => {
    if(activeTab === 'buy'){
      console.log("구매액: ", buyText, "개수: ", buyCountText);
      Alert.alert("주식 구매", "완료되었습니다.")
      setbuyText('')
      setBuyCountText('')
    }
    else if(activeTab === 'sell'){
      console.log("판매액: ", sellText, "개수: ", sellCountText);
      Alert.alert("주식 판매", "완료되었습니다.")
      setsellText('')
      setSellCountText('')
    }
  };

  const fetchData = () => {
    fetch(_URL,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(codeObj)
    })
    .then(response => response.json())
    .then(json => {
      console.log("디테일: ", json);
      setSellP(json['sellPrice'])
      setSellC(json['sellCount'])
      setBuyP(json['buyPrice'])
      setBuyC(json['buyCount'])
      sethight(json['hgpr'])
      setlow(json['lwpr'])

      for(let i = 0; i < sellP.length; i++){
        let val = {
          sellCount: sellC[i],
          sellPrice: sellP[i],
          buyCount: buyC[i],
          buyPrice: buyP[i]
        }
        askingData.push(val)
      }
      console.log("데이타타타타ㅏ탙 ", askingData)
    })
    .catch(error => {
      console.error('에러가 발생했습니다:', error);
    });
  };
  useEffect(()=>{
    fetchData()
  },[activeTab])

  
  
  switch (activeTab) {
    case 'info':
      console.log("정보 진입")
      return (
        <View style={Styles.companyCont}>
          {/* 내용 1 */}
          <View style={Styles.companyIntroWrap}></View>

          {/* 내용 2 */}
          <View style={Styles.companyFinanceWrap}></View>

          {/* 내용 3 */}
          <View style={Styles.companyInterestWrap}></View>
        </View>
      );
    
    case 'buy':
      console.log("구매 진입")
      return (
        <View style={Styles.companyCont}>
          {/* 내용 1 */}
          <View style={Styles.buyWrap}>
            <View style={Styles.buyInputWrap}>
              <Text style={{fontSize: StylesText.sizeMedium.fontSize}}>1개당</Text>
              <TextInput
                style={{width: '30%', height: '70%', backgroundColor: StylesColors.subColorLight.backgroundColor,marginLeft: '3%', marginRight: '3%',textAlign: 'center'}}
                onChangeText={text => setbuyText(text)}
                value={buyText}
                placeholder=""
              ></TextInput>
              <Text style={{fontSize: StylesText.sizeMedium.fontSize}}>원을</Text>
              <TextInput 
                style={{width: '25%', height: '70%', backgroundColor: StylesColors.subColorLight.backgroundColor, marginLeft: '3%', marginRight: '3%',textAlign: 'center'}}
                onChangeText={text => setBuyCountText(text)}
                value={buyCountText}
                placeholder=""
              ></TextInput>
              <Text style={{fontSize: StylesText.sizeMedium.fontSize}}>개</Text>
            </View>

            <View style={{width: '95%', height: '15%', display:'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <TouchableOpacity style={Styles.buyButton} onPress={BuySellResult}>
                <Text style={{fontSize: StylesText.sizeMedium.fontSize, textAlign: 'center'}}>구매하기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.cartButton} onPress={() => {navigation.navigate('cart')}}>
                <Image style={{width: '50%', height: '90%', resizeMode: 'contain'}} source={require('../../Resource/Icon/shoppingcart.png')}></Image>
              </TouchableOpacity>
            </View>
            <View style={Styles.buyInfo}>
              <Text style={{fontSize: StylesText.sizeMedium.fontSize}}>현재 1개당 금액은 {cmpPr}원 입니다!</Text>
              <Text style={{fontSize: StylesText.sizeMedium.fontSize}}>오늘의 최고가는 {hight}원 입니다!</Text>
              <Text style={{fontSize: StylesText.sizeMedium.fontSize}}>오늘의 최저가는 {low}원 입니다!</Text>
            </View>
            <Image style={{width: '15%', height: '20%', resizeMode: 'contain', marginRight: '75%'}} source={require('../../Resource/Icon/JamStock_Pig2.png')}></Image>
          </View>

          {/* 내용 2 */}
            <FlatList
            data={askingData}
            renderItem={({ item }) => buyList(item)} />

          {/* 내용 3 */}
          {/* <View style={Styles.companyInterestWrap}></View> */}
        </View>
      );
    case 'sell':
      console.log("판매 진입")
      return (
        <View style={Styles.companyCont}>
          {/* 내용 1 */}
          <View style={Styles.buyWrap}>
            <View style={Styles.buyInputWrap}>
              <Text style={{fontSize: StylesText.sizeMedium.fontSize}}>1개당</Text>
              <TextInput
                style={{width: '30%', height: '70%', backgroundColor: StylesColors.subColorLight.backgroundColor,marginLeft: '3%', marginRight: '3%', textAlign: 'center'}}
                onChangeText={text => setsellText(text)}
                value={sellText}
                placeholder=""
              ></TextInput>
              <Text style={{fontSize: StylesText.sizeMedium.fontSize}}>원을</Text>
              <TextInput 
                style={{width: '25%', height: '70%', backgroundColor: StylesColors.subColorLight.backgroundColor, marginLeft: '3%', marginRight: '3%', textAlign: 'center'}}
                onChangeText={text => setSellCountText(text)}
                value={sellCountText}
                placeholder=""
              ></TextInput>
              <Text style={{fontSize: StylesText.sizeMedium.fontSize}}>개</Text>
            </View>

            <View style={{width: '95%', height: '15%', display:'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <TouchableOpacity style={Styles.buyButton} onPress={BuySellResult}>
                <Text style={{fontSize: StylesText.sizeMedium.fontSize, textAlign: 'center'}}>판매하기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.cartButton} onPress={() => {navigation.navigate('cart')}}>
                <Image style={{width: '50%', height: '90%', resizeMode: 'contain'}} source={require('../../Resource/Icon/shoppingcart.png')}></Image>
              </TouchableOpacity>
            </View>
            <View style={Styles.buyInfo}>
              <Text style={{fontSize: StylesText.sizeMedium.fontSize}}>현재 1개당 금액은 {cmpPr}원 입니다!</Text>
              <Text style={{fontSize: StylesText.sizeMedium.fontSize}}>오늘의 최고가는 {hight}원 입니다!</Text>
              <Text style={{fontSize: StylesText.sizeMedium.fontSize}}>오늘의 최저가는 {low}원 입니다!</Text>
            </View>
            <Image style={{width: '15%', height: '20%', resizeMode: 'contain', marginRight: '75%'}} source={require('../../Resource/Icon/JamStock_Pig2.png')}></Image>
          </View>

          {/* 내용 2 */}
          <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row'}}>
            <View>
              <Text style={Styles.rankingCompanyText}>다른 사람들은 얼마에 팔까?</Text>
            </View>
            <View style={{flex: 1,}}>
              <FlatList
                data={askingData}
                renderItem={({ item }) => sellList(item)} />
            </View>
          </View>
          

          {/* 내용 3 */}
          {/* <View style={Styles.companyInterestWrap}></View> */}
        </View>
      );
    case 'community':
      return (
        <View style={Styles.companyCont}>
          {/* 내용 1 */}
          <View style={Styles.companyIntroWrap}></View>

          {/* 내용 2 */}
          <View style={Styles.companyFinanceWrap}></View>

          {/* 내용 3 */}
          <View style={Styles.companyInterestWrap}></View>
        </View>
      );
    default:
      return null;
  }
}
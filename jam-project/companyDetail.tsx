
import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import {Styles, StylesColors, StylesText} from './styles'
import TopMenu from './topMenu';
import BottomMenu from './bottomMenu';
import DetailReturn from './companyDetailContent';


const CompanyDetail: React.FC<any> = ({ navigation }) => {
  const [buyText, setbuyText] = useState('');
  const [countText, setcountText] = useState('');

  const BuyResult = () => {
    console.log("구매액: ", buyText, "개수: ", countText);
    // Perform search logic or any other operations with the entered text
  };

  const [activeTab, setActiveTab] = useState('info'); // 기본 탭 설정

  const renderContent = () => {
    switch (activeTab) {
      case 'info':
        console.log("정보 진입")
        return (DetailReturn('info', buyText, countText, {setbuyText}, {setcountText}));
      case 'buy':
        console.log("구매 진입")
        return (DetailReturn('buy', buyText, countText, {setbuyText}, {setcountText}));
      case 'sell':
        return (DetailReturn('sell', buyText, countText, {setbuyText}, {setcountText}));
      case 'community':
        return (DetailReturn('community', buyText, countText, {setbuyText}, {setcountText}));
      default:
        return null;
    }
  };

  return (
    <View style={Styles.homeRoot}>
      <TopMenu navigation={navigation} />

      {/*========== 기업정보 상세 영역 =========*/}
      <View style={Styles.cpyDetailBox}>
        {/* 기업 명 */}
        <View style={{width: '100%', height: '12%',}}>
          <TouchableOpacity style={Styles.companyInfo}>
            {/* <Image style={Styles.companyTitleImg} source={require('./resource/heart.png')}></Image> */}
            <View style={Styles.companyTitleImg}></View>
            <Text style={Styles.companyTitile}>CJ제일제당</Text>
            <Image style={Styles.companyHeartImg} source={require('./resource/heart.png')}></Image>
            <Text style={Styles.companyMoney}>금액 표시</Text>
          </TouchableOpacity>
        </View>

        {/* 구분 탭 */}
        <View style={Styles.companyTabWrap}>
          <TouchableOpacity 
            style={Styles.companyTabBtn} 
            onPress={() => setActiveTab('info')}>
            <Text style={Styles.companyTabText}>정보</Text>

          </TouchableOpacity>
          <TouchableOpacity style={Styles.companyTabBtn} onPress={() => setActiveTab('buy')}>
            <Text style={Styles.companyTabText}>구매</Text>

          </TouchableOpacity>
          <TouchableOpacity style={Styles.companyTabBtn} onPress={() => setActiveTab('sell')}>
            <Text style={Styles.companyTabText}>판매</Text>

          </TouchableOpacity>
          <TouchableOpacity style={Styles.companyTabBtn} onPress={() => setActiveTab('community')}>
            <Text style={Styles.companyTabText}>커뮤니티</Text>

          </TouchableOpacity>
        </View>
        
        {renderContent()}
        
      </View>
      {/*========== 기업정보 상세 영역 =========*/}

      <BottomMenu navigation={navigation} />
    </View> 
  );
};

export default CompanyDetail;

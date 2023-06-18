import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Styles } from '../style/styles';
import Hamberger from '../fixed/hamberger';
import { getLoginInfo } from '../../Utils/Storage/loginStorage';


const TopMenu: React.FC<any> = ({ navigation }) => {

  // 햄버거 메뉴 토글
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // 로그인 유무에 따른 접근 제한용
  const [menuState, SetmenuState] = useState(true)

  useEffect(() => {
    const checkLogin = async () => {
      const loginCheck = await getLoginInfo('nickname');
      // console.log("여긴 상단부",loginCheck)

      if (loginCheck !== null) {
        SetmenuState(false);
        // 로그인 후 스토리지에서 닉네임 가져오기
      } else {
        SetmenuState(true);
      }
    };

    checkLogin();
  }, []);

  return (
    <View style={Styles.topRoot}>
      <TouchableOpacity style={Styles.logoWrap} onPress={() => navigation.navigate('home')}>
        <Text style={Styles.logoText}>JamStock</Text>
        <Image
          style={Styles.logoImage}
          source={require('../../Resource/Icon/JamStock_Pig.png')}
        />
      </TouchableOpacity>
      <View style={Styles.topWrap}>
        {/* 장바구니로 이동 */}
        <TouchableOpacity
          disabled={menuState}
          onPress={() => navigation.navigate('cart')}>
          <Image
            style={Styles.logoImage}
            source={require('../../Resource/Icon/shoppingcart.png')}
          />
        </TouchableOpacity>
        {/* 햄버거 메뉴 이동 */}
        <TouchableOpacity
          style={Styles.hambergerWrap}
          onPress={handleToggleMenu}
        >
          <View style={Styles.hambergerBar}></View>
          <View style={Styles.hambergerBar}></View>
          <View style={Styles.hambergerBar}></View>
          {isMenuOpen && (
            <Hamberger navigation={navigation} />
          )}

        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopMenu;
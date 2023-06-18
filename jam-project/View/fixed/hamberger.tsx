import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Styles } from '../style/styles';
import { getLoginInfo } from '../../Utils/Storage/loginStorage';
import { hambergerTop } from '../../Models/account/hambergerTop';

type HambergerProps = {
  navigation: any;
}

const Hamberger: React.FC<HambergerProps> = ({ navigation }) => {

  // 로그인 유무에 따라 접근제한용
  // 로그인 하기 전 접근 제한 페이지들 접근불가.
  const [menuState, SetmenuState] = useState(true)
  const [loginCheck,SetloginCheck] = useState('')

  useEffect(() => {
    const checkLogin = async () => {
      const loginCheck = await getLoginInfo('nickname');
      if (loginCheck !== null) {
        SetmenuState(false);
        // 로그인 후 스토리지에서 닉네임 가져오기
        SetloginCheck(`${loginCheck}`)

      } else {
        SetmenuState(true);
      }
    };

    checkLogin();
  }, []);


  return (
    <View style={Styles.hamBox}>
      {/* 상단부 함수로 호출 */}
      {hambergerTop(menuState,navigation,loginCheck)}

      <View style={Styles.hamCategory}>
        <View style={Styles.hamCategoryList}>
          <TouchableOpacity style={Styles.hamListWrap} disabled={menuState} onPress={() => navigation.navigate('myPage')}>
            <Text style={Styles.hamListText}>마이페이지</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.hamListWrap} disabled={menuState} onPress={() => navigation.navigate('wallet')}>
            <Text style={Styles.hamListText}>나의 지갑</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.hamListWrap} onPress={() => navigation.navigate('realtime')}>
            <Text style={Styles.hamListText}>실시간 정보</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.hamListWrap} disabled={menuState} onPress={() => navigation.navigate('recommand')}>
            <Text style={Styles.hamListText}>주식 추천</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.hamListWrap} onPress={() => navigation.navigate('search')}>
            <Text style={Styles.hamListText}>종목 검색</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.hamListWrap}  onPress={() => navigation.navigate('guide')}>
            <Text style={Styles.hamListText}>용어 가이드</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Hamberger;
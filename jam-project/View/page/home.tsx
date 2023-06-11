import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { Styles, StylesText } from '../style/styles';
import TopMenu from '../fixed/topMenu';
import BottomMenu from '../fixed/bottomMenu';
import { Alram } from '../../Models/func/alarm';


const HomeScreen: React.FC<any> = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log(searchText);
    setSearchText('검색'); // 검색 완료 후 텍스트를 '검색'으로 설정
    // Perform search logic or any other operations with the entered text
  };

  return (
    <View style={Styles.homeRoot}>
      {Alram()}
      <TopMenu navigation={navigation} />
      {/*========== home 영역 =========*/}
      <View style={Styles.homeArea}>
        <View style={Styles.serchBox}>
          <TextInput
            style={Styles.serchBar}
            onChangeText={text => setSearchText(text)}
            value={searchText}
            placeholder="검색"
          />
          <TouchableOpacity style={Styles.serchButton} onPress={handleSearch}>
            <Text style={Styles.serchButtonText}>serch</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.homeWrap}>
          <View style={Styles.homePopular}>
            <Text style={Styles.titleText}>Today 구매 인기 기업</Text>
            <TouchableOpacity onPress={() => navigation.navigate('companyDetail')}>
              <Text style={Styles.rankText}>🥇 삼성전자</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={Styles.rankText}>🥈 엘지화학</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={Styles.rankText}>🥉 SK하이닉스</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={Styles.rankText}>4등 SG리테일</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={Styles.rankText}>5등 유한양행</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.homeLove}>
            <Text style={Styles.titleText}>Today 사랑받는 기업</Text>
            <TouchableOpacity>
              <Text style={Styles.rankText}>🥇 삼성전자</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={Styles.rankText}>🥈 엘지화학</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={Styles.rankText}>🥉 SK하이닉스</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={Styles.rankText}>4등 SG리테일</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={Styles.rankText}>5등 유한양행</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/*========== home 영역 =========*/}

      <BottomMenu navigation={navigation} />
    </View>
  );
};

export default HomeScreen;


// fetch("http://localhost:3008/home", {
//     method: "POST",
//   })
//   .then((response) => response.json())
//   .then((result) => {
//     console.log("count: ", result)

//   })
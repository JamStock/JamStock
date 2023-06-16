import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { Styles, StylesText } from '../style/styles';
import TopMenu from '../fixed/topMenu';
import BottomMenu from '../fixed/bottomMenu';
import Url from '../../Models/func/fetchURL'
import { Entrance } from '../../Models/Modal/firstEntrance';

const HomeScreen: React.FC<any> = ({ navigation }) => {

  

  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log(searchText);
    setSearchText('검색'); // 검색 완료 후 텍스트를 '검색'으로 설정
    // Perform search logic or any other operations with the entered text
  };

  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch(`${Url}:5000/stock/data`)
    .then(response => response.json())
    .then(json => {
      console.log("구매 인기 정상적으로 가져옴")
      setData(json);
    })
    .catch(error => {
      console.error('에러가 발생했습니다::: ', error);
    });
  },[])
  
  

  return (
    <View style={Styles.homeRoot}>
      {Entrance()}
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
            {data && (
              <TouchableOpacity onPress={() => navigation.navigate('companyDetail', { 
                name: data["거래상위"]["name"][0],
                code: data["거래상위"]["code"][0]
              })}>
                <View>
                  <Text style={Styles.rankText}>🥇 {data["거래상위"]["name"][0]}</Text>
                </View>
              </TouchableOpacity>
            )}
            {data && (
              <TouchableOpacity onPress={() => navigation.navigate('companyDetail', { 
                name: data["거래상위"]["name"][1],
                code: data["거래상위"]["code"][1]
              })}>
                <View>
                  <Text style={Styles.rankText}>🥈 {data["거래상위"]["name"][1]}</Text>
                </View>
              </TouchableOpacity>
            )}
            
            {data && (
              <TouchableOpacity onPress={() => navigation.navigate('companyDetail', { 
                name: data["거래상위"]["name"][2],
                code: data["거래상위"]["code"][2]
              })}>
                <View>
                  <Text style={Styles.rankText}>🥉 {data["거래상위"]["name"][2]}</Text>
                </View>
              </TouchableOpacity>
            )}
            {data && (
              <TouchableOpacity onPress={() => navigation.navigate('companyDetail', { 
                name: data["거래상위"]["name"][3],
                code: data["거래상위"]["code"][3]
              })}>
                <View>
                  <Text style={Styles.rankText}>4등 {data["거래상위"]["name"][3]}</Text>
                </View>
              </TouchableOpacity>
            )}
            {data && (
              <TouchableOpacity onPress={() => navigation.navigate('companyDetail', { 
                name: data["거래상위"]["name"][4],
                code: data["거래상위"]["code"][4]
              })}>
                <View>
                  <Text style={Styles.rankText}>5등 {data["거래상위"]["name"][4]}</Text>
                </View>
              </TouchableOpacity>
            )}
            
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

import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Styles, StylesColors, StylesText } from '../style/styles';
import TopMenu from '../fixed/topMenu';
import BottomMenu from '../fixed/bottomMenu';
import urlIpt from '../../Models/func/fetchURL'
import changeCurr from '../../Models/func/changeCurrency';

interface Searchdata {
  companyname: string
  price: number
  code: string
}

let result = [] as any

const ListStyle = (data: Searchdata, {navigation}) => {
  console.log("akajsskskks: ", result)

  return (
    <View style={Styles.myLoveCpy}>
      <TouchableOpacity style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}} onPress={() => navigation.navigate('companyDetail', { 
                name: data.companyname,
                code: data.code
              })}>
        <Text style={Styles.searchListText}>{data.companyname}</Text>
        <Text style={Styles.searchListText}>{data.price}원</Text>
      </TouchableOpacity>
    </View>
  )
}

const AfterSearchScreen: React.FC<any> = ({ navigation, route }) => {
  const { searchText } = route.params;
  const [search, setSearch] = useState(searchText);
  const [comData, setComData] = useState('')

  const fetchData = () => {
    const _URL = `${urlIpt}:5000/stock/stockSearch`
    const searchObj = {
      'src': search
    }
    if (searchObj.src !== '') {
      fetch(_URL, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(searchObj)
      })
        .then(response => response.json())
        .then(json => {
          console.log(json);
          setComData(json)
          result.length = 0
          for (let i = 0; i < json["name"].length; i++) {
            let val = {
              companyname: json.name[i],
              price: changeCurr(json.prpr[i]),
              code: json.code[i]
            }
            result.push(val)
          }
        })
        .catch(error => {
          console.error('에러가 발생했습니다:', error);
        });
    }
  };
  const handleSearch = () => {
    console.log(search);
    fetchData()
    setSearch(''); // 검색 완료 후 텍스트를 '검색'으로 설정
    // Perform search logic or any other operations with the entered text
  };

  useEffect(() => {
    fetchData()
    setSearch('');
  }, [])

  
  
  return (
    <View style={Styles.homeRoot}>
      <TopMenu navigation={navigation} />

      {/*========== search 영역 =========*/}
      <View style={Styles.homeArea}>
        <View style={{ width: '100%', height: '10%', backgroundColor: StylesColors.subColorLight.backgroundColor, marginTop: '7%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: '95%', height: '70%', backgroundColor: StylesColors.whiteColor.backgroundColor, borderRadius: 20, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
              style={Styles.serchBar}
              onChangeText={text => setSearch(text)}
              value={searchText}
              placeholder="검색"
            />
            <TouchableOpacity style={Styles.serchButton} onPress={handleSearch}>
              <Text style={Styles.serchButtonText}>serch</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, backgroundColor: StylesColors.subColorLight.backgroundColor, marginTop:'3%'}}>

          {/* 내가 찜한 기업 영역 */}
          <FlatList
            data={result}
            renderItem={({ item }) => ListStyle(item, {navigation})} />
        </View>
      </View>
      {/*========== search 영역 =========*/}

      <BottomMenu navigation={navigation} />
    </View>
  );
};

export default AfterSearchScreen;

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from "../../View/style/styles";
import { recomandCompany } from "../DB/recommandcompany";

interface Item{
  theme:string
}

export const recommandbubble = (theme: string, navigation) => {

  const company: Array<Item> = recomandCompany(theme)

  console.log('여기보세요 : ',company)

  const getStyleBasedOnIndex = (index: number) => {
    if (index % 2 === 0) {
      return Styles.recomandCompanyBallSmall;
    } else if (index % 2 === 1) {
      return Styles.recomandCompanyBallMedium;
    } else {
      return Styles.recomandCompanyBallMedium;
    }
  };

  return (
    <View style={Styles.recommandCompany}>
      {company.map((item:Item, index) => (
        <TouchableOpacity
          key={index}
          style={getStyleBasedOnIndex(index)}
          onPress={()=>{
            navigation.navigate('companyDetail',{name:item[theme]})
          }}
        >
          <Text style={Styles.recommandCompanyName}>{item[theme]}</Text>
        </TouchableOpacity>
      ))}
    </View >
  )

}

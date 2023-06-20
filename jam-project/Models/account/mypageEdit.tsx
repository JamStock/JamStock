import React, { useEffect, useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity } from "react-native"
import { Styles, StylesText } from "../../View/style/styles";
import Icon from "react-native-vector-icons/AntDesign";
import { myPageInfo } from "../DB/myPageInfo";
import { callUser } from "../../Utils/Storage/callID";

export const MyPageMain = (state: string, Setstate: any) => {

  let id = callUser()[0]

  const userData = myPageInfo(id)
  
  // 마이페이지 접속했을 때
  if (state === 'before') {
    
    // DB 데이터를 불러올 함수

    return (
      <View style={Styles.myPageMain}>
        <View style={Styles.myPagePhoto}>
          <View style={Styles.myPagePhotoView}>
            <Image style={{ width: "60%", height: "60%" }} source={require('../../Resource/Icon/JamStock_Pig.png')} />
          </View>
        </View>

        <View style={Styles.myPageInfoBox}>
          <View style={Styles.myPageInfo}>
            <Text style={Styles.myPageTitle}>닉네임:</Text>
            <Text style={Styles.myPageText}>{userData.nickname}</Text>
          </View>
          <View style={Styles.myPageInfo}>
            <Text style={Styles.myPageTitle}>생  일:</Text>
            <Text style={Styles.myPageText}>{userData.birthday.slice(0, 4) + '년 ' + userData.birthday.slice(4, 6) + '월 ' + userData.birthday.slice(6, 8) + '일'}</Text>
          </View>
          <View style={Styles.myPageInfo}>
            <Text style={Styles.myPageTitle}>이메일:</Text>
            <Text style={Styles.myPageText}>{userData.email}
            </Text>
          </View>
        </View>

        <View style={Styles.myPageAlarm}>
          <Text style={Styles.myPageTitleBig}>알림 설정</Text>
          <View style={Styles.myPageAlarmText}>
            <Text style={Styles.myPageTitle}>수익 발생율:</Text>
            <Text style={Styles.myPageText}>{userData.upper} %</Text>
          </View>
          <View style={Styles.myPageAlarmText}>
            <Text style={Styles.myPageTitle}>손실 발생율:</Text>
            <Text style={Styles.myPageText}>{userData.lower} %</Text>
          </View>
        </View>

        <View style={Styles.myPageEdits}>
          <TouchableOpacity
            style={Styles.myPageEdit}
            onPress={() => { Setstate('after') }}
          >
            <Text style={{ fontSize: StylesText.sizeMedium.fontSize }}>수정하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  // 마이페이지 수정 화면
  else if (state === 'after') {

    return (
      <View style={Styles.myPageMain}>
        <View style={Styles.myPagePhoto}>
          <View style={Styles.myPagePhotoView}>
            <Image style={{ width: "60%", height: "60%" }} source={require('../../Resource/Icon/JamStock_Pig.png')} />
          </View>

          <TouchableOpacity style={Styles.myPagePhotoAdd}>
            <Icon name={'plus'} style={{ fontSize: 20 }} />
          </TouchableOpacity>

        </View>

        <View style={Styles.myPageInfoBox}>
          <View style={Styles.myPageInfo}>
            <Text style={Styles.myPageTitleEdit}>닉네임:</Text>
            <TextInput
              style={Styles.myPageTextEdit}
            />
          </View>
          <View style={Styles.myPageInfo}>
            <Text style={Styles.myPageTitleEdit}>생  일:</Text>
            <Text style={Styles.myPageText}>2002년 11월 01일</Text>
          </View>
          <View style={Styles.myPageInfo}>
            <Text style={Styles.myPageTitleEdit}>이메일:</Text>
            <TextInput
              style={Styles.myPageTextEdit}
            />
          </View>
        </View>

        <View style={Styles.myPageAlarmEdit}>
          <Text style={Styles.myPageTitleBig}>알림 설정</Text>
          <View style={Styles.myPageAlarmText}>
            <Text style={Styles.myPageTitleEdit}>수익 발생율:</Text>
            <TextInput
              style={Styles.myPageTextEdit}
            />
          </View>
          <View style={Styles.myPageAlarmText}>
            <Text style={Styles.myPageTitleEdit}>손실 발생율:</Text>
            <TextInput
              style={Styles.myPageTextEdit} />
          </View>
        </View>

        <View style={Styles.myPagePasswordEdit}>
          <Text style={Styles.myPageTitleBigEdit}>비밀번호 재설정</Text>
          <View style={Styles.myPagePasswordText}>
            <Text style={Styles.myPageTitleEdit}>신규 비밀번호:</Text>
            <TextInput style={Styles.myPageTextEdit} />
          </View>
          <View style={Styles.myPagePasswordText}>
            <Text style={Styles.myPageTitleEdit}>비밀번호 확인:</Text>
            <TextInput style={Styles.myPageTextEdit} />
          </View>
        </View>

        <View style={Styles.myPageEditing}>
          <TouchableOpacity style={Styles.myPageEditDone} onPress={() => {
            // 데이터 전송 함수 들어갈 자리
            Setstate('before')
          }}>
            <Text style={{ fontSize: StylesText.sizeMedium.fontSize }}>완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
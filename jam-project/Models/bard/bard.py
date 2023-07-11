import bardapi
import os
# import re


def searchCompanyInfo(company):
    os.environ['_BARD_API_KEY'] = 'YAgCVoBR-eAd3khL2I2tR7fP-O6WmvRU7jzGOz_f_5Os8x6uogWvGl2XziyjMQnbOiZPbg.'

    input_text = company+'의 소개와 주요 사업에 대해 서술형으로 딱 3줄로만 답변해줘'
    response = bardapi.core.Bard().get_answer(input_text)
    stringResponse = response['choices'][0]['content'][0]

    print(input_text+" : " + stringResponse)
    return stringResponse

# print(searchCompanyInfo('삼성전자'))

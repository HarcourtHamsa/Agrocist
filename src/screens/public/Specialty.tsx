import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, {useState} from 'react'
import {background} from 'styles/background'
import {border, flex} from 'styles/layout'
import {height, margin, padding, width} from 'styles/spacing'
import {IComponent} from 'interface/IComponent'
import {back} from 'utils/images/list'
import CustomText from 'components/CustomText'
import {color, font, font_size} from 'styles/typography'
import {different_specialty} from 'utils/data'
import {IOptions} from 'interface/IGeneral'
import CustomButton from 'components/CustomButton'
import {loadingAndErrorDefault} from 'utils/data/defaults'
import FullScreenLoader from 'components/FullScreenLoader'
import {catchHelper, startLoader, stopLoader} from 'utils/display'
import {IResponse} from 'interface/Request'
import networkRequest from 'utils/api/networkRequest'
import {SPECIALTY} from 'utils/api/constant'
import {initiateLogin, updateUserData} from 'services/Login'
import {Dispatch} from 'redux'
import {useDispatch} from 'react-redux'

const Specialty = ({navigation}: IComponent) => {
  const dispatch: Dispatch<any> = useDispatch()

  const [selected, setSelected] = useState<IOptions>({} as IOptions)
  const [loadingAndError, setLoadingAndError] = useState(loadingAndErrorDefault)

  const handleSelection = async (value: IOptions) => {
    try {
      setSelected(value)
      startLoader(setLoadingAndError)
      const model = {specialty: value.text}
      const request: IResponse = await networkRequest.post(SPECIALTY, model)
      if (request.success) {
        const updateUser: boolean = await updateUserData(dispatch)
        if (updateUser) {
          stopLoader(setLoadingAndError)
          await initiateLogin(dispatch)
          return
        }
      }
      catchHelper(setLoadingAndError, request, `Specialty submission failed`)
    } catch (error) {
      catchHelper(setLoadingAndError, error, `Network Error`)
    }
  }

  return (
    <SafeAreaView style={[flex.flex_1, background.gray]}>
      <View style={[margin.y_30]}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={[flex.flex_1, flex.justifyCenter, padding.l_20, margin.b_40]}>
          <Image source={back} style={[height[20], width[24]]} />
        </Pressable>
        <CustomText
          text={`Kindly Select the Area that best describes you`}
          left
          otherStyles={[
            font_size[24],
            color.text_green,
            font.bold,
            padding.x_20,
          ]}
        />
        <View style={[flex.flex_1, margin.t_30]}>
          {different_specialty.map(option => (
            <Pressable
              key={option.id}
              onPress={() => handleSelection(option)}
              style={[
                height[97],
                flex.row,
                margin.x_20,
                margin.b_15,
                flex.alignCenter,
                padding.x_20,
                border.radius_8,
                selected.id === option.id ? background.green : background.white,
              ]}>
              <Image
                source={option.image}
                resizeMode={'contain'}
                style={[height[65], width[65], margin.r_10]}
              />
              <CustomText
                text={option.text}
                otherStyles={[
                  font_size[18],
                  font.bold,
                  selected.id === option.id
                    ? color.text_white
                    : color.text_green,
                ]}
              />
            </Pressable>
          ))}
          <CustomButton
            title={`Keep Going`}
            containerStyle={[width.half]}
            onPress={() => navigation.navigate('Tab')}
          />
        </View>
      </View>
      {loadingAndError.loading === true && <FullScreenLoader />}
    </SafeAreaView>
  )
}

export default Specialty

const styles = StyleSheet.create({})

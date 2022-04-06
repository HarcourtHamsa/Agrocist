import {Image, Pressable, SafeAreaView, StyleSheet, View} from 'react-native'
import React, {useCallback, useState} from 'react'
import {IComponent} from 'interface/IComponent'
import {background} from 'styles/background'
import {flex} from 'styles/layout'
import {height, margin, padding, width} from 'styles/spacing'
import BottomSheet from 'components/Modal/BottomSheet'
import {useFocusEffect} from '@react-navigation/native'
import Appbar from 'components/Appbar'
import CustomText from 'components/CustomText'
import {color, font, font_size} from 'styles/typography'
import {diagnosisPictureOption} from 'utils/data'

import {
  CameraOptions,
  ImageLibraryOptions,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker'
import {
  requestCameraPermissionsV2,
  requestFilePermissionsV2,
} from 'services/ImageController'
import {displayToastMessage} from 'utils/display'
import {IFileImage} from 'interface/IImage'

const Diagnosis = ({navigation}: IComponent) => {
  const [launchModal, setLaunchModal] = useState(false)
  const [filePath, setFilePath] = useState<IFileImage>({} as IFileImage)

  useFocusEffect(
    useCallback(() => {
      setLaunchModal(true)
    }, []),
  )

  const captureImage = async () => {
    setLaunchModal(false)
    let options: CameraOptions = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      saveToPhotos: true,
      includeBase64: true,
    }
    launchCamera(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        displayToastMessage('User cancelled camera picker')
        return
      } else if (response.errorCode == 'camera_unavailable') {
        displayToastMessage('Camera not available on device')
        return
      } else if (response.errorCode == 'permission') {
        displayToastMessage('Permission not satisfied')
        return
      } else if (response.errorCode == 'others') {
        displayToastMessage(response?.errorMessage ?? 'Error launching camera')
        return
      }
      const fileImage: any = response
      setFilePath(fileImage)
    })
  }

  const chooseFile = () => {
    setLaunchModal(false)
    let options: ImageLibraryOptions = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    }
    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        displayToastMessage('User cancelled camera picker')
        return
      } else if (response.errorCode == 'camera_unavailable') {
        displayToastMessage('Camera not available on device')
        return
      } else if (response.errorCode == 'permission') {
        displayToastMessage('Permission not satisfied')
        return
      } else if (response.errorCode == 'others') {
        displayToastMessage(response?.errorMessage ?? 'Error fetching image')
        return
      }
      const fileImage: any = response
      setFilePath(fileImage)
    })
  }

  const handleLaunch = (type: string) => {
    try {
      setLaunchModal(false)
      if (type === 'file') {
        requestFilePermissionsV2(chooseFile)
      } else {
        requestCameraPermissionsV2(captureImage)
      }
    } catch (error) {}
  }

  console.log({first: filePath})
  console.log({now: filePath?.assets})
  console.log({there: filePath?.assets?.[0]})
  console.log({hiii: filePath?.assets?.[0]?.base64})

  return (
    <SafeAreaView style={[flex.flex_1, padding.x_20, background.white]}>
      <Appbar back={true} navigation={navigation} inLineBar={true} />
      {filePath?.assets?.[0]?.base64 ? (
        <Image
          source={{
            uri: `data:image/jpeg;base64,${filePath.assets[0].base64}`,
          }}
          resizeMode='contain'
          style={[height[150], width[170]]}
        />
      ) : (
        <CustomText text={`Nope`} />
      )}
      <BottomSheet setLaunchModal={setLaunchModal} modalState={launchModal}>
        <View style={[padding.y_10]}>
          {diagnosisPictureOption.map(option => (
            <Pressable
              onPress={() => handleLaunch(option.type)}
              style={[flex.alignCenter, margin.b_40]}
              key={option.id}>
              <Image
                source={option.image}
                style={[height[102], width[102]]}
                resizeMode={'contain'}
              />
              <CustomText
                text={option.title}
                otherStyles={[
                  color.text_green,
                  font_size[18],
                  margin.t_10,
                  font.bold,
                ]}
              />
            </Pressable>
          ))}
        </View>
      </BottomSheet>
    </SafeAreaView>
  )
}

export default Diagnosis

const styles = StyleSheet.create({})

import { Image, Pressable, SafeAreaView, StyleSheet, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { IComponent } from 'interface/IComponent'
import { background } from 'styles/background'
import { flex } from 'styles/layout'
import { height, margin, padding, width } from 'styles/spacing'
import BottomSheet from 'components/Modal/BottomSheet'
import { useFocusEffect } from '@react-navigation/native'
import Appbar from 'components/Appbar'
import CustomText from 'components/CustomText'
import { color, font, font_size } from 'styles/typography'
import { diagnosisPictureOption } from 'utils/data'

// new code
import { launchImageLibrary, launchCamera } from "react-native-image-picker"
import { request, PERMISSIONS } from 'react-native-permissions';

import * as tf from '@tensorflow/tfjs';
import Tflite from 'tflite-react-native';
// import 'typings/tflite-react-native.d.ts';


const Diagnosis = ({ navigation }: IComponent) => {
  const [launchModal, setLaunchModal] = useState(false);
  const [resourcePath, setResourcePath] = useState({});

  useFocusEffect(
    useCallback(() => {
      setLaunchModal(true)
      loadTfModel()
    }, []),
  )


  const loadTfModel = () => {
    // const tflite = new Tflite();
    // console.log('tflite.....', tflite)
    // tflite.loadModels({
    //   model: 'model/model_fp16_1.tflite',
    //   labels: 'model/labels.txt',
    // }, (err, res) => {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     console.log(res)
    //   }
    // })
  }

  const requestCameraPermission = async () => {
    try {
      request(PERMISSIONS.ANDROID.CAMERA).then((result) => {
        console.log(result)
      })
    } catch (err) {
      console.warn(err);
    }
  };


  const handleLaunch = async (type: String) => {
    requestCameraPermission();

    enum Actions {
      takePhoto = "Take Photo",
      uploadPhoto = "Upload Photo"
    }

    if (type === Actions.uploadPhoto) {
      try {
        await launchImageLibrary({ mediaType: 'photo' }, (response) => {
          setResourcePath(response);
        },
        )
      } catch (error) {
        console.log(error)
      }
    }

    if (type === Actions.takePhoto) {
      setLaunchModal(false);
      navigation.navigate("Preview")
    }
  }

  return (
    <SafeAreaView style={[flex.flex_1, padding.x_20, background.white]}>
      <Appbar back={true} navigation={navigation} inLineBar={true} />

      <BottomSheet setLaunchModal={setLaunchModal} modalState={launchModal}>
        <View style={[padding.y_10]}>
          {diagnosisPictureOption.map(option => (
            <Pressable
              onPress={() => handleLaunch(option.title)}
              style={[flex.alignCenter, margin.b_40]}
              key={option.id}>
              <Image source={option.image} style={[height[102], width[102]]} />
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

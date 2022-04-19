import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native';
import { margin, padding, width } from 'styles/spacing'
import { color, font, font_size } from 'styles/typography';
import Appbar from 'components/Appbar';
import { background } from 'styles/background'
import { flex } from 'styles/layout';
import { IComponent } from 'interface/IComponent';
import { close as closeImage, rose } from 'utils/images/list'
import CustomButton from 'components/CustomButton';
import { launchCamera } from "react-native-image-picker"
import CustomText from 'components/CustomText';
// import { request, PERMISSIONS } from 'react-native-permissions';

const Preview = ({ navigation }: IComponent) => {
    const [resourcePath, setResourcePath] = useState({});

    const handleCameraLaunch = async () => {
        console.log("continue")
        try {
            await launchCamera({ cameraType: 'back', mediaType: 'photo' }, (response) => {
                console.log(response);
                setResourcePath(response)
            }).then(() => navigation.navigate("Diagnose"))
        } catch (error) {
            console.log(error)
        }
    }




    return (
        <SafeAreaView style={[flex.flex_1, padding.x_20, background.black]}>
            <Appbar back={true} navigation={navigation} inLineBar={true} imageSource={closeImage} />
            <View style={styles.container}>
                <CustomText
                    text={`Make sure the plant is captured  with the best angle`}
                    type='title'
                    otherStyles={[font.bold, font_size[24], color.text_white, width.ninety]}
                />

                <Image
                    resizeMode='contain'
                    source={rose}
                />

                <CustomButton
                    title={`Continue`}
                    onPress={handleCameraLaunch}
                    containerStyle={[width.half]}
                />
            </View>
        </SafeAreaView>
    )
}

export default Preview

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
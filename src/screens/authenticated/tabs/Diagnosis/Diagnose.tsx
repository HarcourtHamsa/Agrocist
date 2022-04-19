import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from 'react-native'
import { margin, padding, width } from 'styles/spacing'
import { flex } from 'styles/layout'
import Appbar from 'components/Appbar'
import { IComponent } from "interface/IComponent";
import { background } from "styles/background";
import CustomButton from "components/CustomButton";
import CustomText from "components/CustomText";
import { font, font_size, color } from "styles/typography";
import { ScrollView } from "react-native-gesture-handler";

const Diagnose = ({ navigation }: IComponent) => {
    return (
        <SafeAreaView style={[flex.flex_1, background.white]}>
            {/* <Appbar back={true} navigation={navigation} inLineBar={true} /> */}
            <View style={styles.screen}>
                <View style={styles.imageContainer}></View>
                <View style={[styles.textContainer, padding.x_20, padding.y_20]}>
                    <ScrollView>
                        <View style={styles.diseaseTitle}>
                            <CustomText
                                text={`Phytoplasma`}
                                type='title'
                                // left={true}
                                otherStyles={[color.text_green, width.full, font.medium]}
                            />
                        </View>
                        <CustomText
                            text={`
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Incidunt, alias quae
                            qui fuga repellendus facilis ipsum delectus
                            repudiandae quos ut voluptatum error unde,
                            minus vel neque deserunt. Libero praesentium
                            delectus iusto eaque at mollitia quibusdam
                            possimus sapiente nulla, debitis fugiat,
                            eos autem explicabo molestias ab tenetur.
                            Doloribus voluptatum perferendis molestiae.
                            `}
                            // left={true}
                            otherStyles={[color.text_black, width.full, font.regular]}
                        />
                    </ScrollView>
                </View>
                <View style={styles.buttonContainer}>
                    <View>
                        <CustomText
                            text={`Contact our experts for further details and supports about the diagnose`}
                            type='subTitle'
                            // left={true}
                            otherStyles={[color.text_green, width.full, font.regular, font_size[10], margin.b_10]}
                        />
                        <CustomButton
                            title={`Ask Professionals`}
                            onPress={() => console.log("click")}
                            containerStyle={[width.sixty]}

                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Diagnose

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'red'
    },

    imageContainer: {
        height: '30%',
        backgroundColor: "green"
    },

    textContainer: {
        height: '60%',
        backgroundColor: 'orange',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: "-10%",
    },

    diseaseTitle: {
        backgroundColor: 'red',
        width: ''
    },

    buttonContainer: {
        height: '20%',
        backgroundColor: 'yellow',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        textAlign: 'center'
    }
})
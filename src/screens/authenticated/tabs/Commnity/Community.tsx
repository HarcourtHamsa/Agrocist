import CustomButton from 'components/CustomButton'
import CustomText from 'components/CustomText'
import ProfileButton from 'components/ProfileButton'
import {IComponent} from 'interface/IComponent'
import React, {Fragment} from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useDispatch, useSelector} from 'react-redux'
import {Dispatch} from 'redux'
import {logoutUser} from 'services/Login'
import {background} from 'styles/background'
import {APP_GREEN, APP_WHITE} from 'styles/constant'
import {flex} from 'styles/layout'
import {width} from 'styles/spacing'
import {font, font_size} from 'styles/typography'
import {profileOptions} from 'utils/data'

const Community = ({navigation}: IComponent) => {
  const user = useSelector((state: any) => state.user.userDetail)
  const dispatch: Dispatch<any> = useDispatch()

  const handleLogout = () => {
    logoutUser(dispatch)
  }

  return (
    <SafeAreaView style={[flex.flex_1, background.white]}>
      <ScrollView style={flex.flex_1}>
        <Fragment>
          <View style={styles.topSection}>
            <View style={styles.topFirstSection}>
              <CustomText
                text={`Profile`}
                type='title'
                otherStyles={styles.topText}
              />
            </View>
          </View>
          <View style={styles.topSecondSection}>
            <View style={styles.topSecondInnerSection}>
              <CustomText text={user?.email} otherStyles={styles.email} />
            </View>
          </View>
        </Fragment>
        <View style={styles.bottomSectionContainer}>
          <View style={styles.bottomSection}>
            {profileOptions.map(item => (
              <ProfileButton
                key={item.name}
                name={item.name}
                route={item.route}
                navigation={navigation}
              />
            ))}
            <CustomButton
              onPress={handleLogout}
              title={'Logout'}
              textStyle={[styles.textButtonText, font.regular, font_size[15]]}
              containerStyle={[styles.textButton, width.full]}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Community

const styles = StyleSheet.create({
  textButton: {
    backgroundColor: 'transparent',
    height: 30,
    width: 170,
  },
  textButtonText: {
    color: APP_GREEN,
    fontFamily: 'Lato-Regular',
  },
  topSection: {
    height: 177,
    width: '100%',
    backgroundColor: '#007AFF',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  topFirstSection: {
    height: 90,
    width: '100%',
    backgroundColor: APP_WHITE,
    justifyContent: 'flex-end',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  topText: {
    fontSize: 22,
  },
  topSecondSection: {
    paddingHorizontal: 20,
    height: 100,
  },
  topSecondInnerSection: {
    height: 90,
    width: '100%',
    marginBottom: 30,
    backgroundColor: APP_WHITE,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: 'center',
  },
  email: {
    marginTop: 10,
    fontSize: 15,
    color: '#8F9BB3',
  },
  bottomSectionContainer: {
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  bottomSection: {
    backgroundColor: APP_WHITE,
    // minHeight: 200,
    borderRadius: 12,
    paddingTop: 10,
    marginBottom: 20,
  },
})

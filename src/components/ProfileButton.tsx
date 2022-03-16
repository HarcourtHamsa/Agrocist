import {INavigation} from 'interface/IComponent'
import React from 'react'
import {TouchableOpacity, Image, StyleSheet} from 'react-native'
import {font} from 'styles/typography'
import {profile_enter} from 'utils/images/list'
import CustomText from './CustomText'
import Divider from './Divider'

interface IPButton {
  name: string
  route: string
  navigation: INavigation
}

const ProfileButton = ({name, route, navigation}: IPButton) => (
  <>
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      style={styles.button}>
      <CustomText type='title' otherStyles={styles.name} text={name} />
      <Image source={profile_enter} style={styles.profile_enter} />
    </TouchableOpacity>
    <Divider />
  </>
)

export default ProfileButton

const styles = StyleSheet.create({
  name: {
    fontSize: 15,
    fontFamily: font.medium.fontFamily,
  },
  profile_enter: {
    height: 24,
    width: 24,
  },
  button: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

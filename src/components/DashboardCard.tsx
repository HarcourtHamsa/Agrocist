import React from 'react'
import {StyleSheet, Pressable, View} from 'react-native'
import {APP_WHITE} from 'styles/constant'
import {flex} from 'styles/layout'
import {normalizeDimension} from 'utils/sizing'
import CustomText from './CustomText'
import Divider from './Divider'

interface IDash {
  title?: string
  topButtonTitle?: string
  sectionOneTitle: string
  sectionOneDescription: string
  sectionTwoTitle: string
  sectionTwoDescription: string
  onPress?: () => void
  cardOnPress?: () => void
  showStar?: boolean
}
const DashboardCard = ({
  title,
  topButtonTitle,
  sectionOneTitle,
  sectionTwoTitle,
  sectionOneDescription,
  sectionTwoDescription,
  onPress,
  cardOnPress,
  showStar,
}: IDash) => {
  return (
    <Pressable
      onPress={cardOnPress}
      style={[styles.container, !title && styles.noTitle]}>
      {title !== undefined && (
        <View style={styles.topContainer}>
          <CustomText text={title} otherStyles={styles.boldText} />
          <Pressable onPress={onPress}>
            <CustomText
              otherStyles={styles.topButtonTitle}
              text={topButtonTitle ?? ''}
            />
          </Pressable>
        </View>
      )}
      <View style={styles.middleContainer}>
        <Divider />
      </View>
      <View style={styles.bottomContainer}>
        <View style={[styles.sectionContainer, styles.border]}>
          <CustomText text={sectionOneTitle} otherStyles={styles.title} />
          <View style={[flex.row, flex.alignCenter]}>
            <CustomText
              otherStyles={styles.answer}
              text={sectionOneDescription}
            />
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <CustomText otherStyles={styles.title} text={sectionTwoTitle} />
          <CustomText
            otherStyles={styles.answer}
            text={sectionTwoDescription}
          />
        </View>
      </View>
    </Pressable>
  )
}

export default DashboardCard

const styles = StyleSheet.create({
  noTitle: {marginTop: 20, minHeight: 120},
  container: {
    backgroundColor: APP_WHITE,
    minHeight: 150,
    borderRadius: 12,
    marginBottom: 20,
    zIndex: 0,
  },
  border: {borderRightWidth: 1, borderRightColor: '#EDF1F7'},
  topContainer: {
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  middleContainer: {
    height: 21,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  boldText: {
    color: '#222B45',
    fontSize: normalizeDimension(16),
    fontFamily: 'Lato-Bold',
  },
  topButtonTitle: {
    color: '#007AFF',
    fontSize: normalizeDimension(12),
    textDecorationLine: 'underline',
  },
  sectionContainer: {
    width: '48%',
    marginBottom: 10,
    // height: 56,
    // alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: normalizeDimension(14),
    color: '#8F9BB3',
    lineHeight: 22,
    marginBottom: 3,
  },
  answer: {
    color: '#222B45',
    fontSize: normalizeDimension(18),
    fontFamily: 'Lato-Bold',
  },
})

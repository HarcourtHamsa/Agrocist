import {ticket_types} from 'interface/ITicket'
import React from 'react'
import {Pressable, StyleSheet, View} from 'react-native'
import {APP_WHITE} from 'styles/constant'
import {border, flex} from 'styles/layout'
import {width} from 'styles/spacing'
import {font_size} from 'styles/typography'
import {dateAndTimeFormat} from 'utils/input/dateFormatter'
import {normalizeDimension} from 'utils/sizing'
import CustomText from './CustomText'

interface ITicket {
  id: string
  date: string | Date
  username: string
  amount?: string
  category: ticket_types
  onPress?: () => void
}

const TicketCard = ({
  id,
  date,
  username,
  amount,
  category,
  onPress,
}: ITicket) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={[width.max_seventy_percent]}>
        <CustomText
          strong={'bold'}
          left
          text={id}
          otherStyles={[font_size[13]]}
        />
        <CustomText left text={dateAndTimeFormat(date, 'MMM DD, YYYY')} />
        <CustomText left text={username} />
      </View>
      <View>
        <CustomText
          text={amount ? `N${amount}` : `NA`}
          strong={'bold'}
          otherStyles={[styles.amount]}
        />
        <View style={[flex.row]}>
          {/* {category.map((item: ticket_types, index: number) => ( */}
          <View style={[styles.category, styles[category]]}>
            <CustomText
              text={category}
              otherStyles={[styles.text, textStyles[category]]}
            />
          </View>
          {/* ))} */}
        </View>
      </View>
    </Pressable>
  )
}

export default TicketCard

const textStyles = StyleSheet.create({
  general: {
    color: '#3BB54A',
  },
  task: {
    color: '#3B7AB5',
  },
  registration_tasker: {
    color: '#EBA900',
  },
  registration_client: {
    color: '#EBA900',
  },
  safety: {
    color: '#EA0015',
  },
})

const styles = StyleSheet.create({
  container: {
    height: 97,
    backgroundColor: APP_WHITE,
    marginTop: 20,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    textTransform: 'capitalize',
    fontSize: normalizeDimension(12),
  },
  general: {
    backgroundColor: '#E1FCEA',
  },
  task: {
    backgroundColor: '#E1EFFC',
  },
  registration_tasker: {
    backgroundColor: '#FCF9E1',
  },
  registration_client: {
    backgroundColor: '#FCF9E1',
  },
  safety: {
    backgroundColor: '#FCE1E1',
  },
  category: {
    justifyContent: 'center',
    borderRadius: 12,
    paddingHorizontal: 5,
    height: 21,
    minWidth: normalizeDimension(79),
    marginLeft: 4,
  },
  amount: {
    textAlign: 'right',
    marginBottom: 5,
    color: '#007AFF',
    paddingRight: 5,
  },
})

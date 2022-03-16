import React, {useState} from 'react'
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
  TextStyle,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  GestureResponderEvent,
  TextInputFocusEventData,
} from 'react-native'
import {APP_TEXT_BLACK} from 'styles/constant'
import {margin} from 'styles/spacing'
import {password, phone} from 'utils/images/list'
import CustomText from './CustomText'

type StatusTypes = 'dropdown' | 'text'
type PickerModeType = 'dropdown' | 'dialog'

declare interface IFormInput {
  icon?: 'pin' | 'phone' | 'clear'
  pickerMode?: PickerModeType
  value?: string
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined
  keyboardType?: KeyboardTypeOptions
  onChangeText?: (text: string) => void
  onValueChange?: (value: any, index: number) => void
  setValue?: (value: string) => void
  multiline?: boolean
  secureTextEntry?: boolean
  editable?: boolean
  onPress?: (event: GestureResponderEvent) => void
  error?: string
  maxLength?: number
  placeholder: string
  type?: StatusTypes
  options?: Array<{label: string; value: string}>
  containerStyle?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<TextStyle>
  textInputStyle?: StyleProp<TextStyle>
  onKeyPress?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void
  touched?: boolean
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined
}

const FormInput = ({
  icon,
  secureTextEntry,
  onPress,
  error,
  placeholder,
  type,
  options,
  containerStyle,
  onValueChange,
  inputStyle,
  textInputStyle,
  setValue,
  pickerMode,
  editable,
  onBlur,
  touched,
  ...rest
}: IFormInput) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={[styles.container, margin.t_10, containerStyle]}>
      <CustomText left text={placeholder} />
      <View style={[styles.inputRow, margin.t_10, inputStyle]}>
        <TextInput
          {...rest}
          underlineColorAndroid={'transparent'}
          returnKeyType='done'
          editable={editable ?? true}
          placeholder={placeholder}
          secureTextEntry={showPassword ? false : secureTextEntry}
          style={[styles.input, textInputStyle]}
          placeholderTextColor={'#8F9BB3'}
          onBlur={onBlur}
        />
        {icon && (
          <TouchableOpacity
            onPress={() => {
              if (icon === 'pin') {
                setShowPassword(oldState => !oldState)
              } else if (icon === 'clear' && setValue) {
                setValue('')
              }
            }}>
            {icon === 'pin' || icon === 'phone' ? (
              <Image
                resizeMode='contain'
                style={styles.passwordImage}
                source={icon === 'pin' ? password : phone}
              />
            ) : null}
          </TouchableOpacity>
        )}
      </View>
      {error !== undefined && error.length > 0 && touched === true && (
        <CustomText left text={error} type='error' />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    paddingLeft: 15,
    textAlignVertical: 'center',
    color: APP_TEXT_BLACK,
    width: '100%',
    fontFamily: 'Lato-Regular',
  },
  container: {
    width: '100%',
    // paddingHorizontal: 10,
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2FDF7',
    width: '100%',
    height: 56,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#05612E',
  },
  button: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordImage: {
    position: 'absolute',
    top: -5,
    right: 15,
    width: 20,
    height: 18,
  },
  clearImage: {
    width: 10,
    height: 10,
  },
  flag: {
    width: 34,
    height: 24,
    marginLeft: 10,
  },
  divider: {
    marginTop: 10,
    marginLeft: 10,
    height: 20,
    width: 1,
  },
})

export default FormInput

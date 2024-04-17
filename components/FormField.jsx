import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'
import { icons } from '../constants'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-fmedium'>{title}</Text>

      <View className='border-2 border-black-200 w-full h-16 px-4 bg-black-200 rounded-2xl focus:border-action items-center flex-row'>
        <TextInput 
            className='flex-1 text-white font-fsemibold text-base'
            value={value}
            placeholder={placeholder}
            placeholderTextColor='#7b7b8b'
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eyehide } tintColor='#CDCDE0' className='w-6 h-6' resizeMode='contain'/>
        </TouchableOpacity>)}
      </View>
    </View>
  )
}

export default FormField
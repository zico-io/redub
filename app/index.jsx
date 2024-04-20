import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { Redirect, Router, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <KeyboardAwareScrollView contentContainerStyle={{ height: '100%'}}>
        <View className='w-full justify-center items-center min-h-[85vh] px-4'>
          <Image 
            source={images.logo} 
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />

          <CustomButton
            title='Continue with email.'
            handlePress={() => router.push('/sign-up')}
            containerStyles='w-full mt-7'
          />
        </View>
      </KeyboardAwareScrollView>

      <StatusBar backgroundColor='#000'
      style='light' />
    </SafeAreaView>
  );
}

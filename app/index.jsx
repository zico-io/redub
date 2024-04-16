import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image } from 'react-native';
import { Redirect, Router, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className='w-full justify-center items-center min-h-[85vh] px-4'>
          <Image 
            source={images.logo} 
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />

          <CustomButton
            title='Create Account'
            handlePress={() => router.push('/sign-up')}
            containerStyles='w-full mt-7'
          />
          <CustomButton
            title='Sign In'
            handlePress={() => router.push('/sign-in')}
            containerStyles='w-[284px] mt-7 bg-secondary'
            textStyles='text-action'
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#252422'
      style='light' />
    </SafeAreaView>
  );
}

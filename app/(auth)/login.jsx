import { View, Text,Alert, Image, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React,{useState} from 'react';
import { ScrollView } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../firebaseConfig'; // Import Firebase config

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Sign in the user with Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      const user = userCredential.user;
      console.log('User logged in:', user);

      Alert.alert('Login successful!');

      // Navigate to another screen or perform other actions after successful login

    } catch (error) {
      // Handle login error
      console.error('Error logging in:', error);
      Alert.alert('Login Error', error.message);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}  // Adjust this value based on header or status bar height
      >
        <ScrollView 
          className='' 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className='h-full justify-start items-center bg-[#4169E1]'>
            {/* The rounded logo image */}
            <Image 
              source={require('../../assets/images/icons/OIG3.jpg')} 
              className='w-[136px] h-[136px] mt-[80px] rounded-[99px]' 
            />
            <Text className='text-white text-[36px]' style={{ fontFamily: 'PoppinsBold' }}>
              Login
            </Text>
            <View className='justify-start items-start w-full'>
              <Text 
                className='self-start text-white text-[16px] mt-[20px] ml-9' 
                style={{ fontFamily: 'PoppinsBold' }}
              >
                Username or Email:
              </Text>
            </View>
            <ImageBackground 
              imageStyle={{ opacity: 0.36 }} 
              source={require('../../assets/images/icons/OIG3__1_-removebg.png')} 
              className='w-[323px] h-[248px] justify-start items-center' 
              resizeMode='contain'
            >
              {/* Username and Password text input field */}
              <View className='justify-start items-start w-full'>
                <CustomTextInput placeHolder='Username...' value={username} onChangeText={setUsername} isTouchable={false} />
                <Text 
                  className='self-start text-white text-[16px] mt-[20px] ml-5' 
                  style={{ fontFamily: 'PoppinsBold' }}
                >
                  Password:
                </Text>
                <CustomTextInput placeHolder='Password...' value={password} onChangeText={setPassword} isTouchable={false} />
              </View>
              {/* Login button */}
              <TouchableOpacity 
              onPress={handleLogin}
                className='w-[126px] h-[43px] mt-9 items-center justify-center rounded-[9px]' 
                style={{ backgroundColor: '#FAFAD2' }}
              >
                <Text className='text-[#27408B]' style={{ fontFamily: 'PoppinsBold' }}>
                  Login
                </Text>
              </TouchableOpacity>
            </ImageBackground>
            {/* Signup hyperlink */}
            <Text className='text-[#FFD700] mb-36'>
              Don't have an account?{" "} 
              <Link className='text-[#EBFF00]' href={'/signup'}>
                Sign up
              </Link>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

import { View,Alert, Text, TouchableOpacity, Image, ImageBackground, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React,{useState} from 'react';
import { Link } from 'expo-router';
import CustomTextInput from '../../components/CustomTextInput';

//Firebase configurations
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; 
import { auth, db } from '../../firebaseConfig'; // Import your Firebase config


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
  
    const handleSignUp = async () => {
      try {
        // Create user with Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        // Add user data to Firestore
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          email: email,
          username: username,
        });
  
        Alert.alert('User registered successfully!');
        // Navigate to next screen, if necessary
  
      } catch (error) {
        Alert.alert('Error registering user', error.message);
      }
    };


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={20}  // Adjust this as needed
      >
        <ScrollView className='flex-1' showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
          <View className='h-full justify-start items-center bg-[#4169E1]'>
            <Image source={require('../../assets/images/icons/OIG3.jpg')} className='w-[136px] h-[136px] mt-[80px] rounded-[99px]' />
            <Text className='text-white text-[36px]' style={{ fontFamily: 'PoppinsBold' }}>Sign up</Text>
            <View className='justify-start items-start w-full'>
              <Text className='self-start text-white text-[16px] mt-[20px] ml-9' style={{ fontFamily: 'PoppinsBold' }}>Username:</Text>
            </View>
            <ImageBackground 
              imageStyle={{ opacity: 0.36 }}
              source={require('../../assets/images/icons/OIG3__1_-removebg.png')} 
              className='w-[323px] h-[248px] justify-start items-center' 
              resizeMode='contain'
            >
                
              <View className='justify-start items-start w-full'>
                <CustomTextInput placeHolder='Username...' value={username} onChangeText={setUsername} />
                {/*Email  */}
                <Text className='self-start text-white text-[16px] mt-[20px] ml-5' style={{ fontFamily: 'PoppinsBold' }}>Email :</Text>
                <CustomTextInput placeHolder='Email...' value={email} onChangeText={setEmail}/>
                <Text className='self-start text-white text-[16px] mt-[20px] ml-5' style={{ fontFamily: 'PoppinsBold' }}>Password :</Text>
                <CustomTextInput placeHolder='Password...' value={password} onChangeText={setPassword}/>
              </View>
            </ImageBackground>
            {/* Sign up bottons */}
            <TouchableOpacity onPress={handleSignUp} className='w-[126px] h-[43px] mt-4 items-center justify-center rounded-[9px]' style={{ backgroundColor: '#FAFAD2' }}>
              <Text className='text-[#27408B]' style={{ fontFamily: 'PoppinsBold' }}>Sign up</Text>
            </TouchableOpacity>
            <Text className='text-[#FFD700] mb-12 mt-5'>Already have an account?{" "} 
              <Link className='text-[#EBFF00]' href={'/login'}>Login</Link>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;

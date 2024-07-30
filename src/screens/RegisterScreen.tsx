import React, { memo, useState } from 'react';
import { IconButton } from 'react-native-paper';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';
import { Navigation } from '../types';
// import LoginBackground from '../assets/loginBackground.jpg';
// import { LoginBackground } from '../assets/loginBackground.jpg';

type Props = {
    navigation: Navigation;
};

const RegisterScreen = ({ navigation }: Props) => {
    const [firstName, setFirstName] = useState({ value: '', error: '' });
    const [lastName, setLastName] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [phoneNumber, setPhoneNumber] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const _onLoginPressed = () => {
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
        }

        navigation.navigate('Dashboard');
    };

    return (
        <Background>
            <BackButton goBack={() => navigation.navigate('HomeScreen')} />

            {/* <Logo /> */}

            <Header>Sign Up</Header>

            <TextInput
                label="First Name"
                placeholder='Elize'
                returnKeyType="next"
                value={firstName.value}
                onChangeText={text => setFirstName({ value: text, error: '' })}
                error={!!firstName.error}
                errorText={firstName.error}
                autoCapitalize="none"
            />
            <TextInput
                label="Last Name"
                placeholder='Salaraz'
                returnKeyType="next"
                value={lastName.value}
                onChangeText={text => setLastName({ value: text, error: '' })}
                error={!!lastName.error}
                errorText={lastName.error}
                autoCapitalize="none"
            />
            <TextInput

                label="Email Address"
                placeholder='Email'
                returnKeyType="next"
                value={email.value}
                onChangeText={text => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                // autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <TextInput
                label="Phone Number"
                placeholder='0236941200'
                returnKeyType="next"
                value={phoneNumber.value}
                onChangeText={text => setPhoneNumber({ value: text, error: '' })}
                error={!!phoneNumber.error}
                errorText={phoneNumber.error}
                autoCapitalize="none"
            // autoCompleteType="email"
            />

            <TextInput

                label="Password"
                placeholder='Password'
                returnKeyType="done"
                value={password.value}
                onChangeText={text => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />


            <View>
                <Text style={styles.label}>Where did you hear about us? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <Button style={styles.whereHeardBtn} onPress={_onLoginPressed}>
                        Influencer
                    </Button>
                </TouchableOpacity>
            </View>
            <Button style={styles.loginBtn} onPress={_onLoginPressed}>
                Create Account
            </Button>

            <View style={styles.row}>
                <Text style={styles.label}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.link}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    loginBtn: {
        backgroundColor: '#6E9277',
        color: '#fff',
        borderRadius: 5
    },
    whereHeardBtn: {
        backgroundColor: '#fff',
        color: '#6E9277',
        borderRadius: 20
    },

    loginWith: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    label: {
        color: theme.colors.secondary,
    },
    forgotLabel: {
        color: '#6E9277',
    },
    link: {
        fontWeight: 'bold',
        color: '#292929',
    },
    loginWithText: {
        alignSelf: 'center',
        fontSize: 12,
        color: '#6E6E6E',
    },
});

export default memo(RegisterScreen);

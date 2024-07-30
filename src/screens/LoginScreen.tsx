import React, { memo, useState } from 'react';
import { IconButton } from 'react-native-paper';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// import { Icon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
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

const LoginScreen = ({ navigation }: Props) => {
    const [email, setEmail] = useState({ value: '', error: '' });
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

            <Header>Log In</Header>

            <TextInput
                icon={`user`}
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
                icon={`password`}
                label="Password"
                placeholder='Password'
                returnKeyType="done"
                value={password.value}
                onChangeText={text => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />

            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPasswordScreen')}
                >
                    <Text style={styles.forgotLabel}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>

            <Button style={styles.loginBtn} onPress={_onLoginPressed}>
                Log In
            </Button>

            <View >
                <Text style={styles.loginWithText}>or log in with</Text>
                <TouchableOpacity style={styles.loginWith}
                    onPress={() => navigation.navigate('')}
                >
                    <Button style={styles.facebookBtn} onPress={_onLoginPressed} ><Icon name='facebook' color={`blue`} size={25} /></Button>

                    <IconButton icon='login' style={styles.googleBtn} onPress={_onLoginPressed} />

                    <IconButton icon='fontawesome|apple-f' style={styles.appleBtn} onPress={_onLoginPressed} />
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={styles.link}>Sign up</Text>
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
    facebookBtn: {
        width: '25%',
        marginHorizontal: 5,
        borderColor: '#6E9277',
        borderWidth: 1,
        color: '#fff',
        borderRadius: 20
    },
    googleBtn: {
        width: '25%',
        marginHorizontal: 5,
        borderColor: '#6E9277',
        borderWidth: 1,
        color: '#fff',
        borderRadius: 20
    },
    appleBtn: {
        width: '25%',
        marginHorizontal: 5,
        borderColor: '#6E9277',
        borderWidth: 1,
        color: '#fff',
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

export default memo(LoginScreen);

import { View, Image, StyleSheet } from "react-native";
const SplashScreen = () => {

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/splash/splash.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {

    },
    header: {

    },
    logo: {

    }
})
export default SplashScreen;
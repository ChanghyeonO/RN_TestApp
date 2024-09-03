import {View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Animated, Platform} from "react-native";
import React, {useEffect, useRef} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {getStatusBarHeight} from "react-native-status-bar-height";

type StatusParams = {
    name: string;
    image: any;
};

type StatusProps = {
    route: { params: StatusParams };
    navigation: NativeStackNavigationProp<any, "Status">;
};


const Status = ({ route, navigation }: StatusProps) => {
    const {name, image} = route.params;

    const statusBarHeight = getStatusBarHeight();

    const progress = useRef(new Animated.Value(0)).current;
    const progressAnimation = progress.interpolate({
        inputRange: [0, 5],
        outputRange: ["0%", "100%"],
    });

    useEffect(() => {
        let timer = setTimeout(()=>{
            navigation.goBack();
        },5000);

        return ()=>{
            clearTimeout(timer);
        }
    }, []);

    useEffect(()=>{
        Animated.timing(progress, {
            toValue: 5,
            duration: 5000,
            useNativeDriver: false,
        }).start();
    },[]);

    return(
        <SafeAreaView
        style={{
            backgroundColor:"black",
            height: "100%",
            justifyContent: "center",
        }}
        >
            <StatusBar
            backgroundColor="black"
            barStyle="light-content"
            />
            <View
            style={{
                marginTop: Platform.OS === "ios" ? statusBarHeight : 0,
                height: 3,
                width: "100%",
                borderWidth: 1,
                backgroundColor: "gray",
                position: "absolute",
                top: 18,
            }}
            >
                    <Animated.View
                    style={{
                        height: "100%",
                        backgroundColor: "white",
                        width: progressAnimation,
                    }}
                    />
                <View
                style={{
                    padding: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    position: "absolute",
                    top: 12,
                    left: 0,
                    width: "90%",
                }}
                >
                    <View
                    style={{
                        width: 30,
                        height: 30,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    >
                        <Image
                            source={image}
                            style={{
                                borderRadius: 100,
                                backgroundColor: "orange",
                                width: "92%",
                                height: "92%",
                                resizeMode: "cover",
                            }}
                        />
                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            width: "100%",
                        }}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontSize: 15,
                                paddingLeft: 10,
                            }}
                        >{name}</Text>
                        <TouchableOpacity
                            onPress={()=>{
                                navigation.goBack();
                            }}
                        >
                            <Ionicons
                                name="close"
                                size={30}
                                style={{
                                    color: "white",
                                    opacity: 0.6,
                                    fontSize: 15,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Image
            source={image}
            style={{
                position: "absolute",
                width: "100%",
                height: 400,
            }}
            />
        </SafeAreaView>
    );
};

export default Status;

import {View, Text, ScrollView, TouchableOpacity,Image} from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

type RootStackParamList = {
    Status: { name: string; image: any };
};

type StoriesNavigationProp = NativeStackNavigationProp<RootStackParamList, "Status">;

const storyInfo = [
    {
        id:1,
        name: "나의 스토리",
        image: require("../../assets/images/science.png"),
    },{
        id:2,
        name: "나의 스토리",
        image: require("../../assets/images/science.png"),
    },{
        id:3,
        name: "나의 스토리",
        image: require("../../assets/images/science.png"),
    },{
        id:4,
        name: "나의 스토리",
        image: require("../../assets/images/science.png"),
    },{
        id:5,
        name: "나의 스토리",
        image: require("../../assets/images/science.png"),
    },{
        id:6,
        name: "나의 스토리",
        image: require("../../assets/images/science.png"),
    },{
        id:7,
        name: "나의 스토리",
        image: require("../../assets/images/science.png"),
    },{
        id:8,
        name: "나의 스토리",
        image: require("../../assets/images/science.png"),
    },{
        id:9,
        name: "나의 스토리",
        image: require("../../assets/images/science.png"),
    },{
        id:10,
        name: "나의 스토리",
        image: require("../../assets/images/science.png"),
    },
];

const Stories = () => {
    const navigation = useNavigation<StoriesNavigationProp>();
    return (
        <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{paddingVertical: 20}}
        >
            {storyInfo.map((data, index : number)=> {
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={()=> {
                            navigation.push("Status",{
                                name: data.name,
                                image: data.image,
                            });
                        }}
                    >
                        <View
                        style={{
                            flexDirection: "column",
                            paddingHorizontal: 8,
                            position: "relative",
                        }}>
                            {data.id === 1 ? (
                                <View
                                style={{
                                    position: "absolute",
                                    bottom: 15,
                                    right: 10,
                                    zIndex: 1,
                                }}
                                >
                                    <Entypo
                                    name="circle-with-plus"
                                    style={{
                                        fontSize:20,
                                        color:"#405de6",
                                        backgroundColor:"white",
                                        borderRadius: 10,
                                        overflow: "hidden",
                                    }}
                                    />
                                </View>
                            ) : null}
                            <View
                                style={{
                                    width: 68,
                                    height: 68,
                                    backgroundColor: "white",
                                    borderWidth: 1.8,
                                    borderRadius: 100,
                                    borderColor: "#c13584",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Image
                                source={data.image}
                                style={{
                                    resizeMode: "cover",
                                    width: "92%",
                                    height: "92%",
                                    borderRadius: 100,
                                    backgroundColor: "orange",
                                }}
                                />
                            </View>
                            <Text></Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
};

export default Stories;


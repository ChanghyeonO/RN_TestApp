import {ScrollView} from "react-native";
import React from "react";
import PostItem from "./PostItem.tsx";

const postInfo = [
    {
        postTitle: "오창현",
        postPersonImage: require("../../assets/images/science.png"),
        postImage: require("../../assets/images/science.png"),
        likes: 765,
        isLiked: true,
    },
    {
        postTitle: "김창현",
        postPersonImage: require("../../assets/images/science.png"),
        postImage: require("../../assets/images/science.png"),
        likes: 765,
        isLiked: true,
    },    {
        postTitle: "이창현",
        postPersonImage: require("../../assets/images/science.png"),
        postImage: require("../../assets/images/science.png"),
        likes: 765,
        isLiked: true,
    },    {
        postTitle: "도창현",
        postPersonImage: require("../../assets/images/science.png"),
        postImage: require("../../assets/images/science.png"),
        likes: 765,
        isLiked: true,
    },    {
        postTitle: "고창현",
        postPersonImage: require("../../assets/images/science.png"),
        postImage: require("../../assets/images/science.png"),
        likes: 765,
        isLiked: true,
    },    {
        postTitle: "마창현",
        postPersonImage: require("../../assets/images/science.png"),
        postImage: require("../../assets/images/science.png"),
        likes: 765,
        isLiked: true,
    },    {
        postTitle: "구창현",
        postPersonImage: require("../../assets/images/science.png"),
        postImage: require("../../assets/images/science.png"),
        likes: 765,
        isLiked: true,
    },
]

const Posts = () => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            {postInfo.map((data, index) => {
                return (
                    <PostItem data={data} key={index} />
                );
            })}
        </ScrollView>
    );
};

export default Posts;

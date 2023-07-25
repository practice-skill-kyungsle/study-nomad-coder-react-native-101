import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        // view 는 div를 대신해서 사용된다
        <View style={styles.container}>
            {/* text는 무조건 이 태그로 */}
            <Text style={styles.text}>Hello</Text>
            {/* 서드파티를 사용해서 앱 상단에 베터리 등 표시 가능 */}
            <StatusBar style="dark" />
        </View>
    );
}

// 객체를 생성해주는 역할.
// 그냥 객체를 만들어서 스타일에 갖다 박아도 되기는 하지만, 이렇게 해야 자동완성 기능을 제공함
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 28,
        color: "black",
    },
});

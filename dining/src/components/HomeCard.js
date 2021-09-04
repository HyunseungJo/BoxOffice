import React from "react"
import { Text, View, StyleSheet, Image } from "react-native"
function HomeCard(props) {
    const image = props.image
    return (
        <>
            <View style={styles.container}>
                <Image
                    style={{ width: '100%', height: '100%' }}
                    resizeMode='cover'
                    source={image}
                />

            </View>
        </>
    )
}
export default HomeCard
const styles = StyleSheet.create({
    container: {
        borderColor: "#471278",
        borderWidth: 5,
        borderRadius: 20,
        overflow: "hidden"
    },
});
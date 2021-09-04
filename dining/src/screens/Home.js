import React, { useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
    Text,
    View,
    Dimensions,
} from 'react-native';
import HomeCard from '../components/HomeCard';
const { width } = Dimensions.get("window")
const IMAGES = {
    image1: require("../assets/1.jpeg"),
    image2: require("../assets/2.jpeg"),
    image3: require("../assets/3.jpeg"),
    image4: require("../assets/4.jpeg"),
    image5: require("../assets/5.jpeg"),
    image6: require("../assets/6.jpeg"),
    image7: require("../assets/7.jpeg"),
}
export default function Home() {
    const [images, setImages] = useState([
        { id: "1", image: IMAGES.image1 },
        { id: "2", image: IMAGES.image2 },
        { id: "3", image: IMAGES.image3 },
        { id: "4", image: IMAGES.image4 },
    ])
    const [indexSelected, setIndexSelected] = useState(0);

    const onSelect = (indexSelected) => {
        setIndexSelected(indexSelected);

    }
    return (
        <>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 2 }}>
                <Carousel
                    style={{ height: "100%" }}
                    layout='default'
                    data={images}
                    sliderWidth={width}
                    itemWidth={width - 200}
                    onSnapToItem={index => onSelect(index)}

                    renderItem={item => (
                        <HomeCard key={item.index} image={item.item.image} />
                    )}
                />
                <Pagination
                    inactiveDotColor="gray"
                    dotColor={'orange'}
                    activeDotIndex={indexSelected}
                    dotsLength={images.length}
                    animatedDuration={150}
                    inactiveDotScale={0.7}
                />
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "#7e7e7e" }}>카드를 뒤집어 주세요.</Text>
            </View>
        </>
    )
}
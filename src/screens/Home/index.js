import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native"

import PrimeVideoLogo from "../../assets/prime_video.png"
import AmazonLogo from "../../assets/amazon_logo.png"

import MovieTheWhell from "../../assets/movies/the_wheel_of_time.png"

import {MOVIESWATCHING} from "../../utils/moviesWatching"
import {MOVIESCRIME} from "../../utils/moviesCrimes"
import {MOVIESWATCH} from "../../utils/moviesWatch"
import { MoviesCard } from "../../components/MoviesCard"

export const Home = ()=>{
    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Image style={Styles.primeLogoImg} source={PrimeVideoLogo} />
                <Image style={Styles.amazonLogoImg} source={AmazonLogo} />
            </View>

            <View style={Styles.category}>
                <TouchableOpacity>
                    <Text style={Styles.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={Styles.categoryText}>TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={Styles.categoryText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={Styles.categoryText}>Kids</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={Styles.movieImageThumbnail}>
                <Image source={MovieTheWhell} />
            </TouchableOpacity>
            
            <ScrollView showsVerticalScrollIndicator = {false} style={Styles.contentMovies}>
                <Text style={Styles.movieText}>Continue Watching</Text>
                <FlatList 
                    data={MOVIESWATCHING}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
                    horizontal
                    contentContainerStyle = {Styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={Styles.movieText}>Crime Movies</Text>
                <FlatList 
                    data={MOVIESCRIME}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
                    horizontal
                    contentContainerStyle = {Styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={Styles.movieText}>Watch in your language</Text>
                <FlatList 
                    data={MOVIESWATCH}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
                    horizontal
                    contentContainerStyle = {Styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

            </ScrollView>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#232F3E",
        alignItems:"flex-start",
    },

    header:{
        width: "100%",
        paddingTop: 80,
        alignItems: "center"
    },
    
    amazonLogoImg:{
        marginTop: -32,
        marginLeft: 30,
    },

    category:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 15,
    },

    categoryText:{
        fontSize: 14,
        fontWeight: "700",
        color: "#fff"
    },

    movieImageThumbnail:{
        width: "100%",
        alignItems: "center"
    },

    movieText:{
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
        padding: 15
    },

    contentList:{
        paddingLeft: 18,
        paddingRight: 30
    },

    contentMovies:{

    }
})
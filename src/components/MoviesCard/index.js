import { TouchableOpacity, Image, StyleSheet } from "react-native"



export const MoviesCard = (props) =>{
    return (
        <TouchableOpacity>
            <Image style={Styles.img} source={props.movieURL} />
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    img:{
        marginRight: 20,
        
    }
})
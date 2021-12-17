import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native'

interface ItemProps extends TouchableOpacityProps{
    item: string
}

export const Item: React.FC<ItemProps> = ({item, ...rest}) => {
    return(
        <TouchableOpacity
            style={styles.buttonItem}
            activeOpacity={.7}
            {...rest}
        >
            <Text style={styles.itemStyle}>
                {item}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonItem: {
        // backgroundColor: 'white',
        padding: 16,
        paddingHorizontal: 20
    },
    itemStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    }
})

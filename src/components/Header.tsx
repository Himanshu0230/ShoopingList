import React from 'react'
import { 
    StyleSheet, 
    View,
    TextInput,
    TouchableOpacity
} from 'react-native'
const COLORS = {primary: '#1f145c', white: '#fff', black: '#000000'};
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
    value: string,
    placeholderText: string,
    placeholderColor: string,
    handleTextChange: ((text: string) => void) | undefined
    handleAddButtonPress: (() => void) | undefined
}

export const Header: React.FC<Props> = ({value, placeholderText, placeholderColor, handleTextChange, handleAddButtonPress}) => {
    return (
        <View style={styles.footer}>
            <View style={styles.inputContainer}>
                <TextInput
                    value={value}
                    placeholder={placeholderText}
                    placeholderTextColor={placeholderColor}
                    onChangeText={handleTextChange}
                    testID="Search.input"
                />
            </View>
            <TouchableOpacity testID='Add.Button' onPress={handleAddButtonPress}>
                <View style={styles.iconContainer}>
                    <Icon name="add" color="white" size={30} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      inputContainer: {
        height: 50,
        paddingHorizontal: 20,
        elevation: 40,
        backgroundColor: COLORS.white,
        flex: 1,
        marginVertical: 20,
        marginRight: 20,
        borderRadius: 30,
      },
      iconContainer: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.primary,
        elevation: 40,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
      },
})
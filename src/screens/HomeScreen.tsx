import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Alert,
} from "react-native"
import {Item} from '../components/Item';
import {Header} from '../components/Header';
const COLORS = {primary: '#1f145c', white: '#fff', black: '#000000'};

interface ItemData{
    id: string
    name: string
}

export const HomeScreen: React.FC = () => {

    const [newItem, setNewItem] = useState('')
    const [myItems, setMyItems] = useState<ItemData[]>([])
    const [filterdItems, setFilteredItems] = useState<ItemData[]>([])

    function handleAddNewItem() {
        const data = {
            id: String(new Date().getTime()),
            name: newItem.trim()
        }
        if(data.name.trim() === '') {
            Alert.alert('Item is empty!')
        } else {
            setMyItems(prevState => [...prevState, data])
            setFilteredItems(prevState => [...prevState, data])
        }
    }

    function handleRemoveItem(id: string) {
        setMyItems(prevState => prevState.filter(
            item => item.id !== id
        ))
        setFilteredItems(prevState => prevState.filter(
            item => item.id !== id
        ))
    }

    function ItemSeparatorView() {
        return(
            <View   
                style={{height: 1, width: '100%', backgroundColor: '#c8c8c8'}}
            />
        )
    }

    function searchFilter(text: string) {
        if(text) {
            const newData = myItems.filter((item) => {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setFilteredItems(newData);
            setNewItem(text);
        } else {
            setFilteredItems(myItems);
            setNewItem(text);
        }
    }

    return (
        <View style={styles.container}>
            <Header 
                value={newItem}
                placeholderText="Search"
                placeholderColor={COLORS.black}
                handleTextChange={text => searchFilter(text)}
                handleAddButtonPress={handleAddNewItem}
            />
            <Text style={styles.title}>My Items</Text>
            <FlatList 
                data={filterdItems}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={({item}) => (
                    <Item 
                        item={item.name}
                        onPress={() => handleRemoveItem(item.id)}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingVertical: 64
    },
    title: {
        color: COLORS.black,
        fontSize: 20,
        paddingVertical: 30,
        paddingHorizontal: 20
    }
})
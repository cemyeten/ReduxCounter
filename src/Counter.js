import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { addition, subtraction } from './store/action';

const Counter = () => {
    const data = useSelector((state) => state.counter);
    const dispacth = useDispatch();
    return (
        <View style={styles.container}>
            <Button color="#841584" title='Add Count' onPress={()=>dispacth(addition())} />
            <Text>{data}</Text>
            <Button title='Subtract Count' onPress={()=>dispacth(subtraction())} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 100,
    }
});

export default Counter;

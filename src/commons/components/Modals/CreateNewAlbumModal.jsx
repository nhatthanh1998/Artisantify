import React, { useState } from 'react'
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import tailwind from 'tailwind-rn'
import Modal from 'react-native-modal';
import { styles } from '../../../styles';


export const CreateNewAlbumModal = (props) => {
    const {isVisible, onCancel} = props
    return (
        <View>
            <Modal isVisible={isVisible} 
                animationOut="bounceOut"
                animationIn="bounceInUp"
                animationInTiming={350}
                animationOutTiming={150}
                backdropColor="black"
                backdropOpacity={0.7}
            >
                <View style={tailwind("bg-white m-5 rounded-xl p-5 relative")}>
                    <TouchableOpacity onPress={() => onCancel()} style={tailwind("absolute z-10 mt-3 mr-3 top-0 right-0")}>
                        <Image source={{uri:"https://image.flaticon.com/icons/png/512/1/1193.png"}} style={tailwind("w-5 h-5")}/>
                    </TouchableOpacity>
                    <Text style={tailwind("text-2xl font-bold tracking-tight text-center")}>Create New Album</Text>
                    <View style={tailwind("flex flex-row justify-center")}>
                        <Text style={tailwind("text-center mt-1 text-base tracking-wide text-gray-500")}>
                            Please enter your album name
                        </Text>
                    </View>
                    <View style={tailwind("border-b mb-3")}>
                        <TextInput style={tailwind("text-center p-3 text-sm")} placeholder="Your album name"/>
                    </View>
                    <View style={tailwind("flex flex-row relative w-full justify-center items-center")}>
                        <TouchableOpacity style={{...tailwind("p-3 bg-yellow-300 w-32 rounded-xl mt-4"), ...styles.shadow_2}}>
                            <Text style={tailwind("text-center text-sm")}>Create</Text>
                        </TouchableOpacity>
                    </View>
                    
    
                </View>
            </Modal>
        </View>
    )
}
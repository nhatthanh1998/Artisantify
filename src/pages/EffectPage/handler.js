import {fetchAllStyles} from '../../apis/styles'
import {setStyles} from '../../redux/slicers/style.slicer'
import {sendTransferPhotoRequest} from '../../apis/photos'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { DEFAULT_STYLE_ID } from '../../enums/default-style-id'
export const getStyles = async ({dispatch}) => {
    const response = await fetchAllStyles()
    dispatch(setStyles(response))
}

export const requestTransferImage = async ({generatedImage, selectedStyle, photoLocation}) => {
    const { id } = selectedStyle
    if(generatedImage[id] === undefined && id !== DEFAULT_STYLE_ID) {
        const socketId = await AsyncStorage.getItem('socketId')
        await sendTransferPhotoRequest({ socketId, photoLocation, selectedStyle })
    }
}
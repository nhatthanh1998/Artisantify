import {fetchAllStyles} from '../../apis/styles'
import {setStyles} from '../../redux/slicers/style.slicer'
import { sendTransferPhotoRequest, requestSavePhotoToAlbum } from '../../apis/photos'
import { DEFAULT_STYLE_ID } from '../../enums/default-style-id'
export const getStyles = async ({dispatch}) => {
    const response = await fetchAllStyles()
    dispatch(setStyles(response))
}

export const requestTransferImage = async ({generatedImage, selectedStyle, photoLocation}) => {
    const { id } = selectedStyle
    if(generatedImage[id] === undefined && id !== DEFAULT_STYLE_ID) {
        await sendTransferPhotoRequest({photoLocation, selectedStyle})
    }
}

export const handleRequestSavePhoto = async ({dispatch, selectedStyle, generatedImage}) => {
    const photoLocation = generatedImage[selectedStyle.id]
    console.log(photoLocation)
    const response = await requestSavePhotoToAlbum({photoLocation})
    console.log("response")
}

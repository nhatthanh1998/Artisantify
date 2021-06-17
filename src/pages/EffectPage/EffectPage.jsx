import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { ListEffectBoxContainer } from '../../containers/EffectPage/ListEffectBoxContainer'
import { ImageBox } from '../../components/EffectPage/ImageBox'
import { selectStyles, setSelectedStyle, selectSelectedStyle } from '../../redux/slicers/style.slicer'
import { selectOriginImage } from '../../redux/slicers/origin-image.slicer'
import { selectGeneratedImageAccessURL, setGeneratedImageAccessURL } from '../../redux/slicers/generated-image.slicer'
import { getStyles, handleBack, handleRequestSavePhoto, requestTransferImage } from './handler'
import { DEFAULT_STYLE_ID } from "../../enums/default-style-id"
import tailwind from "tailwind-rn";
import { View, TouchableOpacity, StatusBar, Image } from 'react-native'
import { MAIN_PAGE } from "../../enums/page-name";


export const EffectPage = ({ navigation }) => {
    const dispatch = useDispatch()
    const [isDisableSave, setDisableSave] = useState(true)
    const styles = useSelector(selectStyles)
    const selectedStyle = useSelector(selectSelectedStyle)
    const originImage = useSelector(selectOriginImage)
    const generatedImage = useSelector(selectGeneratedImageAccessURL)

    useEffect(() => {
        StatusBar.setHidden(true)
        getStyles({dispatch})
        return () => { }
    }, [])


    useEffect(() => {
        dispatch(setGeneratedImageAccessURL({ accessURL: originImage.accessURL, styleId: DEFAULT_STYLE_ID }))
        dispatch(setSelectedStyle({id: DEFAULT_STYLE_ID}))
    }, [originImage])


    useEffect(() => {
        requestTransferImage({generatedImage,
             photoLocation:originImage.accessURL,
             selectedStyle
        })
        selectedStyle.id === DEFAULT_STYLE_ID ? setDisableSave(true) : setDisableSave(false)
    }, [selectedStyle])

    const backToMainPage = () => {
        navigation.navigate(MAIN_PAGE)
    }

    return (
        <View style={tailwind("flex-1 relative")}>
            <View style={tailwind("flex flex-row bg-white px-5 py-4 relative z-20")}>
                <View style={tailwind("w-1/3")}>
                    <TouchableOpacity onPress={() => backToMainPage()}>
                        <Image style={tailwind("w-7 h-7")} source={{uri: "https://image.flaticon.com/icons/png/512/2223/2223615.png"}}></Image>
                    </TouchableOpacity>
                </View>
                <View style={tailwind("flex flex-row w-2/3 justify-end")}>
                    <TouchableOpacity disabled = {isDisableSave} onPress={() => {handleSave()}}>
                        <Image style={tailwind("w-6 h-6")} source={{uri: "https://image.flaticon.com/icons/png/512/1828/1828784.png"}}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <ImageBox photoURL={generatedImage[selectedStyle.id]} />
            <ListEffectBoxContainer
                styles={styles}
                originImageAccessURL={originImage.accessURL}
            />
        </View >
    )
}


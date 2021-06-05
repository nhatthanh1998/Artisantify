import axios from 'axios'
import {MAIN_SERVER} from '@env'

export async function uploadPhotoToServer({imageURI, socketId, token}) {
    const ENDPOINT_URL = `${MAIN_SERVER}/photos/upload`
    let formData = new FormData();
    formData.append("photo", {uri: imageURI, type: 'image/jpg', name: 'picture.jpg'});
    formData.append('socketId', socketId)
    const response = await axios.post(ENDPOINT_URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data
}


export async function sendTransferPhotoRequest({socketId, photoLocation, selectedStyle, token }) {
    const ENDPOINT_URL = `${MAIN_SERVER}/photos/transfer-photo`
    const payload = {socketId, photoLocation, style: selectedStyle}
    const response = await axios.post(ENDPOINT_URL, payload, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data
}


export async function fetchAlbumPhotos({page, limit, offset, token}) {
    let ENDPOINT_URL = `${MAIN_SERVER}/photos?`
    page ? ENDPOINT_URL += `page=${page}` : ENDPOINT_URL
    limit ? ENDPOINT_URL += `limit=${limit}` : ENDPOINT_URL
    offset ? ENDPOINT_URL += `offset=${offset}` : ENDPOINT_URL
    const response = await axios.get(ENDPOINT_URL, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data
}

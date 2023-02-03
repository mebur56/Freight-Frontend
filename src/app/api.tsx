import axiosClient from "./axiosClient";



export function uploadFile(fileForm: FormData) {
    return axiosClient.post('/freight', fileForm, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    )
}

export function getFreights() {
    return axiosClient.get('/freight')
}
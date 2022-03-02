export const API_DATA_SUCCESS = "API_DATA_SUCCESS"

export const apidata = (data) =>({
type: API_DATA_SUCCESS,
payload:{
    data: data
}
})
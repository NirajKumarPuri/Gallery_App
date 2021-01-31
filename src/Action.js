export const GET_IMAGE_SUCCESS='GET_IMAGE_SUCCESS'
export const getimg=()=> async (dispatch)=>{
    let result= await fetch('https://projectc-c6557-default-rtdb.firebaseio.com/images.json')
    let imageurl= await result.json()
    console.log('value',imageurl);
    dispatch({
        type:GET_IMAGE_SUCCESS,
        url:imageurl
    })

}

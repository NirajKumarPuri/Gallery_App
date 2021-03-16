import {GET_IMAGE_SUCCESS , DELETE_IMAGE_SUCCESS } from "./Action";
let initialstate={
    imgurl:[]
}
const imagereducer=(state=initialstate,action)=>{
    switch(action.type){
        case GET_IMAGE_SUCCESS:
           let arry= Object.keys(action.url).map((item)=>{
                let image={
                    key:item,
                    url:action.url[item]
                }
                return image
            })
           console.log(arry)



              return{
                imgurl:arry
            }
            case  DELETE_IMAGE_SUCCESS:
                let left= state.imgurl.slice(0,action.item)
                let right= state.imgurl.slice(action.item+1)
                return{
                   imgurl:left.concat(right)
                }
        default: return state
    }

}
export default imagereducer;
// obj={
//     image1:AbortController,
//     image2:BroadcastChannel,
// }
// [image1,image2]
// Object.keys
// Object.values
// Object.entries

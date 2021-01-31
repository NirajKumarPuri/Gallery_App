import {GET_IMAGE_SUCCESS  } from "./Action";
let initialstate={
    imgurl:[]
}
const imagereducer=(state=initialstate,action)=>{
    switch(action.type){
        case GET_IMAGE_SUCCESS:
           let arry= Object.keys(action.url).map((item)=>{
                let image={
                    url:action.url[item]
                }
                return image
            })
           console.log(arry)



              return{
                imgurl:arry
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
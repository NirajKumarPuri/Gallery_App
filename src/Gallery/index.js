import React from "react";
import styles from "./gallery.module.css";
import { connect } from "react-redux";
import { getimg,deleteitem } from "../Action";
import {bindActionCreators} from "redux";
import firebaseapp from "../fairbase";
class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state={
            img:[]
        }
    }
    handlechange=(e)=>{
        console.log(e.target.files)
        this.setState({
            img:e.target.files[0]
        })
    }

    componentDidMount(){
      this.props.getimg()
    }

handleclick=(event)=>{
    const storage = firebaseapp.storage();
 storage.ref(`/images/${this.state.img.name}`).put(this.state.img).then(
   (snapshot)=>{
            console.log('niraj',snapshot)
            storage.ref(`/images/${this.state.img.name}`).getDownloadURL().then((url)=>{  fetch('https://projectc-c6557-default-rtdb.firebaseio.com/images.json',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(url)
    }).then((res)=>{return res.json()}).then(()=>this.props.getimg())})})}
//     fetch('https://projectc-c6557-default-rtdb.firebaseio.com/images.json',{
//         method:'POST',
//         headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(URL.createObjectURL(this.state.img))
//     }).then((res)=>{return res.json()}).then((result)=>console.log('Niraj',result))
//     console.log(typeof this.state.img,event.target.files[0])
// })

    handledelete=(e,Index,img)=>{
        firebaseapp.database().ref().child(`images/${e}`).remove().then(()=>this.props.deleteitem(Index))
        firebaseapp.storage().ref(`images/${img}`).delete().then(()=>{console.log('delete sucesful')})
    }
    render(){
        // console.log('image',this.state.img)
    return(
        <div className={styles.container}>
            <div className={styles.headingbox}>
                <h1 className={styles.heading}>Gallery</h1>
            </div>
            <div className={styles.getimgbox}>
           <input onChange={this.handlechange} type="file"/>
           <button onClick={this.handleclick}>submit</button>
            </div>
        <div className={styles.content}>
        {this.props.Url.map((item,index)=>{
            
        return  <div className={styles.imgbox} key={index} >
            <img src={item.url}  alt='scenery'className={styles.image}/>
            <button  onClick={()=>this.handledelete(item.key,index,this.state.img.name)} className={styles.delete}>X</button>
            

        </div>
         } )
    
        
    
}
</div>
</div>
    )
    }}

 const mapStateToProps=(store)=>{
    return{
        Url:store.imgurl
    }
}
const mapDispatchToProps=(dispatch)=>
     bindActionCreators({getimg,deleteitem}, dispatch)
        // getImageUrl:()=>{dispatch(getimg())},
        // ditem:()=>{dispatch(deleteitem())}
    

export default  connect(mapStateToProps,mapDispatchToProps) (Gallery);
import React from "react";
import styles from "./gallery.module.css";
import { connect } from "react-redux";
import { getimg } from "../Action";
class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state={
            img:[]
        }
    }
    handlechange=(e)=>{
        this.setState({
            img:e.target.value
        })
    }
    componentDidMount(){
      this.props.getImageUrl()
    }
    handleclick=()=>{
        
        fetch('https://projectc-c6557-default-rtdb.firebaseio.com/images.json',{
            method:'POST',
            headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify( URL.createObjectURL(this.state.img))
        }).then((res)=>{return res.json()}).then((result)=>console.log('Niraj',result))
    }
    render(){
        console.log('image',this.state.img)
    return(
        <div className={styles.container}>
            <div className={styles.headingbox}>
                <h1 className={styles.heading}>Gallery</h1>
            </div>
            <div className={styles.getimgbox}>
           <input value={this.state.img} onChange={this.handlechange} type="file"/>
           <button onClick={this.handleclick}>submit</button>
            </div>
        <div className={styles.content}>
        {this.props.Url.map((item,index)=>{
            
        return  <div className={styles.imgbox} key={index}>
            <img src={item.url} alt='scenery'className={styles.image}/>
            

        </div>
         } )
    
        
    
}
</div>
</div>
    )
}
}
const mapStateToProps=(store)=>{
    return{
        Url:store.imgurl
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getImageUrl:()=> dispatch(getimg())
    }
}
export default  connect(mapStateToProps,mapDispatchToProps) (Gallery);
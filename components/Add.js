import React from 'react';
import {connect} from 'react-redux'
import {addItem } from '../actions/actions'

const mapStateToProps = state => {
  return{
    secrets: state.secrets,
  }
}

let currentTitle;
let currentPrice;

const Add = (props) => {
  return (
    <div>
    Add
    <br/>
    <input placeholder ="title" ref={t => currentTitle =t}/>
        <br/>

    <input placeholder ="price" ref={p => currentPrice =p}/>  
        <br/>
    <button onClick={() => {
      console.log(currentTitle.value)
      let priceCheck= parseFloat(currentPrice.value);
      if(!isNaN(priceCheck)){
        console.log(priceCheck)
        props.dispatch(addItem(currentTitle.value, priceCheck))
            // {
            //   type:"ADD", 
            //   title:currentTitle.value, 
            //   price: priceCheck
            // });
            currentTitle.value = " "
            currentPrice.value = " "
      } else{
        console.log('price invalid')
      }

    }}> add </button>

    </div>
  )
}

export default connect(mapStateToProps)(Add);
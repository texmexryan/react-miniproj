import React from 'react';
import {connect} from 'react-redux'


const mapStateToProps = state => {
  return{
    secrets: state.secrets
}
}

const List = (props) => {
  return (
    <div>
    List
    <ul>
      {props.secrets.map(s=><li key={s._id}> {s.title}</li>)}
    </ul>
    </div>
  )
}

export default connect(mapStateToProps)(List);
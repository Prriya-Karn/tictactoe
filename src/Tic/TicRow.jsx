import React, { Fragment} from "react";
const TicRow = (props)=>{
    return(
        <Fragment>
        <div className="col-lg-2" onClick={props.onClick}
         style={{backgroundColor:"green",borderRight:"2px solid white",borderBottom:"2px solid white",height:"2rem"}}>
        <h2 className="fs-4 text-center">{props.data}</h2>
        </div>
        </Fragment>
    )
}

export default TicRow;
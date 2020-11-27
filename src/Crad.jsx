import React from 'react'
import {NavLink} from 'react-router-dom'
const Card = (props) => {
      return (
            <>
             <div className="col-md-4 col-10 mx-auto">
                <div className="card align-items-center" >
                  <img src={props.imgsrc} className="card-img-top" style={{height:"200px",width:"200px"}} alt="" />
                  <div className="card-body">
                   <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                    {props.text}
                    </p>
                    <NavLink  to='' className="btn btn-primary">
                       Explore
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
      )
}

export default Card;
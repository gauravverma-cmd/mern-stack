import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <div className="top">
          <img src={props.logo} alt="" />
           <button>Save <i class="fa-regular fa-bookmark"></i></button>
        </div>
        <div className="center">
          <div className="para"><p id="comapany-name">{props.company}</p><p id='days'>{props.date}</p></div>
          <h2>{props.post}</h2>
          <div className="span-tag"><span className='spannn'>{props.tag1}</span><span className='spannn'>{props.tag2}</span></div>
        </div>
        <hr />
        <div className="bottom">
          <div className="text-botm">
          <h3 className='price'> {props.pay}</h3>
          <p className='city'>{props.location}</p>
          </div>
          <button className='submit-btn'>Apply Now.</button>
        </div>
      </div>
  )
}

export default Card
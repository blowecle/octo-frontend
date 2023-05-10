import React from "react";
import '../../css/slider.css'

const Slider = () => {
    return (
        <div class="container">
            <img className="image after" src={`https://res.cloudinary.com/ddqp7dojc/image/upload/v1673983927/octo-house/PXL_20230117_193004917_fzax1v.jpg`}alt='before'></img>
            <div className="clip-item">
                <div>
                    <img className="image before" src={`https://res.cloudinary.com/ddqp7dojc/image/upload/v1668440619/octo-house/-8773391783772082014_cbis9x.jpg`} alt='after'></img>
                </div>
            </div>
        </div>
    )
}

export default Slider;
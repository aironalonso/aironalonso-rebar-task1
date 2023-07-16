import React from 'react';
import "./Product.css";
import { BsChatRight, BsCodeSlash, BsColumnsGap, BsGraphUpArrow } from "react-icons/bs";

const Products = () => {
    return (
        <div className='product-container'>
            <div className='pl'>
                <div className="pl-list">
                    <div className="pl-circle">
                        <BsChatRight className='pl-icon' />
                    </div>
                    <h4>Consulting</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est alias assumenda eaque molestias doloribus culpa quibusdam esse! Dolorum, voluptates, animi saepe magnam, incidunt veritatis eligendi earum nihil molestiae eum sequi?</p>
                </div>
            </div>
            <div className='pl'>
                <div className="pl-list">
                    <div className="pl-circle">
                        <BsCodeSlash className='pl-icon' />
                    </div>
                    <h4>Developing</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est alias assumenda eaque molestias doloribus culpa quibusdam esse! Dolorum, voluptates, animi saepe magnam, incidunt veritatis eligendi earum nihil molestiae eum sequi?</p>
                </div>
            </div>
            <div className='pl'>
                <div className="pl-list">
                    <div className="pl-circle">
                        <BsColumnsGap className='pl-icon' />
                    </div>
                    <h4>Designing</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est alias assumenda eaque molestias doloribus culpa quibusdam esse! Dolorum, voluptates, animi saepe magnam, incidunt veritatis eligendi earum nihil molestiae eum sequi?</p>
                </div>
            </div>
            <div className='pl'>
                <div className="pl-list">
                    <div className="pl-circle">
                        <BsGraphUpArrow className='pl-icon' />
                    </div>
                    <h4>Analysis</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est alias assumenda eaque molestias doloribus culpa quibusdam esse! Dolorum, voluptates, animi saepe magnam, incidunt veritatis eligendi earum nihil molestiae eum sequi?</p>
                </div>
            </div>
        </div>
    );
};

export default Products;
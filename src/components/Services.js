import React from 'react';
import "./Services.css";
import laptop from "../images/macbook_PNG9.png"

const Services = () => {
    return (
        <div className='services'>
            {/* Left Container */}
            <div className="s-left">
                <div className="s-left-wrapper">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h2>LOREM IPSUM</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sapiente tempora, corrupti fugiat minima aliquam praesentium labore iure suscipit totam cumque eligendi odit fuga necessitatibus facilis, rem vitae dolore similique!</p>
                    <button>
                        <b>VIEW MORE</b>
                    </button>
                </div>
            </div>

            {/* Right Container */}
            <div className="s-right">
                <img src={laptop} alt="my-photo" className="s-img" />
            </div>
        </div>
    );
};

export default Services;
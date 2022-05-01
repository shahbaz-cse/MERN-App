import React from 'react'
import Menu from './Menu';

const Base = ({
    title="My Title",
    description="My description",
    className="bg-dark text-white p-4",
    children
}) => (
    <div>
        <Menu/>
        <div className="container-fluid">
            <div className="jumbotron bg-dark text-white text-center">
                <h2 className="display-4">{title}</h2>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
        <div class="clear"></div>
        <div id="footer"></div>
        <footer className="footer bg-dark mt-auto">
            <div className="container-fluid bg-success text-white text-center py-1">
                <h4>If you got any questions, feel free to reach us!</h4>
                <button className="btn btn-warning btn-lg py-0">
                <a href="https://www.linkedin.com/in/shahbazcse" class="btn">Contact Us</a>
                </button>
            </div>
            <div className="container py-2">
                <span className="text-muted">
                    <span className="text-white">E-COMMERCE WEBSITE</span>
                    <br></br>
                    <span className="text-gray">Developed by <a href="https://www.linkedin.com/in/shahbazcse/">Shahbaz Ahmad</a></span>
                </span>
            </div>
        </footer>
    </div>
    
);
 export default Base;
import React, { Component } from 'react';
import {getTranslation} from '../../translations';
import style from "./about.css";

class AboutIndex extends Component {
    render() {
        this.text = getTranslation();
        return (
            <div className={style.inline_box}>
                <div className="container">
                    <h3>{this.text.detail.fourth.header}</h3>
                    <p>{this.text.detail.fourth.main}</p>

                        <div className="col text-center ">
                            <div className="justify-content-md-center text-center">

                                
                                <a type="" className={"btn btn-outline-primary btn-lg mb-4 "+ style.apply_button} id="mentor" href="https://docs.google.com/forms/d/e/1FAIpQLSeDwdJh5K1EwK3FVCKQ2wynS0WMZwL23BLi_5cWfO6sooN4VA/viewform" target="_blank">
                                    {this.text.detail.fourth.mentor}
                                </a>
                        
                                
                                <a type="" className={"btn btn-outline-primary btn-lg mb-4 "+ style.apply_button} id="volunteer" href="https://docs.google.com/forms/d/e/1FAIpQLSc9L9di1TS6B-VRAtzE1B1y2-nsFAXLbwriOp2_uDvNGvTa7g/viewform" target="_blank">
                                    {this.text.detail.fourth.volunteer}
                                </a>
                            
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}
export default AboutIndex;
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

class Conduct extends Component {
    constructor(props) {
        super(props);
        state = {
            numPages: null,
            pageNumber: 1,
        };
    
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    }
    render() {
        //const { pageNumber, numPages } = this.state;
        
        return (
            <div>
                <Document
                  file="../../../Code_of_conduct.pdf"
                  onLoadSuccess={this.onDocumentLoadSuccess}
                >
                </Document>
            </div>
        );
    }
}

export default Conduct;
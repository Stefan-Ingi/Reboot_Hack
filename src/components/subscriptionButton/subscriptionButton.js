import React, { Component } from 'react';
import style from "./subscriptionButton.css"
// import router from '../../../server/routes/subscription';

class SubscriptionButton extends Component {
    /* Gera fall handleClick. og þegar við */
    /* put */
    /*handleClick={} baeta svo thessu vid i button onClick={handleClick}*/
    constructor(props) {
        super(props);
        this.state = {email: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({email: event.target.value});
    }

    handleClick(event) {
        // Possibly switch state out!?
        // event.preventDefault();
        var email = {email: this.state.email};
        fetch('/api/subscriptions', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(email)
        })
        .then(function(response) {
            // return response.json()
          }).then(function(body) {
            // console.log(body);
          });
    }
    /*
    ATH! When email put in for subscription it goes to database but the site redirects to /?
    There is a possibility that it is because of the <form>
    Need to look into that better
    ONE solution is to remove the comment from evet.preventDefault()  (line23) Than it will not redirect.
    But than nothing indicates that you have subscribed. So until we fix that, change the modal boxto show you have subscribed,
    or add an alert that shows you the same I recommend to have redirect.
    */
    render() {
        return (
            <div>
                <button type="button" className={style.subscibe_button + " btn btn-primary"} data-toggle="modal" data-target="#exampleModal">
                Subscribe
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <form onSubmit={(e) => this.handleClick(e)}>
                        <div className="modal-content" style={{zIndex:1000}}>
                        <div className="modal-header">
                            <h5 className="modal-title">Hi there!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <label>
                                email: 
                                <input type="email" value={this.state.email} onChange={this.handleChange} autoFocus required/>
                            </label>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary" >Subscribe</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubscriptionButton;
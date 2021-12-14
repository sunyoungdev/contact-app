import React, { Component } from 'react';

class PhoneForm extends Component {
    input = React.createRef();
    inputPhone = React.createRef();

    state = {
        name: '',
        phone: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.input.current.value === '' || this.inputPhone.current.value === '') {
            return;
        }
        this.props.onCreate(this.state);    // state 값 App으로 전달
        this.setState({ // submit 후 input 초기화
            name: '',
            phone: ''
        })
        this.input.current.focus();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="contact__form">
                <input 
                    className="contact__input"
                    name="name"
                    placeholder="name" 
                    onChange={this.handleChange} 
                    value={this.state.name} 
                    ref={this.input}
                />
                <input 
                    className="contact__input"
                    name="phone"
                    placeholder="phone number" 
                    onChange={this.handleChange} 
                    value={this.state.phone}
                    ref={this.inputPhone} />
                <button type="submit" className="contact__btn">submit</button>
            </form>
        );
    }
}

export default PhoneForm;
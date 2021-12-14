import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {
    state = {
        editing: false,
        name: '',
        phone: ''
    }

    // 업뎃 불필요할 때 렌더함수가 호출되지 않게 하는 LifeCycle API 성능 최적화
    shouldComponentUpdate(nextProps, nextState) {
        // return true;    // default 
        // state, info 값이 달라질 때만 true 로 업뎃해 
        if (this.state !== nextState) {
            return true;
        }
        return this.props.info !== nextProps.info
    }
    

    handleToggleEdit = () => {
        // editing true => false
            // onUpdate 로 데이터 값 업데이트
        // false => true
            // state 에 info 값 넣어주기
        const { info, onUpdate } = this.props;

        if (this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        } else {
            this.setState({
                name: info.name,
                phone: info.phone
            });
        }

        this.setState({
            editing: !this.state.editing
        })
    }

    // edit시 input 값 바꿔주기
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    render() {
        // props 로 info 라는 값을 전달받을거고 거기서 name, phone, id 추출
        const { name, phone, id } = this.props.info;
        const { editing } = this.state;

        console.log(name);

        return (
            <li className="contact__item">
                {
                    editing ? (
                        <div className="item-info">
                            <div>
                                <input 
                                    name="name"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                />
                            </div>
                            <div>
                                <input 
                                    name="phone"
                                    onChange={this.handleChange} 
                                    value={this.state.phone}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="item-info">
                        <div><b>{name}</b></div>
                        <div>{phone}</div>
                        </div>
                    )
                }
                <div className="item-btns">
                    <button onClick={this.handleRemove} className="contact__btn">delete</button>
                    <button onClick={this.handleToggleEdit} className="contact__btn">{
                        editing ? 'save' : 'edit'
                    }</button>
                </div>
            </li>
        );
    }
}

export default PhoneInfo;
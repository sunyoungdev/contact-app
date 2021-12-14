import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';


class PhoneInfoList extends Component {
    static defaultProps = {     // data 가 없을때 default props 처리
        data: []
    }

    render() {
        const { data, onRemove, onUpdate } = this.props;

        // if (!data) return null; // data 가 없으면 error => null 처리

        // info 데이터를 PhoneInfo component 로 변환
        const list = data.map(
            info => (
                <PhoneInfo 
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                    info={info} 
                    key={info.id} />
            )
        );

        console.log('rendering list');

        return (
            <ul className="contact__list">
                {list}
            </ul>
        );
    }
}  

export default PhoneInfoList;
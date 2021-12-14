import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
import './assets/scss/App.scss';

class App extends Component {
  id = 3;

  state = {
    information: [
      {
        id: 0,
        name: 'sun',
        phone: '07708-802755'
      },
      {
        id: 1,
        name: 'jun',
        phone: '07708-802755'
      },
      {
        id: 2,
        name: 'min',
        phone: '07708-802755'
      }
    ],
    keyword: ''
  }

  // keyword 문자열을 바꿔줄 handleChange
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  handleCreate = (data) => {
    const { information } = this.state; // 비구조할당을 통해 information의 reference를 가져옴
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++
      })
      // information: information.concat(Object.assign({}, data, {
      //   id: this.id++
      // }))
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      // parameter로 받은 id가 아닌것들만 필터링 해줘
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      // parameter로 받은 id와 같다면 id, data 넣은 객체 반환해줘
      information: information.map(info => {
        if (info.id === id) {
          return {
            id,
            ...data
          };
        }
        return info;
      })
    })
  }

  render() {
    return (
      <section className="contact">
        <h1 className="contact__title">CONTACTS</h1>
        <PhoneForm onCreate={this.handleCreate} />
        <input
          className="search"
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="search by name..."
        />
        <PhoneInfoList 
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        /> 
      </section>
    );
  }
}

export default App;
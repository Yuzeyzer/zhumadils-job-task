import React from 'react';
import Item from './item';
import './style.scss';
import axios from 'axios';

const Table = () => {
  const [users, setUsers] = React.useState([]);
  const [activeModal, setActiveModal] = React.useState(false);
  const [newUser, setNewUser] = React.useState({
    dateOfRegistry: "",
    fullName: "",
    position: "",
    email: "",
    password: '',
    phone: ""
  });

  const emails = users.map(item => item.email)
 
  React.useEffect(() => {
    axios.get(`http://localhost:3000/database.json`)
    .then(({data}) => setUsers(data.users))
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault()
    emails.forEach(item => {
      if (item != newUser.email) {
        setUsers([...users, newUser])
        setNewUser({
        dateOfRegistry: "",
        fullName: "",
        position: "",
        email: "",
        password: '',
        phone: ""})
        setActiveModal(false)
      }
      else {
        alert('Эта почта уже занята')
        setNewUser({email: ""})
      }
    })
  };
  const handleClick = () => {
    setActiveModal(activeModal ? false : true)
  }
  const handleSaveData = (event) => {
    setNewUser({
      dateOfRegistry: '',
      fullName: event.target.form[0].value,
      position: event.target.form[1].value,
      email: event.target.form[2].value,
      password:  event.target.form[3].value,
      phone: event.target.form[4].value
    })
  }

  return (
    <React.Fragment>
      <button onClick={() => handleClick()}>Вызвать модалку</button>
      <table className='table' border='1'>
      {activeModal && (
        <div className='modal'>
          <form onSubmit={(event) => handleSubmit(event)}>
            <input onChange={(event) => handleSaveData(event)} value={newUser.fullName} required type='text' placeholder='Введите ФИО' />
            <input onChange={(event) => handleSaveData(event)} value={newUser.position} required type='text' placeholder='Введите Должность' />
            <input onChange={(event) => handleSaveData(event)} value={newUser.email} required type='text' placeholder='Введите Почту' />
            <input onChange={(event) => handleSaveData(event)} value={newUser.password} required type='text' placeholder='Введите Пароль' />
            <input onChange={(event) => handleSaveData(event)} value={newUser.phone} required type='text' placeholder='Введите Телефон, привязанный к мессенджеру' />
            <button>Добавить данные</button>
          </form>
        </div>
      )}
      <tr>
        <th>ID</th>
        <th>Дата регистрации</th>
        <th>ФИО</th>
        <th>Должность</th>
        <th>Почта (логин)</th>
        <th>Пароль</th>
        <th>Телефон, привязанный к мессенджеру</th>
      </tr>
      <Item users={users} />
    </table>
    </React.Fragment>
  );
};

export default Table;

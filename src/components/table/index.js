import React from 'react';
import TableData from './tableData';
import './style.scss';
import axios from 'axios';
import Button from '@material-ui/core/Button';

export default function TableGraph() {
  const [users, setUsers] = React.useState([]);
  const [activeModal, setActiveModal] = React.useState(false);
  const [newUser, setNewUser] = React.useState({
    dateOfRegistry: '',
    fullName: '',
    position: '',
    email: '',
    password: '',
    phone: '',
  });

  const emails = users.map((item) => item.email);

  React.useEffect(() => {
    axios.get(`http://localhost:3000/database.json`).then(({ data }) => setUsers(data.users));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    emails.forEach((item) => {
      if (item != newUser.email) {
        setUsers([...users, newUser]);
        setNewUser({
          dateOfRegistry: '',
          fullName: '',
          position: '',
          email: '',
          password: '',
          phone: '',
        });
        setActiveModal(false);
      } else {
        console.log('Error ');
        setNewUser({});
      }
    });
  };
  const handleClick = () => {
    setActiveModal(activeModal ? false : true);
  };
  const handleSaveData = (event) => {
    setNewUser({
      id: users[users.length - 1].id + 1,
      dateOfRegistry: '',
      fullName: event.target.form[0].value,
      position: event.target.form[1].value,
      email: event.target.form[2].value,
      password: event.target.form[3].value,
      phone: event.target.form[4].value,
    });
  };
  return (
    <div style={{ height: '140vh', width: '100%' }}>
      <TableData usersData={users} />
      <Button variant='contained' color='primary' onClick={() => handleClick()}>
        Вызвать модалку
      </Button>
     {activeModal && (
      <div className='modal'>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            onChange={(event) => handleSaveData(event)}
            value={newUser.fullName}
            required
            type='text'
            placeholder='Введите ФИО'
          />
          <input
            onChange={(event) => handleSaveData(event)}
            value={newUser.position}
            required
            type='text'
            placeholder='Введите Должность'
          />
          <input
            onChange={(event) => handleSaveData(event)}
            value={newUser.email}
            required
            type='text'
            placeholder='Введите Почту'
          />
          <input
            onChange={(event) => handleSaveData(event)}
            value={newUser.password}
            required
            type='text'
            placeholder='Введите Пароль'
          />
          <input
            onChange={(event) => handleSaveData(event)}
            value={newUser.phone}
            required
            type='text'
            placeholder='Введите Телефон, привязанный к мессенджеру'
          />
          <button>Добавить данные</button>
        </form>
      </div>
    )}
    </div>
  );
}
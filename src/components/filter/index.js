import React from 'react';
import './style.scss';

const Filter = () => {
  return (
    <div className='filter'>
      <h3 className='filter__title'>Список Экспертов по оценке и руководителей</h3>
      <form className='filter__form'>
        <label htmlFor=''>
          <span className='filter__name'>ID</span>
          <input type='text' placeholder='Введите ID' />
        </label>
        <label htmlFor=''>
          <span className='filter__name'>ФИО</span>
          <input type='text' placeholder='Введите ФИО участника' />
        </label>
        <label htmlFor=''>
          <span className='filter__name'>Должность</span>
          <input type='text' placeholder='Введите должность участника' />
        </label>
        <label htmlFor=''>
          <span className='filter__name'>Почта (логин)</span>
          <input type='text' placeholder='Введите почту участника' />
        </label>
        <button className='filter__btn'>Применить фильтры</button>
      </form>
    </div>
  );
};

export default Filter;

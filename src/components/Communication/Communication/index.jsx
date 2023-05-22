import React from 'react'
import styles from './communication.module.scss'


export const Communication = () => {
  return (
    <section className="container mx-auto">
      <h6>Свяжитесь с нами!</h6>
      <div className="flex">
        <input className="input text-white placeholder:text-white" type="text" placeholder="Имя" />
          <input className="input text-white placeholder:text-white" type="text" placeholder="Телефон" />
            <button>Отправить</button>
          </div>
          <p>Согласен с политикой конфиденциальности</p>
        </section>
        )
}
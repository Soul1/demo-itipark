import React, {ChangeEvent, useState} from 'react'

const Contact: React.FC = () => {
  const [form, setForm] = useState({firstName: '', surname: '', message: ''})

  const onForm = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const onSubmit = () => {
    console.log(form)
  }
  return (
    <section className='contact'>
      <div className='container'>
        <div className='contact__wrapper'>
          <div className='contact__inner'>

            <div className='contact__inner-title'>
              Связь с нами
            </div>

            <div className='contact__inner-text'>
              У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!
            </div>

            <div className='contact__inner-info'>

              <a href='tel:+7 (111) 222-33-44' className='contact__inner-info__phone for-before'>
                +7 (111) 222-33-44
              </a>

              <a href='mailto:order@bu-one.ru' className='contact__inner-info__email for-before'>
                order@bu-one.ru
              </a>
            </div>
          </div>
          <div className='contact__form'>
            <div className="contact__form-inner">
              <div className='contact__form-first-name'>
                <div className='contact__form-text'>Имя</div>
                <input type='text'
                       name='firstName'
                       onChange={onForm}
                       placeholder='Иван'/>
              </div>
              <div className='contact__form-surname'>
                <div className='contact__form-text'>Фамилия</div>
                <input type='text'
                       name='surname'
                       onChange={onForm}
                       placeholder='Иванов'/>
              </div>
            </div>
            <div className='contact__form-message'>
              <div className='contact__form-text'>Сообщение</div>
              <textarea
                onChange={onForm}
                name='message'
                placeholder='Ваше сообщение...'/>
            </div>
            <div className='btn'>
              <button onClick={onSubmit}>Отправить сообщение</button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
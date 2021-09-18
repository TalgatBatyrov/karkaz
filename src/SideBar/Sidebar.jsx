import s from './Sidebar.module.css';

function Sidebar() {
    return (
        <div className={s.Sidebar}>
            <div>
                <div>
                    <div>
                        <a href="https://www.google.com/search?q=%D0%B1%D0%B5%D1%81%D0%BA%D0%B0%D1%80%D0%BA%D0%B0%D1%81%D0%BD%D1%8B%D0%B5+%D0%B0%D0%BD%D0%B3%D0%B0%D1%80%D1%8B&source=lmns&bih=722&biw=1536&hl=ru&sa=X&ved=2ahUKEwiHl8bO4YPzAhWQuCoKHQP1BR4Q_AUoAHoECAEQAA"> <h3>Безкаркаcный ангар</h3></a>
                    </div>

                    <div>
                        <img src="https://agrobuilding.com/wp-content/uploads/2017/05/rynok-beskarkasnyh-angarov.jpg" />
                        <h3>Быстро и качественно изготовим для Вас!</h3>
                        <hr />
                    </div>
                </div>
                <div>
                    <div>
                        <a href=""><h3>Каркаcные дома</h3></a>
                    </div>
                    <div>
                        <img id={s.imgsize} src="https://scherbinka-dom.ru/wp-content/uploads/foto-75.jpg" />
                        <h3>Быстро и качественно изготовим для Вас!</h3>
                        <hr />
                    </div>

                </div>
                <div>
                    <div>
                        <a href=""><h3>Другие проекты</h3></a>
                    </div>
                    <div>
                        <img id={s.imgsize} src="http://tehlib.com/wp-content/uploads/2014/07/071614_1055_33.png" />
                        <h3>Быстро и качественно изготовим для Вас!</h3>
                        <hr />
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Sidebar
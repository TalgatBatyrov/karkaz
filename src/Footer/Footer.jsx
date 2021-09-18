import s from './Footer.module.css'

function Footer() {
    return (
        <div className={s.footer}>
            <span id={s.big}>Lorem</span> ipsum dolor sit amet consectetur, adipisicing elit. Praesentium exercitationem voluptatibus iusto esse magnam error culpa, mollitia quisquam reprehenderit, fuga quod iste rem nemo illum quaerat impedit eius delectus qui!
            <div className={s.end}>
                <img className={s.icon} src="http://simpleicon.com/wp-content/uploads/icon2.png" alt="" />
                <img className={s.icon} src="https://cdn.icon-icons.com/icons2/2518/PNG/512/brand_instagram_icon_151534.png" alt="" />
                <img className={s.icon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/800px-YouTube_full-color_icon_%282017%29.svg.png" alt="" />
                <img className={s.icon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png" alt="" />

            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facilis dolor corporis necessitatibus quaerat, quas nostrum facere laudantium nemo veniam vel quia accusamus recusandae eos soluta quisquam, reprehenderit amet at.
            </p>
            <hr noshade color='green' />

        </div>
    )
}

export default Footer;
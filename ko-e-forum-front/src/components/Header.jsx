import './headerfooter.module.css'
import PropTypes from 'prop-types'

function Header(props) {
    return (
        <>
            <header>
                <a href="/"><img src={props.src} alt="Loueixz-Logo"/></a>
                <h3>KillerOpil-Escape Fórum</h3>
            </header>
        </>
    )
}

Header.propTypes = {
    src: PropTypes.string,
}

export default Header
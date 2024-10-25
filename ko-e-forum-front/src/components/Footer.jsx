import './headerfooter.module.css'
import PropTypes from 'prop-types'

function Footer(props) {
    return (
        <>
            <footer>
                <img src={props.src} alt="Loueixz-Logo"/>
                <h2>Todos os direitos reservados.</h2>
                <h3>KillerOpil-Escape Fórum</h3>
            </footer>
        </>
    )
}

Footer.propTypes = {
    src: PropTypes.string,
}

export default Footer
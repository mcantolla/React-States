import SocialButton from './SocialButton'
import Formulario from './Formulario'

function Registro() {
    return (
    <>
        <div className='socialWrapper'>
        <SocialButton
        rrss= "fa-brands fa-github"
        />
        <SocialButton
        rrss= "fa-brands fa-facebook"
        />
        <SocialButton
        rrss= "fa-brands fa-linkedin-in"
        />
        </div>
        <div className='formularioWrapper'>
        <Formulario />
        </div>
    </>
    )
  }
  
  export default Registro
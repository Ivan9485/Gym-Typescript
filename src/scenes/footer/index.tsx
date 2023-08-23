import Logo from "@/assets/Logo.png"



const Footer = () => {
  return (
   <footer className="bg-primary-100 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
    <div className="mt-16 basis-1/2 md:mt-0">
      <img alt="logo" src={Logo}/>
      <p className="my-5">
      Estás a punto de experimentar un mundo de posibilidades en nuestro Espacio para Miembros. Gracias por ser parte de nuestra familia y por elegirnos para acompañarte en tu viaje hacia una vida más saludable y activa. ¡Adelante, miembro estelar!
      </p>
      <p> © 2023 EvolveGym. Todos los derechos reservados.</p>
    </div>
    <div className="mt-16 basis-1/4 md:mt-0">
      <h4 className="font-bold">Links</h4>
    <p className="my-5">Massa orci senectus</p>
    <p className="my-5">Et gravida id et etima</p>
    <p>Ullamcorper vivamus</p>

    </div>

    
    <div className="mt-16 basis-1/4 md:mt-0">
      <h4 className="font-bold">Contact Us</h4>
    <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
    <p>(333)425-6825</p>

    </div>

    </div>
   </footer>
  )
}

export default Footer;
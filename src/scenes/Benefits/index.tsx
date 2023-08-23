
import HText from "@/shared/HText";
import {SelectedPage, BenefitType} from "@/shared/types"
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"


const benefits: Array<BenefitType> = [{
  icon: <HomeModernIcon className="h-6 w-6"/>,
  title: "State of the Art Facilities",
  description: "Ser parte de nuestra comunidad es más que unirse a un gimnasio; es unirte a un grupo de individuos motivados y amigables que comparten tus objetivos. El apoyo mutuo y la camaradería hacen que cada visita sea una experiencia enriquecedora."
},{
  icon: <UserGroupIcon className="h-6 w-6"/>,
  title: "Clases Variadas",
  description: "Ser parte de nuestra comunidad es más que unirse a un gimnasio; es unirte a un grupo de individuos motivados y amigables que comparten tus objetivos. El apoyo mutuo y la camaradería hacen que cada visita sea una experiencia enriquecedora."
},{
  icon: <AcademicCapIcon className="h-6 w-6"/>,
  title: "Entrenadores Capacitados",
  description: "Ser parte de nuestra comunidad es más que unirse a un gimnasio; es unirte a un grupo de individuos motivados y amigables que comparten tus objetivos. El apoyo mutuo y la camaradería hacen que cada visita sea una experiencia enriquecedora."
},
];

const container = {
  hidden:{},
  visible:{
    transition: {staggerChildren: 0.2}
  }
}



type Props = {
  setSelectedPage:(value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py=20 mb-20 mt-16"
    >
    <motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}
    >
      {/* HEADER */}
      <motion.div 
      initial="hidden" whileInView="visible"
      viewport={{once:true,amount:0.5}}
      transition={{duration:0.50}}
      variants={{
        hidden: {opacity:0,x:-50},
        visible: {opacity:1, x:0},
      }}
      className="md:my-10 md:w-3/5 ">
      <HText>MORE THAN JUST A GYM</HText>
      <p className="my-5 text-sm">
     Nuestro compromiso es brindarte mucho más que máquinas y pesas: aquí encontrarás un conjunto de ventajas que te ayudarán a alcanzar tus objetivos de salud y forma física de manera eficiente y divertida.
      </p>
      </motion.div>

      {/* BENEFITS */}
      <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount:0.5}}
      variants={container}
      className="md:flex items-center justify-between gap-8 mt-5 ">
      {benefits.map((benefit:BenefitType)=> (
        <Benefit 
        key={benefit.title}
        icon={benefit.icon}
        title={benefit.title}
        description ={benefit.description}
        setSelectedPage={setSelectedPage}
        />
      ))}
      </motion.div>

      {/* GRAPHICS AND DESCRIPTION */}
      <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        {/* GRAPHICS */}
        <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-page-graphic" />


        {/* Description */}
        <div>

        

        {/* TITLE */}
        <div className="relative">
          <div className="before:absolute before:-top-20 before:-left-20 before:z-[1]
          before:content-abstractwaves"
          >
          <motion.div 
              initial="hidden" whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{duration:0.50}}
            variants={{
              hidden: {opacity:0,x:50},
              visible: {opacity:1, x:0},
            }}>
            <HText>
              MILLIONS OF HAPPY MEMBERS GETTING{" "}
              <span className="text-primary-500">FIT</span>
            </HText>
          </motion.div>

          </div>

        </div>

        
        {/* DESCRIPTION */}
        <motion.div
        initial="hidden" whileInView="visible"
        viewport={{once:true,amount:0.5}}
        transition={{delay:0.2, duration:0.50}}
        variants={{
          hidden: {opacity:0,x:-50},
          visible: {opacity:1, x:0},
        }}>
          <p className="my-5">En este exclusivo rincón, tú eres la estrella. Nos enorgullece tener a personas como tú comprometidas con su bienestar y salud. Aquí, no solo encontrarás equipos de alta calidad y programas de entrenamiento efectivos, sino también una comunidad que te apoya en cada paso de tu viaje.</p>
          <p className="mb-5">Únete a una comunidad de individuos dedicados como tú. Comparte experiencias, consejos y logros, creando conexiones duraderas que hacen que cada entrenamiento sea aún más gratificante.</p>
        </motion.div>

        {/* BUTTON */}
        <div className="relative mt-16">
          <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
          <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
          </div>
        </div>
      </div>
      </div>


    </motion.div>
    

    </section>
  )
}
export default Benefits
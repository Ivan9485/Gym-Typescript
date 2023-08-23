import  { SelectedPage,ClassType } from "@/shared/types"
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import Class from "./Class"



const classes: Array<ClassType> = [
  {
    name:"Weight Training Classes",
    description:"Explora oportunidades emocionantes para interactuar con otros miembros. Desde competencias amistosas hasta eventos sociales, este es el lugar donde la diversión se combina con la aptitud.",
    image:image1,
  },{
    name:"Weight Training Classes",
    description:"Explora oportunidades emocionantes para interactuar con otros miembros. Desde competencias amistosas hasta eventos sociales, este es el lugar donde la diversión se combina con la aptitud.",
    image:image2,
  },{
    name:"Weight Training Classes",
    description:"Explora oportunidades emocionantes para interactuar con otros miembros. Desde competencias amistosas hasta eventos sociales, este es el lugar donde la diversión se combina con la aptitud.",
    image:image3,
  },{
    name:"Weight Training Classes",
    description:"Explora oportunidades emocionantes para interactuar con otros miembros. Desde competencias amistosas hasta eventos sociales, este es el lugar donde la diversión se combina con la aptitud.",
    image:image4,
  },{
    name:"Weight Training Classes",
    description:"Explora oportunidades emocionantes para interactuar con otros miembros. Desde competencias amistosas hasta eventos sociales, este es el lugar donde la diversión se combina con la aptitud.",
    image:image5,
  },{
    name:"Weight Training Classes",
    description:"Explora oportunidades emocionantes para interactuar con otros miembros. Desde competencias amistosas hasta eventos sociales, este es el lugar donde la diversión se combina con la aptitud.",
    image:image6,
  },

]



type Props = {
  setSelectedPage:(value:SelectedPage)=>void;

}
const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full  bg-primary-100 py-28 ">
      <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div className="mx-auto w-5/6"
        initial="hidden" whileInView="visible"
        viewport={{once:true,amount:0.5}}
        transition={{duration:0.90}}
        variants={{
          hidden: {opacity:0,x:-50},
          visible: {opacity:1, x:0},
        }}>
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">Nuestros entrenadores expertos están aquí para ti. Obtén orientación personalizada, ajusta tus rutinas según tus necesidades y recibe consejos nutricionales que te ayudarán a alcanzar tus metas de manera eficiente.</p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2800px] whitespace-nowrap">
        {classes.map((item:ClassType,index,)=>(
          <Class
          key={`${item.name}-${index}`}
          name={item.name}
          description={item.description}
          image={item.image}
          />
        ))}
        </ul>
        </div>
      </motion.div>

    </section>
  )
}
export default OurClasses
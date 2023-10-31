import reactImg from '../assets/react.svg'
import tailwindImg from '../assets/tailwind.svg'
import threeImg from '../assets/threejs.svg'
import rapierImg from '../assets/rapier.svg'
import firebaseImg from '../assets/firebase.svg'
import githubImg from '../assets/github.svg'
import TitleSection from '../components/TitleSection'
import SkillElement from '../components/SkillElement'
import SectionElement from '../components/SectionElement'

const Skills = () => {
  return (
    <SectionElement id={'skills'}>
    {/* // <section id='skills' className='w-full mx-auto md:mx-16 h-screen flex flex-col justify-center items-center snapelement'> */}

        <TitleSection title={'.Skills'} />

        <ul className='flex w-4/5  justify-between items-center flex-wrap mx-auto gap-x- gap-y-4'>
          
          <SkillElement 
            img={reactImg}
            alt={'react logo'}
            name={'ReactJS'}
            link={"https://react.dev/"}
            bgDirection={'left'}
          />
          
          <SkillElement 
            img={tailwindImg}
            alt={'tailwind css'}
            name={'TailwindCSS'}
            link={"https://tailwindcss.com/"}
            bgDirection={'none'}
          />

          <SkillElement 
            img={threeImg}
            alt={'three js'}
            name={'ThreeJS / R3F'}
            link={"https://docs.pmnd.rs/"}
            bgDirection={'right'}
          />

          <SkillElement 
            img={rapierImg}
            alt={'rapier js'}
            name={'RapierJS'}
            link={"https://rapier.rs/"}
            bgDirection={'left'}
          />
          
          <SkillElement 
            img={firebaseImg}
            alt={'firebase'}
            name={'Firebase'}
            link={"https://firebase.google.com/"}
            bgDirection={'none'}
          />

          <SkillElement 
            img={githubImg}
            alt={'github'}
            name={'Github'}
            link={"https://github.com/"}
            bgDirection={'right'}
          />
          
        </ul>
    {/* </section> */}
    </SectionElement>
  )
}

export default Skills
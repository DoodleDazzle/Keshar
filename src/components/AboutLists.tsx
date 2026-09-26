import { StackIcon } from '@/components/StackIcon'

const stack = [['Figma', 'Interface Design', 'figma'], ['Photoshop', 'Image Editing', 'photoshop'], ['Illustrator', 'Vector Graphics', 'contra'], ['Photopea', 'Image Editing', 'photoshop']] as const
const experience = ['UI/UX Designer (Intern) · Tupple Apps · Dec 2024 – Jun 2025', 'Graphic Designer · SVNM Hospital · Jul 2025 – Nov 2025', 'Graphic Designer · Hunani Infotech · Dec 2025 – Present']

export function AboutLists({ side }: { side: 'stack' | 'experience' }) {
  if (side === 'stack') return <div className="about-list"><h3>My Stack</h3>{stack.map(([name, subtitle, brand]) => <p className="stack-item" key={name}><StackIcon brand={brand} /><span><b>{name}</b><small>{subtitle}</small></span></p>)}</div>
  return <div className="about-list"><h3>My Experience</h3>{experience.map((item) => <p className="experience" key={item}>{item}</p>)}</div>
}

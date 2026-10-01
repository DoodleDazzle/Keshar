import { StackIcon } from '@/components/StackIcon'

const stack = [['Figma', 'Interface Design', 'figma'], ['Photoshop', 'Image Editing', 'photoshop'], ['Illustrator', 'Vector Graphics', 'contra'], ['Photopea', 'Image Editing', 'photoshop']] as const
const experience = [
  { role: 'UI/UX Designer (Intern)', company: 'Tupple Apps', period: 'Dec 2024 – Jun 2025' },
  { role: 'Graphic Designer', company: 'SVNM Hospital', period: 'Jul 2025 – Nov 2025' },
  { role: 'Graphic Designer', company: 'Hunani Infotech', period: 'Dec 2025 – Present' },
]

function CornerSparkles() {
  return (
    <span className="about-header-sparkles" aria-hidden="true">
      <svg className="top-left" viewBox="0 0 20 20"><path d="M10 0c1.5 6.5 3.5 8.5 10 10-6.5 1.5-8.5 3.5-10 10C8.5 13.5 6.5 11.5 0 10 6.5 8.5 8.5 6.5 10 0Z" /></svg>
      <svg className="top-right" viewBox="0 0 20 20"><path d="M10 0c1.5 6.5 3.5 8.5 10 10-6.5 1.5-8.5 3.5-10 10C8.5 13.5 6.5 11.5 0 10 6.5 8.5 8.5 6.5 10 0Z" /></svg>
      <svg className="bottom-left" viewBox="0 0 20 20"><path d="M10 0c1.5 6.5 3.5 8.5 10 10-6.5 1.5-8.5 3.5-10 10C8.5 13.5 6.5 11.5 0 10 6.5 8.5 8.5 6.5 10 0Z" /></svg>
      <svg className="bottom-right" viewBox="0 0 20 20"><path d="M10 0c1.5 6.5 3.5 8.5 10 10-6.5 1.5-8.5 3.5-10 10C8.5 13.5 6.5 11.5 0 10 6.5 8.5 8.5 6.5 10 0Z" /></svg>
    </span>
  )
}

export function AboutLists({ side }: { side: 'stack' | 'experience' }) {
  if (side === 'stack') return <div className="about-list"><h3><span>My Stack</span><CornerSparkles /></h3>{stack.map(([name, subtitle, brand]) => <p className="stack-item" key={name}><StackIcon brand={brand} /><span><b>{name}</b><small>{subtitle}</small></span></p>)}</div>
  return (
    <div className="about-list">
      <h3><span>My Experience</span><CornerSparkles /></h3>
      {experience.map(({ role, company, period }) => (
        <article className="experience" key={company}>
          <p className="experience-role">{role}</p>
          <div className="experience-details">
            <p className="experience-detail"><span>Company</span><span aria-hidden="true">→</span><span>{company}</span></p>
            <p className="experience-detail"><span>Year</span><span aria-hidden="true">→</span><span>{period}</span></p>
          </div>
        </article>
      ))}
    </div>
  )
}

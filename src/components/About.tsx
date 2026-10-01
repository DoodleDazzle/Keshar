import { AboutLists } from '@/components/AboutLists'

function CharacterAnimation({ className }: { className: string }) {
  return (
    <div className={className} role="img" aria-label="Animated illustration of Dean">
      <video autoPlay loop muted playsInline className="character-video" aria-hidden="true">
        <source src="/her-animation.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

function Stat({ n, t }: { n: string; t: string }) { return <div className="stat"><strong>{n}</strong><span>{t}</span></div> }

export function About() {
  return (
    <section id="about" className="about-section section-grid">
      <div className="about-section-boundary" aria-hidden="true" />
      <h2 className="about-heading">About Me</h2>
      <div className="about-layout">
        <div className="about-side about-side-left"><div className="stats"><Stat n="13+" t="Projects Completed" /><Stat n="1+" t="Years of Design Experience" /><Stat n="20+" t="UI Screens Designed" /></div><AboutLists side="stack" /></div>
        <div className="about-image about-lottie-sticky"><div className="about-lottie-card"><CharacterAnimation className="about-lottie" /></div></div>
        <div className="about-side about-side-right"><div className="stats"><Stat n="98%" t="Client Retention Rate" /><Stat n="60+" t="Happy Customers" /><Stat n="5+" t="Industries Explored" /></div><AboutLists side="experience" /></div>
      </div>
    </section>
  )
}

import { ProjectCard } from "@/components/Card";
import { projects } from "@/data/projects";

export function App() {
  return (
      <div>
        <div>
          <nav className="bg-orange-500 shadow-md px-6 py-2 rounded-lg mx-20 mt-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <a href="/"><img src="logo.jpg" className="rounded-2xl" alt="Site logo" width={45} /></a>

              <div className="flex gap-6 items-end text-2xl text-white">
                <a href="/">#home</a>
                <a href="#about">#about</a>
                <a href="#projects">#projects</a>
                <a href="#contact">#contact</a>
              </div>
            </div>
          </nav>
        </div>
        <div className="text-center">
          <h1 className="text-8xl mt-10">Hi, I am <div className="text-amber-600">Pratham</div></h1>
          <p className="text-4xl mt-2 text-muted-foreground">Coding and vibing whenever I can</p>
        </div>
        <div className="mx-4 mt-5 bg-neutral-900" id="about">
            <h2 className="text-orange-500 text-3xl p-2">#about</h2>
            <p className="text-xl px-2 text-muted-foreground">I know that I know myself (kind of?)</p>
            <p className="px-2 py-2 text-2xl text-white">I am a 15 year old student located in Germany and speak fluently English, German, Hindi and understand a bit of French. <br />I like to do a bit of everything: Hardware, Web, Backend, Systems and AI/Ml. <br />Currently I am working on adaptive layer skipping on LLM's and Transformers in general for my upcoming Jugend Forscht Research project. <br />In the past I created FloralAI, an AI powered Plant-Health-Analysis device that got me to the <a href="https://www.jugend-forscht-bayern.de/projekte/anzeigen/floralai-entwicklung-eines-ki-gesteuerten-pflanzenpflegesystems/">Nationals of the Jugend Forscht Competition</a> (I even got <a className="text-orange-500" href="https://www.frankenfernsehen.tv/mediathek/video/junge-ideen-fuer-die-zukunft-61-jugend-forscht-regionalwettbewerb-startet-an-der-fau-erlangen-nuernberg/">interviewed</a> for it!)</p>
        </div>
        <div className="mx-4 mt-5" id="projects">
            <h2 className="text-orange-500 text-3xl p-2">#projects</h2>
            <p className="text-xl px-2 text-muted-foreground">Stuff I have built over time</p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                  />
                ))}
        </div>
        </div>
        <div  className="mx-4 mt-5 bg-neutral-900 " id="contact">
                <h2 className="text-orange-500 text-3xl p-2">#contact</h2>
                <p className="text-xl px-2 text-white">You can write me an email: <a href="mailto:prathamontheweb@gmail.com" className="text-orange-500">prathamontheweb@gmail.com</a></p>
                <p className="text-xl px-2 text-white">Or DM on X/Twitter: <a href="https://x.com/@prathamghaywat" className="text-orange-500">@prathamghaywat</a></p>
                <p className="text-xl px-2 text-white">And if you are really weird, open an issue on Github: <a href="https://github.com/prathamghaywat" className="text-orange-500">PrathamGhaywat</a></p>
        </div>
        <footer>
          <h3 className="text-center p-10 text-muted-foreground">Pratham Ghaywat - All rights reserved</h3>
        </footer>
      </div>
  )
}

export default App

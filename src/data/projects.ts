export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}
export const projects: Project[] = [
    {
        title: "Cinnamon",
        description: 
            "A interpreted programming language written in Rust using the LALRPOP for parsing",
            image: "cinnamon-demo.png",
            technologies: ["Rust", "Interpreted Languages", "Parsing"],
            liveUrl: "https://github.com/PrathamGhaywat/cinnamon/blob/main/example.cin",
            githubUrl: "https://github.com/PrathamGhaywat/cinnamon/"
    },
    {
        title: "ScratchNet",
        description: 
            "Neural Network from scratch using NumPy and Python",
            image: "scratchnet-demo.png",
            technologies: ["Maschine Learning", "AI", "Python", "Streamlit"],
            liveUrl: "https://scratchnet-mnist.streamlit.app/",
            githubUrl: "https://github.com/PrathamGhaywat/scratchnet"
    },
    {
        title: "StimmeNote",
        description: 
            "Stimmenote is a small, local voice dictation app. Record from any available microphone, transcribe the recording with Whisper, edit the result, and copy it wherever you need it.",
            image: "stimmenote-demo.png",
            technologies: ["Typescript", "Tauri", "Rust", "Desktop apps", "Github Actions"],
            liveUrl: "https://github.com/PrathamGhaywat/stimmenote/releases/tag/v1",
            githubUrl: "https://github.com/PrathamGhaywat/stimmenote"
    }
];

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/data/projects"
import { Button } from "./ui/button"

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/40">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-xl text-foreground">
          {project.title}
        </CardTitle>

        <CardDescription className="text-gray-400">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge
              key={technology}
              variant="secondary"
              className="border border-orange-400/20 bg-orange-400/10 text-orange-300"
            >
              {technology}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="text-black-400 bg-orange-500">Live Demo</Button>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="text-white bg-amber-500">Github</Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

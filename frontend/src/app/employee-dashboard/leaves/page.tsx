
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { mockStudentReports } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function UserProjectsPage() {
  const projects = mockStudentReports.map((r, i) => ({
      id: r.id,
      title: `Project Showcase ${i+1}`,
      description: 'A web application built with Next.js and Tailwind CSS to demonstrate modern frontend development techniques and best practices.',
      imageUrl: `https://picsum.photos/seed/${i+10}/600/400`,
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN UI'],
      liveUrl: '#',
      githubUrl: '#',
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">My Projects</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                    <Image src={project.imageUrl} alt={project.title} width={600} height={400} className="object-cover w-full h-full" />
                </div>
                <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.techStack.map(tech => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                View Live
                            </a>
                        </Button>
                         <Button variant="outline" size="sm" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                Source Code
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}

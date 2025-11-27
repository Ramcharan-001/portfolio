
'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { MoreHorizontal, PlusCircle, ArrowUpDown } from 'lucide-react';
import { mockUsers } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export default function ProjectsPage() {
  // Re-using mock data structure, mapping concepts
  const projects = mockUsers.slice(1, 4).map(u => ({
      id: u.uid,
      name: `Project ${u.uid.replace('student', '')}`,
      description: `A showcase of my skills in ${u.department}.`,
      imageUrl: u.avatarUrl,
      techStack: ['React', 'Next.js', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      lastUpdated: u.joinedDate,
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <div className="flex items-center gap-2">
            <Input placeholder="Search projects..." className="w-64 bg-background"/>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Project
            </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Showcase</CardTitle>
          <CardDescription>Manage and display your personal projects.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                    Image
                </TableHead>
                <TableHead>
                    <Button variant="ghost" className="p-0 hover:bg-transparent">
                        Project Name
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                </TableHead>
                <TableHead>Tech Stack</TableHead>
                <TableHead className="hidden md:table-cell">Last Updated</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="hidden sm:table-cell">
                    <Image
                        alt="Project image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src={project.imageUrl || '/placeholder.svg'}
                        width="64"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{project.name}</div>
                    <div className="text-sm text-muted-foreground hidden md:block">{project.description}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                        {project.techStack.map(tech => (
                             <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {project.lastUpdated}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>View Live</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive focus:text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}


'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Loader2, Linkedin, Github, Twitter } from 'lucide-react';
import { useUser } from '@/hooks/use-user';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export default function AboutMePage() {
    const user = useUser();

    if (!user) {
        return <div className="flex h-full items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
    }

    const getInitials = (name: string) => {
        const names = name.split(' ');
        if (names.length > 1) {
            return `${names[0][0]}${names[1][0]}`;
        }
        return name.substring(0, 2);
    };

    const skills = ['React', 'TypeScript', 'Next.js', 'Node.js', 'GraphQL', 'Figma'];

  return (
    <div className="space-y-8">
        <Card className="overflow-hidden">
            <CardHeader className="p-0">
                <div className="h-32 bg-gradient-to-r from-primary to-primary/70" />
            </CardHeader>
            <CardContent className="p-6 pt-0">
                <div className="relative -mt-16 flex flex-col items-center gap-4 md:flex-row md:items-end">
                    <Avatar className="h-32 w-32 border-4 border-background">
                        <AvatarImage src={user.avatarUrl} />
                        <AvatarFallback className="text-4xl">{getInitials(user.name)}</AvatarFallback>
                    </Avatar>
                    <div className="mt-2 grid flex-1 gap-1 text-center md:text-left">
                        <h1 className="text-3xl font-bold">{user.name}</h1>
                        <p className="text-muted-foreground">Software Engineer | Full-Stack Developer</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon"><Linkedin className="h-4 w-4" /></Button>
                        <Button variant="outline" size="icon"><Github className="h-4 w-4" /></Button>
                        <Button variant="outline" size="icon"><Twitter className="h-4 w-4" /></Button>
                    </div>
                </div>
            </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>About Me</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            I am a passionate and creative software engineer with over 5 years of experience in building modern web applications. My expertise lies in the JavaScript ecosystem, particularly with React and Node.js. I thrive on solving complex problems and am dedicated to writing clean, efficient, and scalable code. I'm always eager to learn new technologies and improve my craft.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Experience</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h3 className="font-semibold">Senior Frontend Developer - TechCorp Inc.</h3>
                            <p className="text-sm text-muted-foreground">2021 - Present</p>
                            <p className="text-sm mt-1">Led the development of a new design system and component library, improving development velocity by 30%.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Software Engineer - Web Innovators</h3>
                            <p className="text-sm text-muted-foreground">2019 - 2021</p>
                            <p className="text-sm mt-1">Contributed to a large-scale e-commerce platform, focusing on performance and user experience.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {skills.map(skill => (
                                <Badge key={skill} variant="secondary">{skill}</Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Education</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <div>
                            <h3 className="font-semibold">B.Sc. in Computer Science</h3>
                            <p className="text-sm text-muted-foreground">University of Technology, 2015-2019</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}

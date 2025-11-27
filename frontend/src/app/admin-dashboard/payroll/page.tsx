
'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function SkillsPage() {

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
         <div>
          <h1 className="text-3xl font-bold tracking-tight">Skills & Technologies</h1>
          <p className="text-muted-foreground">Manage the skills and technologies you want to showcase.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
            <CardHeader>
                <CardTitle>Add New Skill</CardTitle>
                <CardDescription>Add a new skill or technology to your portfolio.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="skill-name">Skill Name</Label>
                        <Input id="skill-name" placeholder="e.g., React, Node.js, Figma" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="skill-level">Proficiency Level (1-100)</Label>
                        <Input id="skill-level" type="number" min="1" max="100" placeholder="e.g., 90" />
                    </div>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Skill
                    </Button>
                </form>
            </CardContent>
        </Card>

        <Card>
             <CardHeader>
                <CardTitle>Current Skills</CardTitle>
                <CardDescription>Your currently listed skills.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                    <p className="font-medium">TypeScript</p>
                    <p className="text-sm text-muted-foreground">95%</p>
                </div>
                 <div className="flex items-center justify-between">
                    <p className="font-medium">Next.js</p>
                    <p className="text-sm text-muted-foreground">90%</p>
                </div>
                 <div className="flex items-center justify-between">
                    <p className="font-medium">Tailwind CSS</p>
                    <p className="text-sm text-muted-foreground">85%</p>
                </div>
                 <div className="flex items-center justify-between">
                    <p className="font-medium">Figma</p>
                    <p className="text-sm text-muted-foreground">80%</p>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}

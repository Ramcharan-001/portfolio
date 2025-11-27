
'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Code,
  LayoutGrid,
  BookOpen,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function Home() {

  const features = [
    {
      icon: <LayoutGrid className="h-8 w-8 text-primary" />,
      title: 'Project Galleries',
      description: 'Showcase your work with stunning project galleries, complete with descriptions, images, and links.',
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: 'Skills & Expertise',
      description: 'Highlight your technical and soft skills to show potential employers what you can do.',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: 'Blog & Articles',
      description: 'Share your knowledge and insights by publishing articles and case studies on your personal blog.',
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Achievements & Resume',
      description: 'List your accomplishments, education, and work experience in a clean, professional format.',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-transparent text-foreground">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container relative z-10 mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12">
              <div className="space-y-6 text-center">
                <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  Showcase Your Talent
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  A beautifully simple and powerful way to build your personal portfolio. Present your projects, skills, and story to the world.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button asChild size="lg">
                    <Link href="/signup">
                      Create Your Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                   <Button asChild size="lg" variant="outline">
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                Everything You Need to Stand Out
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                MyPortfolio provides the tools to build a professional online presence that gets you noticed.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Card key={feature.title} className="text-center bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      {feature.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

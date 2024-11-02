import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { HeadFC } from 'gatsby';
import { Bot, Code, Lightbulb, Rocket, Stars, Users } from 'lucide-react';
import React from 'react';

const LandingPage = () => {
  const isReadyToUse = false;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-300 to-slate-50">
      {/* Hero Section */}
      <header className="relative pb-20 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-300 to-slate-950 bg-clip-text text-transparent mb-10 drop-shadow-md">
              autobuild
            </h2>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Turn Ideas into
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {' '}
                Production-Ready
              </span>
              <br />
              Applications in Minutes
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              Collaborate with AI systems guided by industry-leading experts to
              build professional applications from simple descriptions.
              Experience human expertise amplified by AI.
            </p>
            <div className="mt-10 flex justify-center">
              {isReadyToUse ? (
                <div className="flex gap-4">
                  <Button
                    className="bg-indigo-600 hover:bg-indigo-700"
                    size="lg"
                  >
                    Start Building
                  </Button>
                  <Button variant="outline" size="lg">
                    Watch Demo
                  </Button>
                </div>
              ) : (
                <div className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                  Coming Soon
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Bot className="h-8 w-8 text-indigo-600" />}
              title="Expert-Guided AI"
              description="Access AI systems carefully curated and guided by industry-leading experts to build your application with precision and care."
            />
            <FeatureCard
              icon={<Rocket className="h-8 w-8 text-indigo-600" />}
              title="Production-Ready"
              description="Get polished, scalable applications that are ready for real-world deployment from day one."
            />
            <FeatureCard
              icon={<Code className="h-8 w-8 text-indigo-600" />}
              title="No Code Required"
              description="Transform your ideas into reality without writing a single line of code. Just describe what you need."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            How It Works
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <ProcessStep
              number="1"
              icon={<Lightbulb className="h-6 w-6" />}
              title="Describe Your Idea"
              description="Share your vision in plain English. No technical jargon needed."
            />
            <ProcessStep
              number="2"
              icon={<Users className="h-6 w-6" />}
              title="Guided AI Collaboration"
              description="Watch and guide our expert AI systems as they work together to design and build your application."
            />
            <ProcessStep
              number="3"
              icon={<Stars className="h-6 w-6" />}
              title="Get Your Application"
              description="Receive a production-ready application that's polished and ready to use."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              Join thousands of builders who are creating the next generation of
              applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <Card className="overflow-hidden">
    <CardContent className="flex flex-col p-6 sm:p-8">
      <div className="flex flex-col items-center text-center">
        <div className="mt-4">{icon}</div>
        <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-slate-600 px-2 sm:px-4">{description}</p>
      </div>
    </CardContent>
  </Card>
);

// Process Step Component
const ProcessStep = ({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
      {icon}
    </div>
    <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-slate-600">{description}</p>
  </div>
);

export default LandingPage;

export const Head: HeadFC = () => <title>Autobuild</title>;

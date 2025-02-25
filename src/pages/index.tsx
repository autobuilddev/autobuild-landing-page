import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import {
  PanelRight,
  Sparkles,
  Code,
  PaintBucket,
  Rocket,
  ChevronRight,
  Check,
  MessageSquare,
  BrainCircuit,
  Laptop,
  Pencil,
  ArrowRight,
} from 'lucide-react';
import MovieMatchPreview from '@/components/MovieMatchPreview';
import MealPlannerPreview from '@/components/MealPlannerPreview';
import WorkoutBuddyPreview from '@/components/WorkoutBuddyPreview';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [promptText, setPromptText] = useState(
    'Build me an app so any couple can save movies they want to watch and it recommends them for the weekend'
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Example app images with description
  const examples = [
    {
      title: 'Movie Match',
      description: 'Couples app for saving & recommending weekend movies',
      component: <MovieMatchPreview />,
      prompt:
        'Build me an app so any couple can save movies they want to watch and it recommends them for the weekend',
    },
    {
      title: 'Meal Planner Pro',
      description:
        'Weekly meal planning with grocery lists and dietary filters',
      component: <MealPlannerPreview />,
      prompt:
        'Create a meal planning app that lets users plan a week of meals and automatically generates grocery lists',
    },
    {
      title: 'WorkoutBuddy',
      description: 'Personalized fitness tracking with custom routines',
      component: <WorkoutBuddyPreview />,
      prompt:
        'I need a workout app that lets me create and track custom routines and shows my progress',
    },
  ];

  // Auto-rotate examples
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % examples.length);
      setPromptText(examples[(currentIndex + 1) % examples.length].prompt);
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex, examples]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-100 to-purple-200 dark:from-slate-950 dark:via-indigo-900 dark:to-purple-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <span className="font-bold text-xl">Autobuild</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#examples"
              className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Examples
            </a>
            <Button variant="outline" size="sm" className="ml-2">
              Log In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <PanelRight className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
              <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300 flex items-center">
                <Sparkles className="h-4 w-4 mr-2" />
                AI guided by real human industry expert knowledge
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text !leading-snug">
              Your App Idea, <br className="md:hidden" />
              <span className="italic">Professionally</span> Built
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Describe your idea, and we'll build a production-ready app that
              looks like it was crafted by a professional design and development
              team.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Start Building Free
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                See Demo
              </Button>
            </div>
          </motion.div>

          {/* App Builder Demo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700"
          >
            <div className="p-4 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mx-auto">
                Autobuild App Creator
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-left">
                  Describe your app:
                </label>
                <div className="flex">
                  <Input
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    className="w-full px-4 py-3 text-base rounded-r-none"
                    placeholder="Describe the app you want to build..."
                  />
                  <Button className="bg-indigo-600 hover:bg-indigo-700 rounded-l-none">
                    Build
                  </Button>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200 dark:border-slate-700 pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <h3 className="font-semibold text-lg mb-2 text-left">
                      {examples[currentIndex].title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 text-left">
                      {examples[currentIndex].description}
                    </p>
                    <div className="text-left">
                      <Button variant="outline" size="sm" className="mr-2">
                        Preview
                      </Button>
                      <Button size="sm">Deploy App</Button>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden h-[240px] relative">
                      <div className="absolute inset-0 scale-[0.6] origin-center transform-gpu">
                        <div className="w-[166%] h-[166%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          {examples[currentIndex].component}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm"
      >
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Professional Apps From Day One
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Skip the MVP phase. Get a polished, production-ready application
              from the very first version.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg dark:bg-slate-800">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <PaintBucket className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Professional Design
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Beautifully crafted UI/UX that looks like it was designed by a
                  team of professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg dark:bg-slate-800">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Solid Engineering
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Production-quality code with industry best practices, proper
                  architecture, and thorough testing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg dark:bg-slate-800">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ready to Launch</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Fully deployed and ready to share with your users, with all
                  the necessary infrastructure in place.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 px-4 bg-slate-50/70 dark:bg-slate-800/70 backdrop-blur-sm"
      >
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              From idea to production-ready app in four simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Desktop connector line */}
            <div
              className="absolute top-24 -translate-y-1/2 left-0 right-0 h-1 bg-indigo-200 dark:bg-indigo-900/30 hidden lg:block"
              style={{ zIndex: 0 }}
            ></div>

            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 h-full border border-slate-200 dark:border-slate-700 relative z-10">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">
                    Describe Your App
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-center">
                    Tell us what you want to build in plain language, just like
                    you'd explain it to a colleague.
                  </p>
                  <div className="mt-4 p-3 bg-slate-100 dark:bg-slate-700 rounded-lg text-sm italic">
                    "Build me an app so any couple can save movies they want to
                    watch and it recommends them for the weekend"
                  </div>
                </div>
                <div className="hidden lg:block absolute -right-4 top-24 -translate-y-1/2 w-8 h-8 bg-indigo-600 rounded-full text-white z-20">
                  <ArrowRight className="w-8 h-8 p-2" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 h-full border border-slate-200 dark:border-slate-700 relative z-10">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                    <BrainCircuit className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">
                    AI Designs Your App
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-center">
                    Our AI analyzes your needs, designs user flows, navigation,
                    interaction models, and creates the perfect UX for your
                    application.
                  </p>
                  <div className="mt-4 flex justify-center">
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"
                        style={{ animationDelay: '0s' }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"
                        style={{ animationDelay: '0.2s' }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"
                        style={{ animationDelay: '0.4s' }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block absolute -right-4 top-24 -translate-y-1/2 w-8 h-8 bg-indigo-600 rounded-full text-white z-20">
                  <ArrowRight className="w-8 h-8 p-2" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 h-full border border-slate-200 dark:border-slate-700 relative z-10">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                    <Pencil className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">
                    Review & Collaborate
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-center">
                    Review the design, collaborate with the AI, and request any
                    changes. The AI will redesign your app to match your vision
                    perfectly.
                  </p>
                  <div className="mt-4 flex justify-center">
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        Instant updates
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block absolute -right-4 top-24 -translate-y-1/2 w-8 h-8 bg-indigo-600 rounded-full text-white z-20">
                  <ArrowRight className="w-8 h-8 p-2" />
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 h-full border border-slate-200 dark:border-slate-700 relative z-10">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                    <Rocket className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">
                    Production-Ready App
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-center">
                    The AI implements your app with professional code, and you
                    receive a fully functional, production-ready application.
                  </p>
                  <div className="mt-4 flex justify-center">
                    <Button
                      size="sm"
                      className="bg-indigo-600 hover:bg-indigo-700"
                    >
                      Launch App
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile progress indicator */}
          <div className="flex justify-center mt-8 lg:hidden">
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
              <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
              <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
              <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Examples Section */}
      <section
        id="examples"
        className="py-20 px-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm"
      >
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">From Idea to Reality</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              See what others have built with Autobuild.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg dark:bg-slate-800"
              >
                <div className="bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden h-48 relative">
                  <div className="absolute inset-0 scale-[0.6] origin-center transform-gpu">
                    <div className="w-[166%] h-[166%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {example.component}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 pt-8">
                  <h3 className="text-xl font-semibold mb-2">
                    {example.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {example.description}
                  </p>
                  <div className="text-sm text-slate-500 dark:text-slate-400 italic mb-4">
                    "{example.prompt}"
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Case Study
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Dream App?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Get started today and have your production-ready application in
            minutes, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default">
              Start Building Free
            </Button>
            <Button size="lg" variant="secondary">
              Schedule a Demo
            </Button>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="flex items-center">
              <Check className="h-5 w-5 mr-2 text-indigo-300" />
              <span className="text-indigo-100">No credit card required</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 mr-2 text-indigo-300" />
              <span className="text-indigo-100">14-day free trial</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 mr-2 text-indigo-300" />
              <span className="text-indigo-100">Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-slate-400">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-indigo-400" />
                <span className="font-bold text-xl text-white">Autobuild</span>
              </div>
              <p className="max-w-xs">
                Turn your ideas into production-ready applications with AI
                guided by expert industry knowledge.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-white mb-4">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Autobuild. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-white transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

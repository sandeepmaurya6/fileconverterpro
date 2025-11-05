'use client';

import { ToolCard } from '@/components/tool-card';
import { getAllTools, getToolsByCategory } from '@/lib/tools-config';
import { Button } from '@/components/ui/button';
import { Github, Star, Zap } from 'lucide-react';

export default function LandingPage() {
  const imageTools = getToolsByCategory('image');
  const videoTools = getToolsByCategory('video');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8">
              <Zap className="h-4 w-4" />
              100% Free · No Upload · Privacy First
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Convert & Optimize Files
              <br />
              Right in Your Browser
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Professional-grade file converter and optimizer. Process images and videos instantly without uploading.
              Fast, secure, and completely free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 h-12" asChild>
                <a href="#tools">Browse Tools</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-12" asChild>
                <a href="https://github.com/sandeepmaurya6/fileconverterpro" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { label: 'Files Processed', value: '100% Private' },
              { label: 'Upload Required', value: 'Never' },
              { label: 'File Size Limit', value: 'Up to 2GB' },
              { label: 'Batch Processing', value: '20 Files' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Privacy First',
              description: 'All processing happens in your browser. Your files never leave your device.',
              icon: '🔒'
            },
            {
              title: 'Lightning Fast',
              description: 'No server uploads means instant conversions. Process multiple files simultaneously.',
              icon: '⚡'
            },
            {
              title: 'Free Forever',
              description: 'No subscriptions, no hidden fees, no file limits. Completely free to use.',
              icon: '💎'
            }
          ].map((feature) => (
            <div key={feature.title} className="text-center p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="max-w-7xl mx-auto px-6 py-16">
        {/* Image Tools */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-3">Image Tools</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Convert, compress, and optimize images with professional-grade tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {imageTools.map((tool) => (
              <ToolCard
                key={tool.id}
                title={tool.title}
                description={tool.description}
                href={`/tools/${tool.slug}`}
                icon={tool.icon}
                category={tool.category}
              />
            ))}
          </div>
        </div>

        {/* Video Tools */}
        <div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-3">Video Tools</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Convert and extract audio from videos with ease
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTools.map((tool) => (
              <ToolCard
                key={tool.id}
                title={tool.title}
                description={tool.description}
                href={`/tools/${tool.slug}`}
                icon={tool.icon}
                category={tool.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 dark:bg-gray-900 border-y py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Choose Your Tool',
                description: 'Select the conversion or optimization tool you need from our collection.'
              },
              {
                step: '2',
                title: 'Upload Files',
                description: 'Drag and drop your files or click to browse. Files stay in your browser.'
              },
              {
                step: '3',
                title: 'Download Results',
                description: 'Get your converted files instantly. Download individually or as a ZIP.'
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {[
            {
              q: 'Are my files uploaded to a server?',
              a: 'No! All conversions happen entirely in your browser using modern web technologies. Your files never leave your device, ensuring complete privacy and security.'
            },
            {
              q: 'Is there a file size limit?',
              a: 'Images can be up to 50MB each, and videos up to 2GB. You can process up to 20 files at once.'
            },
            {
              q: 'Do I need to create an account?',
              a: 'No account needed! Simply visit the site, choose your tool, and start converting. No registration, no email required.'
            },
            {
              q: 'Is this really free?',
              a: 'Yes, completely free with no hidden costs. No subscriptions, no premium tiers, no limits on usage.'
            },
            {
              q: 'What browsers are supported?',
              a: 'All modern browsers are supported including Chrome, Firefox, Safari, and Edge. We recommend using the latest version for best performance.'
            }
          ].map((faq, i) => (
            <details key={i} className="group border rounded-lg p-6">
              <summary className="cursor-pointer font-semibold text-lg flex justify-between items-center">
                {faq.q}
                <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Converting?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Choose from our collection of free, privacy-first conversion tools
          </p>
          <Button size="lg" className="text-lg px-8 h-12" asChild>
            <a href="#tools">Browse All Tools</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <p>Built with Next.js · Open Source · Privacy First</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://github.com/sandeepmaurya6/fileconverterpro" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#tools" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Tools
            </a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

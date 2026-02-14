'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Smartphone } from 'lucide-react';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const benefits = [
    {
      icon: Zap,
      label: 'Lightning Fast',
    },
    {
      icon: Shield,
      label: '100% Secure',
    },
    {
      icon: Smartphone,
      label: 'Works Everywhere',
    },
  ];

  return (
    <section className="relative pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Convert Files in Seconds, Not Minutes
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform your files instantly. PNG to WebP, videos to audio, and more. All in your browser, completely private.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.label}
                  variants={itemVariants}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{benefit.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

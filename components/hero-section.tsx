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
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-b from-primary/5 to-transparent"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-8 md:mb-12">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-4 md:mb-6"
            variants={itemVariants}
          >
            Convert Files in Seconds, Not Minutes
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground text-balance mb-6 md:mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Free online file converter supporting PNG to WebP, JPEGs, videos, and more. Process directly in your browser with zero uploads needed.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto"
          variants={containerVariants}
        >
          {[
            {
              icon: Zap,
              title: 'Lightning Fast',
              description: 'Convert multiple files instantly without server uploads',
            },
            {
              icon: Shield,
              title: '100% Secure',
              description: 'Your files never leave your device, processed offline',
            },
            {
              icon: Smartphone,
              title: 'Works Everywhere',
              description: 'Mobile, tablet, or desktop - use any modern browser',
            },
          ].map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="p-4 md:p-6 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <feature.icon className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-semibold text-sm md:text-base mb-2">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

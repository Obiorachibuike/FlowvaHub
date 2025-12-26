
'use client';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { AnnouncementCard } from './components/AnnouncementCard';
import { StatCards } from './components/StatCards';
import { TopPicks } from './components/TopPicks';
import { CtaCards } from './components/CtaCards';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
      opacity: 1,
      transition: {
          staggerChildren: 0.1,
      },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
      y: 0,
      opacity: 1,
      transition: {
          duration: 0.5,
      },
  },
};

export default function RewardsPage() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto flex flex-col gap-4">
        <motion.div variants={itemVariants}><Header /></motion.div>
        <motion.div variants={itemVariants}><AnnouncementCard /></motion.div>
        <motion.div variants={itemVariants}><StatCards /></motion.div>
        <motion.div variants={itemVariants}><TopPicks /></motion.div>
        <motion.div variants={itemVariants}><CtaCards /></motion.div>
    </motion.div>
  );
}


'use client';
import { motion } from 'framer-motion';
import { PointsCard } from './components/PointsCard';
import { RewardGrid } from './components/RewardGrid';
import { RewardSuggester } from './components/RewardSuggester';
import { TransactionHistory } from './components/TransactionHistory';


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
      className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <motion.div variants={containerVariants} className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        <motion.div variants={itemVariants}><PointsCard /></motion.div>
        <motion.div variants={itemVariants}><RewardSuggester /></motion.div>
      </motion.div>
      <motion.div variants={itemVariants}><RewardGrid /></motion.div>
      <motion.div variants={itemVariants}><TransactionHistory /></motion.div>
    </motion.div>
  );
}

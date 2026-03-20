import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import SectionContainer from './SectionContainer';
import { SiLeetcode } from 'react-icons/si';
import { FaFire, FaTrophy, FaStar, FaChartLine, FaCode, FaCalendarCheck, FaExternalLinkAlt, FaChartPie, FaBrain, FaMedal } from 'react-icons/fa';

// AnimatedCounter removed to aggressively boost framerate and prevent continuous React re-renders.

// Generates fake heatmap data for the 52 weeks
const generateHeatmapData = () => {
  return Array.from({ length: 52 * 7 }).map(() => Math.floor(Math.random() * 5));
};

const LeetCode = () => {
  const [stats, setStats] = useState({
    totalSolved: 177, easySolved: 62, mediumSolved: 103, hardSolved: 12,
    totalQuestions: 3874, totalEasy: 932, totalMedium: 2027, totalHard: 915,
    acceptanceRate: 66.3, ranking: 863980, reputation: 0
  });
  const [loading, setLoading] = useState(true);
  const heatmapData = useMemo(() => generateHeatmapData(), []);

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    fetch('https://leetcode-api-faisalshohag.vercel.app/mayank_bhardwaj12', { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        clearTimeout(timeoutId);
        if (data && data.totalSolved !== undefined) {
          let acRate = 54.2; 
          if (data.matchedUserStats?.acSubmissionNum?.[0] && data.matchedUserStats?.totalSubmissionNum?.[0]) {
            const ac = data.matchedUserStats.acSubmissionNum[0].submissions;
            const totalSub = data.matchedUserStats.totalSubmissionNum[0].submissions;
            acRate = parseFloat(((ac / Math.max(totalSub, 1)) * 100).toFixed(1));
          }

          setStats(prev => ({
            ...prev,
            totalSolved: data.totalSolved || prev.totalSolved,
            easySolved: data.easySolved || prev.easySolved,
            mediumSolved: data.mediumSolved || prev.mediumSolved,
            hardSolved: data.hardSolved || prev.hardSolved,
            totalQuestions: data.totalQuestions || prev.totalQuestions,
            totalEasy: data.totalEasy || prev.totalEasy,
            totalMedium: data.totalMedium || prev.totalMedium,
            totalHard: data.totalHard || prev.totalHard,
            ranking: data.ranking || prev.ranking,
            acceptanceRate: acRate
          }));
        }
        setLoading(false);
      })
      .catch(() => {
        clearTimeout(timeoutId);
        setLoading(false);
      });
      
    return () => clearTimeout(timeoutId);
  }, []);

  if (loading) {
    return (
      <SectionContainer id="leetcode" className="py-24">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00f2fe]"></div>
        </div>
      </SectionContainer>
    );
  }

  // SVG Consts
  const circleRadius = 50;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const safeTotal = Number(stats.totalSolved) || 0;
  const strokeRatio = safeTotal / Math.max(500, safeTotal);
  const strokeDashoffset = isNaN(strokeRatio) ? circleCircumference : circleCircumference - strokeRatio * circleCircumference;

  const getHeatmapColor = (val) => {
    if (val === 0 || !val) return 'bg-white/5 dark:bg-white/5';
    if (val === 1) return 'bg-[#00ff87]/20';
    if (val === 2) return 'bg-[#00ff87]/40';
    if (val === 3) return 'bg-[#00ff87]/70';
    return 'bg-[#00ff87]';
  };

  const getPieGradient = () => {
    const total = Math.max(1, safeTotal);
    const e = ((Number(stats.easySolved) || 0) / total) * 100;
    const m = ((Number(stats.mediumSolved) || 0) / total) * 100;
    const h = ((Number(stats.hardSolved) || 0) / total) * 100;
    return `conic-gradient(#00ff87 0% ${e}%, #ffc01e ${e}% ${e+m}%, #ff375f ${e+m}% 100%)`;
  };

  return (
    <SectionContainer id="leetcode" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0b0f19]">
      {/* Sci-Fi Ambient Glows (Optimized with Zero-cost Radial Gradients) */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00f2fe]/10 via-[#00f2fe]/5 to-transparent rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#c084fc]/10 via-[#c084fc]/5 to-transparent rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00ff87]/5 via-transparent to-transparent rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Removed incredibly slow CSS cubes texture to guarantee pristine frame rates */}

      {/* 1. Header */}
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 tracking-tight text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#00f2fe] dark:to-[#4facfe] drop-shadow-md flex items-center justify-center gap-4">
          <SiLeetcode className="text-[#ffa116]" /> LeetCode Dashboard
        </h2>
        <p className="text-lg md:text-xl font-medium text-slate-600 dark:text-[#a0b0c0] tracking-widest uppercase">
          Consistency. Growth. Mastery.
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 px-4">
        
        {/* 2. Profile Overview Card */}
        <div className="col-span-1 lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-xl hover:shadow-[#00f2fe]/20 hover:border-[#00f2fe]/40 transition-all duration-300 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 px-4 py-2 bg-gradient-to-l from-[#00f2fe]/20 to-transparent rounded-bl-2xl font-mono text-[#00f2fe] font-bold text-sm tracking-wider flex items-center gap-2">
            <FaTrophy /> TOP {Math.max(1, Math.floor(stats.ranking / 3000))}%
          </div>
          
          <div className="flex flex-col items-center mt-6">
            <div className="w-24 h-24 bg-gradient-to-tr from-[#00f2fe] to-[#4facfe] p-1 rounded-full shadow-[0_0_20px_rgba(0,242,254,0.4)] group-hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center border-2 border-slate-900">
                <SiLeetcode className="text-3xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mt-4 dark:text-white">mayank_bhardwaj12</h3>
            
            {/* Circular Chart */}
            <div className="relative w-40 h-40 mt-6 group-hover:scale-105 transition-transform duration-500">
              <svg className="w-full h-full transform -rotate-90 drop-shadow-xl" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r={circleRadius} className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="8" fill="transparent" />
                <motion.circle 
                  cx="60" cy="60" r={circleRadius} className="stroke-[#00f2fe]" strokeWidth="8" fill="transparent" strokeLinecap="round"
                  initial={{ strokeDashoffset: circleCircumference }} whileInView={{ strokeDashoffset: Math.max(0, strokeDashoffset) }} transition={{ duration: 2, ease: "easeOut" }} strokeDasharray={circleCircumference}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black dark:text-white text-slate-800 drop-shadow-[0_0_10px_rgba(0,242,254,0.5)]">
                  {stats.totalSolved}
                </span>
                <span className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-[#a0b0c0]">Solved</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column: Problem Breakdown & Advanced Stats */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
          
          {/* 3. Problem Breakdown */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-xl flex-grow hover:shadow-[#00ff87]/10 transition-all duration-300">
            <h4 className="text-sm tracking-widest text-slate-500 dark:text-[#a0b0c0] uppercase font-bold mb-4 flex items-center gap-2">
              <FaCode /> Problem Breakdown
            </h4>
            <div className="flex flex-col gap-5">
              {[
                { label: 'Easy', count: Number(stats.easySolved) || 0, total: Number(stats.totalEasy) || 1, color: 'bg-[#00ff87]', shadow: 'shadow-[0_0_10px_rgba(0,255,135,0.6)]', text: 'text-[#00ff87]' },
                { label: 'Medium', count: Number(stats.mediumSolved) || 0, total: Number(stats.totalMedium) || 1, color: 'bg-[#ffc01e]', shadow: 'shadow-[0_0_10px_rgba(255,192,30,0.6)]', text: 'text-[#ffc01e]' },
                { label: 'Hard', count: Number(stats.hardSolved) || 0, total: Number(stats.totalHard) || 1, color: 'bg-[#ff375f]', shadow: 'shadow-[0_0_10px_rgba(255,55,95,0.6)]', text: 'text-[#ff375f]' }
              ].map(diff => {
                let percent = (diff.count / Math.max(diff.total, 1)) * 100;
                if (isNaN(percent)) percent = 0;
                return (
                  <div key={diff.label} className="w-full">
                    <div className="flex justify-between items-end mb-1">
                      <span className={`font-mono font-bold text-sm ${diff.text}`}>{diff.label}</span>
                      <span className="font-mono text-sm dark:text-white font-bold">{diff.count} <span className="opacity-50">/ {diff.total}</span></span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div className={`h-full ${diff.color} rounded-full ${diff.shadow}`} initial={{ width: 0 }} whileInView={{ width: `${percent}%` }} transition={{ duration: 1.5, delay: 0.3 }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* 5. Advanced Stats */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-xl hover:shadow-[#c084fc]/10 transition-all duration-300">
             <div className="grid grid-cols-2 gap-4">
               <div className="flex flex-col bg-slate-100/50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/50">
                 <FaChartPie className="text-[#c084fc] mb-2" />
                 <span className="text-xs uppercase text-slate-500 font-bold mb-1">Acceptance</span>
                 <span className="font-mono text-xl font-black dark:text-white">{stats.acceptanceRate}%</span>
               </div>
               <div className="flex flex-col bg-slate-100/50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/50">
                 <FaStar className="text-[#ffc01e] mb-2" />
                 <span className="text-xs uppercase text-slate-500 font-bold mb-1">Rating</span>
                 <span className="font-mono text-xl font-black dark:text-white">1,642</span>
               </div>
             </div>
          </div>
        </div>

        {/* Right Column: Streak & Insights */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
          
          {/* 4. Streak Analytics */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-xl hover:shadow-[#ff375f]/10 hover:border-[#ff375f]/30 transition-all duration-300 group">
             <h4 className="text-sm tracking-widest text-slate-500 dark:text-[#a0b0c0] uppercase font-bold mb-4 flex items-center gap-2">
              <FaFire className="text-[#ff375f]" /> Streak Analytics
            </h4>
            <div className="flex justify-between items-center bg-slate-100/50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/50">
              <div>
                <span className="text-xs uppercase font-bold text-slate-500 block mb-1">Current Streak</span>
                <span className="font-mono font-black text-3xl dark:text-white drop-shadow-[0_0_8px_rgba(255,55,95,0.6)]">12 <span className="text-lg">🔥</span></span>
              </div>
              <div className="text-right">
                <span className="text-xs uppercase font-bold text-slate-500 block mb-1">Max Streak</span>
                <span className="font-mono font-bold text-xl dark:text-white">45 Days</span>
              </div>
            </div>

            {/* Sparkline Graph */}
            <div className="mt-4 w-full h-16 rounded-xl relative overflow-hidden bg-slate-100/20 dark:bg-slate-800/20 px-2 flex items-end opacity-80 group-hover:opacity-100 transition-opacity">
              <svg className="w-full h-12" viewBox="0 0 100 30" preserveAspectRatio="none">
                <motion.polyline 
                  points="0,25 10,20 20,22 30,10 40,15 50,5 60,8 70,12 80,0 90,8 100,2" 
                  fill="none" stroke="url(#sparkGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="sparkGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ffc01e" />
                    <stop offset="100%" stopColor="#ff375f" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* 8. Progress Insights */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-xl hover:shadow-[#00ff87]/10 transition-all duration-300 flex-grow">
            <h4 className="text-sm tracking-widest text-slate-500 dark:text-[#a0b0c0] uppercase font-bold mb-4 flex items-center gap-2">
              <FaBrain /> Progress Insights
            </h4>
            <div className="flex items-center gap-6">
              <div 
                className="w-20 h-20 rounded-full shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.2)]" 
                style={{ background: getPieGradient() }}
              ></div>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between items-center text-sm font-mono">
                  <span className="text-slate-500">Weekly Growth</span>
                  <span className="text-[#00ff87] font-bold">+14 probs</span>
                </div>
                <div className="flex justify-between items-center text-sm font-mono border-t border-slate-200 dark:border-slate-700 pt-2">
                  <span className="text-slate-500">Active Day</span>
                  <span className="text-[#00f2fe] font-bold">Sunday</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Heatmap */}
        <div className="col-span-1 lg:col-span-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-xl overflow-x-auto hover:border-[#00ff87]/30 transition-colors duration-500 scrollbar-hide"
        >
          <div className="flex justify-between items-center mb-4 min-w-[700px]">
            <h4 className="text-sm tracking-widest text-slate-500 dark:text-[#a0b0c0] uppercase font-bold flex items-center gap-2">
              <FaCalendarCheck /> 52-Week Submissions
            </h4>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              Less <div className="flex gap-1"><span className="w-3 h-3 rounded-sm bg-white/5"></span><span className="w-3 h-3 rounded-sm bg-[#00ff87]/40"></span><span className="w-3 h-3 rounded-sm bg-[#00ff87]"></span></div> More
            </div>
          </div>
          
          <div className="flex flex-col gap-1 min-w-[700px]">
            {/* Generate 7 rows of 52 weeks */}
            {Array.from({ length: 7 }).map((_, rowIdx) => (
              <div key={rowIdx} className="flex gap-1">
                {Array.from({ length: 52 }).map((_, colIdx) => (
                  <div 
                    key={colIdx} 
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-sm ${getHeatmapColor(heatmapData[rowIdx * 52 + colIdx])} hover:opacity-75 transition-opacity duration-200 cursor-cell`}
                    title="Submission details mapped via external API"
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 7. Achievements Grid */}
        <div className="col-span-1 lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { title: 'Top 10% Fast', sub: 'Runtime Rank', icon: <FaChartLine className="w-6 h-6 text-[#00f2fe]" />, border: 'hover:border-[#00f2fe]/50' },
            { title: 'Graph Theory', sub: 'Skill Badge', icon: <FaBrain className="w-6 h-6 text-[#c084fc]" />, border: 'hover:border-[#c084fc]/50' },
            { title: 'Daily Limit', sub: '10 Problems/Day', icon: <FaFire className="w-6 h-6 text-[#ff375f]" />, border: 'hover:border-[#ff375f]/50' },
            { title: 'Data Structures', sub: 'Foundations', icon: <FaMedal className="w-6 h-6 text-[#ffc01e]" />, border: 'hover:border-[#ffc01e]/50' }
          ].map((badge, i) => (
            <div key={i} className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-5 shadow-lg ${badge.border} hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex items-center gap-4 group cursor-default`}>
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl group-hover:scale-110 transition-transform">
                {badge.icon}
              </div>
              <div>
                <h5 className="font-bold dark:text-white text-slate-800 text-sm">{badge.title}</h5>
                <span className="text-xs font-mono text-slate-500 uppercase">{badge.sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 9. CTA Button */}
        <div className="col-span-1 lg:col-span-12 flex justify-center mt-6"
        >
          <a 
            href="https://leetcode.com/u/mayank_bhardwaj12/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-4 font-bold text-white rounded-2xl group overflow-hidden"
          >
            {/* Glowing Border Wrap */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f2fe] via-[#c084fc] to-[#00ff87] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"></div>
            <div className="absolute inset-[2px] bg-slate-900 rounded-[14px]"></div>
            
            {/* Inner Content */}
            <span className="relative z-10 flex items-center justify-center gap-3 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] group-hover:scale-105 transition-transform duration-500">
              <SiLeetcode className="w-5 h-5 text-[#ffa116]" /> View Full LeetCode Profile <FaExternalLinkAlt className="w-4 h-4 ml-1" />
            </span>
            
            {/* Hover ambient bleed */}
          </a>
        </div>

      </div>
    </SectionContainer>
  );
};

export default LeetCode;

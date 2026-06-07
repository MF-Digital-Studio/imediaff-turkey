"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function BlogDetailClientPage({ post, allPosts }: { post: any, allPosts: any[] }) {
  // Get 3 related posts (excluding current)
  const related = allPosts.filter(p => p.slug !== post.slug).slice(0, 3)

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* ── HEADER: Full-bleed Immersive Cover ── */}
      <section className="relative w-full h-[60vh] md:h-[80vh] min-h-[500px] flex items-end pb-16 md:pb-24 border-b border-[#E5E5E5]">
        <div className="absolute inset-0 z-0">
           <Image 
             src={post.image} 
             alt={post.title} 
             fill 
             className="object-cover" 
             unoptimized 
           />
           {/* Dark gradient overlay to ensure text readability */}
           <div className="absolute inset-0 bg-black/55" />
        </div>
        
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 relative z-10 w-full">
           <motion.div {...fadeUp()} className="max-w-[1000px]">
             <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FE9417] font-bold">{post.category}</span>
                <span className="h-px w-5 bg-white/30" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">{post.date}</span>
                <span className="h-px w-5 bg-white/30" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">{post.readTime}</span>
             </div>
             <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-[-0.03em] leading-[1.05] text-[#FFFFFF]">
               {post.title}
             </h1>
           </motion.div>
        </div>
      </section>

      {/* ── CONTENT: Narrow reading column ── */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[800px] px-6 md:px-10">
           <motion.div 
             {...fadeUp(0.2)}
             className="prose prose-invert prose-lg md:prose-xl prose-p:text-[#555555] prose-p:font-sans prose-p:leading-relaxed prose-headings:font-display prose-headings:font-bold prose-headings:tracking-[-0.02em] prose-a:text-[#FE9417] prose-strong:text-[#111111] w-full max-w-none"
             dangerouslySetInnerHTML={{ __html: post.content }}
           />

           {/* ── CTAs ── */}
           <motion.div 
             {...fadeUp(0.4)} 
             className="mt-20 pt-12 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center gap-6 justify-between"
           >
              <button className="flex-1 w-full flex items-center justify-center gap-3 rounded-full border border-[#E5E5E5] py-5 font-mono text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#FE9417] transition-colors">
                Share this Insight
              </button>
              <Link href="/contact" className="flex-1 w-full flex items-center justify-center gap-3 rounded-full bg-gradient-to-br from-[#FE9417] to-[#FF6B00] py-5 font-mono text-xs font-bold uppercase tracking-widest text-[#111111] shadow-lg transition-transform hover:scale-105">
                Start a Conversation
              </Link>
           </motion.div>
        </div>
      </section>

      {/* ── RELATED POSTS: White Theme ── */}
      <section className="bg-white text-black py-20 md:py-32 border-t border-gray-200">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
           <motion.div {...fadeUp()} className="mb-14">
             <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FE9417] font-bold">/ Keep Reading</p>
           </motion.div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             {related.map((p, i) => (
                <motion.div key={p.slug} {...fadeUp(i * 0.1)}>
                  <Link href={`/blog/${p.slug}`} className="group flex flex-col">
                     <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[1.5rem] mb-6 border border-gray-200">
                       <Image 
                         src={p.image} 
                         alt={p.title} 
                         fill 
                         className="object-cover transition-transform duration-700 group-hover:scale-105" 
                         unoptimized 
                       />
                     </div>
                     <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3">{p.category}</span>
                     <h3 className="font-display text-2xl font-bold leading-[1.1] tracking-[-0.02em] group-hover:text-[#FE9417] transition-colors line-clamp-2">
                       {p.title}
                     </h3>
                  </Link>
                </motion.div>
             ))}
           </div>
        </div>
      </section>
    </main>
  )
}

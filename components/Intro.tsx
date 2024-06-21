'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import img from '@/public/my-img.jpeg';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
// import RevealLinks from './ui/FlipLink';
import FlipWord from './ui/FlipWord';
import BubbleText from './ui/BubbleText';
export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.8 }}
          >
            <div className='shadow-xl rounded-full overflow-hidden'>
              <Image
                src={img}
                // src='
                // https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='my portrait'
                width={200}
                height={200}
                quality={95}
                priority={true}
                className='h-32 w-32 rounded-full object-cover shadow-2xl border-[0.35rem] border-white'
              />
            </div>
          </motion.div>

          <motion.span
            className='absolute bottom-0 right-0 text-4xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}
          >
            🖐🏻
          </motion.span>
        </div>
      </div>

      <motion.h1
        className='text-slate-800 mb-10 mt-4 px-4 text-2xl font-medium leading-loose sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I'm Niko.</span> I'm a{' '}
        <span className='font-medium'>
          <FlipWord interval={5000}>full-stack</FlipWord>{' '}
          <FlipWord interval={5000}>developer</FlipWord>
        </span>{' '}
        with <span className='font-bold'>2 years</span> of experience. I enjoy
        building <span className='italic'>sites & apps</span>. My focus is{' '}
        <span className='underline'>React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.3,
        }}
      >
        {/* my link */}
        {/* <Link
          href='#contact'
          className='group bg-teal-700 text-white px-7 py-1.5 flex items-center gap-2 rounded-full border border-black/20 shadow-md outline-none focus:scale-110 hover:scale-110 hover:bg-teal-600/75 active:scale-105 transition'
        >
          Contact Me here
          <BsArrowRight className='opacity-70 group-hover:translate-x-2.5 transition' />
        </Link> */}

        {/* Bubble Button with Contact Me*/}
        <Link
          href='#contact'
          className='group bg-teal-500 text-white px-7 py-1.5 flex items-center gap-2 rounded-full border border-black/20 shadow-md hover:shadow-2xl outline-none focus:scale-110 hover:scale-110 hover:bg-teal-600 active:scale-105 transition duration-500'
        >
          <BubbleText text='Contact Me here' />
          <BsArrowRight className='opacity-70 group-hover:translate-x-2.5 transition duration-500 text-xl' />
        </Link>

        <a
          className='group text-gray-600 bg-white px-7 py-1.5 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition duration-500 cursor-pointer border border-black/20 shadow-md hover:shadow-2xl dark:bg-white/10'
          href='/CV ACH pdf - Nicholas Tetradov.pdf'
          download
        >
          Download CV{' '}
          <HiDownload className='group-hover:text-red-500 opacity-60 group-hover:translate-y-2.5 transition duration-500 text-xl' />
        </a>

        <a
          className='bg-white p-2.5 text-gray-700 hover:text-blue-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/20 shadow-md hover:shadow-2xl dark:bg-white/10 dark:text-white/60'
          href='https://linkedin.com'
          target='_blank'
        >
          <BsLinkedin />
        </a>
        <a
          className='bg-white p-2.5 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-orange-700 active:scale-105 transition cursor-pointer border border-black/20 shadow-md hover:shadow-2xl dark:bg-white/10 dark:text-white/60'
          href='https://github.com/webbddev'
          target='_blank'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

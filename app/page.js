"use client";
import { useState } from 'react';
import Image from 'next/image';
import About_me_section from '../components/about_me_section';
import Main_index_section from '../components/main_index_section';

export default function Home() {
  const [animationFinished, setAnimationFinished] = useState(false);

  const onAnimationFinish = () => {
    setAnimationFinished(prevState => !prevState);
  };
  

  return (
    <main className="flex flex-col items-center justify-between bg-neutral ">
      {animationFinished ? (
        <Main_index_section reverseAnimation={onAnimationFinish} />
      ) : (
        <About_me_section onAnimationFinish={onAnimationFinish} />
      )}
    </main>
  );
}

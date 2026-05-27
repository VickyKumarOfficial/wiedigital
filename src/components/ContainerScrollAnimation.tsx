import type { ReactNode } from 'react'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type ContainerScrollAnimationProps = {
  children: ReactNode
}

export default function ContainerScrollAnimation({ children }: ContainerScrollAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.45, 1], [18, 0, 0])
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.88, 1, 1])
  const translateY = useTransform(scrollYProgress, [0, 0.45, 1], [120, 0, -36])
  const opacity = useTransform(scrollYProgress, [0, 0.16, 0.88, 1], [0.55, 1, 1, 0.82])

  return (
    <div ref={containerRef} className="relative min-h-[42rem] py-8 md:min-h-[50rem] md:py-16">
      <div className="sticky top-24 flex min-h-[34rem] items-center justify-center [perspective:1200px] md:top-28 md:min-h-[40rem]">
        <motion.div
          className="w-full"
          style={{
            rotateX,
            scale,
            y: translateY,
            opacity,
            transformStyle: 'preserve-3d',
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}

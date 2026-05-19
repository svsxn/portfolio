"use client";

import { motion, type Variants } from "framer-motion";
import {
  type ComponentPropsWithoutRef,
  createElement,
  type ElementType,
  type ReactNode,
} from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
  scale?: boolean;
  viewport?: boolean;
};

type FadeInItemProps<TElement extends ElementType> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

const fadeUpItem: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function createContainerVariants(stagger: boolean, delay: number): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger ? 0.08 : 0,
      },
    },
  };
}

export function FadeIn({
  children,
  className,
  stagger = false,
  delay = 0,
  scale = false,
  viewport = false,
}: FadeInProps) {
  if (scale) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 18 }}
        animate={viewport ? undefined : { opacity: 1, scale: 1, y: 0 }}
        whileInView={viewport ? { opacity: 1, scale: 1, y: 0 } : undefined}
        viewport={viewport ? { once: true, amount: 0.2 } : undefined}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate={viewport ? undefined : "visible"}
      whileInView={viewport ? "visible" : undefined}
      viewport={viewport ? { once: true, amount: 0.2 } : undefined}
      variants={createContainerVariants(stagger, delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInItem<TElement extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: FadeInItemProps<TElement>) {
  const Component = motion.create(as ?? "div") as ElementType;

  return createElement(
    Component,
    {
      variants: fadeUpItem,
      className,
      ...props,
    },
    children,
  );
}

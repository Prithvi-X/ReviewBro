import React from 'react'
import { cn } from '@/lib/utils'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 'display' | 'h1' | 'h2' | 'h3'
  theme?: 'dark' | 'light'
  accentText?: string
}

export const Heading: React.FC<HeadingProps> = ({
  level = 'h2',
  theme = 'light',
  children,
  accentText,
  className,
  ...props
}) => {
  const levelClasses = {
    display: 'text-display-hero',
    h1: 'text-heading-1',
    h2: 'text-heading-2',
    h3: 'text-heading-3',
  }[level]

  const themeClasses = {
    dark: 'text-white',
    light: 'text-neutral-900',
  }[theme]

  const Tag = level === 'display' ? 'h1' : level

  return (
    <Tag
      className={cn('font-display tracking-tight', levelClasses, themeClasses, className)}
      {...props}
    >
      {children}
      {accentText && (
        <span className="block text-[#64788e] mt-1 font-semibold">{accentText}</span>
      )}
    </Tag>
  )
}

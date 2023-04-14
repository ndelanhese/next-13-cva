import React from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

const button = cva(
  [
    'button',
    'bg-green-500',
    'text-yellow-50',
    'uppercase',
    'rounded-lg',
    'hover:bg-slate-600',
    'lg:w-[17rem]',
    'active:bg-red-950',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-indigo-500',
    'focus:ring-opacity-50',
  ],
  {
    variants: {
      size: {
        small: ['text-sm', 'py-1', 'px-2'],
        medium: ['text-base', 'py-2', 'px-4'],
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const MyButton: React.FC<ButtonProps> = ({ size, ...props }) => (
  <button type="button" className={button({ size })} {...props} />
)

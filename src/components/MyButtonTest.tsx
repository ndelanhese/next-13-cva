import React from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

const button = cva('tw-test-button')

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const MyButtonTest: React.FC<ButtonProps> = ({ ...props }) => (
  <button type="button" className={button()} {...props} />
)

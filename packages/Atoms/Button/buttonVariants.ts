import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'flex items-center justify-center gap-1 rounded-md px-3 py-1 text-base font-semibold text-white enabled:hover:opacity-80 enabled:active:opacity-100 disabled:cursor-not-allowed disabled:opacity-40',
  {
    variants: {
      variant: {
        default: 'bg-[--themeColor] text-white',
        outline: 'border border-solid border-[--themeColor] text-[--themeColor]',
        ghost: 'bg-white text-[--themeColor]',
      },
      theme: {
        default: '[--themeColor:_purple]',
        secondary: '[--themeColor:_cyan]',
        destructive: '[--themeColor:_red]',
        accept: '[--themeColor:_green]',
        normal: '[--themeColor:_black]',
      },
      size: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

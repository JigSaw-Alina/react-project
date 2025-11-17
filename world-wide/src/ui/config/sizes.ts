// For Tailwind class usage
export const sizes = {
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-16 w-16',
};

export type SizeKey = keyof typeof sizes;


// For inline styles
export const sizeStar: Record<SizeKey, number> = {
  sm: 16,
  md: 32,
  lg: 64,
};

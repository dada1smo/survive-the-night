import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, ReactNode } from 'react';

const placeVariants = cva(
  'flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        hovered:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
      },
      size: {
        default: 'h-9 w-[112px] h-[160px]',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-md px-8 text-xl',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface CardPlaceProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof placeVariants> {
  children?: ReactNode;
}

const CardPlace = forwardRef<HTMLDivElement, CardPlaceProps>(
  ({ variant, size, className, children, ...props }, ref) => {
    return (
      <div
        className={cn(placeVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardPlace.displayName = 'CardPlace';

export default CardPlace;

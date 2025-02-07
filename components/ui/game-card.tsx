import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const cardVariants = cva(
  'transition flex flex-col items-center justify-between items-stretch gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
      },
      size: {
        default: 'h-9 px-2 py-2 w-[112px] h-[160px]',
        played: 'h-9 px-2 py-2 w-[100px] h-[144px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface GameCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title?: string;
  health?: number;
  damage?: number;
  flavourText?: string;
}

const GameCard = forwardRef<HTMLDivElement, GameCardProps>(
  (
    { variant, size, className, title, health, damage, flavourText, ...props },
    ref
  ) => {
    return (
      <div
        className={cn(cardVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <div className="flex justify-between">
          {health && <span className="text-sm">♠ {damage}</span>}
          {damage && <span className="text-sm">♥ {health}</span>}
        </div>
        <p className="text-center">{title}</p>
        <p className="text-center text-xs whitespace-normal italic">
          {flavourText}
        </p>
      </div>
    );
  }
);

GameCard.displayName = 'GameCard';

export default GameCard;

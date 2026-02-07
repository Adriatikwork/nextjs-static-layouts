interface DecorativeDividerProps {
    variant?: 'default' | 'short' | 'full'
    className?: string
  }
  
  export function DecorativeDivider({ variant = 'default', className = '' }: DecorativeDividerProps) {
    const widthClass = variant === 'short' ? 'max-w-md' : variant === 'full' ? 'max-w-4xl' : 'max-w-lg'
    
    return (
      <div className={`flex items-center gap-3 w-full ${widthClass} mx-auto ${className}`}>
        <div 
          className="flex-1 h-[2px]" 
          style={{ 
            background: 'linear-gradient(to right, transparent, var(--gold-accent), var(--gold-accent))', 
            opacity: 0.8 
          }}
        />
        <div className="flex items-center gap-2">
          <div 
            className="w-2 h-2" 
            style={{ 
              background: 'var(--gold-accent)', 
              transform: 'rotate(45deg)', 
              opacity: 0.9 
            }}
          />
          <div 
            className="w-3 h-3 rounded-full border-2" 
            style={{ 
              borderColor: 'var(--gold-accent)', 
              backgroundColor: 'transparent' 
            }}
          />
          <div 
            className="w-2 h-2" 
            style={{ 
              background: 'var(--gold-accent)', 
              transform: 'rotate(45deg)', 
              opacity: 0.9 
            }}
          />
        </div>
        <div 
          className="flex-1 h-[2px]" 
          style={{ 
            background: 'linear-gradient(to left, transparent, var(--gold-accent), var(--gold-accent))', 
            opacity: 0.8 
          }}
        />
      </div>
    )
  }
  
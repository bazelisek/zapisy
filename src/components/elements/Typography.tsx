interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: 'note' | 'default' | 'bold';
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    textAlign?: 'left' | 'center' | 'right';
}

export default function Typography({children, variant, level, textAlign, ...props}: TypographyProps) {
    const className = variant === 'note' ? "text-sm text-gray-500" : variant === 'bold' ? "text-base font-bold" : "text-base text-foreground";
    const Tag = level || 'p';
    return (
        <Tag {...props} className={className} style={{ textAlign }}>
            {children}
        </Tag>
    )
}

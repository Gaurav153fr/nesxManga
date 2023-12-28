interface BtnProps {
    onClick: () => void;
    text: string;
    variant?: 'primary' | 'secondary'; // Define possible variants here
  }
  
  export default function PButton({ onClick, text, variant = 'primary' }: BtnProps) {
    let buttonClassName = ' p-1';
  
    // Apply different classes based on the variant
    if (variant === 'primary') {
      buttonClassName += ' text-black'; // Add primary button classes here
    } else if (variant === 'secondary') {
        buttonClassName+=' text-red-600 '
      // Add secondary button classes here
      // Example: buttonClassName += ' text-blue-500'; // Add secondary color
    }
  
    return (
      <button onClick={onClick} className={buttonClassName} type="button">
        <span className="px-1 text-nowrap text-sm">{text}</span>
      </button>
    );
  }
  
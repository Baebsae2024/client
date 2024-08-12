import { Button } from '@/styles/button/DarkButtonStyle';

const DarkButton = ({
  text,
  onClick,
  ...props
}: {
  text: string;
  onClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button {...props} onClick={onClick}>
      {text}
    </Button>
  );
};

export default DarkButton;

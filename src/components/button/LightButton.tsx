import { Button } from '@/styles/button/LightButtonStyle';

const LightButton = ({
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

export default LightButton;

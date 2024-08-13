import { Button } from '@/styles/button/BigButtonStyle';

const BigButton = ({
  idDisabled,
  Icon,
  text,
  onClick,
  ...props
}: {
  idDisabled: boolean;
  Icon: React.ReactElement;
  text: string;
  onClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button {...props} onClick={onClick} disabled={idDisabled}>
      {Icon}
      {text}
    </Button>
  );
};

export default BigButton;

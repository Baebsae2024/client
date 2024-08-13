import { Button } from '@/styles/button/MiniButtonStyle';

const MiniButton = ({
  idDisabled,
  text,
  onClick,
  ...props
}: {
  idDisabled: boolean;
  text: string;
  onClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button {...props} onClick={onClick} disabled={idDisabled}>
      {text}
    </Button>
  );
};

export default MiniButton;

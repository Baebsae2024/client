import { ButtonWrap } from '@/styles/button/ButtonStyle';

const Button = ({
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
    <ButtonWrap {...props} onClick={onClick} disabled={idDisabled}>
      {text}
    </ButtonWrap>
  );
};

export default Button;

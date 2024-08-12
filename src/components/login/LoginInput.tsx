import * as S from '@/styles/login/LoginInputStyle';

const LoginInput = ({
  id,
  type,
  text,
  setText,
  placeholder,
}: {
  id: string;
  type: 'text' | 'password';
  text: string;
  setText: (value: string) => void;
  placeholder: string;
}) => {
  return (
    <S.InputWrap>
      <S.Input
        id={id}
        type={type}
        placeholder={placeholder}
        minLength={1}
        value={text}
        spellCheck={false}
        onChange={event => setText(event.target.value)}
      />
    </S.InputWrap>
  );
};

export default LoginInput;

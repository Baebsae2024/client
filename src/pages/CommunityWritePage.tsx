import * as S from '@styles/community/CommunityWritePageStyle';
import CheckBoxClickIcon from '@assets/icons/CheckBoxClick.svg?react';
import CheckBoxIcon from '@assets/icons/CheckBox.svg?react';
import CameraIcon from '@assets/icons/Camera.svg?react';
import Profile from '@assets/icons/Profile.svg?react';
import { useRef, useState } from 'react';
import Button from '@/components/button/Button';
import { useNavigate } from 'react-router-dom';

const CommunityWritePage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState<File | null>();
  const [titleText, setTitleText] = useState('');
  const [contentText, setContentText] = useState('');
  const navigate = useNavigate();

  const onAddPicture = () => {
    inputFileRef.current?.click();
  };

  //프로필 이미지 변경
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.log('파일이 선택되지 않았습니다.');
      return;
    }

    const file = e.target.files[0];

    const imageUrl = URL.createObjectURL(file);
    setImageFile(file);
    setImageUrl(imageUrl);
  };

  //글 등록 함수
  const handleWrite = () => {
    console.log(titleText);
    console.log(contentText);
    if (imageFile) {
      console.log(imageFile);
    }

    //성공하면 페이지 이동
    navigate('/community');
  };

  return (
    <S.Container>
      <S.HeadWrap>
        <S.LeftWrap>
          <Profile />
          <h1>닉네임</h1>
        </S.LeftWrap>
        <S.RightWrap>
          {isChecked ? (
            <CheckBoxClickIcon onClick={() => setIsChecked(!isChecked)} />
          ) : (
            <CheckBoxIcon onClick={() => setIsChecked(!isChecked)} />
          )}
          <h2>질문</h2>
        </S.RightWrap>
      </S.HeadWrap>
      <S.TextWrap>
        <input
          placeholder="제목을 입력해 주세요."
          minLength={1}
          spellCheck={false}
          value={titleText}
          onChange={event => setTitleText(event.target.value)}
        />
        <textarea
          placeholder="내용을 입력해 주세요."
          minLength={1}
          spellCheck={false}
          value={contentText}
          onChange={event => setContentText(event.target.value)}
        />
      </S.TextWrap>
      <S.LastWrap>
        <S.ImgButton onClick={onAddPicture}>
          <CameraIcon />
          사진 첨부하기
        </S.ImgButton>
        <input
          id="fileInput"
          type="file"
          accept="image/png, image/jpeg"
          style={{ display: 'none', visibility: 'hidden' }}
          ref={inputFileRef}
          onChange={handleFileChange}
        />
        <Button
          idDisabled={!!titleText && !!contentText}
          text="등록하기"
          onClick={handleWrite}
        />
      </S.LastWrap>
      <S.ImgWrap>
        <img src={imageUrl} alt="" />
      </S.ImgWrap>
    </S.Container>
  );
};

export default CommunityWritePage;

import * as S from '@styles/community/CommunityWritePageStyle';
import CheckBoxClickIcon from '@assets/icons/CheckBoxClick.svg?react';
import CheckBoxIcon from '@assets/icons/CheckBox.svg?react';
import CameraIcon from '@assets/icons/Camera.svg?react';
import { useRef, useState } from 'react';

const CommunityWritePage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState<File | null>();

  console.log(imageFile);

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

  return (
    <S.Container>
      <S.HeadWrap>
        <S.LeftWrap>
          <img src="" alt="" />
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
        <input placeholder="제목을 입력해 주세요." />
        <textarea placeholder="내용을 입력해 주세요." />
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
        <S.BtnWrap onClick={() => console.log('하')}>등록하기</S.BtnWrap>
      </S.LastWrap>
      <S.ImgWrap>
        <img src={imageUrl} alt="" />
      </S.ImgWrap>
    </S.Container>
  );
};

export default CommunityWritePage;

import * as S from '@/styles/documents/DocumentsPageStyle';
import BigLongLine from '@assets/icons/BigLongLine.svg?react';
import ImageIcon from '@assets/icons/Image.svg?react';
import BigButton from '@/components/button/BigButton';
import MiniButton from '@/components/button/MiniButton';
import { useEffect, useRef, useState } from 'react';
import BackDrop from '@/components/layout/BackDrop';
import { HashLoader } from 'react-spinners';
import { postImage } from '@/apis/postImage';
import ReactMarkdown from 'react-markdown';

const DocumentsPage = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const resultWrapRef = useRef<HTMLDivElement | null>(null);
  const [language, setLanguage] = useState('한국어');
  const [image, setImage] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isModal, setIsModal] = useState(false);
  const [result, setResult] = useState('');

  const onAddPicture = () => {
    inputFileRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.log('파일이 선택되지 않았습니다.');
      return;
    }

    setResult('');
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageFile(file);
    setImage(imageUrl);
  };

  const handleImageAI = async () => {
    setIsModal(true);
    const response = await postImage({ image: imageFile });
    if (response) {
      setIsModal(false);
      setResult(response.content);
    }
  };

  useEffect(() => {
    if (result) {
      scrollToResult();
    }
  }, [result]);

  const scrollToResult = () => {
    if (resultWrapRef.current) {
      resultWrapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <S.Container>
        <h1>문서 확인</h1>
        <p>
          이미지를 첨부하면 AI가 문서를 분석해
          <br />
          문서에 대한 설명과 주의사항을 알려줘요!
        </p>
        <BigLongLine style={{ marginBottom: 65 }} />
        <BigButton
          idDisabled={false}
          Icon={<ImageIcon />}
          text="이미지 첨부하기"
          onClick={onAddPicture}
        />
        <input
          id="fileInput"
          type="file"
          accept="image/png, image/jpeg"
          style={{ display: 'none', visibility: 'hidden' }}
          ref={inputFileRef}
          onChange={handleFileChange}
        />
        {image ? <img src={image} alt="" /> : <S.NoneImage></S.NoneImage>}
        <S.LanguageWrap>
          <span
            onClick={() => setLanguage('한국어')}
            style={{
              color: language === '한국어' ? '#619092' : '#000',
              cursor: 'pointer',
            }}
          >
            한국어
          </span>
          <span>|</span>
          <span
            onClick={() => setLanguage('English')}
            style={{
              color: language === 'English' ? '#619092' : '#000',
              cursor: 'pointer',
            }}
          >
            English
          </span>
        </S.LanguageWrap>
        <MiniButton
          idDisabled={!image}
          text="AI 분석하기"
          onClick={handleImageAI}
        />
        {result && (
          <>
            <BigLongLine style={{ marginTop: 65, marginBottom: 65 }} />
            <div ref={resultWrapRef}>
              <S.ResultText>AI 분석 결과</S.ResultText>
              <S.TextBox>
                <ReactMarkdown>{result}</ReactMarkdown>
              </S.TextBox>
            </div>
          </>
        )}
      </S.Container>
      {isModal && (
        <BackDrop
          children={<HashLoader color="#97d0d4" loading={isModal} size={120} />}
          isOpen={isModal}
        />
      )}
    </>
  );
};

export default DocumentsPage;

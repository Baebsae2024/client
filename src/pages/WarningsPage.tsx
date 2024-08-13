import { getCaution } from '@/apis/getCaution';
import MiniButton from '@/components/button/MiniButton';
import BackDrop from '@/components/layout/BackDrop';
import HelpModal from '@/components/modal/HelpModal';
import WarningItem from '@/components/warnings/WarningItem';
import { warningState } from '@/recoils/recoil';
import * as S from '@/styles/warnings/WarningsPageStyle';
import { WarningList } from '@/types/warning';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

const WarningsPage = () => {
  const navigate = useNavigate();
  const setWarningState = useSetRecoilState(warningState);
  const [list, setList] = useState<WarningList[]>([]);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    const fetchInformation = async () => {
      const response = await getCaution();
      if (response) {
        setList(response);
      }
    };

    fetchInformation();
  }, []);

  return (
    <>
      <S.Container>
        <h1>주의사항</h1>
        <p>한국에서 이런 점을 조심해야 해요!</p>
        <S.BtnWrap>
          <MiniButton
            idDisabled={false}
            text="도움이 필요해요"
            onClick={() => setIsModal(!isModal)}
          />
        </S.BtnWrap>
        <S.ItemWrap>
          {list.map((data, index) => {
            return (
              <WarningItem
                key={index}
                image={data.image}
                title={data.title}
                onClick={() => {
                  setWarningState(data);
                  navigate(`/warnings/${data._id}`);
                }}
              />
            );
          })}
        </S.ItemWrap>
      </S.Container>
      {isModal && (
        <BackDrop
          children={<HelpModal handleClick={() => setIsModal(!isModal)} />}
          isOpen={isModal}
        />
      )}
    </>
  );
};

export default WarningsPage;

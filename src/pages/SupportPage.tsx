import MiniButton from '@/components/button/MiniButton';
import * as S from '@/styles/support/SupportPageStyle';
import BigLongLine from '@assets/icons/BigLongLine.svg?react';
import RadioIcon from '@assets/icons/Radio.svg?react';
import RadioFillIcon from '@assets/icons/RadioFill.svg?react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type QuestionRadioProps = {
  question: string;
  selectedValue: boolean;
  setSelectedValue: (value: boolean) => void;
  options: { label: string; value: boolean }[];
};

const SupportPage = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState(''); //나이
  const [isForeigner, setIsForeigner] = useState(true); //외국인 true, 내국인 false
  const [job, setJob] = useState(''); //직업
  const [isMarried, setIsMarried] = useState(false); //결혼 여부
  const [haveChildren, setHaveChildren] = useState(false); //자녀 여부
  const [numberOfChildren, setNumberOfChildren] = useState(''); //자녀 수
  const [childrenAges, setChildrenAges] = useState(''); //자녀 나이
  const [monthlyIncome, setMonthlyIncome] = useState(''); //월 소득
  const [isVeteran, setIsVeteran] = useState(false); //유공자 여부
  const [hasEmergency, setHasEmergency] = useState(false); //긴급 및 재난 사고 여부
  const [hasHospitalization, setHasHospitalization] = useState(false); //질병으로 입원 여부

  const QuestionRadio = ({
    question,
    selectedValue,
    setSelectedValue,
    options,
  }: QuestionRadioProps) => (
    <>
      <h2>{question}</h2>
      <S.RadioWrap>
        {options.map(option => (
          <div
            key={option.label}
            onClick={() => setSelectedValue(option.value)}
          >
            {selectedValue === option.value ? <RadioFillIcon /> : <RadioIcon />}
            {option.label}
          </div>
        ))}
      </S.RadioWrap>
    </>
  );

  const handleResult = async () => {
    const formData = {
      age: age,
      isForeigner: isForeigner,
      job: job,
      isMarried: isMarried,
      haveChildren: haveChildren,
      numberOfChildren: haveChildren ? numberOfChildren : null,
      childrenAges: haveChildren ? childrenAges : null,
      monthlyIncome: monthlyIncome,
      isVeteran: isVeteran,
      hasEmergency: hasEmergency,
      hasHospitalization: hasHospitalization,
    };

    console.log(JSON.stringify(formData));

    //const response = await postSupport(formData);
    navigate('/support/result');
  };

  return (
    <S.Container>
      <h1>예상 지원금 찾기</h1>
      <p>질문에 답하고 지원금을 추천받으세요!</p>
      <BigLongLine style={{ marginTop: 65, marginBottom: 65 }} />
      <h2>Q1. 나이가 어떻게 되시나요?</h2>
      <input
        value={age}
        onChange={event => setAge(event.target.value)}
        placeholder="나이를 작성해주세요"
      />
      <QuestionRadio
        question="Q2. 내국인인가요? 외국인인가요?"
        selectedValue={isForeigner}
        setSelectedValue={setIsForeigner}
        options={[
          { label: '내국인', value: false },
          { label: '외국인', value: true },
        ]}
      />
      <h2>Q3. 현재 직업은 무엇인가요?</h2>
      <input
        value={job}
        onChange={event => setJob(event.target.value)}
        placeholder="직업을 작성해주세요"
      />
      <QuestionRadio
        question="Q4. 결혼하셨나요?"
        selectedValue={isMarried}
        setSelectedValue={setIsMarried}
        options={[
          { label: '네', value: true },
          { label: '아니요', value: false },
        ]}
      />
      <QuestionRadio
        question="Q5. 자녀가 있으신가요?"
        selectedValue={haveChildren}
        setSelectedValue={setHaveChildren}
        options={[
          { label: '네', value: true },
          { label: '아니요', value: false },
        ]}
      />
      {haveChildren && (
        <>
          <h2>Q6. 자녀 수는 몇 명인가요?</h2>
          <input
            value={numberOfChildren}
            onChange={event => setNumberOfChildren(event.target.value)}
            placeholder="자녀 수를 작성해주세요"
          />
          <h2>Q7. 자녀의 나이는 어떻게 되나요?</h2>
          <input
            value={childrenAges}
            onChange={event => setChildrenAges(event.target.value)}
            placeholder="자녀의 나이를 작성해주세요"
          />
        </>
      )}
      <h2>{haveChildren ? 'Q8.' : 'Q6.'} 월 소득은 어느 정도인가요?</h2>
      <input
        value={monthlyIncome}
        onChange={event => setMonthlyIncome(event.target.value)}
        placeholder="월 소득을 작성해주세요"
      />
      <QuestionRadio
        question={`${haveChildren ? 'Q9.' : 'Q7.'} 유공자이신가요?`}
        selectedValue={isVeteran}
        setSelectedValue={setIsVeteran}
        options={[
          { label: '네', value: true },
          { label: '아니요', value: false },
        ]}
      />
      <QuestionRadio
        question={`${
          haveChildren ? 'Q10.' : 'Q8.'
        } 최근에 긴급한 일이나 재난 사고를 겪으셨나요?`}
        selectedValue={hasEmergency}
        setSelectedValue={setHasEmergency}
        options={[
          { label: '네', value: true },
          { label: '아니요', value: false },
        ]}
      />
      <QuestionRadio
        question={`${
          haveChildren ? 'Q11.' : 'Q9.'
        } 최근에 질병으로 입원하신 적이 있나요?`}
        selectedValue={hasHospitalization}
        setSelectedValue={setHasHospitalization}
        options={[
          { label: '네', value: true },
          { label: '아니요', value: false },
        ]}
      />
      <S.BtnWrap>
        <MiniButton idDisabled={false} text="결과보기" onClick={handleResult} />
      </S.BtnWrap>
    </S.Container>
  );
};

export default SupportPage;

import * as S from '@styles/community/CommunityDetailPageStyle';
import Profile from '@assets/icons/Profile.svg?react';
import ProfileAI from '@assets/icons/ProfileAI.svg?react';
import ReportIcon from '@assets/icons/Report.svg?react';
import Button from '@/components/button/Button';
import { useNavigate } from 'react-router-dom';
import HeartFillIcon from '@assets/icons/HeartFill.svg?react';
import HeartIcon from '@assets/icons/Heart.svg?react';
import { useState } from 'react';
import CommentIcon from '@assets/icons/Comment.svg?react';

const CommunityDetailPage = () => {
  const navigate = useNavigate();
  const [isHeart, setIsHeart] = useState(false);

  const dummyList = {
    id: 1,
    author: '냐냐냐',
    title: '제목입니다',
    content: '내용입니다람쥐',
    image: '',
    date: '2024-08-12',
    heartClicked: false,
    heartLength: 3,
    comments: [
      {
        id: 1,
        author: 'AI봇',
        date: '2024-08-12',
        content: 'This is a comment.',
        replies: [
          {
            id: 2,
            author: 'User2',
            date: '2024-08-12',
            content: '답글입니다람쥐',
          },
          {
            id: 3,
            author: 'User3',
            date: '2024-08-12',
            content:
              '이거는 답글이엥요~ 이거는 댓글이엥요~ 이거는 댓글이엥요~ 이거는 댓글이엥요~ 이거는 댓글이엥요~ 이거는 댓글이엥요~ 이거는 댓글이엥요~ 이거는 댓글이엥요~ 이거는 댓글이엥요~',
          },
        ],
      },
      {
        id: 4,
        author: '닉네임',
        date: '2024-08-12',
        content:
          '이거는 댓글이엥요~ 이거는 댓글이엥요~ 이거는 댓글이엥요~ 이거는 댓글이엥요~ 이거는 댓글이엥요~ 이거는 댓글이엥요~ 이거는 댓글이엥요~ 이거는 댓글이엥요~ 이거는 댓글이엥요~~',
      },
    ],
  };

  const handleHeartClick = () => {
    setIsHeart(!isHeart);
  };

  return (
    <S.Container>
      <S.HeadWrap>
        <S.LeftWrap>
          <Profile />
          <h1>{dummyList.author}</h1>
        </S.LeftWrap>
        <S.RightWrap>
          <Button
            idDisabled={false}
            text="목록 보기"
            onClick={() => navigate('/community')}
          />
        </S.RightWrap>
      </S.HeadWrap>
      <S.TextWrap>
        <S.TitleWrap>
          <p>{dummyList.title}</p>
          <S.HeartWrap onClick={handleHeartClick}>
            {dummyList.heartClicked ? (
              <HeartFillIcon height={30} />
            ) : (
              <HeartIcon height={30} />
            )}
            <p>{dummyList.heartLength}</p>
          </S.HeartWrap>
        </S.TitleWrap>
        <S.ContentWrap>
          <p>{dummyList.content}</p>
          <img src={dummyList.image} alt="" />
          <S.ReportWrap onClick={() => console.log('신고')}>
            <ReportIcon />
            <p>신고하기</p>
          </S.ReportWrap>
        </S.ContentWrap>
        <S.CommentWrap>
          <S.CommentHead>
            댓글 <span>{dummyList.comments.length}</span>
          </S.CommentHead>
          {dummyList.comments.map((data, index) => {
            return (
              <S.CommentItem key={index}>
                <S.ItemHead>
                  <S.HeadLeft>
                    {data.author === 'AI봇' ? (
                      <ProfileAI width={80} height={80} />
                    ) : (
                      <Profile width={80} height={80} />
                    )}
                    <div>
                      <h1>{data.author}</h1>
                      <p>{data.date}</p>
                    </div>
                  </S.HeadLeft>
                  {data.author === 'AI봇' ? <></> : <span>답글</span>}
                </S.ItemHead>
                <S.CommentBody>{data.content}</S.CommentBody>
                <S.RepliesHead>
                  <CommentIcon />
                  <S.RepliesHead>
                    <S.HeadLeft>
                      <Profile width={80} height={80} />
                      <div>
                        <h1>{data.author}</h1>
                        <p>{data.date}</p>
                      </div>
                    </S.HeadLeft>
                  </S.RepliesHead>
                </S.RepliesHead>
                <S.CommentBody>{data.content}</S.CommentBody>
                <hr />
              </S.CommentItem>
            );
          })}
        </S.CommentWrap>
      </S.TextWrap>
    </S.Container>
  );
};

export default CommunityDetailPage;

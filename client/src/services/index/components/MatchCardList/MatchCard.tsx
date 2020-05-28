import * as React from 'react';
import styled from '~/styled';
import CustomIcon from '../CustomIcon';

export default () => {
  return (
    <Wrapper>
      <TopContent>
        <InnerLine>디지털/가전</InnerLine> <InnerLine>2020.05.17</InnerLine>
        <InnerLine>
          <SmallIcon
            src={
              'https://cdn.zeplin.io/5eb284a8aa2cdb76474240bb/assets/E95F5C0E-9DCE-44F5-8C41-90C0F88633F3.png'
            }
          />
          직거래
        </InnerLine>
        <InnerLine color={'green'}>
            매칭확률 높음
        </InnerLine>
      </TopContent>
      <TopIcon>
        <Icon src='https://cdn.zeplin.io/5eb284a8aa2cdb76474240bb/assets/C4E60944-CDB7-47D8-B09E-219D6BF7D446.png' />
      </TopIcon>
      <BottomContent>
          <Line color={'#ffc53d'}>#맥북 #2020년 #16인치 #수원 #A급</Line>
          <Line>1,500,000 ~ 2,000,000 원</Line>
      </BottomContent>
      <BottomIcon>
        <Icon src='https://cdn.zeplin.io/5eb284a8aa2cdb76474240bb/assets/0C830323-4AF3-4BB4-8B2F-AC91DDAF7479.png' />
      </BottomIcon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(70%, 90%) 48px;
  grid-template-areas:
    "TopContent TopIcon"
    "BottomContent BottomIcon";
  border-radius: 6px;
  box-shadow: 0px 2px 4px 0px rgba(147, 147, 147, 0.5);
  border: 1px solid rgba(147, 147, 147, 0.5);
  padding: 13px;
  margin-bottom: 2.5vh;
`;

const TopIcon = styled.div`
  grid-area: TopIcon;
`;

const BottomIcon = styled.div`
  grid-area: BottomIcon;
  padding-top: 20px;
`;

const TopContent = styled.div`
  grid-area: TopContent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;
  color: #6d7278;
  border-bottom: 2px solid green;
`;

const Line = styled.div`
    color: ${props => props.color};
    font-weight: bold;
    line-height: 28px;
`;

const InnerLine = styled.div`
  display: inline;
  color: ${props => props.color};
`;

const BottomContent = styled.div`
    padding-top: 15px;
    grid-area: BottomContent;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0;
  grid-area: img;
  float: right;
`;

const SmallIcon = styled.img`
  width: 12px;
  height: 13px;
  margin: 0;
`;

import * as React from 'react';
import styled from '~/styled';

import CommonBtn from '../CommonBtn';

import DropdownIcon from '../../assets/img/form-dropdown.png';
import ExpandIcon from '../../assets/img/form-expand.png';

export interface IPostFormProps {
}

export default (props: IPostFormProps) => {

    const category = ['디지털/가전', '가구/인테리어', '유아동/유아도서', '생활/가공식품', '스포츠/레저', '여성잡화', '여성의류', '남성패션/잡화', '게임/취미', '뷰티/미용', '반려동물용품', '도서/티켓/음반', '기타 중고물품'];

    return (
        <Wrapper>
            <FormContainer>
                <InputContainer>
                    <Select> <Option selected> 카테고리 </Option>
                        {
                            category.map((category, index) => (
                                <Option key={index}>{category}</Option>
                            ))
                        }
                    </Select>
                </InputContainer>
                <InputContainer>
                    <Input type={'number'} placeholder={'금액'} min={0} />
                </InputContainer>
                <InputContainer>
                    <Select> <Option selected> 거래방법 </Option> <Option>직거래</Option> <Option>택배거래</Option></Select>
                </InputContainer>
                <InputContainer>
                    <HashTag>
                        해시태그
                    </HashTag>
                </InputContainer>
            </FormContainer>
            <FooterContainer>
                <CommonBtn type={'disable'} text={'등록하기'} />
            </FooterContainer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 1.6rem;
    grid-area: CC;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const FormContainer = styled.div`
    width: 100%;
    height: 100%;
`

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 3.5rem;
    border-bottom: solid 1px #ddd;
    margin: 0.5rem 0;
    vertical-align: center;
`

const Input = styled.input`
    width: 98%;
    height: 2rem;
    font-size: 15px;
    font-weight: bold;
    border: solid 0;
    color: #929292;
    padding: 0.5rem;
    ::placeholder {
        color: #929292;
        font-weight: bold;
    }
    :focus {
        outline: none !important;
    }
`

const Select = styled.select`
    background: url(${DropdownIcon}) no-repeat 95% 50%;
    width: 100%;
    height: 2rem;
    font-size: 15px;
    color: #929292;
    font-weight: bold;
    border: solid 0;
    padding: 0.2rem;
    :focus {
        outline: none !important;
    }
    ::selection {
        color: pink;
    }
`

const Option = styled.option`
    color: #929292;
    font-weight: bold;
`

const HashTag = styled.div`
    background: url(${ExpandIcon}) no-repeat 95% 50%;
    width: 100%;
    height: 2rem;
    font-size: 15px;
    color: #929292;
    font-weight: bold;
    border: solid 0;
    padding: 0.5rem;
`

const FooterContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 1.5rem 0 0 0;
`

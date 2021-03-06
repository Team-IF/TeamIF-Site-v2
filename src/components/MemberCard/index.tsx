import React from 'react'
import styled from 'styled-components'
import md5 from 'md5'

const Wrapper = styled.div`
  flex: 0 1;
  margin-bottom: 10px;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`

const Card = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;

  background-color: ${(props) => props.color};
  color: white;

  line-height: 40px;

  border-radius: 20px;

  & > img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }

  & > p {
    padding-left: 0.5rem;
    padding-right: 1rem;
    font-size: 12px;
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

interface MemberCardProps {
  readonly email: string
  readonly nickname: string
  readonly color: string
  readonly github: string
}

const MemberCard: React.FC<MemberCardProps> = ({
  email,
  nickname,
  color,
  github
}) => {
  return (
    <Wrapper>
      <a href={github} target='_blank' rel='noopener noreferrer'>
        <Card color={color}>
          <img
            src={`https://www.gravatar.com/avatar/${md5(
              email
            )}?s=1024&d=https%3A%2F%2Fteamif%2Eio%2Fdefault_profile%2Epng`}
            alt='profile'
          />
          <p>{nickname}</p>
        </Card>
      </a>
    </Wrapper>
  )
}

export default MemberCard

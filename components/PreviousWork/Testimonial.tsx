import React from 'react'
import styled from 'styled-components'

const Testimonial = () => {
  return (
    <Wrapper>
      <Profile>
        <ProfileImage src='/images/nasser.webp' />
        <div>
          <Name>Youssef Nasser</Name>
          <Job>Mechanical inclusive designer</Job>
        </div>
      </Profile>
      <Description>Omar is one from a few who cares about little polished details. He loves what he do and gives it whatever it takes.</Description>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1.3rem;
  position: relative;
  background: var(--background);
  text-align: left !important;
  margin-top: 4rem;
`
const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`
const ProfileImage = styled.img`
  width: 3.75rem;
  flex-shrink: 0;
  border: var(--primary-50) 4px solid;
  border-radius: 50%;
`
const Name = styled.h6`
  font-weight: 700;
`
const Job = styled.small`
  color: var(--grey-300);
  font-weight: 600;
`
const Description = styled.p`
  text-align: left !important;
`
export default Testimonial
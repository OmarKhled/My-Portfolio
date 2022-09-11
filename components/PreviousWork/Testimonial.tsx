import React from 'react'
import styled from 'styled-components'

const Testimonial = ({ name = "Youssef Nasser", job = "Project Manger at Nilepreneurs", children = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error assumenda vel dolorum sapiente, reprehenderit illo alias.", img="/images/Testimonials/nasser.webp" }) => {
  return (
    <Wrapper>
      <Profile>
        <ProfileImage src={img} alt={`${name} Image`}/>
        <div>
          <Name>{name}</Name>
          <Job>{job}</Job>
        </div>
      </Profile>
      <Description>{children}</Description>
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
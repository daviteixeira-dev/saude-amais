import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 50px;
  background: radial-gradient(circle,rgb(25 118 210) 0%,rgb(66 143 219) 100%);
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`

export const ContainerIcon = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const IconLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #B0C4DE;
    transition: 200ms ease-in;
  }
`


export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`

export const Link = styled.a`
  color: #fff;
  margin-bottom: 15px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #B0C4DE;
    transition: 200ms ease-in;
  }
`

export const Title = styled.p`
  font-size: 30px;
  color: #B0C4DE;
  margin-bottom: 30px;
  font-weight: bold;
`
export const Copyright = styled.div`
  padding: 5px;
  margin-top: 25px;
  font-size: 18px;
  color: #B0C4DE;

`

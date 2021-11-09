import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 50px;
  background: radial-gradient(circle, rgba(92, 39, 251, 1) 0%, rgba(112, 71, 247, 1) 100%);
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
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
    color: #ff9c00;
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
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
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
    color: #ff9c00;
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

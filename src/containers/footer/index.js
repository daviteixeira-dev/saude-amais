import React from "react";
import { Container, Wrapper, ContainerIcon, IconLink, Row, Column, Link, Title, Copyright } from './styles/styledFooter'

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.ContainerIcon = function FooterContainerIcon({ children, ...restProps }) {
  return <ContainerIcon {...restProps}>{children}</ContainerIcon>
}

Footer.IconLink = function FooterIconLink({ children, ...restProps }) {
  return <IconLink {...restProps}>{children}</IconLink>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>
}

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Footer.Copyright = function FooterCopyright({ children, ...restProps }) {
  return <Copyright {...restProps}>{children}</Copyright>
}

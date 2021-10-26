import React from "react";
import Footer from ".";
import { Icon } from "../../components/icons/styles/icons";

function FooterContainer() {

  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.ContainerIcon>
          <Footer.IconLink href="#" className="fas fa-home fa-2x" />
          <Footer.IconLink href="#topo" className="far fa-arrow-alt-circle-up fa-3x" />
        </Footer.ContainerIcon>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Saude A+</Footer.Title>
            <Footer.Link href="#Story">Sobre nós</Footer.Link>
            <Footer.Link href="#Story">Contato</Footer.Link>
            <Footer.Link href="#Story">Carreiras</Footer.Link>
            <Footer.Link href="#Story">Impresa</Footer.Link>
            <Footer.Link href="#Story">Blog</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Unidades</Footer.Title>
            <Footer.Link href="#">Forteleza-CE</Footer.Link>
            <Footer.Link href="#">Tianguá-CE</Footer.Link>
            <Footer.Link href="#">Souza-PE</Footer.Link>
            <Footer.Link href="#">Porto Velho-RO</Footer.Link>
            <Footer.Link href="#">Porto Velho-RO</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Modalidades de Pilates</Footer.Title>
            <Footer.Link href="#">Dores</Footer.Link>
            <Footer.Link href="#">Lesões</Footer.Link>
            <Footer.Link href="#">Postura</Footer.Link>
            <Footer.Link href="#">Respiração</Footer.Link>
            <Footer.Link href="#">Resistência</Footer.Link>
            <Footer.Link href="#">Emagrecimento</Footer.Link>
            <Footer.Link href="#">Melhora do Sono</Footer.Link>
            <Footer.Link href="#">Déficit de Atenção</Footer.Link>
            <Footer.Link href="#">Fortalecimento Muscular</Footer.Link>
            <Footer.Link href="#">Fortalecimento para Osteoporose</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="#"> <Icon className="fab fa-facebook-f" />  Facebook</Footer.Link>
            <Footer.Link href="#"> <Icon className="fab fa-instagram" /> Instagram</Footer.Link>
            <Footer.Link href="#"> <Icon className="fab fa-youtube" /> YouTube</Footer.Link>
            <Footer.Link href="#"> <Icon className="fab fa-linkedin" /> Linkedin</Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.Copyright>
          Feito com <Icon className="fas fa-heart" />e <Icon className="fas fa-coffee" />pela equipe Shalins do Sertão &copy; 2021
        </Footer.Copyright>
      </Footer.Wrapper>
    </Footer>
  )
}

export default FooterContainer;

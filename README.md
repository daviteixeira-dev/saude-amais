<h1>Projeto - SaúdeA+</h1>

> Sobre o Projeto

O studio de Pilates (saúde a+) necessita sistema de gerenciamento das atividades/modalidades do estúdio e o agendamento de aulas teste e reposições. Esse sistema poderá ser acessado pelos administradores do studio, pelos alunos matriculados ou visitantes que desejem agendar uma aula.

> Elicitação de Requisitos

Na fase de levantamento de requisitos, nós dedicamos a entender o objetivo geral do problema para a realização do sistema do studio, focando principalmente nas funções gerais do projeto e na realização de agendamento de aulas, atividades e modalidades, bem como agendamento de aulas teste e reposições, além disso, para que um aluno possa solicitar a aula teste ou reposição, o mesmo necessita entrar em contato com a equipe responsável pelo agendamento no studio.

Desta forma, o studio de Pilates (saúde a+) necessita sistema de gerenciamento das atividades/modalidades do estúdio e o agendamento de aulas teste e reposições. Assim, buscamos inicialmente realizar o estudo dos requisitos funcionais e não funcionais para integrar no sistema.

> Atores do Sistema

<table>
  <tr>
    <td align="center">
      <p>Atores</p>
    </td>
    <td align="center">
      <p>Descrição</p>
    </td>
  </tr>
  <tr>
    <td align="center">
      <p>Administrador</p>
    </td>
    <td>
      <p>
        O administrador do sistema pode cadastrar modalidades, horários, professores e vagas.
        O administrador também pode alocar horários para usuários e cancelar algum horário agendado.
        O administrador pode gerenciar os usuários.
      </p>
    </td>
  </tr>
  <tr>
    <td align="center">
      <p>Usuário comum</p>
    </td>
    <td>
      <p>
        Pode visualizar as modalidades, horários, professores e vagas, pode solicitar o agendamento 
        de uma aula experimental, ver a localização do estabelecimento e as principais notícias.
      </p>
    </td>
  </tr>
</table>

> Regras de Négocio

<table>
  <tr>
    <td colspan="2" align="center">
      <p>Usuários logados (RN01)<p>
    </td>
  </tr>
  <tr>
    <td align="center">
      <p>Descrição</p>
    </td>
    <td>
      <p>
        O usuário logado pode visualizar a sua agenda, que corresponde às modalidades em que está cadastrado e seus horários. 
        Pode solicitar o agendamento de uma aula experimental ou de uma reposição, desde que tenha vaga no horário e pode cancelar uma aula.
      </p>
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center">
      <p>Reposição de aulas (RN02)<p>
    </td>
  </tr>
  <tr>
    <td align="center">
      <p>Descrição</p>
    </td>
    <td>
      <p>
        Aulas canceladas com, pelo menos, 1 hora de antecedência geram o direito de uma reposição. 
        O usuário também pode visualizar as reposições a que tem direito. Uma reposição não pode ser reagendada.
      </p>
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center">
      <p>Cadastro de Usuários (RN03)<p>
    </td>
  </tr>
  <tr>
    <td align="center">
      <p>Descrição</p>
    </td>
    <td>
      <p>
        O cadastro de um usuário exige nome, endereço, cpf e data de nascimento e adicionar uma foto (opcional). 
        O usuário cadastrado também pode alterar seu perfil.
      </p>
    </td>
  </tr>
</table>

> Telas identificadas para o sistema

<h2>Tela de visão geral</h2>

- Visualizar as modalidades ofertadas;
- Visualizar horários de aula;
- Visualizar os professores/instrutores (fisioterapeutas);
- Visualizar a localização do estabelecimento;
- Visualizar as principais notícias;
- Solicitar agendamento de aula experimental (Ir para formulário de cadastro).

<h2>Tela de login</h2>

- Usuário;
- Senha;
- Esqueci a senha;
- Opção para se cadastrar (Ir para formulário de cadastro).

<h2>Tela de formulário de cadastro</h2>

- Nome;
- Endereço;
- CPF;
- Data de nascimento;
- Foto de perfil (opcional).

<h2>Tela de visão de usuário comum</h2>

- Funcionalidades em comum com a tela de visão geral;
- Opção para alterar o perfil (Tela de alteração de perfil);
- Opção de visualização da agenda, correspondente às modalidades que ele está cadastrado e os seus horários.
- Opção para visualizar e/ou realizar de uma reposição, desde que tenha um horário vago;
- Opção para cancelar uma aula;
- Fazer logout do sistema.

<h2>Tela de visão do administrador</h2>

- Funcionalidades em comum com a tela de visão geral;
- Opção para gerenciar os usuários (Tela de usuários cadastrados);
- Opção de cadastro de modalidades (Tela para o cadastro de modalidades);
- Opção para cadastro de horários (Tela para o cadastro de horários);
- Opção para cadastro de professores (Tela para o cadastro de professores);
- Fazer logout do sistema.

<h2>Tela de grade de horários para agendamentos</h2>

<h2>Tela de usuários cadastrados</h2>

<h2>Tela de cadastro de professores</h2>

<h2>Tela de alteração de perfil</h2>

- Alterar nome
- Alterar foto
- Alterar usuário
- Alterar senha

<h2>Tela para o cadastro de horários</h2>

- Opção para alocar horário a um usuário;
- Opção para cancelar algum horário agendado;

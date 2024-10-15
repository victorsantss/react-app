import { Box, Container, Link, Typography } from "@mui/material";

export function Homepage() {
  return (
    <Container sx={{ maxWidth: 980, marginTop: 6 }}>
      <Typography variant="h4" fontWeight="bold">React App Softplan - Pesquisa de Funcionários</Typography>
      <Typography sx={{ marginTop: 2 }} variant="body1">
        Este é um aplicativo de pesquisa de funcionários desenvolvido como parte de um teste técnico. O objetivo do app é fornecer uma interface simples e funcional que permita ao usuário buscar e visualizar informações sobre funcionários. Implementado utilizando React para a construção da interface, Material UI para o design, Context API para gerenciamento de estados. Além disso, integra uma API utilizando JSON Server para realizar todas as operações CRUD de funcionários
      </Typography>
      <Typography variant="body1">
        O aplicativo inclui funcionalidades como roteamento dinâmico e alternância entre modos claro e escuro, garantindo uma experiência de usuário moderna e responsiva. O foco deste projeto está na organização de componentes, boas práticas de código e usabilidade.
      </Typography>
      <Typography variant="body1">Funcionalidades</Typography>
      <ul>
        <li><b>Cadastro de funcionário</b>: Permite que novos funcionários sejam cadastrados na plataforma. Fornecendo informações como nome, matrícula, cargo e filial. A validação dos dados foi feito utilizando o zod com o React Hook Form para uma boa experiência de desenvolvimento e feedback para o usuário.</li>

        <li><b>Remover funcionário</b>: Permite que os funcionários sejam excluídos da aplicação com um feedback visual. Ao acionar essa funcionalidade, os dados do funcionário são removidos tanto do cliente quanto do servidor.</li>

        <li><b>Editar funcionário</b>: Possibilita que sejam editadas as informações dos funcionários com validação de dados. Após as alterações serem feitas, os dados são atualizados em tempo real no servidor e no estado local da aplicação</li>

        <li><b>Listagem de funcionário</b>: Oferece uma funcionalidade de busca que permite listar aos funcionários da plataforma.</li>

        <li><b>Filtrar funcinários</b>: Permite que sejam filtrados os funcionários de acordo com o tipo de filtro selecionado.</li>

        <li><b>Troca de tema entre dark e light</b>: Permite que o usuário alterne entre os temas claro e escuro, ajustando a aparência da interface de acordo com sua preferência visual.</li>

        <li><b>Feedback visual em operações</b>: O usuário tem uma notificação ao realizar as operações de cadastro, edição e deleção de funcionários, bem como erros.</li>

        <li><b>Boa performance nas operações de get e mutations</b>: Foi utilizado o React Query para ter uma boa performance ao listar, excluir e editar informações da aplicação.</li>

      </ul>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Link
          href="/funcionarios"
          underline="none"
          sx={{ border: 1, borderRadius: 6, padding: 2 }}
        >
          Ir para a página de funcionários!
        </Link>
      </Box>
    </Container>
  )
}

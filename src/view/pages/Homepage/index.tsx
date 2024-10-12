import { Container, Typography } from "@mui/material";

export function Homepage() {
  return (
    <Container sx={{ maxWidth: 980, marginTop: 6 }}>
      <Typography variant="h4">React App Softplan - Pesquisa de Funcionários</Typography>
      <Typography variant="body1">
        Este é um aplicativo de pesquisa de funcionários desenvolvido como parte de um teste técnico para uma vaga de desenvolvedor. O objetivo do app é fornecer uma interface simples e funcional que permita ao usuário buscar e visualizar informações sobre funcionários. Implementado utilizando React para a construção da interface e Material UI para o design, o aplicativo inclui funcionalidades como roteamento dinâmico e alternância entre modos claro e escuro, garantindo uma experiência de usuário moderna e responsiva. O foco deste projeto está na organização de componentes, boas práticas de código e usabilidade.
      </Typography>
    </Container>
  )
}

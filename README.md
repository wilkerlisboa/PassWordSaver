<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
</p>

<h1  align="center">PasswordSaver</h1>
PasswordSaver é um aplicativo móvel desenvolvido com Expo e React Native que permite salvar, editar e deletar senhas de forma segura e prática.

## Funcionalidades
- Adicionar novas senhas com nome ou descrição.
- Editar senhas existentes.
- Deletar senhas.
- Armazenar dados localmente usando AsyncStorage.
- Mostrar ou ocultar senhas usando um ícone de olho.

## Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

    ├── components
    │ └── Footer.jsx
    ├── App.js
    ├── package.json
    ├── README.md
    └── yarn.lock

## Instalação
Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/PasswordSaver.git
   cd PasswordSaver
2. Instale as dependências:
   ```bash
    Copy code
    npm install
    # ou
    yarn install

## Uso
Para iniciar o aplicativo em modo de desenvolvimento, execute:

    expo start

Siga as instruções exibidas no console para rodar o aplicativo no emulador ou dispositivo físico.

## Estrutura do Código

`App.js`

O componente principal do aplicativo. Ele contém a lógica para adicionar, editar, deletar e exibir senhas. Usa AsyncStorage para persistir dados localmente e inclui componentes de entrada, lista e botões.

### Principais Estados
- `name:` Armazena o nome ou descrição da senha.
- `password:` Armazena a senha.
- `passwords:` Armazena a lista de senhas salvas.
- `isEditing:` Indica se uma senha está sendo editada.
- `editingIndex:` Índice da senha que está sendo editada.
- `showPassword:` Controla a exibição da senha (mostrar ou ocultar).

## Componentes
- `Footer:` Exibe o rodapé da aplicação.
## Estilos
Os estilos são definidos usando o StyleSheet do React Native, fornecendo um design moderno e intuitivo com foco na usabilidade.
## Autor 🤝

<table>
  <tr>
    <td align="center">
      <a href="#" title="defina o título do link">
        <img src="https://avatars.githubusercontent.com/u/73085812" width="100px;" alt="Foto do wilker lisboa no  github"/><br>
        <sub>
          <b>Wilker Lisboa</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

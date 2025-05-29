# Guia de Edição do Organograma Empresarial

Este guia explica como editar e atualizar o organograma empresarial, incluindo como modificar informações dos colaboradores, adicionar novas fotos e publicar o site.

## Estrutura de Arquivos

O organograma é composto pelos seguintes arquivos principais:

- `index-completo.html`: Arquivo HTML principal que contém todo o código do organograma
- `colaboradores.json`: Arquivo com os dados de todos os colaboradores
- `images/`: Pasta contendo todas as fotos dos colaboradores

## Como Editar Informações dos Colaboradores

### Editar Dados Existentes

Para editar informações de colaboradores existentes:

1. Abra o arquivo `colaboradores.json` em qualquer editor de texto (VS Code, Notepad++, etc.)
2. Localize o colaborador que deseja editar (busque pelo nome)
3. Modifique os campos necessários (nome, cargo, telefone, equipe, etc.)
4. Salve o arquivo

Exemplo de um registro de colaborador:
```json
{
  "nome": "NOME DO COLABORADOR",
  "cargo": "CARGO DO COLABORADOR",
  "supervisor": "NOME DO SUPERVISOR",
  "telefone": "NÚMERO DE TELEFONE",
  "equipe": "NÚMERO DA EQUIPE",
  "endereco": "ENDEREÇO COMPLETO",
  "bairro": "NOME DO BAIRRO",
  "cidade": "NOME DA CIDADE",
  "grau_ensino": "GRAU DE ENSINO",
  "formacao": "FORMAÇÃO PROFISSIONAL",
  "imagem": "images/NOME_DA_IMAGEM.JPEG"
}
```

### Adicionar Novo Colaborador

Para adicionar um novo colaborador:

1. Abra o arquivo `colaboradores.json`
2. Adicione um novo objeto com todos os campos necessários
3. Certifique-se de incluir o caminho correto para a imagem
4. Salve o arquivo

### Remover Colaborador

Para remover um colaborador:

1. Abra o arquivo `colaboradores.json`
2. Localize e delete todo o objeto do colaborador (desde o `{` até o `}`)
3. Se não for o último colaborador da lista, certifique-se de remover também a vírgula após o `}`
4. Salve o arquivo

## Como Atualizar Fotos

Para atualizar ou adicionar novas fotos:

1. Nomeie a foto com o nome do colaborador (preferencialmente sem espaços e acentos)
2. Salve a foto no formato JPEG com extensão `.JPEG` (em maiúsculas)
3. Coloque a foto na pasta `images/`
4. Atualize o caminho da imagem no arquivo `colaboradores.json` se necessário

## Funcionalidades do Organograma

O organograma possui as seguintes funcionalidades:

1. **Barra de pesquisa**: Permite buscar colaboradores por nome
2. **Agrupamento por supervisor**: Os colaboradores são agrupados por supervisor
3. **Agrupamento por equipe**: Dentro de cada supervisor, os colaboradores são agrupados por equipe
4. **Visualização detalhada**: Ao clicar na foto de um colaborador, abre-se um modal com informações detalhadas:
   - Nome completo
   - Cargo
   - Supervisor
   - Telefone
   - Equipe
   - Endereço
   - Bairro
   - Cidade
   - Grau de ensino
   - Formação

## Como Publicar o Site

### Publicação no Vercel

1. Acesse https://vercel.com e faça login
2. Clique em "New Project"
3. Escolha a opção para fazer upload de uma pasta
4. Selecione todos os arquivos da pasta do organograma
5. Clique em "Deploy"

### Publicação via GitHub

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos do organograma para o repositório
3. No Vercel, conecte-se ao repositório GitHub
4. Selecione o repositório e clique em "Deploy"

## Dicas para Edição

- Mantenha a estrutura do JSON intacta para evitar erros
- Sempre faça backup dos arquivos antes de editar
- Verifique se as imagens estão no formato correto e no local adequado
- Teste o site localmente antes de publicar, abrindo o arquivo `index-completo.html` em um navegador

Para qualquer dúvida ou suporte adicional, entre em contato com a equipe de desenvolvimento.

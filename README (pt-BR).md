![Logotipo do texto a11y](https://res.cloudinary.com/tpage99/image/upload/v1571536622/a11y-first/A11y_First.png)

Bem-vindo ao a11y. Primeiramente, sou uma assistente social que codifica e me tornei cada vez mais interessada em práticas de acessibilidade no desenvolvimento da Web, mas também em como isso afeta diretamente algumas das pessoas com quem trabalho. Inspirado por [Hacktoberfest] (https://hacktoberfest.digitalocean.com/), eu queria criar um lugar para dar suporte à acessibilidade para desenvolvedores da Web e para mim como alguém que trabalha em primeira mão com pessoas que podem se beneficiar de todas as práticas.

Este é um trabalho em andamento, mas dou as boas vindas à todo e qualquer PR por todos os recursos! Esperamos que isso permita que outras pessoas contribuam com o código aberto, mas também aprenda mais sobre acessibilidade e aumente a conscientização sobre a necessidade de desenvolvedores desenvolverem com a acessibilidade em mente.

Para quem está começando, estou trabalhando para incluir uma coleção de recursos de [Marcy Sutton] (https://marcysutton.com/) que trabalha com [Gatsby] (https://www.gatsbyjs.org/) minha ferramenta favorita para desenvolver no momento. Marcy é uma defensora da inclusão na web e eu achei muitas informações que ela publica super úteis.

Este site usa o Gatsby Starter Gitbook Starter de Hasura.io. Abaixo está a documentação original do começo para ajudar no desenvolvimento. Idealmente, eu gostaria de dividir o site no que é útil para pessoas com deficiência e suas famílias e, em seguida, também recursos para obter informações úteis para desenvolvedores da Web que aprendem sobre a11y.

# Livro Gatsby Gitbook Starter

Kick off your project with this starter to create a powerful/flexible docs/tutorial web apps.

![gatsby-gitbook-starter](https://graphql-engine-cdn.hasura.io/learn-hasura/gatsby-gitbook-starter/assets/documentation_app_blog.png)

## Motivação

We wanted to create a [GraphQL tutorial](https://learn.hasura.io) series. The content would be written by developers for various languages/frameworks and what better than writing it in Markdown! And since this is a tutorial series we also needed rich embeds, syntax highlighting and more customisations.

We also wanted to serve these tutorials in sub paths of [learn.hasura.io](https://learn.hasura.io). To serve all these requirements, we decided to use Gatsby + MDX (Markdown + JSX) to extend markdown and used a neat consistent theme like the one at [GitBook](https://www.gitbook.com) and deployed as docker containers.

## 🔥 Recursos

- Write using Markdown / [MDX](https://github.com/mdx-js/mdx)
- GitBook style theme
- Syntax Highlighting using Prism [`Bonus`: Code diff highlighting]
- Search Integration with Algolia
- Google Analytics Integration
- Automatically generated sidebar navigation, table of contents, previous/next
- Edit on Github
- Fully customisable
- Rich embeds and live code editor using MDX
- Easy deployment: Deploy on Netlify / Now.sh / Docker

## 🔗 Live Demo

Here's a [live demo](https://learn.hasura.io/graphql/react)

## 🚀 Começo Rápido

Comece executando esses comandos:

```
$ git clone git@github.com:tpage99/a11yfirst.git
$ npm install
$ npm start
```

Acesse `http://localhost:8000/` para ver o app.

## 🔧 Configurar

Escreva arquivos markdown na pasta `content`.

Open `config.js` for templating variables. Broadly configuration is available for `gatsby`, `header`, `sidebar` and `siteMetadata`.

- `gatsby` config for global configuration like

  - `pathPrefix` - Prefixo para o caminho do Gatsby
  - `siteUrl` - Gatsby Site URL
  - `gaTrackingId` - Google Analytics Tracking ID

- `header` config for site header configuration like

  - `title` - O título que aparece em cima na esquerda
  - `githubUrl` - The Github URL for the docs website
  - `helpUrl` - Help URL for pointing to resources
  - `tweetText` - Tweet text
  - `links` - Links on the top right
  - `search` - Enable search and [configure Algolia](https://www.gatsbyjs.org/docs/adding-search-with-algolia/)

- `sidebar` config for navigation links configuration

  - `forcedNavOrder` for left sidebar navigation order. It should be in the format "/<filename>"
  - `frontLine` - whether to show a front line at the beginning of a nested menu.(Collapsing capability would be turned of if this option is set to true)
  - `links` - Links on the bottom left of the sidebar
  - `ignoreIndex` - Set this to true if the index.md file shouldn't appear on the left sidebar navigation. Typically this can be used for landing pages.

- `siteMetadata` config for website related configuration

  - `title` - Titulo do site
  - `description` - Descrição do site
  - `ogImage` - Social Media share og:image tag
  - `docsLocation` - URL do projeto no Github para ser editado

- For sub nesting in left sidebar, create a folder with the same name as the top level `.md` filename and the sub navigation is auto-generated. The sub navigation is alphabetically ordered.

## Live Code Editor

To render react components for live editing, add the `react-live=true` to the code section. For example:

```javascript react-live=true
<button>Edite meu texto</button>
```

In the above code, just add `javascript react-live=true` after the triple quote ``` to start rendering react components that can be edited by users.

## 🤖 SEO Amigável

This is a static site and comes with all the SEO benefits. Configure meta tags like title and description for each markdown file using MDX Frontmatter

```markdown
---
title: "Title of the page"
metaTitle: "Meta Title Tag for this page"
metaDescription: "Meta Description Tag for this page"
---
```

Canonical URLs are generated automatically.

## ☁️ Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/hasura/gatsby-gitbook-starter)

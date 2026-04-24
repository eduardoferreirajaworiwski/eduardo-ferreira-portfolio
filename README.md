# Eduardo Ferreira Portfolio

Portfólio one-page construído com Next.js, TypeScript, Tailwind CSS e Framer Motion.

O projeto usa `static export` com Next.js e pode ser publicado como site estático, incluindo GitHub Pages.

## Rodando localmente

```bash
npm install
npm run dev
```

## Build estático

```bash
npm install
npm run build
ls out
```

O build gera a pasta `out/`, que contém os arquivos estáticos publicados.

Para testar localmente o build exportado:

```bash
npx serve out
```

## GitHub Pages

O repositório já inclui workflow em `.github/workflows/nextjs.yml` para publicar o conteúdo estático no GitHub Pages.

Pré-requisitos:

- GitHub Pages habilitado no repositório
- Source configurado para `GitHub Actions`

O workflow faz:

- instalação das dependências
- `next build`
- upload da pasta `out/`
- deploy no GitHub Pages

## Pontos principais de edição

- Conteúdo principal: `src/content/site-content.ts`
- Seções da página: `src/components/sections`
- Componentes reutilizáveis: `src/components/ui`
- Estilos globais e tokens visuais: `src/app/globals.css`

## Estrutura

O projeto foi organizado para separar:

- conteúdo editável
- componentes reutilizáveis
- seções da landing page
- configuração visual

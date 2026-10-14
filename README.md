# Currículo Digital — TDE2 (Frameworks)

Implementação do **Projeto 1 – Currículo Vitae Digital** do curso *Figma Turbo*, feita com:

- **HTML5** semântico (`header`, `main`, `section`, `article`, `aside`, `footer`)
- **Tailwind CSS** (Play CDN) + `css/style.css` com as medidas do quadro do Figma
- **Vue.js 3** renderizando experiências, formação e contatos a partir dos dados em `js/app.js`

Layout fiel ao quadro "HOME" (1440 px, grid de 12 colunas, IBM Plex Sans + IBM Plex Mono) e responsivo para tablet e celular.

## Estrutura

```
index.html      → estrutura da página e template Vue
css/style.css   → layout em grid, tipografia e espaçamentos
js/app.js       → dados do currículo + app Vue
```

## Publicar no GitHub Pages

1. Crie um repositório público com **seu nome e sobrenome** no nome, por exemplo `curriculo-paulo-sobrenome`.
2. Envie os arquivos desta pasta para a branch `main` (na raiz do repositório).
3. No repositório: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. Em 1–2 minutos o site fica em `https://SEU-USUARIO.github.io/curriculo-paulo-sobrenome/`.
5. Teste o link numa **janela anônima** antes de entregar no AVA (entregar só o link do site, não o do repositório).

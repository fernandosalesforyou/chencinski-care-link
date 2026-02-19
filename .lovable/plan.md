

## Implementacao do Plano Aprovado

Este plano implementa as 3 alteracoes aprovadas anteriormente, utilizando a imagem medica enviada como background do Hero.

---

### 1. Copiar imagem para o projeto

- Copiar `user-uploads://medico-realizando-um-laudo-de-medicina.webp` para `src/assets/hero-bg.webp`
- Sera usada como background da secao Hero

---

### 2. Reformulacao da Secao Hero (`src/components/HeroSection.tsx`)

**Mudancas:**
- Remover o video do YouTube e o layout lado-a-lado
- Usar a imagem `hero-bg.webp` como background full-width via `style={{ backgroundImage }}`
- Overlay escuro (bg-black/50) sobre a imagem para contraste
- Centralizar todo o conteudo verticalmente e horizontalmente
- Texto em branco (text-white) para legibilidade
- Manter selo "Pediatria e Homeopatia" e "Atendimento Particular em SP"
- Manter botao CTA com cor #01B5C3
- Min-height generoso para impacto visual (min-h-[80vh] mobile, min-h-[85vh] desktop)

---

### 3. Nova Secao: Autoridade e Reconhecimento (`src/components/AuthoritySection.tsx`)

**Arquivo novo** inserido apos AboutSection.

- Fundo `bg-warm` para contraste suave
- Titulo: "Reconhecimento e Autoridade na Area Medica"
- Subtitulo descritivo
- Grid responsivo: 2 colunas mobile, 3 colunas desktop
- 6 cards com icones Lucide:
  - Stethoscope - Medico Especialista (CRM 36.349)
  - BookOpen - Autor de 3 Livros
  - GraduationCap - Certificacoes
  - Youtube - Canal YouTube +150 mil inscritos
  - Newspaper - Colunista e Midia
  - Star - Referencia para Familias em SP
- Cards com bg-white, sombra leve, cantos arredondados
- Animacao fade-in-up
- Botao "Agendar Consulta" ao final

---

### 4. Nova Secao: Video YouTube (`src/components/VideoSection.tsx`)

**Arquivo novo** inserido apos AuthoritySection.

- Fundo `bg-background` (branco)
- Titulo: "Assista e Conheca Mais Sobre Meu Trabalho"
- Subtitulo explicativo
- iframe YouTube centralizado, max-w-4xl, aspect-video 16:9
- Bordas arredondadas e sombra no container do video
- Autoplay com audio (autoplay=1, sem mute)
- Controles visiveis
- Botao "Assistir no YouTube" com link externo (target_blank)
- Badge "+150 mil inscritos no YouTube" abaixo

---

### 5. Atualizar Index (`src/pages/Index.tsx`)

Nova ordem das secoes:
1. Header
2. HeroSection (com background image)
3. AboutSection
4. **AuthoritySection** (novo)
5. **VideoSection** (novo)
6. SpecialtiesSection
7. OfficeSection
8. TestimonialsSection
9. LocationSection
10. FAQSection
11. Footer
12. FloatingWhatsApp

---

### Resumo tecnico

| Arquivo | Acao |
|---|---|
| `src/assets/hero-bg.webp` | Copiar imagem enviada |
| `src/components/HeroSection.tsx` | Reescrever com background image |
| `src/components/AuthoritySection.tsx` | Criar novo |
| `src/components/VideoSection.tsx` | Criar novo |
| `src/pages/Index.tsx` | Adicionar imports e secoes |


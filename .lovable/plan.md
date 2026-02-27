

## Plan: Substituir textos para foco exclusivo em Homeopatia

Arquivos a editar (apenas textos, zero mudança estrutural):

### 1. `src/components/HeroSection.tsx`
- Badge: "Pediatria e Homeopatia" → "Homeopatia para Crianças e Adultos"
- H1: → "Cuidado Médico Homeopático Humanizado em São Paulo" (subtítulo vira o h1, conforme hierarquia)
- Parágrafo: → texto sobre prescrição homeopática individualizada
- Botão: manter "Agendar Consulta"
- Localização: manter "📍 Atendimento Particular em São Paulo"

### 2. `src/components/SpecialtiesSection.tsx`
- Remover bloco de Pediatria inteiro (card)
- Manter apenas 1 bloco: "Homeopatia para Crianças e Adultos"
- Atualizar lista de itens conforme especificado (7 itens)
- Botão: "Agendar Homeopatia"
- Layout: bloco único centralizado (usar `max-w-xl mx-auto` no grid para manter visual com 1 card)

### 3. `src/components/TestimonialsSection.tsx`
- Título: → "O que dizem os pacientes atendidos"
- Substituir os 3 depoimentos pelos novos textos e nomes fornecidos (Mariana Almeida, Ricardo Nogueira, Camila Torres)

### Arquivos NÃO alterados
- Header, Footer, About, Authority, Video, Office, Location, FAQ, Index — permanecem intactos
- Nenhuma mudança em layout, ícones, botões, estilos ou estrutura


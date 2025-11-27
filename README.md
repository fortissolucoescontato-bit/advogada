# Landing Page - Advogada

Landing page responsiva e de alta conversão para uma advogada, desenvolvida com React, Tailwind CSS, Lucide React e Framer Motion.

## 🎨 Design System

- **Cor Primária**: Azul Marinho Profundo (#0F172A, #172554)
- **Cor de Destaque**: Dourado Metálico (#D4AF37, #F59E0B)
- **Tipografia**: 
  - Títulos: Playfair Display (serif)
  - Corpo: Inter/Lato (sans-serif)

## 🚀 Tecnologias

- React 18
- Tailwind CSS 3
- Framer Motion (animações)
- Lucide React (ícones)

## 📦 Instalação

```bash
npm install
```

## 🏃 Executar

```bash
npm start
```

O aplicativo será aberto em [http://localhost:3000](http://localhost:3000)

## 🏗️ Build para Produção

```bash
npm run build
```

## 🚀 Deploy no Vercel

### Opção 1: Deploy via Vercel CLI (Recomendado) ⭐

1. Instale o Vercel CLI globalmente:
```bash
npm install -g vercel
```

2. Faça login na Vercel:
```bash
vercel login
```

3. No diretório do projeto, execute:
```bash
vercel
```

4. Siga as instruções:
   - **Link para preview?** → Sim (para testar antes)
   - **Deploy para produção?** → Sim (quando estiver pronto)

**Preview (para cliente ver sem afetar produção):**
```bash
vercel --prod=false
```

**Deploy de Produção:**
```bash
vercel --prod
```

### Opção 2: Deploy via Interface Web (Mais Fácil)

1. Acesse [vercel.com](https://vercel.com) e faça login (pode usar GitHub)

2. Clique em **"Add New Project"**

3. Importe seu repositório Git:
   - Conecte seu GitHub/GitLab/Bitbucket
   - Selecione o repositório do projeto

4. Configure o projeto:
   - **Framework Preset**: Create React App (detectado automaticamente)
   - **Build Command**: `npm run build` (já configurado)
   - **Output Directory**: `build` (já configurado)
   - **Install Command**: `npm install` (padrão)

5. Clique em **"Deploy"**

6. A Vercel fará o deploy automaticamente e você receberá um link

### Preview para Cliente (Sem Deploy de Produção)

**Usando Vercel CLI:**
```bash
vercel --prod=false
```
Isso cria um link de preview temporário que você pode compartilhar com o cliente.

**Usando Interface Web:**
- Ao fazer push no Git, a Vercel cria automaticamente um preview
- Cada branch/pull request gera um link de preview único
- Links de preview não afetam o site de produção

### Configuração Automática

O projeto já está configurado com:
- ✅ `vercel.json` - Configuração de build, redirects e cache
- ✅ Redirects para SPA (Single Page Application)
- ✅ Otimização de cache para assets estáticos

A Vercel detectará automaticamente essas configurações.

## 👁️ Outras Opções de Preview

### Netlify Drop (Sem Conta)

1. Faça o build: `npm run build`
2. Acesse [app.netlify.com/drop](https://app.netlify.com/drop)
3. Arraste a pasta `build` para a área de drop
4. Receba um link temporário para compartilhar

**Vantagens**: Não precisa criar conta, link permanente até deletar

## 📝 Notas Importantes

- **Domínio Personalizado**: Na Vercel, você pode adicionar um domínio personalizado nas configurações do projeto
- **Deploy Automático**: Se conectar com Git, cada push na branch principal faz deploy automático
- **Preview Automático**: Cada pull request recebe um link de preview único
- **SSL/HTTPS**: Automático e gratuito na Vercel

## 📱 Seções

1. **Header/Nav**: Navegação sticky com transição transparente para sólida no scroll
2. **Hero**: Seção de impacto com CTA em dourado
3. **Sobre**: Apresentação pessoal e credenciais
4. **Áreas de Atuação**: Grid de cards com ícones dourados e efeitos hover
5. **Depoimentos**: Seção com fundo navy e ícones de citação dourados
6. **Footer**: Informações de contato, OAB, redes sociais e link para mapa

## ♿ Acessibilidade

- Alto contraste entre fundo navy e texto
- Design mobile-first
- Navegação por teclado
- Labels ARIA apropriados

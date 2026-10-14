// ==========================================================
// Currículo Digital — Projeto 1 (Figma Turbo)
// Os dados ficam separados do HTML e o Vue renderiza as listas.
// ==========================================================

const { createApp } = Vue;

createApp({
  data() {
    return {
      perfil: {
        nome: 'Marty McFly',
        cargo: 'Consultor de Cronologia e Especialista em Performance Musical',
        resumo:
          'Jovem dinâmico, pontual (quando o capacitor de fluxo permite) e com vasta experiência em resolução de paradoxos temporais. Guitarrista talentoso com domínio de técnicas avançadas de shredding antes mesmo de serem inventadas. Experiente em lidar com figuras históricas, direção defensiva de veículos modificados e skate urbano. Nota: Não me chame de frangote.',
      },

      experiencias: [
        {
          titulo: '1985 – Presente | The Pinheads',
          cargo: 'Guitarrista Principal',
          descricao:
            'Composição e performance de Rock \'n\' Roll. Responsável pela audição da "Batalha das Bandas" (mesmo sendo considerado "barulhento demais" por alguns juízes).',
        },
        {
          titulo: '1955 – Baile Encanto sob o Mar',
          cargo: 'Músico Substituto (Guitarra)',
          descricao:
            'Substituição emergencial do guitarrista Marvin Berry. Responsável pela introdução cultural do gênero Heavy Metal trinta anos antes do previsto.',
        },
        {
          titulo: '1885 – Consultoria de Segurança Hill Valley (Velho Oeste)',
          cargo: 'Assistente de Ferreiro',
          descricao:
            'Auxílio técnico em engenharia ferroviária improvisada e mediação de conflitos com a gangue de Buford "Cachorro Louco" Tannen.',
        },
        {
          titulo: '1985 – Indústrias Biffco',
          cargo: 'Sobrevivente Urbano',
          descricao:
            'Gestão de crises em ambientes distópicos e recuperação de artefatos esportivos (almanaques) para restauração da ordem cronológica.',
        },
      ],

      educacao: [
        {
          titulo: '1986 | Hill Valley High School',
          tipo: 'Ensino Médio Completo',
          descricao: 'Foco em Artes e Música',
        },
        {
          titulo: '1955 | Cultural Hill Valley',
          tipo: 'Intercâmbio',
          descricao:
            'Estudos intensivos sobre dinâmicas sociais da década de 50 e etiqueta de lanchonetes.',
        },
        {
          titulo: '1985 | Engenharia Aplicada',
          tipo: 'Workshop',
          descricao:
            'Treinamento prático em sistemas de 1.21 Gigawatts e mecânica de DeLorean (sob mentoria do Dr. Emmett Brown).',
        },
        {
          titulo: '2015 | Mobilidade Urbana Futurista',
          tipo: 'Treinamento',
          descricao:
            'Curso intensivo de pilotagem de Hoverboard em superfícies sólidas (atenção: pranchas não funcionam na água sem potência extra).',
        },
      ],

      contatos: [
        { rotulo: 'Endereço', valor: 'Lyon Estates, Hill Valley, CA.' },
        { rotulo: 'E-mail', valor: 'contato@delorean.com', link: 'mailto:contato@delorean.com' },
        { rotulo: 'Telefone', valor: '+55 (88) 9999 0000', link: 'tel:+558899990000' },
      ],

      ano: new Date().getFullYear(),
    };
  },

  computed: {
    // "Marty McFly" -> "MM" (primeira letra de cada palavra do nome)
    iniciais() {
      return this.perfil.nome
        .split(' ')
        .map((parte) => parte[0])
        .join('')
        .toUpperCase();
    },
  },
}).mount('#app');

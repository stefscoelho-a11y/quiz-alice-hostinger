
import { FunnelStep, StyleKey } from './types';

export const PRIMARY_COLOR = '#df69f5';
export const SOFT_PINK = '#fdf2ff';
export const SUCCESS_GREEN = '#10b981';
export const SOFT_PINK_CARD = '#FCE7F3';

export const STYLES_MAP: Record<StyleKey, string> = {
  CL: "Clássico / Tradicional",
  RO: "Romântico",
  NA: "Natural / Esportivo",
  CR: "Criativo",
  EL: "Elegante",
  MO: "Moderno",
  SE: "Sensual / Dramático"
};

export interface StyleMetadata {
  palette: string[];
  keyPieces: string[];
  vslVideoId: string; // ID do vídeo (YouTube/Vimeo/Wistia)
}

export const STYLE_METADATA: Record<StyleKey, StyleMetadata> = {
  CL: {
    palette: ['#000000', '#FFFFFF', '#2B3D50', '#8E8E8E', '#D1D1D1'],
    keyPieces: ['Camisa Branca de Alfaiataria', 'Scarpin de Salto Médio', 'Calça Reta de Tecido Plano'],
    vslVideoId: 'dQw4w9WgXcQ'
  },
  RO: {
    palette: ['#F9E3E3', '#F2C1D1', '#D8E2DC', '#FFF1E6', '#B8C0FF'],
    keyPieces: ['Vestido com Babados ou Rendas', 'Sapatilha de Bico Arredondado', 'Blusa com Laço ou Estampa Floral'],
    vslVideoId: 'dQw4w9WgXcQ'
  },
  NA: {
    palette: ['#8C7355', '#4A5D4E', '#D9CAB3', '#F5F5F5', '#333333'],
    keyPieces: ['Tênis Casual de Couro', 'Calça Jeans de Corte Reto', 'Camiseta de Algodão Premium'],
    vslVideoId: 'dQw4w9WgXcQ'
  },
  CR: {
    palette: ['#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557'],
    keyPieces: ['Jaqueta com Aplicações ou Diferente', 'Acessórios Artísticos Grandes', 'Peças com Mix de Estampas'],
    vslVideoId: 'dQw4w9WgXcQ'
  },
  EL: {
    palette: ['#EAE2B7', '#FCBF49', '#F77F00', '#D62828', '#003049'],
    keyPieces: ['Blazer Estruturado Monocromático', 'Pantalona de Cintura Alta', 'Mule de Bico Fino'],
    vslVideoId: 'dQw4w9WgXcQ'
  },
  MO: {
    palette: ['#000000', '#FFFFFF', '#FF0000', '#4A4A4A', '#CCCCCC'],
    keyPieces: ['Jaqueta de Couro Minimalista', 'Botas Tratoradas', 'Peças com Recortes Geométricos'],
    vslVideoId: 'dQw4w9WgXcQ'
  },
  SE: {
    palette: ['#600000', '#000000', '#FFD700', '#4B0082', '#FFFFFF'],
    keyPieces: ['Saia Lápis Ajustada', 'Salto Agulha Poderoso', 'Body com Decote ou Transparência'],
    vslVideoId: 'dQw4w9WgXcQ'
  }
};

export const VSL_CONTENT = {
  modules: [
    { title: "Os Estilos Universais", desc: "Descubra qual é o seu estilo ideal e aprenda a escolher roupas que refletem sua personalidade, sem precisar gastar com peças desnecessárias.", icon: "🎭" },
    { title: "Como Se Vestir Bem em Qualquer Ocasião", desc: "Nunca mais tenha dúvidas sobre o que vestir! Saiba como se apresentar impecavelmente no trabalho, em eventos sociais ou no dia a dia.", icon: "👠" },
    { title: "Tipos de Corpos e Como Valorizar o Seu", desc: "Aprenda a realçar seus pontos fortes para se sentir mais bonita e confiante.", icon: "📐" },
    { title: "O Que é Brega e Como Evitar", desc: "Erros comuns que acabam com a elegância de qualquer look.", icon: "❌" },
    { title: "Como Usar Peças Encalhadas", desc: "Transforme aquelas roupas esquecidas no seu guarda-roupa em looks incríveis e estilosos, sem gastar um centavo!", icon: "📦" },
    { title: "Combinação Perfeita de Cores", desc: "Descubra os segredos da coloração pessoal e aprenda a usar cores que favorecem sua beleza natural.", icon: "🎨" },
    { title: "Tecidos, Cortes e Modelagens", desc: "Conheça os materiais que trazem sofisticação ao look e saiba como escolher peças que duram mais e têm aparência refinada.", icon: "🧵" },
    { title: "O Guarda-Roupa Inteligente", desc: "Aprenda a montar um armário funcional e versátil, onde todas as peças combinam entre si, otimizando suas escolhas.", icon: "🧠" }
  ],
  faq: [
    { q: "1) O que é o curso “Vista-se Bem Gastando Pouco”?", a: "O curso “Vista-se Bem Gastando Pouco” é um treinamento completo desenvolvido por Alice Salazar, focado em ensinar como se vestir bem, de forma elegante e sofisticada, sem precisar gastar muito dinheiro. Ele aborda desde os tipos físicos, até como escolher peças, combinar cores, tecidos e aproveitar ao máximo seu guarda-roupa." },
    { q: "2) Para quem é esse curso?", a: "Esse curso é para mulheres que querem melhorar sua aparência, aprender a se vestir de maneira mais estilososa e econômica, sem precisar gastar uma fortuna. Ideal para mulheres acima de 30 anos que buscam dicas práticas e objetivas sobre como se vestir bem, mesmo com orçamentos mais restritos." },
    { q: "3) Eu sou iniciante em moda, esse curso é para mim?", a: "Sim! O curso é estruturado de forma a atender desde iniciantes até mulheres mais experientes. Cada módulo foi pensado para ensinar passo a passo, começando pelas bases de estilo, até as dicas mais avançadas, permitindo que qualquer pessoa, independentemente do nível, consiga aplicar e transformar seu visual." },
    { q: "4) Quanto tempo dura o curso?", a: "O curso é 100% online e você pode assistir aos módulos no seu próprio ritmo. O conteúdo completo pode ser acessado assim que você adquirir, e você terá acesso vitalício, o que significa que poderá revisitar o material sempre que precisar." },
    { q: "5) Preciso comprar roupas caras para aplicar as dicas do curso?", a: "De forma alguma! A proposta do curso é ensinar como se vestir bem gastando pouco, e uma das grandes vantagens é aprender a usar peças acessíveis, de lojas populares, e até reaproveitar roupas que já estão no seu guarda-roupa. Não é necessário investir em roupas caras para ter um estilo sofisticado." },
    { q: "6) O que vou aprender no curso?", a: "Você aprenderá desde os conceitos básicos de estilo, como identificar o seu tipo físico e estilo pessoal, até como combinar roupas, cores, tecidos, e até como evitar erros de estilo. Além disso, o curso aborda como usar peças esquecidas no seu guarda-roupa, como escolher acessórios e calçados, e como se vestir adequadamente para diversas ocasiões." },
    { q: "7) Eu vou ter suporte durante o curso?", a: "Sim! Durante o curso, você terá acesso ao suporte da equipe de Alice Salazar para tirar dúvidas, além de uma comunidade online para interagir com outras participantes e compartilhar experiências." },
    { q: "8) O curso tem garantia?", a: "Sim! Oferecemos uma garantia de 7 dias. Caso não esteja satisfeita com o curso, você pode pedir o reembolso completo dentro desse período, sem perguntas." }
  ]
};

export const FUNNEL_STEPS: FunnelStep[] = [
  {
    id: 0,
    type: 'question',
    title: "Qual a sua idade?",
    subtitle: "Isso nos ajuda a calibrar as sugestões para sua fase de vida",
    isSegmentation: true,
    options: [
      { text: "18-29", image: "https://i.ibb.co/7JH29sNr/Captura-de-Tela-2026-01-11-a-s-11-39-49.png" },
      { text: "29-39", image: "https://i.ibb.co/PsJwfbS6/Captura-de-Tela-2026-01-11-a-s-11-39-58.png" },
      { text: "39-49", image: "https://i.ibb.co/5h26KRv8/Captura-de-Tela-2026-01-11-a-s-11-40-05.png" },
      { text: "50+", image: "https://i.ibb.co/bgMCQfz9/Captura-de-Tela-2026-01-11-a-s-11-40-13.png" }
    ]
  },
  {
    id: 1,
    type: 'question',
    title: "Qual look te representa MAIS hoje? 👀",
    subtitle: "Escolha o que você usaria agora sem pensar duas vezes",
    options: [
      { text: "Camisa + calça reta + cores neutras", style: 'CL', emoji: "📐" },
      { text: "Vestido delicado + detalhes femininos", style: 'RO', emoji: "🌸" },
      { text: "Tênis + jeans + camiseta confortável", style: 'NA', emoji: "👟" },
      { text: "Peça diferente/estampada + mistura ousada", style: 'CR', emoji: "🎨" },
      { text: "Peças alinhadas + tecido “chique”", style: 'EL', emoji: "💎" },
      { text: "Tendência do momento + modelagem atual", style: 'MO', emoji: "🚀" },
      { text: "Look marcante + presence", style: 'SE', emoji: "💋" }
    ]
  },
  {
    id: 2,
    type: 'break',
    title: "Alice Salazar ajudou mais de 40 mil mulheres a renovarem a autoestima e voltarem a se sentir lindas todos os dias",
    subtitle: "Continue o teste para descobrir seu verdadeiro estilo e entender como se vestir bem gastando pouco.",
    image: "https://i.ibb.co/kVgwpZHK/Component-1.png",
    buttonText: "CONTINUAR"
  },
  {
    id: 3,
    type: 'question',
    title: "Quando você entra numa loja… o que te chama atenção primeiro? 🛍️",
    options: [
      { text: "Peças clássicas que “duram anos”", style: 'CL', emoji: "🕰️" },
      { text: "Rendas, laços, florais, delicadeza", style: 'RO', emoji: "🎀" },
      { text: "Conforto e praticidade", style: 'NA', emoji: "☁️" },
      { text: "Peças únicas, diferentes, fora do comum", style: 'CR', emoji: "✨" },
      { text: "Qualidade do tecido e acabamento", style: 'EL', emoji: "🧵" },
      { text: "O que tá em alta / “cara de Pinterest”", style: 'MO', emoji: "📱" },
      { text: "Peças que valorizam curvas e impactam", style: 'SE', emoji: "🔥" }
    ]
  },
  {
    id: 4,
    type: 'question',
    title: "Qual dessas frases parece que foi escrita pra você? 😅",
    options: [
      { text: "“Eu gosto do básico bem feito.”", style: 'CL', emoji: "✍️" },
      { text: "“Eu amo um toque feminino e delicado.”", style: 'RO', emoji: "💕" },
      { text: "“Se não for confortável, eu nem uso.”", style: 'NA', emoji: "🛋️" },
      { text: "“Eu gosto de ser diferente e criativa.”", style: 'CR', emoji: "🌈" },
      { text: "“Eu gosto de parecer elegante sem esforço.”", style: 'EL', emoji: "🥂" },
      { text: "“Eu gosto de estar atual e moderna.”", style: 'MO', emoji: "⚡" },
      { text: "“Eu gosto de chegar e ser notada.”", style: 'SE', emoji: "👸" }
    ]
  },
  {
    id: 5,
    type: 'question',
    title: "Escolha ATÉ 3 peças que mais aparecem no seu guarda-roupa 👚",
    multiple: true,
    maxSelections: 3,
    options: [
      { text: "Camisa social / alfaiataria", style: 'CL', emoji: "👔" },
      { text: "Vestidos delicados / saias rodadas", style: 'RO', emoji: "👗" },
      { text: "Tênis / moletom / jeans básico", style: 'NA', emoji: "👖" },
      { text: "Estampas diferentes / peças “garimpo”", style: 'CR', emoji: "🧣" },
      { text: "Blazer estruturado / premium", style: 'EL', emoji: "🧥" },
      { text: "Peças tendência / modelagens atuais", style: 'MO', emoji: "🕶️" },
      { text: "Peças justas / salto / recortes", style: 'SE', emoji: "👠" }
    ]
  },
  {
    id: 6,
    type: 'break',
    title: "O mesmo look, com preços diferentes.",
    subtitle: "Um custou R$488,00 e o outro APENAS R$140!",
    description: "Esse é o nível de economia e elegância que você vai ter depois que entender seu estilo e aprender a escolher os looks certos, que te deixam elegante sem precisar de roupas caras.",
    actionText: "Continue o teste para descobrir seu estilo e como vou te ajudar a se vestir com elegância gastando pouco.",
    image: "https://i.ibb.co/KpdCTQFp/Captura-de-Tela-2026-01-11-a-s-11-26-31.png",
    buttonText: "OK, VAMOS CONTINUAR"
  },
  {
    id: 7,
    type: 'question',
    title: "Sobre cores: qual é mais você? 🎨",
    options: [
      { text: "Neutros (preto, branco, beige, marinho)", style: 'CL', emoji: "⚪" },
      { text: "Tons claros e suaves (rosa, lilás)", style: 'RO', emoji: "🍬" },
      { text: "Tons terrosos e naturais (caramelo, verde)", style: 'NA', emoji: "🍃" },
      { text: "Cores fortes e combinações inesperadas", style: 'CR', emoji: "💥" },
      { text: "Neutros “cara de rica” (off-white, nudes)", style: 'EL', emoji: "🥯" },
      { text: "Paleta moderna (minimalismo)", style: 'MO', emoji: "🔳" },
      { text: "Preto/vermelho/brilho marcante", style: 'SE', emoji: "💋" }
    ]
  },
  {
    id: 8,
    type: 'question',
    title: "Qual sapato você escolheria pra “se sentir você mesma”? 👠",
    options: [
      { text: "Scarpin clássico / loafer", style: 'CL', emoji: "👞" },
      // Fix: Changed 'ballerina' to 'emoji' to match the Option interface in types.ts
      { text: "Sapatilha delicada / sandália fina", style: 'RO', emoji: "🩰" },
      { text: "Tênis / rasteira confortável", style: 'NA', emoji: "👟" },
      { text: "Bota diferente / sapato com design", style: 'CR', emoji: "👢" },
      { text: "Salto médio refinado / couro", style: 'EL', emoji: "👜" },
      { text: "Tênis estiloso / salto bloco atual", style: 'MO', emoji: "👟" },
      { text: "Salto alto / poderoso", style: 'SE', emoji: "👠" }
    ]
  },
  {
    id: 9,
    type: 'question',
    title: "Qual dessas situações mais acontece com você? 😩",
    isSegmentation: true,
    options: [
      { text: "Abro o guarda-roupa e fico perdida", emoji: "🧐" },
      { text: "Me visto rápido e sempre acabo igual", emoji: "👯" },
      { text: "Tento caprichar, mas fica “faltando algo”", emoji: "🤏" },
      { text: "Compro peças e depois não sei usar", emoji: "🛍️" }
    ]
  },
  {
    id: 10,
    type: 'question',
    title: "Você gostaria de ter um armário inteligente? 👗✅",
    isSegmentation: true,
    options: [
      { text: "SIM! Facilitaria muito minha vida", emoji: "🙌" },
      { text: "Sim, mas eu não sei por onde começar", emoji: "🧭" },
      { text: "Nunca pensei nisso, mas parece maravilhoso", emoji: "💡" }
    ]
  },
  {
    id: 11,
    type: 'question',
    title: "Escolha ATÉ 2 “vontades secretas” 😍",
    multiple: true,
    maxSelections: 2,
    isSegmentation: true,
    options: [
      { text: "Comprar menos e acertar mais", emoji: "🎯" },
      { text: "Ser elogiada pelo bom gosto", emoji: "💬" },
      { text: "Parar de repetir sempre as mesmas roupas", emoji: "🔄" },
      { text: "Montar looks com peças “encalhadas”", emoji: "📦" },
      { text: "Ter um visual de luxo sem gastar luxo", emoji: "💸" },
      { text: "Saber o que vestir em qualquer ocasião", emoji: "🗓️" }
    ]
  },
  {
    id: 12,
    type: 'question',
    title: "O que mais te atrapalha HOJE? 😤",
    multiple: true,
    maxSelections: 2,
    isSegmentation: true,
    options: [
      { text: "Eu compro e depois não sei combinar", emoji: "❌" },
      { text: "Eu não sei o que favorece meu corpo", emoji: "👗" },
      { text: "Eu tenho roupa, mas parece que “não tenho nada”", emoji: "💨" },
      { text: "Eu não sei o que é brega e o que é chique", emoji: "🤔" },
      { text: "Eu queria ter um guarda-roupa inteligente", emoji: "🧠" }
    ]
  },
  {
    id: 13,
    type: 'break',
    title: "Estamos quase lá...",
    subtitle: "Agora eu vou te mostrar seus 3 estilos… e o que isso significa na prática ✨",
    buttonText: "QUERO VER MEU RESULTADO"
  }
];

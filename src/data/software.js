// Softwares vendidos pela Chazan Tech. Cada slug vira a página /software/:slug.
// Vídeo institucional (opcional): video: { src: '/videos/pedro.mp4', poster: '/videos/pedro.jpg' }
// Para mostrar prints do produto, coloque as imagens em public/software/ e liste em `images`.
export const SOFTWARE = {
  condfin: {
    name: 'CondFin',
    tagline: 'Gestão financeira com IA para administradoras de condomínio',
    audience: 'Donos, diretores e gestores financeiros de administradoras',
    problem:
      'Sua equipe gasta dias todo mês fechando prestação de contas e montando relatório de assembleia na mão, condomínio por condomínio, digitando o que já está num PDF.',
    features: [
      {
        title: 'Upload universal com IA',
        text: 'Suba o PDF de qualquer administradora, planilha ou foto. A IA extrai os lançamentos, categoriza e confere os totais.',
      },
      {
        title: 'Detector de gasto atípico',
        text: 'Alerta quando uma categoria dispara, como manutenção de elevador acima do padrão, com sugestão de renegociação e economia estimada.',
      },
      {
        title: 'Resumo de assembleia em 1 clique',
        text: 'Apresentação executiva em imagem 16:9, com projeção de caixa, pronta para mostrar ao síndico e aos moradores.',
      },
      {
        title: 'Ranking da carteira',
        text: 'Inadimplência e custo por unidade de todos os condomínios lado a lado, para ver na hora quais estão saudáveis e quais estão sangrando.',
      },
    ],
    steps: [
      'Você envia os PDFs, planilhas ou fotos que já usa hoje.',
      'A IA extrai, categoriza e bate as contas sozinha.',
      'Você recebe alertas, resumo de assembleia e ranking prontos.',
    ],
    cta: 'Agendar demonstração com a minha carteira',
    message: 'Olá! Quero ver o CondFin funcionando com a carteira da minha administradora.',
    images: [],
  },
  'gestao-financeira': {
    name: 'Gestão Financeira',
    tagline: 'Contas a pagar sem planilha, com boleto lido por IA',
    audience: 'Empresas que controlam contas a pagar em planilha ou em pastas no Drive',
    problem:
      'Boleto baixado do e-mail, pasta no Drive, planilha de vencimentos: é lento, e um descuido vira juros. O financeiro vira trabalho de robô.',
    features: [
      {
        title: 'Painel em tempo real',
        text: 'Veja o que vence hoje, o que já foi pago e para onde vai o dinheiro, por categoria, num painel único.',
      },
      {
        title: 'Leitura inteligente de boletos',
        text: 'Encaminhe o PDF para o bot no Telegram. Ele lê a linha digitável, extrai valor, fornecedor e vencimento e cadastra sozinho.',
      },
      {
        title: 'Recorrência automática',
        text: 'Aluguel, folha e contas fixas cadastradas uma vez e geradas todo mês, sem ninguém lembrar.',
      },
      {
        title: 'Aviso às 8h e relatórios',
        text: 'A diretoria recebe no Telegram o que vence no dia, com o boleto anexo. No fim do mês, relatórios por fornecedor e categoria.',
      },
    ],
    steps: [
      'Você encaminha o boleto em PDF para o bot.',
      'O sistema cadastra o vencimento e agenda o aviso.',
      'Toda manhã a diretoria sabe o que pagar, com o boleto na mão.',
    ],
    cta: 'Agendar demonstração completa',
    message: 'Olá! Quero ver o sistema de Gestão Financeira da Chazan Tech funcionando.',
    images: [],
  },
  pedro: {
    name: 'Pedro',
    tagline: 'Atendente de WhatsApp para lojas de celular',
    audience: 'Lojistas de celular e assistências',
    problem:
      'A mesma pergunta o dia inteiro: "tem iPhone 13?", "quanto tá?", "parcela em quantas?". Enquanto você responde um, outros desistem. E o cliente que pergunta o preço, some e ninguém puxa de volta.',
    features: [
      {
        title: 'Responde com o catálogo da loja',
        text: 'Modelo, preço, estoque, garantia e horário de funcionamento, com feriados, saindo da sua planilha. Mandou três mensagens seguidas, ele espera terminar e responde uma vez.',
      },
      {
        title: 'Conduz a troca de aparelho',
        text: 'Faz as perguntas, pede as fotos e só chama você quando está tudo junto, pronto para avaliar.',
      },
      {
        title: 'Retoma quem sumiu',
        text: 'Volta ao cliente que parou no "vou pensar", um por vez e do ponto onde parou. Se alguém escreveu e ficou sem resposta, chega um aviso para você.',
      },
      {
        title: 'Você assume quando quiser',
        text: 'Responda no WhatsApp da loja e ele sai da frente só naquela conversa. Para devolver, escreva #fim. Painel de controle no Telegram.',
      },
    ],
    steps: [
      'Configuramos o Pedro com o catálogo, o horário e as regras da sua loja.',
      'Ele atende o WhatsApp da loja e prepara o cliente para fechar.',
      'Você entra na hora de fechar. Preço, desconto e valor de troca continuam sendo seus.',
    ],
    cta: 'Ver o Pedro com os aparelhos da minha loja',
    message: 'Olá! Tenho uma loja de celular e quero ver o Pedro funcionando com o meu catálogo.',
    images: [],
  },
  'sempre-crianca': {
    kind: 'sob-medida',
    name: 'Sempre Criança',
    tagline: 'Plataforma de apadrinhamento de cartinhas de Natal',
    audience: 'ONGs e campanhas que recebem muitos pedidos e doações',
    problem:
      'Todo fim de ano, cerca de 500 crianças escrevem cartinhas pedindo presente. Com 3 pessoas na equipe, cada carta era fotografada e enviada uma a uma no WhatsApp para quem queria apadrinhar, enquanto uma planilha tentava acompanhar tudo.',
    features: [
      {
        title: 'Catálogo de cartinhas',
        text: 'As cartinhas ficam online, com foto e filtros por faixa etária e gênero. O padrinho lê, escolhe a que quiser e apadrinha sozinho.',
      },
      {
        title: 'Cadastro e carrinho do padrinho',
        text: 'O padrinho cria a conta, monta o carrinho com as cartinhas escolhidas e segue o processo por conta própria, sem depender de ninguém da equipe.',
      },
      {
        title: 'Status em tempo real',
        text: 'Cada cartinha passa por disponível, apadrinhada e entregue, e o painel atualiza sozinho. Fim da planilha.',
      },
      {
        title: 'Pontos de entrega e painel da equipe',
        text: 'A equipe acompanha a campanha inteira e os pontos de entrega em um só lugar, com dezenas de horas de trabalho braçal liberadas.',
      },
    ],
    steps: [
      'As cartinhas são escaneadas e entram na plataforma.',
      'O padrinho escolhe e apadrinha por conta própria.',
      'O status atualiza sozinho até a entrega do presente.',
    ],
    link: { href: 'https://natal.semprecrianca.org/', label: 'Ver a plataforma no ar' },
    cta: 'Quero um sistema assim para a minha organização',
    message: 'Olá! Vi o projeto do Sempre Criança e quero um sistema parecido para a minha organização.',
    images: [],
  },
  'banco-de-talentos': {
    name: 'Banco de Talentos',
    tagline: 'Cadastro por WhatsApp, com termo assinado e cartão de identificação',
    audience: 'RH, associações, cooperativas e órgãos públicos que cadastram muita gente',
    problem:
      'Cadastro em massa na mão: ficha de papel, letra ilegível, campo em branco, termo para imprimir e assinar, e alguém digitando tudo numa planilha no fim.',
    features: [
      {
        title: 'Cadastro por conversa',
        text: 'A pessoa se cadastra no WhatsApp, uma pergunta por vez. Parou no meio e voltou à noite? A conversa continua de onde parou.',
      },
      {
        title: 'Termo com assinatura digital',
        text: 'O termo vai por link e é assinado pelo celular, com validade jurídica. Quem ficou pendente recebe de novo automaticamente.',
      },
      {
        title: 'Painel da equipe',
        text: 'Busque qualquer cadastro pelo nome, avalie, mande avisos e assuma a conversa quando precisar. Cada perfil de acesso vê só o que lhe cabe.',
      },
      {
        title: 'Cartão gerado automaticamente',
        text: 'Terminado o cadastro, os dados já estão organizados e o cartão de identificação sai sem ninguém montar um por um. A equipe também pede coisas ao sistema por texto, no Telegram.',
      },
    ],
    steps: [
      'A pessoa conversa com a IA no WhatsApp e informa os dados.',
      'O termo é assinado digitalmente e os pendentes são cobrados sozinhos.',
      'A equipe encontra tudo no painel e o cartão é gerado.',
    ],
    cta: 'Desenhar o meu processo de cadastro',
    message: 'Olá! Quero saber como o Banco de Talentos pode resolver o cadastro de pessoas da minha organização.',
    images: [],
  },
}

export const SOFTWARE_SLUGS = Object.keys(SOFTWARE).filter((s) => SOFTWARE[s].kind !== 'sob-medida')

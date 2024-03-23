# Projeto01

Projeto com foco para o mapeamento da cidade de Porto Alegre a partir da visão infantil (tanto em relação à visão da criança, quanto ao que ela enxerga como belo, agradável).

 O objetivo é que as crianças postem fotos do que consideram bonito (na cidade de Porto Alegre), no seu caminho para a escola, enquanto passeia com seus pais ou brinca com seus amigos.

 A gamificação do projeto é pilar fundamental para estimular o usuário à utiliza-lo. Para isso diversos aspectos serão implementados:

 1) Personagem (com possibilidade de PET futuramente):
    Personagem é a representação visual do usuário, será feito em 3D com customização de: modelos de cabelo, cores de cabelo, modelos de sobrancelha, cores de sobrancelha, cores de pele, modelo de camiseta inicial (para masculino) ou vestido (para feminino), modelos de calças, modelos de sapatos. No entanto, serão poucas opções iniciais (e todas mais simples, sem muitos detalhes, cor, extravagância), o que estimula a aquisição de moedas (para comprar novas roupas) e consequentemente o uso do software.
    É aceitável como MVP modelos pré definidos de personagens (inclusive com poucas roupas para compra na loja) em 2D.

 2) Nível e experiência:
    Todo upload de foto (válida) será convertido em experiência, e a experiência em nível. O estímulo para upar de nível consiste em dois pilares (adquirir moedas e melhorar o perfil do usuário), a única forma de adquirir moeda no jogo é através do UP LEVEL, isso torna a implementação mais fácil, além de ser mais didático para as crianças (é possível implementarmos liberação de determinados itens condicionados ao nível, passível de discussão futura). O MVP pode abstrair nível, experiência, moedas, loja de itens e avatar.

 3) Loja de customização do personagem (roupas e acessórios, possibilidade de PETS futuramente):
    Pela dificuldade da implementação do PET (preferivelmente em 3D) é passível de discussões futuras. A implementação da loja se dará de forma fixa, e após isso, apenas adicionaremos itens à loja. Alguns itens (com mais brilho, cores especiais de preferência em tons vibrantes, ou que fazem alusão à outros universos já existentes) podem ser especialmente caros e raros, isso dá estímulo para o usuário usar mais o software. Além do que, ao adquirir o item e utiliza-lo em seu personagem, todos os seus amigos poderão vê-lo (vide perfil do Pokemon Go).

 4) Moedas que serão utilizadas para compra de itens (citados no item 3):
    É passível de discussões futuras o reward da moeda, possivelmente apenas ao ganhar de nível seja mais eficiente, isso porque estimúla o usuário a conquistar experiência e a passar de nível (e não apenas à coletar moedas). Além do que, o único balanceamento a ser feito será o do XP por ação (foto enviada), o nível de moedas ganhos será fixo para cada nível (o que torna mais fácil de ser balanceado), em outras palavras: Há apenas uma variável de balanceamento para controlarmos (experiência por ação) e não duas (moedas por ação + experiência por ação). *além de deixar o jogo mais didático.

 5) Perfil que será atrelado ao nível do usuário (citado no item 2):
    O objetivo do perfil é criar uma comunidade dentro do jogo (vide Pokemon Go e Transformice), grande parte do estímulo para se tornar melhor em um jogo (e por consequência utilizar o software) é social (o mesmo mecânismo, em devidas proporções, da ascenção social através de status, dinheiro... mas de forma digital e em um micro universo), por isso, o perfil do usuário é parte essencial da gamificação, é passível de discussão futuras quais valências serão mostradas no perfil, mas com certeza o nível do jogador (exemplo de possíveis adições: quantidade de fotos postadas, quantidade de eventos vencidos...).

 6) Eventos (bônus de experiência):
    Quais eventos serão implementados pode ser passível de discussões futuras, e para não ser necessário criarmos novos eventos, podemos em ciclo, pré definirmos eventos (de acordo com o dia da semana por exemplo). Exemplo de evento: Segunda-feira é necessário postar foto da fachada da sua escola, ou de árvores, ou de cachorros na rua, ou de monumentos...

 7) Ranking atrelados aos eventos (citado no item 6):
    É possível (passível de discussões futuras) criarmos um ranking para cada evento, suponhamos que segunda feira seja o dia do monumento, o usuário que postar mais fotos de monumentos (não repetidas, será validada por um administrador) ficará top 1 no raking, e assim sucessivamente. O problema é que a validação deve ser instântanea para isso ser efetivo, nenhum usuário vai querer que o ranking seja divuldade no dia seguinte, ou na semana seguinte (a depender da validação de alguma pessoa real, chamada de administrador), isso cria uma demanda desnecessária de um administrador para validar as fotos (interessante seria implementação de IA, mas aumenta demais a complexidade do projeto por um benefício questionável).


import citoGif from '../gif/citoesqueleto.gif'
import golgiGif from '../gif/golgi.gif'
import membGif from '../gif/membrana.gif'
import nucleoGif from '../gif/nucleo.gif'
import perGif from '../gif/peroxissomo.gif'
import mitGif from '../gif/mitocondria.gif'
import lisGif from '../gif/lisossomo.gif'
import ribGif from '../gif/ribossomo.gif'
import reLis from '../gif/reliso.gif'
import reRug from '../gif/rerugoso.gif'
import centGif from '../gif/centriolos.gif'
import glioxissomo from '../gif/glioxissomo.gif'
import cloroplasto from '../gif/cloroplasto.gif'
import vacuolo from '../gif/vacuolo.gif'

import citomp3 from '../mp3/citoesqueleto.mp3'
import golgimp3 from '../mp3/golgi.mp3'
import membmp3 from '../mp3/membrana.mp3'
import nucleomp3 from '../mp3/nucleo.mp3'
import permp3 from '../mp3/peroxissomo.mp3'
import mitmp3 from '../mp3/mitocondria.mp3'
import lismp3 from '../mp3/lisossomo.mp3'
import ribmp3 from '../mp3/ribossomo.mp3'
import reLisMp3 from '../mp3/reliso.mp3'
import reRugMp3 from '../mp3/rerugoso.mp3'
import centmp3 from '../mp3/centriolos.mp3'
import paredemp3 from '../mp3/parede_veg.mp3'
import glioxissomomp3 from '../mp3/glioxissomo.mp3'
import cloroplastomp3 from '../mp3/cloroplasto.mp3'
import plasmodesmomp3 from '../mp3/plasmodesmo.mp3'
import vacuolomp3 from '../mp3/vacuolo.mp3'
import nucleoidemp3 from '../mp3/nucleoide.mp3'
import mesossomomp3 from '../mp3/mesossomo.mp3'
import plasmideomp3 from '../mp3/plasmideo.mp3'
import capsulamp3 from '../mp3/capsula.mp3'
import fimbriamp3 from '../mp3/fimbria.mp3'
import paredePromp3 from '../mp3/parede_pro.mp3'
import flagelomp3 from '../mp3/flagelo.mp3'

export default {
  name: 'Oragenelas',
  capacity: 24,
  organells: [
    {
      id: 'nucleo',
      animated: false,
      name: 'Núcleo',
      desc:
        'O núcleo é delimitado por uma membrana dupla chamada carioteca a qual possui poros que permitem a comunicação com o citoplasma. Dentro do núcleo, existem um ou mais nucléolos corpúsculos densos não delimitados por membrana onde ocorre a síntese. O acúmulo do RNA ribossômico e sua associação com proteínas para formação da subunidade dos ribossomos. O núcleo coordena e comanda todas as funções celulares através do material genético o DNA que juntamente com proteínas compõem os cromossomos. Quando a célula não está em divisão os cromossomos se apresentam como um emaranhado de filamentos longos e finos de DNA dispersos no fluído nuclear constituindo a chamada cromatina. As porções condensadas da cromatina são conhecidas como éter ou cromatina enquanto as regiões descondensadas constituem a eucromatina.',
      mp3: nucleomp3,
      gif: nucleoGif,
      obj: '[2.0]Núcleo'
    },
    {
      id: 'mitocondria',
      animated: false,
      name: 'Mitocôndria',
      desc:
        'As mitocôndrias têm como função a produção de energia através do processo de respiração celular aeróbica. Esta organela possui duas membranas: uma externa lisa e contínua e outra interna pregueada devido as envaginações que formam as cristas mitocondriais. A membrana interna delimita o interior das mitocôndrias ou seja sua matriz onde está mergulhado o DNA mitocondrial.',
      mp3: mitmp3,
      gif: mitGif,
      obj: '[2.0]Mitocondria'
    },
    {
      id: 'peroxissomo',
      animated: false,
      name: 'Peroxissomo',
      desc:
        'Os peroxissomos são organelas arredondadas delimitadas por uma membrana. Em seu interior encontra-se a enzima catalase, cuja função é decompor o peróxido de hidrogênio substância tóxica que se forma através de algumas reações que ocorrem normalmente nas células.',
      mp3: permp3,
      gif: perGif,
      obj: '[2.0]Peroxissomo'
    },
    {
      id: 'lisossomo',
      animated: false,
      name: 'Lisossomo',
      desc:
        'Os lisossomos surgem como vesículas liberadas pelo complexo de Golgi. Possuem formato geralmente esférico e são constituídas por uma membrana envolvendo enzimas hidrolíticas. Sua função está relacionada à digestão intracelular, tanto de partículas alimentares que são incorporadas pela célula, como de componentes celulares desgastados ou danificados.',
      mp3: lismp3,
      gif: lisGif,
      obj: '[2.0]Lisossomo'
    },
    {
      id: 'citoesqueleto',
      animated: false,
      name: 'Citoesqueleto',
      desc:
        'O citoesqueleto é uma rede tridimensional de fibras proteicas interligadas. É responsável pela forma e sustentação interna das células, pelos movimentos celulares e pela movimentação de certas organelas no interior das células, como é o caso de mitocôndrias e lisossomos.',
      mp3: citomp3,
      gif: citoGif,
      obj: '[2.0] Citoesqueleto'
    },
    {
      id: 'ribossomo',
      animated: false,
      name: 'Ribossomo',
      desc:
        'Os ribossomos, geralmente numerosos, atuam no processo de síntese proteica. São formados por duas subunidades de tamanhos diferentes dispostas uma sobre a outra. Estas subunidades são constituídas basicamente por proteínas e RNA ribossômico. Após o término da síntese proteica ocorre desacoplamento da subunidades ribossômicas que permanecem separadas do citosol até se associarem novamente para dar início a uma nova tradução.',
      mp3: ribmp3,
      gif: ribGif,
      obj: '[2.0]Ribossomo'
    },
    {
      id: 'retEndRug',
      animated: false,
      name: 'Retículo Endoplasmático Rugoso',
      desc:
        'O retículo endoplasmático rugoso é um sistema de canais limitados por membranas lipo proteicas na forma de sáculos e vesículas achatados que se comunicam com a carioteca. Possui ribossomos adquiridos a face da membrana voltada ao citoplasma. Suas funções compreendem o transporte intracelular conduzindo substâncias até o seu ponto de utilização e participação na síntese de proteínas que posteriormente sofreram modificação e endereçamento no complexo de Golgi.',
      mp3: reRugMp3,
      gif: reRug,
      obj: '[2.0]Retículo Endoplasmático Rugoso'
    },
    {
      id: 'retEndLis',
      animated: false,
      name: 'Retículo Endoplasmático Liso',
      desc:
        'O retículo endoplasmático liso é um sistema de canais tubulares limitado por membranas lipoproteicas continuados a partir do retículo endoplasmático rugoso. Não possui ribossomos aderidos. Suas funções compreendem o transporte intracelular de substâncias, síntese de esteroides e outros lipídios, inativação de certos hormônios e de substâncias nocivas ao organismo e também quando são intracelular do impulso nervoso no músculo esquelético.',
      mp3: reLisMp3,
      gif: reLis,
      obj: 'reticulo endoplasmatico'
    },
    {
      id: 'vesicula',
      animated: false,
      name: 'Vesícula',
      desc:
        'O complexo de Golgi constituído por uma pilha de vesículas achatadas e circulares além de outras menores esféricas que brotam a partir das primeiras. Suas membranas são lipoproteicas e nunca apresentam ribossomos aderidos. Suas funções estão relacionadas com a modificação, o armazenamento e o encaminhamento de proteínas produzidas no retículo endoplasmático rugoso, principalmente aquelas a serem secretadas. Além disso o complexo de Golgi promove a formação do acromossomo do espermatozoide e a síntese de polissacarídeos.',
      mp3: golgimp3,
      gif: golgiGif,
      obj: '[2.0]Complexo de Golgi'
    },
    {
      id: 'golgi',
      animated: false,
      name: 'Complexo de Golgi',
      desc:
        'O complexo de Golgi constituído por uma pilha de vesículas achatadas e circulares além de outras menores esféricas que brotam a partir das primeiras. Suas membranas são lipoproteicas e nunca apresentam ribossomos aderidos. Suas funções estão relacionadas com a modificação, o armazenamento e o encaminhamento de proteínas produzidas no retículo endoplasmático rugoso, principalmente aquelas a serem secretadas. Além disso o complexo de Golgi promove a formação do acromossomo do espermatozoide e a síntese de polissacarídeos.',
      mp3: golgimp3,
      gif: golgiGif,
      obj: '[2.0]Complexo de Golgi'
    },
    {
      id: 'centriolos',
      animated: false,
      name: 'Centríolo',
      desc:
        'O centríolo é uma estrutura cilíndrica constituída por nove feixes de três microtúbulos paralelos. Os centríolos estão ausentes em procariontes e nas plantas com flores enquanto que nos animais dois centríolos perpendiculares geralmente estão presentes. Após duplicarem-se, orientam a formação das fibras do fuso durante a divisão celular. Também atuam na formação de cílios e flagelos.',
      mp3: centmp3,
      gif: centGif,
      obj: '[2.0]Estrutura'
    },
    {
      id: 'membPlasm',
      animated: true,
      name: 'Membrana Plasmática',
      desc:
        'A membrana plasmática auxilia a manter praticamente constante a composição química do citoplasma, controlando seletivamente a entrada e a saída de várias substâncias. Embora permita livre passagem de algumas pequenas moléculas neutras como água, oxigênio e gás carbônico. Ela é composta por duas camadas fluidas de moléculas de lipídios e por proteínas que podem estar mergulhadas ou somente associadas a estas camadas. A superfície da membrana plasmática em contato com os meios intra e extra celulares são hidrofílicas enquanto o seu interior é hidrofóbico.',
      mp3: membmp3,
      gif: membGif,
      obj: 'Paleta nova - Utopia.glb'
    },
    {
      id: 'paredeCelular',
      animated: false,
      name: 'Parede Celular',
      desc:
        'A parede celular é a estrutura mais externa das células vegetais. É constituída basicamente por celulose, uma macro molécula pertencente ao grupo dos carboidratos. Por ser espessa e rígida, ela oferece sustentação e proteção mecânica aos demais componentes celulares. A parede celular também fornece resistência ao aumento excessivo do volume da célula causada pela entrada de água, mantendo assim a sua forma e evitando o seu rompimento.',
      mp3: paredemp3,
      gif: 'null'
    },
    {
      id: 'glioxissomo',
      animated: false,
      name: 'Glioxissomo',
      desc:
        'Os glioxissomos são organelas delimitadas por membrana em cujo interior encontra se enzimas responsáveis pela conversão de lipídios em açúcares.',
      mp3: glioxissomomp3,
      gif: glioxissomo
    },
    {
      id: 'cloroplasto',
      animated: false,
      name: 'Cloroplasto',
      desc:
        'Os cloroplastos são organelas responsáveis pelo processo de fotossíntese e que possuem o seu próprio DNA. São delimitados por duas membranas lipoproteicas e preenchidos por um fluído gelatinoso chamado Estroma, no qual estão mergulhadas pilhas de discos membranosos conectadas entre si por lamelas. Cada pilha é denominada Grano enquanto os discos, estruturas que contêm o pigmento de clorofila, são os tilacóides.',
      mp3: cloroplastomp3,
      gif: cloroplasto
    },
    {
      id: 'plasmodesmo',
      animated: false,
      name: 'Plasmodesmo',
      desc:
        'Os plasmodesmos são regiões de contato entre células vegetais vizinhas. São originados pela ausência de deposição de celulose e na parede celular. Através desses canais há intercâmbio de substâncias entre as células.',
      mp3: plasmodesmomp3,
      gif: 'null'
    },
    {
      id: 'vacuolo',
      animated: false,
      name: 'Vacúolo',
      desc:
        'Os vacúolos contêm uma solução aquosa de sais, carboidratos, proteínas, entre outros compostos, delimitada por uma membrana lipoproteica denominada tonoplasto. Além de participar do controle do equilíbrio osmótico celular, alterando a sua concentração com trocas de volume de água com o meio extracelular os vacúolos atuam como depósitos de substâncias.',
      mp3: vacuolomp3,
      gif: vacuolo
    },
    {
      id: 'nucleoide',
      animated: false,
      name: 'Nucleóide',
      desc:
        'O nucleóide é a região da célula procariótica na qual o material genético se concentra. Não é delimitado por membranas e uma única molécula de DNA circular fica diretamente mergulhada no citoplasma.',
      mp3: nucleoidemp3,
      gif: 'null'
    },
    {
      id: 'mesossomo',
      animated: false,
      name: 'Mesossomo',
      desc:
        'O mesossomo é uma envaginação da membrana plasmática na qual o DNA geralmente se liga. Na região do mesossomo há uma grande concentração de enzimas, principalmente aquelas relacionadas com a respiração.',
      mp3: mesossomomp3,
      gif: 'null'
    },
    {
      id: 'plasmideo',
      name: 'Plasmídeo',
      desc:
        'O plasmídeo é uma pequena molécula de DNA circular independente do nucleóide. Possui genes que favorecem ou procarioto mas que não são essenciais a ele.',
      mp3: plasmideomp3,
      gif: 'null',
      animated: true,
      obj: 'Plamídio.glb'
    },
    {
      id: 'capsula',
      animated: false,
      name: 'Cápsula',
      desc:
        'Em algumas células procarióticas pode haver, externamente a parede celular, um aglomerado de substâncias viscosas denominado cápsula. A cápsula atua como um envoltório protetor e aumenta o poder de infecção das bactérias patogênicas.',
      mp3: capsulamp3,
      gif: 'null'
    },
    {
      id: 'fimbria',
      animated: false,
      name: 'Fímbria',
      desc:
        'As fímbrias podem estar presentes tanto em procariotos móveis como naqueles sem movimento. Nas raras ocasiões nas quais há conjugação, ou seja a reprodução sexuada de procariotos, o material genético é transferido de um indivíduo para outro por intermédio das fímbrias.',
      mp3: fimbriamp3,
      gif: 'null'
    },
    {
      id: 'paredeCelularPro',
      animated: false,
      name: 'Parede Celular',
      desc:
        'A célula procariótica é delimitada pela parede celular, uma estrutura espessa e rígida formada principalmente por peptoglicanos, macromoléculas constituídas por carboidratos e pequenos peptídeos. A parede celular oferece sustentação e proteção mecânica aos constituintes celulares, além de fornecer resistência ao aumento excessivo de volume causado pela entrada de água mantendo na forma da célula evitando seu rompimento.',
      mp3: paredePromp3,
      gif: 'null'
    },
    {
      id: 'flagelo',
      animated: false,
      name: 'Flagelo',
      desc:
        'As bactérias que apresentam movimento, fazem-no através do batimento de flagelos. Estes são formados por proteínas especiais que emergem na parede celular e na membrana plasmática.',
      mp3: flagelomp3,
      gif: 'null'
    }
  ]
}
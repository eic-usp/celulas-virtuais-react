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

export default{
    "name": "Oragenelas Animais",
    "capacity": 12,
    "organells": [

        {
            "id":"nucleo",
            "name": "Núcleo",
            "desc": "O núcleo é delimitado por uma membrana dupla chamada carioteca a qual possui poros que permitem a comunicação com o citoplasma. Dentro do núcleo, existem um ou mais nucléolos corpúsculos densos não delimitados por membrana onde ocorre a síntese. O acúmulo do RNA ribossômico e sua associação com proteínas para formação da subunidade dos ribossomos. O núcleo coordena e comanda todas as funções celulares através do material genético o DNA que juntamente com proteínas compõem os cromossomos. Quando a célula não está em divisão os cromossomos se apresentam como um emaranhado de filamentos longos e finos de DNA dispersos no fluído nuclear constituindo a chamada cromatina. As porções condensadas da cromatina são conhecidas como éter ou cromatina enquanto as regiões descondensadas constituem a eucromatina.",
            "mp3":nucleomp3,
            "gif":nucleoGif,
        },
        {
            "id": "mitocondria",
            "name": "Mitocôndria",
            "desc": "As mitocôndrias têm como função a produção de energia através do processo de respiração celular aeróbica. Esta organela possui duas membranas: uma externa lisa e contínua e outra interna pregueada devido as envaginações que formam as cristas mitocondriais. A membrana interna delimita o interior das mitocôndrias ou seja sua matriz onde está mergulhado o DNA mitocondrial.",
            "mp3":mitmp3,
            "gif":mitGif
        },
        {
            "id": "peroxissomo",
            "name": "Peroxissomo",
            "desc": "Os peroxissomos são organelas arredondadas delimitadas por uma membrana. Em seu interior encontra-se a enzima catalase, cuja função é decompor o peróxido de hidrogênio substância tóxica que se forma através de algumas reações que ocorrem normalmente nas células.",
            "mp3":permp3,
            "gif":perGif
        },
        {
            "id": "lisossomo",
            "name": "Lisossomo",
            "desc": "Os lisossomos surgem como vesículas liberadas pelo complexo de Golgi. Possuem formato geralmente esférico e são constituídas por uma membrana envolvendo enzimas hidrolíticas. Sua função está relacionada à digestão intracelular, tanto de partículas alimentares que são incorporadas pela célula, como de componentes celulares desgastados ou danificados.",
            "mp3":lismp3,
            "gif":lisGif
        },
        {
            "id": "citoesqueleto",
            "name": "Citoesqueleto",
            "desc": "O citoesqueleto é uma rede tridimensional de fibras proteicas interligadas. É responsável pela forma e sustentação interna das células, pelos movimentos celulares e pela movimentação de certas organelas no interior das células, como é o caso de mitocôndrias e lisossomos.",
            "mp3":citomp3,
            "gif":citoGif
        },
        {
            "id": "ribossomo",
            "name": "Ribossomo",
            "desc": "Os ribossomos, geralmente numerosos, atuam no processo de síntese proteica. São formados por duas subunidades de tamanhos diferentes dispostas uma sobre a outra. Estas subunidades são constituídas basicamente por proteínas e RNA ribossômico. Após o término da síntese proteica ocorre desacoplamento da subunidades ribossômicas que permanecem separadas do citosol até se associarem novamente para dar início a uma nova tradução.",
            "mp3":ribmp3,
            "gif":ribGif
        },
        {
            "id": "retEndRug",
            "name": "Retículo Endoplasmático Rugoso",
            "desc": "O retículo endoplasmático rugoso é um sistema de canais limitados por membranas lipo proteicas na forma de sáculos e vesículas achatados que se comunicam com a carioteca. Possui ribossomos adquiridos a face da membrana voltada ao citoplasma. Suas funções compreendem o transporte intracelular conduzindo substâncias até o seu ponto de utilização e participação na síntese de proteínas que posteriormente sofreram modificação e endereçamento no complexo de Golgi.",
            "mp3":reRugMp3,
            "gif":reRug
        },
        {
            "id": "retEndLis",
            "name": "Retículo Endoplasmático Liso",
            "desc": "O retículo endoplasmático liso é um sistema de canais tubulares limitado por membranas lipoproteicas continuados a partir do retículo endoplasmático rugoso. Não possui ribossomos aderidos. Suas funções compreendem o transporte intracelular de substâncias, síntese de esteroides e outros lipídios, inativação de certos hormônios e de substâncias nocivas ao organismo e também quando são intracelular do impulso nervoso no músculo esquelético.",
            "mp3":reLisMp3,
            "gif":reLis
        },
        {
            "id": "vesicula",
            "name": "Vesícula",
            "desc": "O complexo de Golgi constituído por uma pilha de vesículas achatadas e circulares além de outras menores esféricas que brotam a partir das primeiras. Suas membranas são lipoproteicas e nunca apresentam ribossomos aderidos. Suas funções estão relacionadas com a modificação, o armazenamento e o encaminhamento de proteínas produzidas no retículo endoplasmático rugoso, principalmente aquelas a serem secretadas. Além disso o complexo de Golgi promove a formação do acromossomo do espermatozoide e a síntese de polissacarídeos.",
            "mp3":golgimp3,
            "gif":golgiGif
        },
        {
            "id": "golgi",
            "name": "Complexo de Golgi",
            "desc":"O complexo de Golgi constituído por uma pilha de vesículas achatadas e circulares além de outras menores esféricas que brotam a partir das primeiras. Suas membranas são lipoproteicas e nunca apresentam ribossomos aderidos. Suas funções estão relacionadas com a modificação, o armazenamento e o encaminhamento de proteínas produzidas no retículo endoplasmático rugoso, principalmente aquelas a serem secretadas. Além disso o complexo de Golgi promove a formação do acromossomo do espermatozoide e a síntese de polissacarídeos.",
            "mp3":golgimp3,
            "gif":golgiGif
        },
        {
            "id": "centriolo",
            "name": "Centríolos",
            "desc": "O centríolo é uma estrutura cilíndrica constituída por nove feixes de três microtúbulos paralelos. Os centríolos estão ausentes em procariontes e nas plantas com flores enquanto que nos animais dois centríolos perpendiculares geralmente estão presentes. Após duplicarem-se, orientam a formação das fibras do fuso durante a divisão celular. Também atuam na formação de cílios e flagelos.",
            "mp3":centmp3,
            "gif":centGif
        },
        {
            "id": "paredeCelular",
            "name": "Membrana Plasmática",
            "desc": "A membrana plasmática auxilia a manter praticamente constante a composição química do citoplasma, controlando seletivamente a entrada e a saída de várias substâncias. Embora permita livre passagem de algumas pequenas moléculas neutras como água, oxigênio e gás carbônico. Ela é composta por duas camadas fluidas de moléculas de lipídios e por proteínas que podem estar mergulhadas ou somente associadas a estas camadas. A superfície da membrana plasmática em contato com os meios intra e extra celulares são hidrofílicas enquanto o seu interior é hidrofóbico.",
            "mp3":membmp3,
            "gif":membGif
        }

    ]
}
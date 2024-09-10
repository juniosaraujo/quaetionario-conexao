const questionarios = [
    { 
        perguntas: [
            'De 0 a 5, o quanto você se sente a vontade para elogiar seu chefe quando acha pertinente?',	
            'De 0 a 5, o quanto você acha que está apresentando seu trabalho para seu chefe?',	
            'De 0 a 5, o quanto você consegue contribuir com as ideias do seu chefe?',	
            'De 0 a 5, o quanto  você vê coerência nas ideias do seu chefe?',	
            'De 0 a 5, o quanto você concorda com seu chefe na frente da equipe, reforçando o que ele, fala ou vende para o time?',	
            'De 0 a 5 o quanto você consegue dar a sua opinião para seu chefe abertamente, sem frio na barriga?',	
            'De 0 a 5 o quanto você consegue ser você mesma quando está em momentos com seu chefe?',	
            'De 0 a 5 o quanto você mantém diálogo frequente (diário/ 2 em 2 dias) com seu chefe sobre temas de trabalho ou outros assuntos?',	
            'De 0 a 5, o quanto você toma iniciativas para ajudar seu chefe quando percebe que ele está necessitando de ajuda?',	
            'De 0 a 5, o quanto você se sente a vontade para tirar dúvidas com seu chefe sem temer ser mal interpretada?',	
            'De 0 a 5, o quanto você sente medo de falar com seu chefe?',	
            'De 0 a 5, o quanto seu chefe te conhece e é capaz de te descrever, descrever suas qualidades?',	
            'De 0 a 5, o quanto seu chefe te conhece, te chama pelo nome, sabe um pouco de sua vida, suas preferências?',	
            'De 0 a 5, o quanto você tem assuntos extra-trabalho com seu chefe?',	
            'De 0 a 5, o quanto você considera o seu chefe uma boa companhia?',	
            'De 0 a 5, o quanto seu chefe conhece sua trajetória profissional e sabe suas ambições?',	
            'De 0 a 5, o quanto você confia que seu chefe saberá conduzir o melhor para sua carreira e desenvolvimento?',	
            'De 0 a 5, o quanto você se sente a vontade para solicitar demandas pessoas (férias, folgas, horários, etc)?',	
            'De 0 a 5, o quanto você consegue pedir ajuda a seu chefe para garantir suas entregas sem preocupação de ser mal interpretada?',	
            'De 0 a 5, o quanto você consegue pedir mais prazo para garantir suas entregas?',	
            'De 0 a 5, o quanto você se sente a vontade pra mostrar pra seu chefe o q vc tem feito?',	
            'De 0 a 5, o quanto você perdoa erros do seu chefe genuinamente?',	
            'De 0 a 5, o quanto você Sinaliza a seu chefe que ele tá errado?',	
            'De 0 a 5, o quanto você tem uma relação saudável, de respeito mútuo?',	
            'De 0 a 5, o quanto você admira seu chefe como profissional?'
        ],
        imagem: "img/topo_conexao.png", 
        imagemResultado: "img/resultado_1.png" 
    },
    { 
         
        perguntas: [
            'De 0 a 5, o quanto você acha que no dia a dia está apresentando bem seus resultados para seu chefe?',	
            'De 0 a 5, o quanto você costuma prestar contas com seu chefe daquilo que ele lhe solicitou mesmo quando ele esquece de cobrar?',
            'De 0 a 5, o quanto você acha que seu chefe tem percebido seus resultados e entregas?',	
            'De 0 a 5, o quanto você está apresentando seus resultados/trabalho para seus colegas?',	
            'De 0 a 5, o quanto seus liderados ou pares falariam de forma positiva sobre o seu trabalho?',	
            'De 0 a 5, o quanto seus clientes falariam bem de você para seu chefe?',	
            'De 0 a 5, o quanto você sabe falar sobre si mesma e suas entregas e feitos do trabalho?',	
            'De 0 a 5, o quanto você fala sobre suas entregas para os demais colegas de trabalho (celebrando conquistas, pedindo ajuda, contando sua rotina), mostrando a importância do que você faz?',
            'De 0 a 5, o quanto você pede ajuda de colegas mais experientes para pedir ajuda para garantir suas entregas? (essa é uma ótima forma de mostrar seu trabalho)',	
            'De 0 a 5, o quanto você faz a diferença dentro de sua equipe, dividindo o que sabe, participando, interagindo, tentando agregar?',	
            'De 0 a 5, o quanto você se dedica a seus relacionamento de trabalho, se esforçando para participar bem de momento de interações (cafezinho, almoço, happy hour, etc)?',	
            'De 0 a 5, o quanto você se dedica a observar o trabalho de seus colegas e elogiá-los quando oportuno?',	
            'De 0 a 5, o quanto você é convidado a opinar sobre situações, questões, projetos do dia a dia de trabalho? O quanto querem te ouvir?',	
            'De 0 a 5, o quanto você toma iniciativas em relação às tarefas?',	
            'De 0 a 5, o quanto você tem recebido elogios e reconhecimentos sobre o que tem entregue?',	
            'De 0 a 5, o quanto você garante suas entregas do dia a dia sem que precise ser demandado, ou seja, autonomamente?',	
            'De 0 a 5, o quanto você é assíduo em suas entregas: cumpre prazos ou até os adianta?',	
            'De 0 a 5, o quanto outras pessoas tem te procurado em busca de boas práticas de trabalho ou para entender melhor do que você faz?',	
            'De 0 a 5, o quanto você interage com colegas de trabalho fora da rotina de trabalho (em happy hours, confraternizações, em redes sociais privadas ou mesmo de forma mais simples, lembrando e interagindo em datas especiais extra trabalho)?',	
            'De 0 a 5, o quanto você se sente capaz de explicar ao seu chefe o que você faz e como faz para atingir os resultados?',	
            'De 0 a 5, o quanto você se sente capaz de explicar ao superior do seu chefe o que você faz e como faz para atingir os resultados?',	
            'De 0 a 5, o quanto você fala sobre o que quer em sua carreira para pessoas ao seu redor, inclusive as do traalho?',	
            'De 0 a 5 o quanto você aproveita oportunidades de exposição como treinamentos, reuniões etc para mostrar o que tem feito?'

        ], 
        imagem: "img/topo_conexao_2.png", 
        imagemResultado: "img/resultado_2.png" 
    },
    { 
         
        perguntas: [
            'De 0 a 5, o quanto você ainda se preocupa em tomar atitudes temendo como será interpretado?',	
            'De 0 a 5, o quanto você se preocupa em fazer tudo da forma mais correta e perfeita possível?',	
            'De 0 a 5, o quanto você está preso na idéia de que a única forma de prosperar é sendo líder de uma equipe?',	
            'De 0 a 5, avaliando hoje, sua expectativa com seu líder é alta? Espera mais dele, já que ele é o líder? Coloque 5 se tiver alta expectativa.',	
            'De 0 a 5, o quanto você acredita que para liderar é preciso ter pulso firme e ser disciplinador?',	
            'De 0 a 5, o quanto você acha que líderes não podem errar, pedir desculpas ou voltar atrás do que afirmam?',	
            'De 0 a 5, o quanto você no seu dia a dia tem dúvidas do tipo "posso ou não posso fazer isso/ falar isso com o time"?',	
            'De 0 a 5, o quanto você concorda com a afirmação "os chefes são chatos"?',	
            'De 0 a 5, o quanto você acredita que o líder precisa repetir o que seus chefes fazem e falam e concordar com tudo que a empresa orienta?',	
            'De 0 a 5, o quanto você concorda com a afirmação "os chefes tem que ter a solução dos problemas".',	
            'De 0 a 5, o quanto você acredita que o líder precisa sempre ajudar todos de sua equipe, mesmo aqueles que se negam a receber ajuda?',	
            'De 0 a 5, o quanto você acredita que o líder tem que ser otimista, animado, sempre com energia lá em cima para motivar sua equipe?',	
            'De 0 a 5, o quanto você  concorda que líderes devem conhecer bastante do negócio pra liderar bem?',	
            'De 0 a 5, o quanto você  concorda com a afirmação de que todo líder deve saber mais que seus liderados para conseguir ensiná-los?',	
            'De 0 a 5, o quanto você  concorda que o líder precisa ser desinibido, extrovertido para buscar melhor o que precisa?',	
            'De 0 a 5, o quanto você  acredita que se um líder é bom para liderar determinada equipe, é bom para liderar qualquer equipe?',	
            'De 0 a 5, o quanto você  concorda que o líder deve sempre ensinar a seus liderados o que precisa ser feito?',	
            'De 0 a 5, o quanto você  concorda que líderes com vocação para liderar serão bons líderes?',	
            'De 0 a 5, o quanto você  concorda com a afirmação "o líder é o maior responsável pelo desenvolvimento de cada pessoa do seu time"?',	
            'De 0 a 5, o quanto você  concorda que liderar se aprende lendo e estudando bastante?'
            

        ], 
        imagem: "img/topo_conexao_3.png", 
        imagemResultado: "img/resultado_3.png" 
    }
];

let questionarioAtual = 0;
let perguntaAtual = 0;
let respostas = [];

function mostrarPergunta() {
    const questionario = questionarios[questionarioAtual];
   
    document.getElementById("imagem-questionario").src = questionario.imagem;
    document.getElementById("pergunta").innerText = questionario.perguntas[perguntaAtual];
    if (perguntaAtual === questionario.perguntas.length - 1) {
        document.getElementById("proxima-pergunta").style.display = "none";
        document.getElementById("finalizar-questionario").style.display = "block";
    } else {
        document.getElementById("proxima-pergunta").style.display = "block";
        document.getElementById("finalizar-questionario").style.display = "none";
    }
}

function proximaPergunta() {
    const resposta = parseInt(document.getElementById("resposta").value);
    if (isNaN(resposta) || resposta < 0 || resposta > 5) {
        alert("Por favor, insira uma resposta válida entre 0 e 5.");
        return;
    }
    respostas.push(resposta);
    perguntaAtual++;
    mostrarPergunta();
    document.getElementById("resposta").value = "";
}

function finalizarQuestionario() {
    const soma = respostas.reduce((a, b) => a + b, 0);
    document.getElementById("soma-respostas").innerText = `Soma das respostas: ${soma}`;
    document.getElementById("imagem-resultado").src = questionarios[questionarioAtual].imagemResultado;
    document.getElementById("questionario-container").style.display = "none";
    document.getElementById("resultado").style.display = "block";

    // Esconder o botão 'próximo-questionario' independentemente
    document.getElementById("proximo-questionario").style.display = "none"; 

    // Se não for o último questionário, mostrar o botão 'Próximo Questionário'
    if (questionarioAtual < questionarios.length - 1) {
        document.getElementById("proximo-questionario").style.display = "block";
    } else {
        // Se for o último questionário, mostrar apenas o botão 'Fechar'
        document.getElementById("fechar").style.display = "block";
    }
}

function proximoQuestionario() {
    questionarioAtual++;
    perguntaAtual = 0;
    respostas = [];
    document.getElementById("resultado").style.display = "none";
    document.getElementById("questionario-container").style.display = "block";
    mostrarPergunta();
}

function fechar() {
    window.close();
}

mostrarPergunta();

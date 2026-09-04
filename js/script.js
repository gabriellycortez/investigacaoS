const CASES={
1:{
 label:"CASO 001",title:"OFFLINE",solution:"Caio",
 suspects:["Marina","Lucas","Beatriz","Rafael","Júlia","Caio"],
 clues:[
 ["ABERTURA","O INCIDENTE",`SEGUNDA-FEIRA — 07:18\n\nMensagens começam a circular em grupos da turma. Prints parecem mostrar Marina falando mal de colegas. Uma conta anônima publica montagens e informações pessoais.\n\n07:32 — Marina pede ajuda.\n08:04 — a postagem anônima desaparece.\n10:47 — Marina recebe: "Se você contar quem fez isso, todo mundo vai descobrir o que você realmente fez."`,"Qual é a primeira atitude correta?",["Escolher o suspeito mais provável","Preservar e verificar as evidências antes de concluir","Compartilhar os prints para pedir opiniões","Apagar as mensagens"],1],
 ["EVIDÊNCIA","O PRIMEIRO PRINT",`ARQUIVO: conversa.png\n\n22:14 — MARINA: "Eu não aguento mais a Beatriz."\n22:15 — MARINA: "Vou fazer ela se arrepender."\n\nO print foi apresentado como ameaça.`,"O que precisa ser verificado antes de tratar o print como prova?",["Se Marina é popular","Origem, contexto e integridade do arquivo","Se Beatriz ficou nervosa","Se Rafael entende de computador"],1],
 ["METADADOS","QUANDO O PRINT NASCEU",`PROPRIEDADES DO ARQUIVO\nCriado: 07:31\nModificado: 07:34\nCaptura alegada: noite anterior\n\nO horário de criação é posterior ao suposto momento da conversa.`,"Qual conclusão é segura?",["A conversa é automaticamente falsa","O arquivo não corresponde necessariamente ao momento alegado","Caio criou o arquivo","A câmera está errada"],1],
 ["PERFIL","A CONTA ANÔNIMA",`@verdade_sem_filtro\nCriada: domingo, 23:58\nPrimeira postagem: segunda, 07:20\nBio criada com texto copiado de um perfil antigo.\n\nNenhum nome aparece.`,"O que essa pista permite afirmar?",["Quem criou a conta","Que a conta é anônima e usa material reaproveitado","Que Rafael é culpado","Que Marina criou a conta"],1],
 ["MENSAGEM","FORA DE CONTEXTO",`07:21 — "Apaga isso."\n07:22 — "Você prometeu que não ia fazer isso."\n07:23 — "Eu não fui eu."\n\nAs três mensagens foram apresentadas como se fossem uma única conversa.`,"Por que o contexto importa?",["Porque mensagens podem ser recortadas e mudar o sentido","Porque toda mensagem é falsa","Porque só a IA entende mensagens","Porque horários não importam"],0],
 ["REGISTRO","O PRIMEIRO ACESSO",`07:25 — login na conta de Marina\nMétodo: sessão salva\nDispositivo: PC-LAB-03\n07:29 — arquivo original acessado\n07:31 — screenshot criado`,"O registro prova quem estava diante do computador?",["Sim","Não"],1],
 ["ACESSO","A SENHA ANTIGA",`Marina: "Troquei minha senha ontem."\n\nAnotação encontrada em conversa antiga:\n"Se esquecer, pergunta ao Caio. Ele lembra da sua senha antiga."`,"O que isso acrescenta?",["Caio necessariamente invadiu a conta","Caio tinha conhecimento de uma credencial antiga","Caio estava no laboratório às 07:25","A senha antiga continua válida para sempre"],1],
 ["CÂMERA","A ENTRADA",`CÂMERA 02 — CORREDOR\n07:24 — Beatriz entra no laboratório.\n07:28 — Beatriz sai.\n\nCÂMERA 03 — corredor lateral\n07:29–07:32 — SEM GRAVAÇÃO.`,"Qual é a limitação?",["A câmera prova que Beatriz enviou o arquivo","Existe uma janela sem imagem","A câmera identifica senhas","Beatriz não entrou"],1],
 ["HASH","DOIS PRINTS",`ARQUIVO A — hash SHA-256: 91af...\nARQUIVO B — hash SHA-256: 3c22...\n\nVisualmente idênticos.\nHashes diferentes.`,"O que isso indica?",["São necessariamente arquivos iguais","Algum conteúdo/byte do arquivo é diferente","Hash identifica a pessoa que criou","A IA deve decidir"],1],
 ["IA","ANÁLISE 01",`ANÁLISE DE AUTORIA — ferramenta experimental\nProbabilidade de autoria textual:\nRafael 82%\nOutros abaixo de 10%\n\nAviso: resultado estatístico, não prova individual.`,"Como usar esse resultado?",["Como sentença definitiva","Como uma pista que precisa ser confrontada com outras evidências","Como substituto dos registros","Como prova de localização"],1],
 ["IA","ANÁLISE 02",`SEGUNDA FERRAMENTA — MESMO MATERIAL\nRafael 34%\nJúlia 29%\nCaio 18%\n\nOs resultados são incompatíveis com a primeira análise.`,"Podemos considerar a IA uma prova definitiva?",["Sim","Não"],1],
 ["CONTRADIÇÃO","RAFAEL",`Rafael afirma: "Eu estava no ônibus às 07:25."\nRegistro do cartão de transporte: 07:19 — embarque.\nTempo estimado até a escola: 18 min.\n\n07:29 — o celular de Rafael conecta-se a uma torre próxima ao bairro da escola.`,"O registro sozinho prova que Rafael estava no laboratório?",["Sim","Não"],1],
 ["CONTRADIÇÃO","BEATRIZ",`Beatriz entrou às 07:24 e saiu às 07:28.\nO arquivo foi criado às 07:31.\nA câmera lateral fica sem imagem de 07:29 a 07:32.`,"O que permanece possível?",["Ela não pode ter feito nada","A janela sem câmera impede uma conclusão só pela gravação","A câmera prova que ela voltou","O arquivo foi criado às 07:24"],1],
 ["ARQUIVO","O ORIGINAL",`ARQUIVO ORIGINAL: IMG_4821.png\nCriado: 07:28\nModificado: 07:34\nLocal: pasta sincronizada da conta de Marina\n\nO print que circulou foi uma cópia modificada.`,"Por que o original é importante?",["Permite comparar a versão que circulou com a fonte","Porque arquivos originais sempre mostram o culpado","Porque elimina todos os suspeitos","Porque substitui os depoimentos"],0],
 ["MENSAGEM","A FRASE APAGADA",`RECUPERAÇÃO DE CHAT\n06:58 — MARINA: "Eu troquei a senha ontem."\n07:03 — CAIO: "Ainda lembra daquela senha antiga?"\n07:04 — MARINA: "Por que você quer saber?"\n\nA resposta de Caio não foi seguida de explicação.`,"Por que essa mensagem ganha importância depois?",["Porque demonstra conhecimento prévio da credencial","Porque prova que Caio estava no PC-LAB-03","Porque prova que Caio criou a conta","Porque mensagens antigas não podem ser analisadas"],0],
 ["SESSÃO","A SESSÃO SALVA",`CONFIGURAÇÃO DO PC-LAB-03\nConta: MARINA\n"Manter sessão conectada": ATIVADO\n\nIsso permitia abrir a conta sem digitar novamente a senha naquele computador.`,"Qual é a diferença entre acesso e identidade?",["Acesso registrado não identifica automaticamente a pessoa","São sempre a mesma coisa","Identidade só existe com IA","Nenhuma"],0],
 ["TIMELINE","RECONSTRUÇÃO",`07:03 — Caio pergunta pela senha antiga\n07:18 — primeiras mensagens circulam\n07:24 — Beatriz entra no laboratório\n07:25 — sessão de Marina é acessada\n07:28 — original é criado\n07:29–07:32 — câmera lateral sem gravação\n07:31 — screenshot criado\n07:34 — arquivo modificado`,"Qual pista deve ser cruzada com a timeline para buscar o responsável?",["Conhecimento prévio de acesso","Cor favorita dos suspeitos","Número de seguidores","Opinião da turma"],0],
 ["IA","A ARMADILHA",`A IA recebe a pergunta: "Quem parece mais suspeito?"\nResposta: RAFAEL.\n\nQuando recebe: "Quem tinha conhecimento de uma credencial antiga?", a resposta muda.\n\nA pergunta altera o resultado.`,"O que isso ensina?",["O resultado depende do material e da pergunta","IA sempre mente","IA nunca pode ser usada","A primeira resposta é a correta"],0],
 ["EVIDÊNCIA","SEM HACK",`Nenhum log indica quebra de senha.\nNenhum alerta indica força bruta.\nA sessão já estava salva.\n\nA ação ocorreu por um acesso disponível, não por uma invasão sofisticada.`,"Qual hipótese ganha força?",["Alguém pode ter usado um acesso já disponível","Um hacker externo obrigatoriamente entrou","O computador criou sozinho o print","A câmera causou o vazamento"],0],
 ["CONEXÃO","QUEM SABIA?",`MARINA — dona da conta\nRAFAEL — conhece tecnologia\nBEATRIZ — acesso físico ao laboratório\nLUCAS — recebeu mensagens cedo\nJÚLIA — brigou com Marina\nCAIO — conhecia a senha antiga e sabia que Marina havia trocado a senha`,"Qual informação diferencia Caio dos demais?",["Ele conhecia uma credencial antiga antes do incidente","Ele era amigo de Marina","Ele sabia usar celular","Ele estava no grupo"],0],
 ["ÚLTIMA EVIDÊNCIA","O ACESSO",`HISTÓRICO DE RECUPERAÇÃO\n07:25 — tentativa de acesso por credencial antiga\nConta: MARINA\nResultado: sessão encontrada no PC-LAB-03\n\nA credencial antiga estava associada ao conhecimento prévio de Caio.`,"O que essa evidência deve ser combinada com?",["A pista 16 sobre a sessão salva e a pista 7 sobre a senha antiga","Somente a opinião da IA","Somente a câmera","O número de seguidores"],0],
 ["VIRADA","NÃO FOI UM HACK",`A investigação aponta para uma solução menos cinematográfica:\n\nninguém precisou quebrar a senha.\n\nAlguém usou uma credencial que já conhecia e aproveitou uma sessão disponível para acessar, copiar e manipular o conteúdo.`,"Qual explicação é mais coerente com o conjunto?",["Uso indevido de acesso já conhecido","Ataque externo sem rastros","Erro automático do computador","A IA inventou o incidente"],0],
 ["FECHAMENTO","A CADEIA COMPLETA",`07:03 — Caio demonstra conhecer a senha antiga.\n07:25 — acesso à conta por sessão/credencial disponível.\n07:28 — arquivo original é acessado.\n07:31 — screenshot é criado.\n07:34 — cópia é modificada.\n\nAs pistas de Rafael e Beatriz explicam oportunidades parciais, mas não fecham a cadeia inteira.`,"O que uma boa acusação precisa explicar?",["Somente quem parecia suspeito","A sequência completa e as evidências que a sustentam","Somente o motivo","Somente a IA"],1]
]},
2:{
 label:"CASO 002",title:"O ARQUIVO 17",solution:"Beatriz",
 suspects:["Lucas","Beatriz","Rafael","Júlia","Caio"],
 clues:[
 ["ABERTURA","O ARQUIVO VAZADO",`08:10 — um arquivo chamado NOTAS_FINAL_2026.xlsx aparece em um grupo.\n\nAs notas ainda não haviam sido divulgadas.\n\nO arquivo tem uma marca: VERSÃO 17.`,"Qual é a primeira pergunta?",["Quem parece culpado?","Como o arquivo saiu do ambiente restrito?","Quem tem mais amigos?","Quem entende de Excel?"],1],
 ["METADADOS","VERSÃO 17",`Arquivo: NOTAS_FINAL_2026.xlsx\nVersão: 17\nCriado: 07:42\nModificado: 07:49\nAutor do documento: sistema escolar\n\nNão aparece nome de aluno.`,"O que o autor do documento indica?",["Quem vazou","Quem criou o arquivo originalmente no sistema","Quem copiou","Quem enviou ao grupo"],1],
 ["LOG","COMPUTADOR DO PROFESSOR",`07:41 — login do professor\n07:42 — arquivo aberto\n07:44 — arquivo fechado\n\nComputador: SALA-PROF-01`,"O que esse log prova?",["Que o professor vazou","Que o arquivo foi acessado","Que o professor enviou ao grupo","Que ninguém copiou"],1],
 ["PENDRIVE","DISPOSITIVO USB",`07:45 — USB conectado ao SALA-PROF-01\nNome: BACKUP_16GB\n07:46 — arquivo NOTAS_FINAL_2026.xlsx copiado\n07:47 — USB removido`,"Qual é a informação mais relevante?",["Houve uma cópia para um USB","O USB pertence a Beatriz","O professor enviou o arquivo","O arquivo foi criado no USB"],0],
 ["DEPOIMENTO","O TÉCNICO",`Rafael: "Eu usei o computador às 07:50 para testar a impressora."\n\nRegistro da impressora: teste iniciado às 07:50.`,"Esse depoimento contradiz o log?",["Sim","Não"],1],
 ["DEPOIMENTO","BEATRIZ",`Beatriz: "Eu não entrei na sala do professor."\n\nCâmera do corredor: 07:43 — pessoa com mochila semelhante à de Beatriz entra.\n07:48 — pessoa sai.`,"A câmera identifica Beatriz com certeza?",["Sim","Não"],1],
 ["MENSAGEM","O PRIMEIRO ENVIO",`07:52 — Lucas recebe uma mensagem de número desconhecido:\n"Você quer ver as notas antes de todo mundo?"\n07:53 — Lucas responde: "Manda."\n\n07:54 — arquivo chega ao celular de Lucas.`,"Lucas é automaticamente o responsável pelo vazamento?",["Sim","Não"],1],
 ["ARQUIVO","A CÓPIA",`Propriedades da cópia recebida por Lucas:\nNome: notas_final.xlsx\nTamanho: 184 KB\nHash: 8a91...\n\nArquivo original: 191 KB\nHash: 7f21...`,"O que isso sugere?",["A cópia é exatamente igual em bytes","O arquivo recebido não é a mesma versão binária do original","Lucas criou o original","Hash identifica uma pessoa"],1],
 ["TIMELINE","MINUTOS CRÍTICOS",`07:42 — arquivo aberto\n07:46 — cópia para USB\n07:47 — USB removido\n07:48 — pessoa sai da sala\n07:52 — Lucas recebe mensagem\n07:54 — Lucas recebe arquivo`,"Qual evento vem antes do primeiro envio?",["A cópia para USB","A resposta de Lucas","A publicação no grupo","A denúncia"],0],
 ["CONTRADIÇÃO","A MOCHILA",`A câmera mostra uma mochila preta com uma faixa clara.\n\nBeatriz usa mochila preta com faixa clara.\nJúlia também usa mochila preta com faixa clara.\n\nA imagem não mostra o rosto.`,"O que a evidência permite afirmar?",["Beatriz esteve na sala","Uma pessoa com mochila semelhante esteve na sala","Júlia esteve na sala","Ninguém esteve na sala"],1],
 ["REGISTRO","USB REGISTRADO",`O sistema de inventário registra:\nUSB BACKUP_16GB — responsável pelo empréstimo: BEATRIZ\nDevolução prevista: 12:00\n\nNão há registro de devolução às 09:00.`,"Isso prova que Beatriz copiou o arquivo?",["Sim, sozinho","Não, mas cria uma conexão que precisa ser cruzada com os demais registros"],1],
 ["DEPOIMENTO","O ERRO",`Beatriz: "Eu peguei o USB às 08:00."\n\nInventário: retirada às 07:30.`,"O que aconteceu?",["O depoimento contém uma informação incompatível com o registro","O inventário está necessariamente errado","A câmera vira prova absoluta","O arquivo é falso"],0],
 ["MENSAGEM","A MENSAGEM APAGADA",`Recuperada do celular de Beatriz:\n07:39 — "Só preciso copiar uma coisa e devolver."\n\nNão há destinatário visível.`,"Essa pista prova o quê?",["Prova que Beatriz vazou o arquivo","Mostra intenção de copiar algo, mas ainda precisa ser conectada ao arquivo 17","Prova que Júlia enviou","Não significa nada"],1],
 ["CONEXÃO","A CADEIA",`BEATRIZ → retirou USB às 07:30 → sala do professor → cópia às 07:46 → USB removido 07:47 → mensagem às 07:39.\n\nLucas recebeu a cópia depois.\nRafael aparece no local às 07:50.`,"Quem tem a cadeia mais completa?",["Lucas","Beatriz","Rafael","Júlia"],1],
 ["VIRADA","O DESTINATÁRIO",`Lucas não criou a cópia. Ele recebeu o arquivo às 07:54.\n\nRafael só chegou depois da cópia.\nJúlia não aparece ligada ao USB.\n\nA pessoa que retirou o USB tinha uma mensagem anterior dizendo que precisava copiar algo.`,"Qual suspeita é mais sustentada?",["Beatriz","Lucas","Rafael","Júlia"],0],
 ["FECHAMENTO","O QUE REALMENTE ACONTECEU",`A melhor reconstrução é:\n1. Beatriz retirou o USB antes do horário que declarou.\n2. Uma pessoa com sua identificação visual esteve no corredor.\n3. O USB foi conectado ao computador do professor.\n4. O arquivo 17 foi copiado.\n5. Depois, Lucas recebeu a cópia e acabou sendo o primeiro nome associado ao vazamento.`,"Qual princípio foi usado?",["Culpar quem recebeu primeiro","Cruzar cronologia, registros e contradições","Usar apenas a câmera","Escolher quem parece mais técnico"],1]
]},
3:{
 label:"CASO 003",title:"PROTOCOLO ZERO",solution:"Júlia",
 suspects:["Lucas","Rafael","Júlia","Caio"],
 clues:[
 ["ABERTURA","A EVIDÊNCIA PERFEITA",`Uma gravação de tela mostra alguém entrando em uma conta às 16:12.\n\nO vídeo parece provar quem fez a ação.\n\nMas o arquivo de vídeo foi enviado por uma pessoa anônima.`,"O que deve ser investigado primeiro?",["Só o rosto","Origem, autenticidade e contexto da gravação","A opinião da turma","A velocidade do computador"],1],
 ["VÍDEO","FRAME 214",`No frame 214 aparece o nome de usuário.\nNo frame 215, o relógio do sistema marca 16:12.\n\nMetadados do vídeo: criação 18:03.`,"O horário do arquivo é prova do horário da ação?",["Sim","Não"],1],
 ["CONTA","LOGIN",`16:12 — conta acessada\nIP: REDE-ESCOLA\nDispositivo: NOTE-04\n\nO NOTE-04 foi usado por quatro alunos naquele dia.`,"O login identifica uma pessoa?",["Sim","Não"],1],
 ["DEPOIMENTOS","QUATRO VERSÕES",`Lucas: "Usei o NOTE-04 às 15:40."\nRafael: "Usei às 16:30."\nJúlia: "Não usei o NOTE-04."\nCaio: "Usei depois das 17h."`,"Quem ainda precisa ser confrontado com registros?",["Todos","Só Júlia","Só Rafael","Ninguém"],0],
 ["REGISTRO","IMPRESSÃO",`15:58 — impressão pelo usuário JÚLIA no NOTE-04.\n16:04 — logout.\n16:09 — novo login local.\n16:12 — acesso à conta investigada.`,"Isso contradiz Júlia?",["Sim","Não"],0],
 ["REDE","ENDEREÇO",`16:11 — NOTE-04 conectado à rede.\nUsuário de autenticação: JÚLIA.\n16:14 — desconexão.\n\nO sistema registra autenticação individual da rede.`,"Por que essa evidência é mais forte que o IP genérico?",["Porque vincula a autenticação da rede a um usuário","Porque todo IP mostra o culpado","Porque o vídeo deixa de importar","Porque IA confirmou"],0],
 ["ARQUIVO","ORIGEM DO VÍDEO",`O vídeo foi enviado para um grupo às 18:03.\nAntes disso, às 17:55, uma conta secundária de Júlia enviou o mesmo vídeo para armazenamento em nuvem.\n\nO vídeo não foi criado às 18:03; apenas foi enviado naquele momento.`,"O que isso acrescenta?",["Uma ligação entre Júlia e o arquivo de vídeo","Prova que Júlia editou o vídeo","Prova que Júlia criou a conta invadida","Nada"],0],
 ["VIRADA","A GRAVAÇÃO NÃO É A AÇÃO",`O vídeo prova que uma ação aparece na tela.\nOs registros de rede mostram quem estava autenticado.\nO horário e a origem do vídeo explicam como a gravação chegou ao grupo.`,"Qual teoria explica mais evidências?",["Júlia teve acesso e esteve ligada à circulação da gravação","Rafael é culpado porque entende de computador","Lucas é culpado porque estava no NOTE-04 mais cedo","Caio é culpado porque estava na escola"],0],
 ["FECHAMENTO","PROTOCOLO ZERO",`A conclusão precisa combinar:\n• autenticação individual\n• horário do NOTE-04\n• origem do vídeo\n• circulação do arquivo\n\nUma evidência visual pode ser verdadeira e ainda não responder sozinha quem realizou a ação.`,"Qual é a regra final?",["A melhor teoria é a que explica o maior conjunto de evidências","A evidência mais chamativa sempre vence","IA decide","Quem parece culpado deve ser escolhido"],0]
]}
};

let team="", currentCase=1, clue=0, selected=null, unlockedCase=1;
let progress={1:0,2:0,3:0};

function start(){
 team=document.getElementById("teamInput").value.trim()||"Equipe sem nome";
 document.getElementById("teamName").textContent=team;
 localStorage.setItem("invest_team",team);
 show("hub"); renderHub();
}
function show(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));document.getElementById(id).classList.add("active")}
function renderHub(){
 document.getElementById("teamName").textContent=team;
 for(let i=1;i<=3;i++){
   const unlocked=i<=unlockedCase;
   document.getElementById("card"+i).classList.toggle("locked",!unlocked);
   document.getElementById("card"+i).classList.toggle("unlocked",unlocked);
   document.getElementById("status"+i).textContent=unlocked?(i<unlockedCase?"✓ CONCLUÍDO":"● DISPONÍVEL"):"🔒 BLOQUEADO";
 }
 const b2=document.getElementById("btn2"),b3=document.getElementById("btn3");
 b2.disabled=unlockedCase<2;b3.disabled=unlockedCase<3;
 b2.textContent=unlockedCase>=2?"INICIAR CASO 002":"CONCLUA O CASO 001";
 b3.textContent=unlockedCase>=3?"INICIAR CASO 003":"CONCLUA O CASO 002";
 if(unlockedCase>=2)b2.onclick=()=>openCase(2);
 if(unlockedCase>=3)b3.onclick=()=>openCase(3);
}
function openCase(n){
 if(n>unlockedCase)return;
 currentCase=n;clue=0;progress[n]=0;selected=null;
 const c=CASES[n];
 document.getElementById("caseLabel").textContent=c.label;
 document.getElementById("caseTitle").textContent=c.title;
 document.getElementById("gameTeam").textContent=team;
 document.getElementById("accused").innerHTML=c.suspects.map(x=>`<option>${x}</option>`).join("");
 renderClue();show("game");
}
function renderClue(){
 const c=CASES[currentCase], d=c.clues[clue];
 document.getElementById("clueType").textContent=d[0];
 document.getElementById("clueNumber").textContent=`PISTA ${String(clue+1).padStart(2,"0")} / ${c.clues.length}`;
 document.getElementById("clueTitle").textContent=d[1];
 document.getElementById("evidence").textContent=d[2];
 document.getElementById("question").textContent=d[3];
 document.getElementById("feedback").textContent="";
 document.getElementById("nextBtn").disabled=true;
 selected=null;
 const opts=document.getElementById("options");opts.innerHTML="";
 d[4].forEach((o,i)=>{let b=document.createElement("button");b.className="option";b.textContent=o;b.onclick=()=>selectOption(i,b);opts.appendChild(b)});
 document.getElementById("progress").textContent=`${String(clue+1).padStart(2,"0")} / ${c.clues.length}`;
 document.getElementById("bar").style.width=`${(clue/c.clues.length)*100}%`;
 renderGrid();
}
function renderGrid(){
 const c=CASES[currentCase],g=document.getElementById("clueGrid");g.innerHTML="";
 c.clues.forEach((_,i)=>{
  let b=document.createElement("button");b.textContent=String(i+1).padStart(2,"0");
  if(i<clue)b.className="done"; if(i===clue)b.classList.add("current");b.disabled=i>clue;g.appendChild(b);
 });
}
function selectOption(i,b){
 if(selected!==null)return;
 selected=i;const d=CASES[currentCase].clues[clue];
 document.querySelectorAll(".option").forEach(x=>x.disabled=true);
 if(i===d[5]){
   b.classList.add("correct");document.getElementById("feedback").textContent="✓ Análise correta. A próxima evidência foi liberada.";document.getElementById("feedback").style.color="#67e38a";
   document.getElementById("nextBtn").disabled=false;
 }else{
   b.classList.add("wrong");document.getElementById("feedback").textContent="✗ Não fecha com a evidência. Releia o documento e tente novamente.";document.getElementById("feedback").style.color="#e58b8b";
   setTimeout(()=>{document.querySelectorAll(".option").forEach(x=>{x.disabled=false;x.classList.remove("wrong")});selected=null},700);
 }
}
function submitAnswer(){
 if(selected===null)return;
 if(clue<CASES[currentCase].clues.length-1){clue++;renderClue()}
 else{progress[currentCase]=CASES[currentCase].clues.length;show("accuse")}
}
function submitAccusation(){
 const c=CASES[currentCase],acc=document.getElementById("accused").value;
 const motive=document.getElementById("motive").value.trim(),rec=document.getElementById("reconstruction").value.trim();
 const evs=[1,2,3,4].map(x=>document.getElementById("e"+x).value.trim());
 if(!motive||!rec||evs.some(x=>!x)){toast("Preencha todos os campos da acusação.");return}
 const ok=acc===c.solution && evs.filter(x=>/\b([1-9]|1\d|2[0-9])\b/.test(x)).length>=4;
 document.getElementById("resultIcon").textContent=ok?"✓":"⚠";
 document.getElementById("resultTitle").textContent=ok?"CASO RESOLVIDO":"TEORIA INSUFICIENTE";
 document.getElementById("resultText").innerHTML=ok?
 "A equipe apresentou uma conclusão compatível com a solução e sustentou a acusação com evidências numeradas.":
 "A acusação ainda não fecha. Reveja as pistas, a cronologia e principalmente as evidências numeradas.";
 document.getElementById("reveal").innerHTML=ok?
 `<b>REVELAÇÃO:</b> ${c.solution} é a solução deste caso. A força da resposta está na cadeia de evidências, não em uma pista isolada.`:
 `<b>DICA:</b> não procure a pista que diz “foi X”. Procure a pessoa cuja participação explica o maior número de evidências sem contradições.`;
 document.getElementById("result").dataset.ok=ok?"1":"0";show("result");
}
function finishCase(){
 if(document.getElementById("result").dataset.ok!=="1"){show("hub");return}
 if(currentCase===1)unlockedCase=Math.max(unlockedCase,2);
 if(currentCase===2)unlockedCase=Math.max(unlockedCase,3);
 if(currentCase===3){
   document.getElementById("resultIcon").textContent="💛";
   document.getElementById("resultTitle").textContent="PROTOCOLO ENCERRADO";
   document.getElementById("resultText").innerHTML="Vocês investigaram acesso, identidade, arquivos, mensagens e registros. Mas uma investigação também ensina algo sobre a vida real.";
   document.getElementById("reveal").innerHTML="<b>SETEMBRO AMARELO</b><br><br>Assim como uma evidência isolada não foi suficiente para concluir os casos, também não devemos reduzir uma pessoa ao que aparece em uma tela. Ouvir, acolher, perguntar e procurar ajuda também são formas de cuidado.";
   document.querySelector("#result .primary").textContent="ENCERRAR INVESTIGAÇÃO";
   document.querySelector("#result .primary").onclick=()=>show("hub");
   return;
 }
 renderHub();show("hub");
 toast(`CASO ${currentCase+1} DESBLOQUEADO.`);
}
function backHub(){show("hub");renderHub()}
function toast(t){const x=document.getElementById("toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),2500)}
team=localStorage.getItem("invest_team")||"";
if(team)document.getElementById("teamInput").value=team;

// Lesson updates are kept separately so the original archive packages remain intact.
import {septemberUpdate} from './lesson-september.js';
import {september21Update} from './lesson-september21.js';
import {september14Update} from './lesson-september14.js';
import {september05Update} from './lesson-september05.js';
export const draftUpdates = {
  '2026-09-05-q7m2x9k4v8p6': september05Update,
  '2026-09-14-r5n8c2z6w3h9': september14Update,
  '2026-09-21-t4j7m1q8y5k2': september21Update,
  '2026-09-29-1ee19b91bc89fdf1': septemberUpdate,
  '2026-10-17-9b88ed81f56a384d': {
    patterns: [
      {label:'An opinion: present simple',parts:['I','think','the plan is useful.'],explanation:'Think expresses an opinion here.'},
      {label:'An action in progress: present continuous',parts:['I','am','thinking','about the plan.'],explanation:'Think + -ing = thinking. It describes the active process of considering something now.'},
      {label:'A quality',parts:['The soup','tastes','salty.'],explanation:'The soup has this flavour.'},
      {label:'A deliberate action',parts:['The chef','is','tasting','the soup.'],explanation:'The chef is actively checking the flavour. Taste drops its final e before -ing: taste → tasting.'}
    ],
    grammarQuestions: [
      {id:'g1',q:'Which sentence gives an opinion?',opt:['I am thinking about my answer.','I think this idea is useful.','I am tasting the soup.','She is considering a plan.'],a:1},
      {id:'g2',q:'Choose the active process happening now.',opt:['I am thinking about the question.','I believe the answer.','I know the answer.','I understand the question.'],a:0},
      {id:'g3',q:'Choose the natural sentence about possession.',opt:['She is owning a café.','She owning a café.','She owns a café.','She is own a café.'],a:2},
      {id:'g4',q:'Which sentence describes a flavour?',opt:['The cook is tasting the soup.','The cook likes the soup.','The cook is making soup.','The soup tastes salty.'],a:3},
      {id:'g5',q:'Which sentence describes an experience, not possession?',opt:['She has a bicycle.','They are having lunch.','He owns a book.','The book belongs to her.'],a:1},
      {id:'g6',type:'fill',q:'Complete with know: I ___ the answer.',accepted:['know']},
      {id:'g7',type:'fill',q:'Complete with think: She is ___ about the plan now.',accepted:['thinking']},
      {id:'g8',type:'fill',q:'Complete with taste: The sauce ___ delicious.',accepted:['tastes']},
      {id:'g9',type:'fill',q:'Complete with smell: He is ___ the flowers.',accepted:['smelling']},
      {id:'g10',type:'fill',q:'Complete with belong: This bag ___ to my friend.',accepted:['belongs']},
      {id:'g11',q:'True or false: “I think it is useful” expresses an opinion.',opt:['True','False'],a:0},
      {id:'g12',q:'True or false: “I am knowing the answer” is the usual natural form.',opt:['True','False'],a:1},
      {id:'g13',q:'True or false: “The chef is tasting the soup” describes a deliberate action.',opt:['True','False'],a:0},
      {id:'g14',q:'True or false: “The flowers are smelling lovely” is the usual way to describe their smell.',opt:['True','False'],a:1},
      {id:'g15',q:'True or false: Some verbs can describe a state in one sentence and an action in another.',opt:['True','False'],a:0}
    ],
    listening: {
      external:{level:'A1–A2',title:'Speaking or eating? — British Council',instructions:'Watch Sammy and Julia at dinner. Listen for opinions, understanding and everyday actions; then answer the questions here.',url:'https://learnenglish.britishcouncil.org/free-resources/general/video-series/starting-out/episode-05-speaking-or-eating'},
      questions:[
        {id:'l1',q:'Where are Sammy and Julia?',opt:['At a restaurant','At a library','At a train station','At a hospital'],a:0},
        {id:'l2',q:'Why does the caller contact Sammy?',opt:['To order dinner','To ask about a meeting time','To invite him to a concert','To borrow his phone'],a:1},
        {id:'l3',q:'Who is Jack?',opt:['Sammy’s brother','Julia’s colleague','Julia’s cousin','The waiter'],a:2},
        {id:'l4',q:'True or false: Andrea is Sammy’s friend.',opt:['True','False'],a:0},
        {id:'l5',q:'True or false: At the end, Sammy suggests keeping their phones on during the meal.',opt:['True','False'],a:1}
      ]
    },
    vocabularyQuestions:[
      {id:'v1',q:'If you believe an answer, what do you think?',opt:['It is expensive.','It is true.','It is noisy.','It is difficult to read.'],a:1},
      {id:'v2',q:'This coat belongs to Deniz. Who owns it?',opt:['Maya','The chef','Deniz','The shop'],a:2},
      {id:'v3',q:'If you prefer tea to coffee, which do you like more?',opt:['Tea','Coffee','Both equally','Neither'],a:0},
      {id:'v4',q:'Which word is connected with the flavour of soup?',opt:['own','belong','understand','taste'],a:3},
      {id:'v5',q:'You use your nose to notice a ___.',opt:['colour','smell','picture','shape'],a:1},
      {id:'v6',q:'To consider an idea is to ___.',opt:['forget it immediately','sell it','think about it carefully','own it'],a:2},
      {id:'v7',q:'Which phrase introduces an opinion?',opt:['In my opinion','At nine o’clock','In the kitchen','On the table'],a:0},
      {id:'v8',q:'If you understand a question, you know its ___.',opt:['price','colour','owner','meaning'],a:3},
      {id:'v9',q:'If you own a bicycle, it is ___.',opt:['your neighbour’s','yours','in a shop only','always new'],a:1},
      {id:'v10',q:'What does flavour describe?',opt:['How food looks','How food is cooked','How food tastes','Where food is sold'],a:2},
      {id:'v11',q:'Which food may be salty?',opt:['Soup with a lot of salt','A very sweet cake','A fresh apple','Plain water'],a:0},
      {id:'v12',q:'You notice something when you ___.',opt:['lose it','buy it','change it','become aware of it'],a:3},
      {id:'v13',q:'“The idea seems useful” means it ___.',opt:['is a person','gives a useful impression','belongs to a café','tastes useful'],a:1},
      {id:'v14',q:'You recognise a song because you ___.',opt:['have never heard it','wrote every song','know it from before','cannot hear it'],a:2},
      {id:'v15',q:'Which sentence describes an emotion?',opt:['I feel happy.','I own a book.','The bag belongs to me.','The café closes at nine.'],a:0}
    ],
    practice:{
      questions:[
        {id:'p1',q:'The coffee ___ wonderful. It has a lovely smell.',opt:['is smelling','smells','smell is','smelling'],a:1},
        {id:'p2',q:'I ___ your point. It makes sense.',opt:['am understanding','understanding','understand','am understand'],a:2},
        {id:'p3',q:'She is ___ about changing her plan right now.',opt:['thinking','think','thinks','thought'],a:0},
        {id:'p4',q:'Which word means “like one thing more than another”?',opt:['own','notice','recognise','prefer'],a:3},
        {id:'p5',q:'This bag belongs ___ my sister.',opt:['with','to','for','at'],a:1},
        {id:'p6',q:'The chef ___ the sauce to check the flavour.',opt:['tastes is','are tasting','is tasting','tasting is'],a:2},
        {id:'p7',q:'Which sentence expresses an opinion?',opt:['I think this café is lovely.','I am tasting the soup.','She is smelling a flower.','We are having lunch.'],a:0},
        {id:'p8',q:'Which word describes food with a lot of salt?',opt:['quiet','rich','sweet','salty'],a:3}
      ],
      activities:[
        {id:'p9',type:'writing',prompt:'Write one sentence with “I think” to give an opinion, and one with “I am thinking about” to describe a process.',example:'I think the plan is useful. I am thinking about the details.'},
        {id:'p10',type:'writing',prompt:'Describe the smell or taste of something you like, and one action someone is doing with it.',example:'The soup smells lovely. My friend is tasting it.'}
      ]
    },
    readings:[
      {title:'A new sauce',level:'A2+ / B1',text:'Maya works in a small café with her friend Deniz. Today they are preparing a new tomato sauce for the lunch menu. Maya thinks it is nearly ready, but Deniz wants to check the flavour. He is tasting a little sauce with a spoon. “It tastes good,” he says, “but perhaps it needs more salt.”\n\nMaya is thinking about his suggestion. She prefers food that is not too salty, so she adds only a little. The kitchen smells wonderful, and their first customer arrives. The customer owns a shop nearby and often visits the café. After trying the sauce, she says she likes its fresh flavour. Maya and Deniz are happy to add it to the menu.',questions:[
        {id:'r1',q:'What are Maya and Deniz preparing?',opt:['A tomato sauce','A birthday cake','A fruit drink','A coffee menu'],a:0},
        {id:'r2',q:'Why is Deniz tasting the sauce?',opt:['To serve a customer','To check its flavour','To clean the kitchen','To make it colder'],a:1},
        {id:'r3',q:'What does the customer own?',opt:['A restaurant','A kitchen','A nearby shop','A farm'],a:2},
        {id:'r4',q:'True or false: Maya prefers food that is not too salty.',opt:['True','False'],a:0},
        {id:'r5',q:'True or false: The customer dislikes the sauce.',opt:['True','False'],a:1},
        {id:'r6',q:'True or false: The kitchen smells pleasant.',opt:['True','False'],a:0}
      ]},
      {title:'Choosing a place to meet',level:'A2+ / B1',text:'Aylin and her friend Ben want to meet after work. Ben suggests a busy café near the station. Aylin knows the café, but she prefers quieter places because she wants to talk. She thinks the small café in the park is a better choice.\n\nBen is thinking about her idea while he looks at the weather. He notices that it may rain later. The park café has tables inside, so they can still sit there comfortably. Aylin sends Ben a message: “I believe the café closes at eight, but I am checking the opening hours.” After a few minutes, she finds the information. It closes at nine. They agree to meet there at seven and enjoy a relaxed conversation.',questions:[
        {id:'r1',q:'Why does Aylin prefer a quiet place?',opt:['She wants to talk','She wants to work alone','She dislikes the park','She needs to catch a train'],a:0},
        {id:'r2',q:'What is Ben checking?',opt:['The menu','The weather','The train time','The price'],a:1},
        {id:'r3',q:'When does the park café close?',opt:['At seven','At eight','At nine','At ten'],a:2},
        {id:'r4',q:'True or false: The park café has indoor tables.',opt:['True','False'],a:0},
        {id:'r5',q:'True or false: Aylin wants to meet at the station café.',opt:['True','False'],a:1},
        {id:'r6',q:'True or false: They plan to meet at seven.',opt:['True','False'],a:0}
      ]},
      {title:'A familiar song',level:'A2+ / B1',text:'On Saturday morning, Elif is walking through a market with her brother. She hears a song and stops near a small music shop. “I recognise this song,” she says. “I think our grandfather used to play it.” Her brother is listening carefully, but he does not remember it.\n\nThe shop owner notices their interest and tells them the name of the singer. Elif understands why the music feels familiar: she has an old recording at home. She is thinking about taking it to their grandfather when they visit him next week. Her brother likes the idea. He believes their grandfather will enjoy listening to the song with them, and he offers to bring some photographs to share as well.',questions:[
        {id:'r1',q:'Where does Elif hear the song?',opt:['Near a music shop','At a train station','In a classroom','Inside her home'],a:0},
        {id:'r2',q:'Who tells them the singer’s name?',opt:['Their grandfather','The shop owner','Elif’s teacher','A neighbour'],a:1},
        {id:'r3',q:'What does Elif have at home?',opt:['A new guitar','A music shop','An old recording','A concert ticket'],a:2},
        {id:'r4',q:'True or false: Elif recognises the song.',opt:['True','False'],a:0},
        {id:'r5',q:'True or false: Her brother immediately remembers the song.',opt:['True','False'],a:1},
        {id:'r6',q:'True or false: They plan to visit their grandfather next week.',opt:['True','False'],a:0}
      ]}
    ],
    writing:{id:'w1',type:'writing',prompt:'Write about a meal or a place you enjoy. What do you think of it, and what can you see, smell or taste? Describe something you or another person is doing there now.',guidance:'Use an opinion with “I think…”, a state such as “it smells…” or “I like…”, and an action in progress such as “I am thinking…” or “someone is tasting…”. Aim for about 100 words.',wordTarget:100},
    vocabulary: [
      ['believe','think something is true','I believe this answer is correct.','inanmak','Bir şeyin doğru olduğunu düşünmek','Bu cevabın doğru olduğuna inanıyorum.'],
      ['belong','be owned by someone','This book belongs to my friend.','ait olmak','Birinin malı olmak','Bu kitap arkadaşıma ait.'],
      ['prefer','like one thing more than another','I prefer quiet cafés.','tercih etmek','Bir şeyi başka bir şeyden daha çok sevmek','Sessiz kafeleri tercih ederim.'],
      ['taste','have a particular flavour, or check food with your mouth','The soup tastes delicious.','tadı olmak; tadına bakmak','Bir tada sahip olmak veya yemeği tatmak','Çorbanın tadı çok güzel.'],
      ['smell','have a particular smell, or use your nose to notice one','The flowers smell lovely.','kokmak; koklamak','Bir kokuya sahip olmak veya kokuyu fark etmek','Çiçekler çok güzel kokuyor.'],
      ['consider','think carefully about something','She is considering a new idea.','değerlendirmek','Bir şey hakkında dikkatlice düşünmek','Yeni bir fikri değerlendiriyor.'],
      ['opinion','what someone thinks about something','In my opinion, this plan is useful.','fikir','Birinin bir şey hakkında düşündüğü şey','Bence bu plan faydalı.'],
      ['understand','know the meaning of something','I understand your question.','anlamak','Bir şeyin anlamını bilmek','Sorunu anlıyorum.'],
      ['own','have something as your property','My friend owns a small café.','sahip olmak','Bir şeye mülk olarak sahip olmak','Arkadaşım küçük bir kafeye sahip.'],
      ['flavour','the taste of food or drink','This sauce has a rich flavour.','tat; lezzet','Yiyecek veya içeceğin tadı','Bu sosun yoğun bir lezzeti var.'],
      ['salty','having a taste of salt','The soup is a little salty.','tuzlu','Tuz tadı olan','Çorba biraz tuzlu.'],
      ['notice','become aware of something','I notice a pleasant smell.','fark etmek','Bir şeyin farkına varmak','Hoş bir koku fark ediyorum.'],
      ['seem','give a particular impression','The plan seems practical.','görünmek','Belirli bir izlenim vermek','Plan uygulanabilir görünüyor.'],
      ['recognise','know someone or something because you have seen them before','I recognise that song.','tanımak','Daha önce gördüğün veya duyduğun için bilmek','O şarkıyı tanıyorum.'],
      ['feel','experience an emotion or a physical sensation','I feel happy today.','hissetmek','Bir duygu veya fiziksel his yaşamak','Bugün mutlu hissediyorum.']
    ].map(([title,meaning,example,word,trMeaning,trExample])=>({title,meaning,example,synonyms:({believe:['think'],prefer:['like better'],consider:['think about'],opinion:['view'],understand:['comprehend'],own:['possess'],flavour:['taste'],notice:['observe'],recognise:['identify']})[title]||[],turkish:{word,meaning:trMeaning,example:trExample}}))
  }
};

// Keep new answer IDs separate from earlier exercises stored in the browser.
export function applyLessonUpdate(lesson) {
  const update = draftUpdates[lesson.id];
  if (!update) return lesson;
  const questions = (items,positions=[]) => items.map((item,index) => {
    const question={...item,id:`v2-${item.id}`};
    if(question.opt && positions[index]!==undefined) {
      const options=[...question.opt],correct=options.splice(question.a,1)[0];
      options.splice(positions[index],0,correct);
      return {...question,opt:options,a:positions[index]};
    }
    return question;
  });
  const sections = lesson.sections.map(section => {
    switch(section.id) {
      case 'notes': return update.notesCards ? {...section,cards:update.notesCards} : section;
      case 'grammar': return {...section,patterns:update.patterns,questions:questions(update.grammarQuestions,[2,0,3,1,2])};
      case 'vocabulary': return {...section,cards:update.vocabulary,questions:questions(update.vocabularyQuestions,[2,0,3,1,3,0,2,1,0,2,1,3,2,1,0])};
      case 'practice': return {...section,questions:questions(update.practice.questions,[2,0,3,1,0,3,1,2]),activities:update.practice.activities.map(a=>({...a,id:`v2-${a.id}`}))};
      case 'reading': return {...section,title:update.readingTitle||'Read about states and actions',intro:update.readingIntro||section.intro,readings:update.readings.map((r,i)=>({...r,text:r.originalReading?section.readings[0].text:r.text,questions:questions(r.questions,[[2,0,3,1,0,0],[1,3,0,0,1,1],[3,2,1,1,0,1]][i])}))};
      case 'listening': return {...section,title:update.listeningTitle||'Watch and listen',intro:update.listeningIntro||'Watch the external video, then answer the questions below.',audioText:undefined,activities:undefined,external:update.listening.external,questions:questions(update.listening.questions,[1,3,2,1,0])};
      case 'quiz': return update.quizReplacements ? {...section,questions:section.questions.map(q=>update.quizReplacements[q.id]||q)} : section;
      default: return section;
    }
  });
  const quizIndex=sections.findIndex(section=>section.id==='quiz');
  sections.splice(quizIndex<0?sections.length:quizIndex,0,{id:'writing',label:'Writing',title:update.writingTitle||'Write about a place or meal',activities:[{...update.writing,id:`v2-${update.writing.id}`}]});
  return {...lesson,sections};
}

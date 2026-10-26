// Supplemental practice for the 29 September lesson. The archived lesson remains unchanged.
const choice=(id,q,opt,a)=>({id,q,opt,a});
const fill=(id,q,...accepted)=>({id,q,type:'fill',accepted});
const tf=(id,q,answer)=>choice(id,`True or false: ${q}`,['True','False'],answer?0:1);

export const septemberUpdate={
  readingTitle:'Read about hobbies and plans',
  readingIntro:'Answer the questions after each text. Then practise explaining your ideas in two or three sentences in the short writing activities below.',
  writingTitle:'Write about your hobbies and plans',
  listeningTitle:'Listen and check',
  listeningIntro:'Open the external listening lesson, then answer the questions below.',
  notesCards:[
    {title:'Read the meaning first',text:'Ask whether a sentence describes a routine, an action happening around now, or a future plan before choosing a form.'},
    {title:'Notice sense verbs',text:'The pie tastes great describes a quality. The chef is tasting the sauce describes an action.'},
    {title:'A short written response',text:'For the written reading activities, answer in about two or three sentences. Give your main answer and add a brief explanation.'}
  ],
  patterns:[
    {label:'Routine: present simple',parts:['He','often','plays','games.'],explanation:'The frequency word usually comes before the main verb. Add -s to the verb with he, she or it.'},
    {label:'Happening now: present continuous',parts:['She','is','climbing','now.'],explanation:'Use am/is/are + verb-ing. The form of be changes with the subject.'},
    {label:'A question about now',parts:['What','are','you','doing?'],explanation:'Put the be verb before the subject in a question.'},
    {label:'A future intention',parts:['They','are','going to','try','a class.'],explanation:'Use am/is/are + going to + the base form of the verb.'},
    {label:'Describing flavour',parts:['The pie','tastes','great.'],explanation:'Use tastes to describe its quality; a chef can be tasting it as an action.'}
  ],
  grammarQuestions:[
    choice('g1','Which sentence describes a routine?',['She is climbing now.','She usually climbs on Sundays.','She is going to climb tomorrow.','She climbing yesterday.'],1),
    choice('g2','Complete: They ___ a puzzle at the moment.',['are doing','do','is doing','doing'],0),
    choice('g3','Choose the correct question.',['What you are doing?','What doing you?','What are you doing?','What you doing are?'],2),
    choice('g4','Which sentence expresses an intention?',['I often try new activities.','I trying a new activity.','I am try a new activity.','I am going to try a new activity.'],3),
    choice('g5','Choose the natural description of the pie’s flavour.',['The pie is taste great.','The pie tastes great.','The pie tasting great.','The pie are tasting great.'],1),
    fill('g6','Complete: She ___ (be) helping in the kitchen now.','is'),
    fill('g7','Complete: We are ___ (do) a puzzle at the moment.','doing'),
    fill('g8','Complete: He often ___ (come) to class early.','comes'),
    fill('g9','Complete: I am going to ___ (try) climbing.','try'),
    fill('g10','Complete the question: What ___ you doing?','are'),
    tf('g11','“I usually play games” describes a routine.',true),
    tf('g12','“She going to try” is a complete, correct sentence.',false),
    tf('g13','Present continuous uses a form of be and a verb ending in -ing.',true),
    tf('g14','In “What are you doing?”, the subject comes before “are”.',false),
    tf('g15','“The chef is tasting the sauce” describes an action.',true)
  ],
  vocabulary:[
    ['opponent','a person or team you compete against','Her opponent played well.','rakip','Karşı yarıştığın kişi veya takım','Rakibi iyi oynadı.',['rival']],
    ['climbing','the activity of moving up a steep surface','Climbing can be a fun activity.','tırmanış','Dik bir yüzeye yukarı doğru çıkma etkinliği','Tırmanış eğlenceli bir etkinlik olabilir.',[]],
    ['experience','an event or activity that happens to someone','The class was a new experience.','deneyim','Birinin yaşadığı olay veya etkinlik','Ders yeni bir deneyimdi.'],
    ['intern','a person gaining practical work experience','The intern is helping the team today.','stajyer','İş deneyimi kazanan kişi','Stajyer bugün takıma yardım ediyor.'],
    ['puzzle','a problem or set of pieces you try to solve','They are doing a puzzle together.','bulmaca','Çözmeye çalıştığın problem veya parçalar','Birlikte bulmaca çözüyorlar.'],
    ["can’t stand",'dislike something very strongly','I can’t stand loud music.','tahammül edememek','Bir şeyden çok fazla hoşlanmamak','Yüksek sesli müziğe tahammül edemiyorum.',['really dislike']],
    ['hobby','an activity you enjoy in your free time','Climbing is her favourite hobby.','hobi','Boş zamanda keyifle yapılan etkinlik','Tırmanış onun en sevdiği hobi.',['pastime']],
    ['beginner','a person starting to learn something','The class is suitable for beginners.','başlangıç seviyesindeki kişi','Bir şeyi öğrenmeye yeni başlayan kişi','Ders yeni başlayanlar için uygun.'],
    ['challenge','a task that tests your ability','This difficult puzzle is a challenge.','zorlu görev','Becerini sınayan bir görev','Bu zor bulmaca zorlu bir görev.'],
    ['compete','try to win against someone','The two players compete in a game.','yarışmak','Birine karşı kazanmaya çalışmak','İki oyuncu bir oyunda yarışıyor.'],
    ['solve','find an answer to a problem','We are trying to solve the puzzle.','çözmek','Bir probleme cevap bulmak','Bulmacayı çözmeye çalışıyoruz.'],
    ['routine','something you do regularly','Reading is part of my evening routine.','rutin','Düzenli olarak yaptığın şey','Okumak akşam rutinimin bir parçası.'],
    ['usually','most of the time','I usually play games on Friday.','genellikle','Çoğu zaman','Genellikle cuma günleri oyun oynarım.',['normally']],
    ['plan','an intention about what you will do','Our plan is to try a class.','plan','Ne yapacağına dair niyet','Planımız bir ders denemek.'],
    ['flavour','the taste of food or drink','The pie has a lovely flavour.','tat; lezzet','Yiyeceğin veya içeceğin tadı','Turtanın çok güzel bir tadı var.',['taste']]
  ].map(([title,meaning,example,word,trMeaning,trExample,synonyms=[]])=>({title,meaning,example,synonyms,turkish:{word,meaning:trMeaning,example:trExample}})),
  vocabularyQuestions:[
    choice('v1','Who is an opponent?',['A person you compete against','A teacher who explains a rule','A person selling food','A teammate on your side'],0),
    choice('v2','Which activity involves moving up a steep surface?',['Cooking','Climbing','Reading','Collecting'],1),
    choice('v3','A new experience is ___.',['always a competition','a piece of climbing equipment','an event or activity you go through','a type of food'],2),
    choice('v4','What does an intern usually seek?',['A mountain to own','A game to sell','A recipe to eat','Practical work experience'],3),
    choice('v5','What can you solve?',['A café','A puzzle','A flavour','An intern'],1),
    choice('v6','If you can’t stand loud music, you ___.',['really dislike it','listen to it every day','prefer it to all music','do not hear it'],0),
    choice('v7','A hobby is usually something you do ___.',['only at work','to pass an exam','for enjoyment in free time','because you have no choice'],2),
    choice('v8','Who is a beginner?',['Someone teaching an advanced class','Someone who owns a business','Someone who already knows everything','Someone starting to learn'],3),
    choice('v9','A challenge is a task that ___.',['is always easy','tests your ability','must be a game','is impossible to try'],1),
    choice('v10','To compete means to ___.',['try to win against someone','help someone cook','describe a flavour','make a plan without others'],0),
    choice('v11','What does solve mean?',['Start a lesson','Choose an opponent','Find an answer','Practise climbing'],2),
    choice('v12','A routine is something you do ___.',['just once','by accident','only in a competition','regularly'],3),
    choice('v13','“Usually” means ___.',['never','most of the time','right now only','once in the past'],1),
    choice('v14','A plan is ___.',['an intention about what to do','the flavour of a pie','someone who learns a job','an opponent in a game'],0),
    choice('v15','Flavour is connected to ___.',['the time of an event','the height of a mountain','the taste of food','the rules of a game'],2)
  ],
  practice:{questions:[
    choice('p1','I ___ do puzzles after work.',['am','usually','going','doing'],1),
    choice('p2','My friend ___ a climbing class this week.',['try','tries is','is trying','is try'],2),
    choice('p3','We are going to ___ a new game.',['play','playing','plays','played'],0),
    choice('p4','A person you play against is your ___.',['routine','intern','hobby','opponent'],3),
    choice('p5','The pie ___ delicious.',['is taste','tastes','tasting','are tastes'],1),
    choice('p6','___ are you doing now?',['When do','How is','What','Where are'],2),
    choice('p7','A class for people new to climbing is for ___.',['beginners','opponents','flavours','puzzles'],0),
    choice('p8','Which is a future intention?',['She usually climbs.','She climbs on Sundays.','She is climbing now.','She is going to climb tomorrow.'],3)
  ],activities:[
    {id:'p9',type:'writing',prompt:'Write one sentence about a hobby you usually do and one about something you are doing this week.',example:'I usually do puzzles on Sundays. This week I am trying a new game.'},
    {id:'p10',type:'writing',prompt:'Write about an activity you are going to try. Why does it interest you?',example:'I am going to try climbing. I think it will be an interesting challenge.'}
  ]},
  readings:[
    {title:'Trying a climbing class',level:'A2+ / B1',text:'Leo usually spends his free time doing puzzles and playing games. This month, his friend is trying a climbing class and invites him to join. Leo is interested, but he is not sure whether he will enjoy climbing. He looks at the class information and sees that beginners can borrow equipment.\n\nAt the class, some people are experienced climbers and others are trying the activity for the first time. There is no opponent: everyone helps one another learn safely. The instructor explains how to use the equipment and asks the group to start with an easy wall. Leo decides he is going to try one class before choosing a regular activity. He hopes this new experience will help him discover what he enjoys.',questions:[
      choice('r1','What does Leo usually do in his free time?',['Teach climbing','Do puzzles and play games','Work at a café','Run a shop'],1),
      choice('r2','What can beginners borrow?',['Equipment','Books','A bicycle','A game'],0),
      choice('r3','Why does Leo decide to try the class?',['He wants to defeat an opponent','He needs a new job','He hopes to discover what he enjoys','He already climbs every day'],2),
      tf('r4','The people in the class help one another.',true),tf('r5','Everyone in the class is an experienced climber.',false),tf('r6','The group starts with an easy wall.',true)
    ]},
    {title:'Game night',level:'A2+ / B1',text:'Every Thursday, Mina meets two friends for a game night. They usually choose a game with a different challenge each week. Mina enjoys competing, but she believes the best part is spending time together. Her opponent sometimes wins, and sometimes Mina wins. Either way, they laugh and learn something new.\n\nTonight the friends are trying a puzzle game instead of their usual board game. They are looking for clues and discussing possible answers. One puzzle is difficult, so they decide to take a short break. Mina is making tea while her friends read the instructions again. Next week, they are going to invite another friend who is a beginner. They plan to explain the rules and make sure everyone can join in.',questions:[
      choice('r1','When do the friends usually meet?',['Every Monday','Every Thursday','Every Saturday','Every morning'],1),
      choice('r2','What are they trying tonight?',['A puzzle game','A climbing class','A cooking lesson','A new job'],0),
      choice('r3','What are they going to do next week?',['Stop playing games','Visit a mountain','Invite another friend','Sell their board game'],2),
      tf('r4','Mina enjoys spending time with her friends.',true),tf('r5','They are playing their usual board game tonight.',false),tf('r6','They plan to explain the rules to the beginner.',true)
    ]},
    {title:'An intern’s busy week',level:'A2+ / B1',text:'Sara is an intern at a small café. She usually starts work at nine and helps prepare the tables. Her colleagues are friendly, and they explain new tasks when she needs help. Sara enjoys meeting customers, although she cannot stand being late. She leaves home early so she has enough time to arrive calmly.\n\nThis week, Sara is learning how to prepare a simple apple pie. Today she is helping the cook in the kitchen. The cook tastes the pie and says it tastes great. Sara is pleased because she is gaining practical experience as well as learning a new recipe. At the weekend, she is going to make the pie with her sister. They are also going to do a puzzle together after lunch.',questions:[
      choice('r1','What does Sara usually do when she starts work?',['Prepare the tables','Teach a climbing class','Visit her sister','Solve a puzzle'],0),
      choice('r2','Why does Sara leave home early?',['She wants to buy a pie','She does not like being late','The café closes at nine','She is meeting an opponent'],1),
      choice('r3','What is Sara learning this week?',['How to run a game night','How to climb a wall','How to prepare an apple pie','How to open a shop'],2),
      tf('r4','Sara’s colleagues help explain new tasks.',true),tf('r5','The cook says the pie tastes bad.',false),tf('r6','Sara plans to make the pie with her sister.',true)
    ]}
  ],
  listening:{external:{level:'A2',title:'Changing plans — British Council',instructions:'Listen to Sachi and Francesco discuss their plans. Then answer the questions below.',url:'https://learnenglish.britishcouncil.org/free-resources/listening/a2/changing-plans'},questions:[
    choice('l1','What was Sachi going to buy?',['Tickets for a play','Climbing equipment','A puzzle game','Dinner for the band'],0),
    choice('l2','Why can’t Francesco go to the theatre this Friday?',['He has a class','He has a concert','He is visiting a café','He has no tickets for the cinema'],1),
    choice('l3','What does Francesco suggest before his concert?',['Doing a puzzle','Going climbing','Going out for dinner','Buying a birthday cake'],2),
    tf('l4','Francesco suggests going to the play next Friday.',true),
    tf('l5','Sachi already has the play tickets when they speak.',false)
  ]},
  writing:{id:'w1',type:'writing',prompt:'Write about a hobby you enjoy and an activity you would like to try. Explain your usual routine, what you are doing these days, and a plan for the future.',guidance:'Try using a frequency word such as “usually”, a present continuous sentence and “going to”. Explain why you enjoy your hobby and why the new activity interests you. Aim for about 100 words.',wordTarget:100}
};

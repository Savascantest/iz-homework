// Additional learner-facing practice for the 21 September revision lesson.
const choice=(id,q,opt,a)=>({id,q,opt,a});
const fill=(id,q,...accepted)=>({id,q,type:'fill',accepted});
const tf=(id,q,answer)=>choice(id,`True or false: ${q}`,['True','False'],answer?0:1);

export const september21Update={
  readingTitle:'Read about people, activities and goals',
  readingIntro:'Read each text and answer the questions. Notice how the people describe their preferences and future plans.',
  writingTitle:'Write about an activity and a goal',
  quizReplacements:{q9:choice('v2-q9','What does “goal” mean?',['A type of physical activity','An instructor','Something you want to achieve','A person who is patient'],2)},
  patterns:[
    {label:'A usual preference',parts:['She','prefers','swimming.'],explanation:'Use the present simple for a usual preference. With he, she or it, the verb usually ends in -s.'},
    {label:'A negative preference',parts:['She','doesn’t','enjoy','football.'],explanation:'Use doesn’t + the base verb, not “doesn’t enjoys”.'},
    {label:'A plan made earlier',parts:['They','are going to','join','a class.'],explanation:'Use a form of be + going to + the base verb for a prior intention.'},
    {label:'A decision made now',parts:['I','will','ask','a friend.'],explanation:'Use will + the base verb for an offer or a decision made while speaking.'},
    {label:'Give a reason',parts:['I’m going to try yoga','because','I want to relax.'],explanation:'Because connects your plan to a reason.'},
    {label:'Activities',parts:['play volleyball','go swimming','do yoga'],explanation:'We often use play for games, go for -ing activities and do for activities such as yoga. Check individual expressions too.'}
  ],
  grammarQuestions:[
    choice('g1','Which sentence describes a usual preference?',['She is going to swim tomorrow.','She prefers swimming.','She will try yoga.','She going swimming.'],1),
    choice('g2','Choose the correct negative sentence.',['She doesn’t enjoy football.','She doesn’t enjoys football.','She don’t enjoys football.','She not enjoy football.'],0),
    choice('g3','We planned it yesterday. We ___ join the class next month.',['will to','are join','are going to','going'],2),
    choice('g4','“I can’t find my bag.” “I ___ help you look.”',['going to','will to','am going','will'],3),
    choice('g5','Which activity phrase is natural?',['play yoga','go swimming','do volleyball','make swimming'],1),
    fill('g6','Complete: He ___ (prefer) team sports.','prefers'),
    fill('g7','Complete: She doesn’t ___ (like) noisy classes.','like'),
    fill('g8','Complete: They ___ going to try yoga.','are'),
    fill('g9','Complete: I will ___ (ask) my friend.','ask'),
    fill('g10','Complete: We ___ swimming on Saturdays.','go'),
    tf('g11','“She likes walking” describes a usual preference.',true),
    tf('g12','After “doesn’t”, the main verb normally ends in -s.',false),
    tf('g13','“Going to” can describe an intention decided earlier.',true),
    tf('g14','“I will to help” is the correct form of an offer.',false),
    tf('g15','“Because” can introduce a reason.',true)
  ],
  vocabulary:[
    ['reliable','someone you can trust to do what they say','My reliable friend always arrives on time.','güvenilir','Söylediğini yapacağına güvenebileceğin kişi','Güvenilir arkadaşım her zaman zamanında gelir.',['dependable']],
    ['outgoing','friendly and confident with other people','She is outgoing and enjoys meeting people.','dışa dönük','İnsanlarla iletişimde arkadaş canlısı ve rahat olan','O dışa dönüktür ve insanlarla tanışmaktan hoşlanır.',['sociable']],
    ['relaxed','calm and not worried','I feel relaxed after yoga.','rahat','Sakin ve endişesiz','Yogadan sonra kendimi rahat hissediyorum.',['calm']],
    ['friendly','kind and pleasant to other people','The people in the class are friendly.','arkadaş canlısı','Başkalarına karşı nazik ve sıcak','Dersteki insanlar arkadaş canlısı.'],
    ['patient','able to stay calm while waiting or helping','Our patient instructor explains the rules again.','sabırlı','Beklerken veya yardım ederken sakin kalabilen','Sabırlı eğitmenimiz kuralları tekrar açıklıyor.'],
    ['adventurous','willing to try new or exciting things','My adventurous friend wants to try climbing.','maceraperest','Yeni veya heyecan verici şeyleri denemeye istekli','Maceraperest arkadaşım tırmanışı denemek istiyor.'],
    ['physical activity','movement that uses your body and energy','Walking is a physical activity.','fiziksel aktivite','Vücudunu ve enerjini kullandığın hareket','Yürüyüş fiziksel bir aktivitedir.'],
    ['team sport','a sport in which people play together as a team','Volleyball is a team sport.','takım sporu','İnsanların takım olarak birlikte oynadığı spor','Voleybol bir takım sporudur.'],
    ['preference','something you like more than another option','My preference is an evening class.','tercih','Bir seçeneğe göre daha çok sevdiğin şey','Tercihim akşam dersidir.'],
    ['goal','something you want to achieve','My goal is to swim regularly.','hedef','Başarmak istediğin şey','Hedefim düzenli olarak yüzmek.',['aim']],
    ['challenge','a task that tests your ability','Learning a new sport is a challenge.','zorlu görev','Becerini sınayan görev','Yeni bir spor öğrenmek zorlu bir görevdir.'],
    ['progress','improvement over time','She notices progress after each class.','ilerleme','Zaman içinde gelişme','Her dersten sonra ilerleme fark ediyor.',['improvement']],
    ['confident','feeling able to do something well','He feels more confident in the team.','kendinden emin','Bir şeyi yapabileceğini hissetmek','Takımda kendini daha güvende hissediyor.'],
    ['practice','time spent doing something to improve','Regular practice helps me improve.','pratik','Gelişmek için bir şeyi yapmaya ayrılan zaman','Düzenli pratik gelişmeme yardımcı oluyor.'],
    ['instructor','a person who teaches a skill or activity','The instructor shows us a new exercise.','eğitmen','Bir beceri veya etkinlik öğreten kişi','Eğitmen bize yeni bir egzersiz gösteriyor.',['teacher']]
  ].map(([title,meaning,example,word,trMeaning,trExample,synonyms=[]])=>({title,meaning,example,synonyms,turkish:{word,meaning:trMeaning,example:trExample}})),
  vocabularyQuestions:[
    choice('v1','A reliable person is someone you can ___.',['trust','forget','compete against only','see only at a gym'],0),
    choice('v2','An outgoing person often enjoys ___.',['avoiding everyone','meeting other people','being silent all day','working without speaking'],1),
    choice('v3','What does relaxed mean?',['Very competitive','Always late','Calm and not worried','Ready to argue'],2),
    choice('v4','A friendly instructor is ___.',['difficult to understand','always late','a type of exercise','kind and pleasant'],3),
    choice('v5','A patient person can ___.',['never help','stay calm while waiting','only play team sports','finish everything immediately'],1),
    choice('v6','An adventurous friend is often willing to ___.',['try new things','avoid all activities','choose the same activity forever','refuse every invitation'],0),
    choice('v7','Which is physical activity?',['Choosing a book','Writing a shopping list','Walking in the park','Watching a film'],2),
    choice('v8','What is a team sport?',['A sport with no rules','An activity done only at home','A quiet personal goal','A sport played by people working together'],3),
    choice('v9','Your preference is ___.',['a past mistake','what you like more','your instructor’s schedule','a difficult exercise only'],1),
    choice('v10','A goal is something you want to ___.',['achieve','forget immediately','avoid explaining','buy at a café'],0),
    choice('v11','A challenge is usually ___.',['a person who teaches','a type of drink','a task that tests you','a feeling of being asleep'],2),
    choice('v12','Progress means ___.',['never trying','a team of players','a favourite colour','improvement over time'],3),
    choice('v13','If you feel confident, you feel ___.',['unable to try','able to do something','uninterested in every activity','angry with everyone'],1),
    choice('v14','Practice helps you ___.',['improve a skill','avoid learning','change the rules of every game','make a plan yesterday'],0),
    choice('v15','Who teaches a skill or activity?',['An opponent','A goal','An instructor','A routine'],2)
  ],
  practice:{questions:[
    choice('p1','She ___ a walk to a noisy gym.',['prefer','prefers','preferring','is prefer'],1),
    choice('p2','A person you can depend on is ___.',['outgoing','relaxed','reliable','physical'],2),
    choice('p3','We planned it last week. We ___ join yoga.',['are going to','will to','going','are to'],0),
    choice('p4','“The bag is heavy.” “I ___ carry it for you.”',['am to','will to','am carry','will'],3),
    choice('p5','Which phrase is correct?',['play swimming','do yoga','go volleyball','make yoga'],1),
    choice('p6','She doesn’t ___ football.',['likes','liking','like','liked'],2),
    choice('p7','Which sentence gives a reason?',['I am going to walk because I enjoy being outside.','I walk.','I will tomorrow.','I am outgoing.'],0),
    choice('p8','Volleyball is a ___.',['preference','instructor','goal','team sport'],3)
  ],activities:[
    {id:'p9',type:'writing',prompt:'Describe someone’s personality with two adjectives and give an example.',example:'My friend is reliable and patient. She helps me when I need more time.'},
    {id:'p10',type:'writing',prompt:'Write about an activity you prefer and a new activity you are going to try. Explain why.',example:'I prefer walking, but I am going to try yoga because I want to relax.'}
  ]},
  readings:[
    {title:'Choosing an Activity You Can Continue',level:'B1',originalReading:true,questions:[
      choice('r1','What helps make an activity a good choice?',['Being the most difficult option','Fitting a person’s interests, schedule and energy','Being chosen by everyone else','Having no rules'],1),
      choice('r2','Why does enjoyment matter?',['It makes regular practice more likely','It guarantees quick perfection','It removes all effort','It makes goals unnecessary'],0),
      choice('r3','Which is an example of progress in the text?',['Always winning','Avoiding new people','Feeling more confident speaking to people','Never needing practice'],2),
      tf('r4','A beginner can enjoy an activity.',true),tf('r5','The text says everyone should choose the same activity.',false),tf('r6','A small realistic goal can be trying one class.',true)
    ]},
    {title:'A class for two friends',level:'A2+ / B1',text:'Ece and her friend Daniel want to become more active. Daniel is outgoing and enjoys meeting people, so he prefers team sports. Ece is quieter and usually goes for a walk after work. She likes activities that help her feel relaxed. Although their preferences are different, they want to spend time together.\n\nThey decide to try a beginner’s volleyball class next month. Ece is not sure whether she will enjoy a team sport, but Daniel is patient and promises to help her practise. The instructor explains that beginners do not need to be good immediately. Their first goal is to learn the basic rules and enjoy playing. Ece says, “I’m going to try it because I want a new challenge.” Daniel replies, “I’ll bring a bottle of water for you.”',questions:[
      choice('r1','Why does Daniel prefer team sports?',['He enjoys meeting people','He dislikes every other activity','He works at a gym','He needs to teach a class'],0),
      choice('r2','What does Ece usually do after work?',['Play volleyball','Go for a walk','Teach yoga','Go swimming'],1),
      choice('r3','What is the friends’ first goal?',['Win a competition immediately','Become instructors','Learn basic rules and enjoy playing','Buy new equipment'],2),
      tf('r4','Ece and Daniel have different preferences.',true),tf('r5','The instructor expects beginners to be good immediately.',false),tf('r6','Daniel offers to bring water.',true)
    ]},
    {title:'Small steps towards a goal',level:'A2+ / B1',text:'Mina wants to feel more confident when she speaks English. She is friendly and enjoys talking to people, but she sometimes feels nervous in a large group. Her reliable friend Arda suggests a small conversation class. He says the instructor is patient and gives everyone time to speak.\n\nMina plans to attend one class next week. She is going to prepare two questions about people’s hobbies and activities before she goes. Her goal is not to speak perfectly. Instead, she wants to start one conversation and listen carefully to another person’s answer. Arda says, “I’ll walk there with you.” After the class, Mina can think about what she enjoyed and choose a next step. For her, progress may mean feeling a little calmer and continuing to practise.',questions:[
      choice('r1','What does Mina want to feel more confident doing?',['Speaking English','Playing volleyball','Teaching yoga','Driving to work'],0),
      choice('r2','What does Arda suggest?',['A large sports event','A small conversation class','A swimming competition','An online game'],1),
      choice('r3','What is Mina’s goal for the class?',['Speak perfectly','Teach the instructor','Start one conversation and listen','Win a competition'],2),
      tf('r4','Mina sometimes feels nervous in a large group.',true),tf('r5','Mina plans to prepare ten questions.',false),tf('r6','Arda offers to walk to the class with her.',true)
    ]}
  ],
  listening:{external:{level:'A2',title:'Talking about personal interests — British Council',instructions:'Watch Emir and Paul talk about their interests. Then answer the questions below.',url:'https://learnenglish.britishcouncil.org/free-resources/speaking/a2/talking-about-personal-interests'},questions:[
    choice('l1','What drink does Emir make for Paul?',['Coffee','Tea','Orange juice','Water'],1),
    choice('l2','What activity has Paul recently started?',['Meditation','Climbing','Volleyball','Swimming'],0),
    choice('l3','How often does Paul normally meditate?',['Every evening','Three times a day','Once or twice a week','Only once a year'],2),
    tf('l4','Emir also does meditation.',true),tf('l5','Paul says he always has enough time to practise more.',false)
  ]},
  writing:{id:'w1',type:'writing',prompt:'Write about your personality, an activity you enjoy and a goal you would like to work towards. Explain what you prefer and what you are going to do next.',guidance:'Describe yourself with one or two personality adjectives, give an example, and explain why you chose your goal. Use a present-simple preference and “going to” for a plan. You can add an offer with “will”. Aim for about 100 words.',wordTarget:100}
};

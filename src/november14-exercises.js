const choice=(id,q,opt,a,explanation)=>({id,q,opt,a,explanation});
const fill=(id,q,accepted,explanation)=>({id,q,type:'fill',accepted,explanation});

// Keep grammar and vocabulary direct and familiar. Situational responses belong in Practice.
export function refineNovember14Exercises(update){
  return {...update,
    grammarQuestions:[
      choice('g1','I ___ to the shop yesterday.',['went','go','going','gone'],0,'“Went” is the past form of “go” because the action finished yesterday.'),
      choice('g2','She didn’t ___ the email.',['sent','send','sending','sends'],1,'After “didn’t”, use the base verb: “send”.'),
      choice('g3','___ you call your friend last night?',['Do','Are','Did','Was'],2,'Use “Did” to ask about a finished past action.'),
      choice('g4','We met ___ Monday.',['in','at','by','on'],3,'Use “on” with a day.'),
      choice('g5','They ___ lunch at one o’clock.',['had','have','has','having'],0,'“Had” describes a finished meal in the past.'),
      fill('g6','I ___ my teacher yesterday.',['saw'],'“Saw” is the past form of “see”.'),
      fill('g7','He didn’t ___ to work.',['go'],'After “didn’t”, use the base verb “go”.'),
      fill('g8','___ you visit your grandmother?',['did'],'Start this past question with “Did”.'),
      fill('g9','We travelled ___ July.',['in'],'Use “in” with a month.'),
      fill('g10','The film started ___ eight.',['at'],'Use “at” with a clock time.'),
      choice('g11','Choose the correct sentence.',['Did you see the film?','Did you saw the film?'],0,'After “Did”, use the base verb “see”.'),
      choice('g12','Choose the correct sentence.',['She didn’t went out.','She didn’t go out.'],1,'After “didn’t”, use the base verb “go”.'),
      choice('g13','Choose the correct sentence.',['I met him on Friday.','I met him at Friday.'],0,'Use “on” with a day.'),
      choice('g14','Choose the correct sentence.',['The lesson started in 6:00.','The lesson started at 6:00.'],1,'Use “at” with a clock time.'),
      choice('g15','Choose the correct sentence.',['We bought a book yesterday.','We buy a book yesterday.'],0,'“Bought” is the past form of “buy”.')
    ],
    vocabularyQuestions:[
      choice('v1','I ___ to the park yesterday.',['went','go','going','gone'],0),
      choice('v2','We ___ lunch at one.',['have','had','has','having'],1),
      choice('v3','She ___ her friend yesterday.',['see','sees','saw','seeing'],2),
      choice('v4','He ___ a new book.',['made','went','saw','bought'],3),
      choice('v5','My mum ___ dinner last night.',['made','did','had','went'],0),
      choice('v6','What ___ you do yesterday?',['do','did','does','doing'],1),
      choice('v7','I stayed at home ___.',['tomorrow','last week','yesterday','next month'],2),
      choice('v8','We met ___ .',['next week','this week','in a week','last week'],3),
      choice('v9','She called two days ___.',['ago','on','at','in'],0),
      choice('v10','The class starts ___ 3:30.',['on','at','in','ago'],1),
      choice('v11','I visit my aunt ___ Friday.',['at','in','on','ago'],2),
      choice('v12','They travelled ___ July.',['at','on','ago','in'],3),
      choice('v13','The film ___ at ten.',['finished','finish','finishing','finishs'],0),
      choice('v14','We ___ our grandparents last weekend.',['remembered','visited','finished','had'],1),
      choice('v15','I ___ the appointment this morning.',['bought','saw','remembered','went'],2)
    ],
    practice:{...update.practice,activities:[]}
  };
}

'use strict';
/* Approved content: only kana/romanization verified in Tofugu articles linked by
   https://morg.systems/Japanese-Primer . No invented word lists or translations.
   The app reorders verified cards for practice but does not invent explanations. */
const KANA_SOURCES = {
  hiragana: 'https://www.tofugu.com/japanese/learn-hiragana/',
  katakana: 'https://www.tofugu.com/japanese/learn-katakana/'
};
const KANA_GROUPS = {
 hiragana: [
  {title:"01 \u00b7 Vowels",desc:"Core Vowels group; read the original Tofugu guide for examples and pronunciation.",cards:[["あ", "a"],["い", "i"],["う", "u"],["え", "e"],["お", "o"]]},
  {title:"02 \u00b7 K",desc:"Core K group; read the original Tofugu guide for examples and pronunciation.",cards:[["か", "ka"],["き", "ki"],["く", "ku"],["け", "ke"],["こ", "ko"]]},
  {title:"03 \u00b7 S",desc:"Core S group; read the original Tofugu guide for examples and pronunciation.",cards:[["さ", "sa"],["し", "shi"],["す", "su"],["せ", "se"],["そ", "so"]]},
  {title:"04 \u00b7 T",desc:"Core T group; read the original Tofugu guide for examples and pronunciation.",cards:[["た", "ta"],["ち", "chi"],["つ", "tsu"],["て", "te"],["と", "to"]]},
  {title:"05 \u00b7 N",desc:"Core N group; read the original Tofugu guide for examples and pronunciation.",cards:[["な", "na"],["に", "ni"],["ぬ", "nu"],["ね", "ne"],["の", "no"]]},
  {title:"06 \u00b7 H",desc:"Core H group; read the original Tofugu guide for examples and pronunciation.",cards:[["は", "ha"],["ひ", "hi"],["ふ", "fu"],["へ", "he"],["ほ", "ho"]]},
  {title:"07 \u00b7 M",desc:"Core M group; read the original Tofugu guide for examples and pronunciation.",cards:[["ま", "ma"],["み", "mi"],["む", "mu"],["め", "me"],["も", "mo"]]},
  {title:"08 \u00b7 Y",desc:"Core Y group; read the original Tofugu guide for examples and pronunciation.",cards:[["や", "ya"],["ゆ", "yu"],["よ", "yo"]]},
  {title:"09 \u00b7 R",desc:"Core R group; read the original Tofugu guide for examples and pronunciation.",cards:[["ら", "ra"],["り", "ri"],["る", "ru"],["れ", "re"],["ろ", "ro"]]},
  {title:"10 \u00b7 W & N",desc:"Final basic hiragana column; see Tofugu for usage and exceptions.",cards:[["わ", "wa"],["を", "wo"],["ん", "n"]]},
 ],
 katakana: [
  {title:"01 \u00b7 Vowels",desc:"Core Vowels group; read the original Tofugu guide for examples and pronunciation.",cards:[["ア", "a"],["イ", "i"],["ウ", "u"],["エ", "e"],["オ", "o"]]},
  {title:"02 \u00b7 K",desc:"Core K group; read the original Tofugu guide for examples and pronunciation.",cards:[["カ", "ka"],["キ", "ki"],["ク", "ku"],["ケ", "ke"],["コ", "ko"]]},
  {title:"03 \u00b7 S",desc:"Core S group; read the original Tofugu guide for examples and pronunciation.",cards:[["サ", "sa"],["シ", "shi"],["ス", "su"],["セ", "se"],["ソ", "so"]]},
  {title:"04 \u00b7 T",desc:"Core T group; read the original Tofugu guide for examples and pronunciation.",cards:[["タ", "ta"],["チ", "chi"],["ツ", "tsu"],["テ", "te"],["ト", "to"]]},
  {title:"05 \u00b7 N",desc:"Core N group; read the original Tofugu guide for examples and pronunciation.",cards:[["ナ", "na"],["ニ", "ni"],["ヌ", "nu"],["ネ", "ne"],["ノ", "no"]]},
  {title:"06 \u00b7 H",desc:"Core H group; read the original Tofugu guide for examples and pronunciation.",cards:[["ハ", "ha"],["ヒ", "hi"],["フ", "fu"],["ヘ", "he"],["ホ", "ho"]]},
  {title:"07 \u00b7 M",desc:"Core M group; read the original Tofugu guide for examples and pronunciation.",cards:[["マ", "ma"],["ミ", "mi"],["ム", "mu"],["メ", "me"],["モ", "mo"]]},
  {title:"08 \u00b7 Y",desc:"Core Y group; read the original Tofugu guide for examples and pronunciation.",cards:[["ヤ", "ya"],["ユ", "yu"],["ヨ", "yo"]]},
  {title:"09 \u00b7 R",desc:"Core R group; read the original Tofugu guide for examples and pronunciation.",cards:[["ラ", "ra"],["リ", "ri"],["ル", "ru"],["レ", "re"],["ロ", "ro"]]},
  {title:"10 \u00b7 W & N",desc:"Final basic katakana column; see Tofugu for usage and exceptions.",cards:[["ワ", "wa"],["ヲ", "wo"],["ン", "n"]]},
 ],
};
const study = {script:'hiragana', group:0, activeGroups:null, mode:'cards', index:0, revealed:false, question:null, answered:false, reviewKeys:null, options:null, optionsKey:''};
const practice = sanitizePractice(state.kanaPractice);
let fullQuiz = null; // ephemeral round; completed history is saved separately
if(!Array.isArray(state.fullQuizHistory))state.fullQuizHistory=[];
state.kanaPractice = practice;
const cardKey=(script,reading)=>`${script==='hiragana'?'h':'k'}:${reading}`;
const chosenGroups=()=>study.activeGroups??[study.group];
const cardsForGroup=()=> chosenGroups().flatMap(i=>(KANA_GROUPS[study.script][i]?.cards||[]).map(([kana,reading])=>({kana,reading,script:study.script,key:cardKey(study.script,reading)}))); 
const allCards=()=>Object.entries(KANA_GROUPS).flatMap(([script,groups])=>groups.flatMap(group=>group.cards.map(([kana,reading])=>({kana,reading,script,key:cardKey(script,reading)}))));
const shuffle=arr=>[...arr].sort(()=>Math.random()-.5);
const root=$('studyActivity'),feedback=$('studyFeedback');
const btn=(label,action,cls='study-action')=>{const b=make('button',label,cls);b.type='button';b.addEventListener('click',action);return b;};
function renderStudyGroup(){
 const select=$('studyGroup');select.replaceChildren();
 const picker=$('studyGroupOptions');picker.replaceChildren();
 const selected=chosenGroups();
 KANA_GROUPS[study.script].forEach((g,i)=>{
  const opt=new Option(g.title,String(i));select.add(opt);
  const label=make('label',undefined,'group-option');
  const input=make('input');input.type='checkbox';input.value=String(i);input.checked=selected.includes(i);
  input.addEventListener('change',()=>{
   const next=new Set(chosenGroups());
   if(input.checked)next.add(i);else next.delete(i);
   setSelectedGroups([...next]);
  });
  const glyph=make('span',g.cards.map(c=>c[0]).join(' · '),'group-option-kana');
  const name=make('span',g.title.replace(/^\d+ · /,'' )+' column','group-option-name');
  label.append(input,make('span',undefined,'group-option-text'));label.lastChild.append(name,glyph);
  picker.append(label);
 });
 select.value=String(study.group);
 const info=$('studyGroupInfo'),count=cardsForGroup().length;
 $('groupSelectionCount').textContent=`${selected.length} ${selected.length===1?'group':'groups'} · ${count} characters`;
 const names=selected.map(i=>KANA_GROUPS[study.script][i].title.replace(/^\d+ · /,''));
 const title=selected.length?((selected.length>1?'Combined practice · ':'')+names.join(' + ')):'No columns selected';
 info.replaceChildren(make('strong',title),make('p',selected.length?`Only the ${count} characters in your selected columns will be used for questions and answers.`:'Choose at least one column to start practicing.'));
 info.append(safeLink(KANA_SOURCES[study.script],'Original Tofugu lesson'));
 $('studyPrimarySource').href=KANA_SOURCES[study.script];
 document.querySelectorAll('[data-mode]').forEach(b=>b.disabled=!selected.length);
}
function setSelectedGroups(groups){
 fullQuiz=null;
 const valid=[...new Set(groups)].filter(i=>Number.isInteger(i)&&KANA_GROUPS[study.script][i]).sort((a,b)=>a-b);
 study.activeGroups=valid;
 if(valid.length)study.group=valid[0];
 study.index=0;study.question=null;study.answered=false;study.options=null;study.optionsKey='';study.revealed=false;
 feedback.textContent='';
 renderStudyGroup();renderPracticeStats();renderActivity();
}
$('selectAllGroups').addEventListener('click',()=>setSelectedGroups(KANA_GROUPS[study.script].map((_,i)=>i)));
$('clearGroups').addEventListener('click',()=>setSelectedGroups([]));

function renderPracticeStats(){
 // Practice results belong to the CURRENT writing system and selected column.
 // cardStats is indexed by script + reading, so switching groups updates all results.
 const selected=cardsForGroup();
 const stats=practice.cardStats||{};
 const attempts=selected.reduce((sum,c)=>sum+(Number(stats[c.key]?.right)||0)+(Number(stats[c.key]?.wrong)||0),0);
 const correct=selected.reduce((sum,c)=>sum+(Number(stats[c.key]?.right)||0),0);
 const misses=selected.filter(c=>(Number(practice.missed[c.key])||0)>0).length;
 $('studyAttempts').textContent=String(attempts);
 $('studyCorrect').textContent=String(correct);
 $('studyMissed').textContent=String(misses);
 $('studyAccuracy').textContent=attempts?`${Math.round(correct/attempts*100)}% correct in selection`:'No attempts in selection';
 if(typeof renderSectionMastery==='function')renderSectionMastery();
}

function changeMode(mode){
 fullQuiz=null;
 study.mode=mode;study.index=0;study.revealed=false;study.answered=false;study.question=null;study.options=null;study.optionsKey='';feedback.textContent='';
 document.querySelectorAll('[data-mode]').forEach(el=>el.classList.toggle('active',el.dataset.mode===mode));
 renderActivity();
}
function persistPractice(){state.kanaPractice=practice;save();renderPracticeStats();}
function recordAnswer(card,correct){
 practice.attempts++;practice.correct+=correct?1:0;
 practice.cardStats=practice.cardStats||{};const stats=practice.cardStats[card.key]||{right:0,wrong:0};stats[correct?'right':'wrong']++;practice.cardStats[card.key]=stats;
 if(typeof logStudyActivity==='function')logStudyActivity('practice');
 practice.seen[card.key]=(practice.seen[card.key]||0)+1;
 if(correct){delete practice.missed[card.key];notify('Correct! 🌿')}
 else {practice.missed[card.key]=(practice.missed[card.key]||0)+1;notify('Added to review')}
 persistPractice();
 if(typeof renderSectionMastery==='function')renderSectionMastery();
}
function drawFlashcard(){
 const list=cardsForGroup();if(!list.length){root.append(make('p','Choose at least one character group above to start.'));return;}const card=list[study.index%list.length];
 const face=btn('',()=>{study.revealed=!study.revealed;renderActivity()},'kana-card');
 face.setAttribute('aria-label','Flip flashcard');
 face.append(make('span',study.revealed?card.reading:card.kana,study.revealed?'kana-reading':'kana-symbol'),make('span',study.revealed?'Reading shown · click to return to kana':'Click to reveal reading','kana-meta'));
 root.append(make('p',`Card ${study.index%list.length+1} of ${list.length}`,'quiz-title'),face);
 const actions=make('div',undefined,'quiz-actions');
 actions.append(btn('← Previous',()=>{study.index=(study.index-1+list.length)%list.length;study.revealed=false;renderActivity()}),btn('Next →',()=>{study.index=(study.index+1)%list.length;study.revealed=false;renderActivity()}));
 root.append(actions);
}
function selectPool(){
 if(study.mode!=='review')return cardsForGroup();
 const missedCards=cardsForGroup().filter(c=>(practice.missed[c.key]||0)>0);
 return missedCards;
}
function nextQuestion(){
 const pool=selectPool();if(!pool.length){study.question=null;renderActivity();return}
 const avoid=study.question?.key;
 const picks=pool.filter(c=>c.key!==avoid);
 study.question=shuffle(picks.length?picks:pool)[0];study.answered=false;study.options=null;study.optionsKey='';feedback.textContent='';renderActivity();
}
function answerQuestion(given){
 if(study.answered||!study.question)return;
 const q=study.question;
 const normalized=String(given).toLowerCase().trim();
 const correct=normalized===q.reading;
 study.answered=true;
 recordAnswer(q,correct);
 feedback.textContent=correct?'Correct! A little victory 🌸':`Not quite. The verified reading is ${q.reading}. Added to your review list.`;
 renderActivity();
}
function drawQuestion(){
 const pool=selectPool();
 if(!cardsForGroup().length){root.append(make('p','Choose at least one character group above to start.'));return;}
 if(!pool.length && !(study.answered && study.question)){root.append(make('h3',study.mode==='review'?'No missed kana in these groups! 🌷':'No characters available'),make('p',study.mode==='review'?'Try a multiple-choice or typing quiz first. Incorrect answers will appear here.':'Select at least one group above.'));return}
 if(!study.question||(!study.answered&&!pool.some(c=>c.key===study.question.key)))study.question=shuffle(pool)[0];
 const q=study.question;
 root.append(make('p',study.mode==='review'?'Review your missed characters':'What is the reading?','quiz-title'),make('div',q.kana,'kana-symbol'));
 if(study.mode==='choice'||study.mode==='review'){
  const currentSection=cardsForGroup();
  const wrong=shuffle(currentSection.filter(c=>c.key!==q.key&&c.reading!==q.reading)).filter((c,i,a)=>a.findIndex(x=>x.reading===c.reading)===i).slice(0,3);
  let choices=shuffle([q.reading,...wrong.map(c=>c.reading)]);
  // Keep choices fixed while the question is being answered or re-rendered.
  if(!study.options||study.optionsKey!==q.key){study.options=choices;study.optionsKey=q.key;}
  const options=make('div',undefined,'quiz-options');
  study.options.forEach(reading=>{const b=btn(reading,()=>answerQuestion(reading));b.disabled=study.answered;if(study.answered&&reading===q.reading)b.classList.add('correct-option');options.append(b)});
  root.append(options);
 }else{
  const form=make('form',undefined,'quiz-actions');
  const input=make('input');input.className='quiz-input';input.placeholder='Type romaji';input.setAttribute('aria-label','Type the romaji reading');input.autocomplete='off';input.spellcheck=false;input.required=true;input.disabled=study.answered;
  form.append(input,btn('Check answer',()=>{}));const submit=form.querySelector('button');submit.type='submit';submit.disabled=study.answered;
  form.addEventListener('submit',e=>{e.preventDefault();answerQuestion(input.value)});
  root.append(form);if(!study.answered)setTimeout(()=>input.focus(),0);
 }
 if(study.answered)root.append(btn('Next question →',()=>{study.optionsKey='';nextQuestion()}));
}
function renderActivity(){root.replaceChildren();if(study.mode==='cards')drawFlashcard();else if(study.mode==='fullquiz')drawFullQuiz();else drawQuestion();}

function beginFullQuiz(){
 const cards=cardsForGroup();
 if(!cards.length)return;
 fullQuiz={questions:shuffle(cards),at:0,score:0,answers:[],answered:false,options:null,done:false,started:Date.now(),script:study.script,groups:[...chosenGroups()]};
 feedback.textContent='';renderActivity();
}
function submitFullQuiz(reading){
 const q=fullQuiz;
 if(!q||q.done||q.answered)return;
 const card=q.questions[q.at];
 const correct=String(reading).trim().toLowerCase()===card.reading;
 q.answered=true;q.score+=correct?1:0;
 q.answers.push({kana:card.kana,reading:card.reading,given:String(reading),correct});
 recordAnswer(card,correct);
 feedback.textContent=correct?'Correct! Press Enter for the next question.':`The answer is ${card.reading}. Press Enter to continue.`;
 renderActivity();
}
function advanceFullQuiz(){
 if(!fullQuiz||!fullQuiz.answered||fullQuiz.done)return;
 if(fullQuiz.at+1>=fullQuiz.questions.length){
   fullQuiz.done=true;
   const total=fullQuiz.questions.length;
   state.fullQuizHistory.unshift({date:new Date().toISOString(),script:fullQuiz.script,groups:fullQuiz.groups,correct:fullQuiz.score,total});
   state.fullQuizHistory=state.fullQuizHistory.slice(0,50);
   save();
 }else{fullQuiz.at++;fullQuiz.answered=false;fullQuiz.options=null;}
 feedback.textContent='';renderActivity();
}
function drawFullQuiz(){
 if(!fullQuiz){
   const count=cardsForGroup().length;
   root.append(make('h3','Full Quiz · Selected columns'),make('p',`One question for each of your ${count} selected characters. Answer every question to receive a final score.`));
   if(!count){root.append(make('p','Select at least one group above.'));return;}
   root.append(btn(`Start ${count}-question quiz →`,beginFullQuiz,'quiz-start-button'));
   if(state.fullQuizHistory.length){
     const h=state.fullQuizHistory[0];
     root.append(make('p',`Last completed quiz: ${h.correct}/${h.total} (${Math.round(h.correct/h.total*100)}%) · ${h.script}`,'quiz-last-score'));
   }
   return;
 }
 const q=fullQuiz;
 if(q.done){
   const total=q.questions.length,pct=Math.round(q.score/total*100);
   root.append(make('p','QUIZ COMPLETE','quiz-title'),make('div',`${pct}%`,'fullquiz-score'),make('h2',`${q.score} / ${total} correct`),make('p',`${total-q.score} to review · ${q.script==='hiragana'?'Hiragana':'Katakana'}`));
   const wrong=q.answers.filter(a=>!a.correct);
   if(wrong.length){root.append(make('h3','Review these characters'));const ul=make('ul',undefined,'fullquiz-missed');wrong.forEach(a=>ul.append(make('li',`${a.kana} → ${a.reading} (you answered ${a.given||'—'})`)));root.append(ul)}
   else root.append(make('p','Perfect score! All selected characters were correct. ✨'));
   root.append(btn('Retake this quiz ↻',beginFullQuiz,'quiz-start-button'));
   return;
 }
 const card=q.questions[q.at];
 const progress=make('div',undefined,'fullquiz-progress');const fill=make('span');fill.style.width=`${q.at/q.questions.length*100}%`;progress.append(fill);
 root.append(make('p',`Question ${q.at+1} of ${q.questions.length} · Score so far ${q.score}`,'quiz-title'),progress,make('div',card.kana,'kana-symbol'),make('p','Select the correct reading','fullquiz-subtitle'));
 if(!q.options){
  const wrong=shuffle(q.questions.filter(c=>c.key!==card.key&&c.reading!==card.reading)).slice(0,3).map(c=>c.reading);
  q.options=shuffle([card.reading,...wrong]);
 }
 const opts=make('div',undefined,'quiz-options');q.options.forEach(reading=>{
   const b=btn(reading,()=>submitFullQuiz(reading));b.disabled=q.answered;
   if(q.answered&&reading===card.reading)b.classList.add('correct-option');
   opts.append(b);
 });root.append(opts);
 if(q.answered){root.append(btn(q.at===q.questions.length-1?'See my results →':'Next question →',advanceFullQuiz,'quiz-start-button'))}
}

// Press Enter to advance answered questions, without interfering with typed answers
// or native keyboard activation of unsubmitted options.
document.addEventListener('keydown',event=>{
 if(event.key!=='Enter'||event.repeat||!$('study').classList.contains('active'))return;
 const target=event.target;
 if(target?.matches?.('textarea, select, [contenteditable="true"]'))return;
 if(study.mode==='fullquiz'){
  if(fullQuiz?.done){event.preventDefault();beginFullQuiz();return;}
  if(fullQuiz?.answered){event.preventDefault();advanceFullQuiz();return;}
  if(!fullQuiz && !target?.matches?.('button,input')){event.preventDefault();beginFullQuiz();return;}
 }else if(study.mode==='choice'||study.mode==='typing'||study.mode==='review'){
  if(study.answered){event.preventDefault();study.optionsKey='';nextQuestion();return;}
 }
});
$('studyScript').addEventListener('change',e=>{study.script=e.target.value;study.group=0;study.activeGroups=[0];study.question=null;study.optionsKey='';renderStudyGroup();renderPracticeStats();changeMode('cards')});

document.querySelectorAll('[data-mode]').forEach(el=>el.addEventListener('click',()=>{study.question=null;study.optionsKey='';changeMode(el.dataset.mode)}));
function openKanaCourseQuiz(script,groups){
  if(!KANA_GROUPS[script])return;
  const valid=[...new Set(groups)].filter(i=>Number.isInteger(i)&&KANA_GROUPS[script][i]);
  if(!valid.length)return;
  study.script=script;study.group=valid[0];study.activeGroups=valid;
  $('studyScript').value=script;
  changeMode('choice');
  renderStudyGroup();renderPracticeStats();renderActivity();
  showPage('study');
}
renderStudyGroup();renderPracticeStats();renderActivity();

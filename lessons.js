 'use strict';
// All kana/readings and the section sequence derive from the linked Tofugu guides.
// This app does not mirror guide text, worksheets, mnemonic art, or audio.
const LP_SRC={hiragana:'https://www.tofugu.com/japanese/learn-hiragana/',katakana:'https://www.tofugu.com/japanese/learn-katakana/'};
const LP_BASE={
 hiragana:[
 ['Vowel sounds and pronunciation',[], 'Before learning shapes, review Tofugu’s pronunciation introduction and the five vowel sounds.', 'intro'],
 ['あ・い・う・え・お', [0], 'Start with the five vowel characters. Focus on recognizing each shape before continuing.'],
 ['か・き・く・け・こ', [1], 'The K column combines K with the vowel sounds. Review these with the vowels.'],
 ['さ・し・す・せ・そ', [2], 'The S column includes し, whose reading is shi rather than si.'],
 ['た・ち・つ・て・と', [3], 'In this column, notice the special readings chi and tsu.'],
 ['な・に・ぬ・ね・の', [4], 'Practice the N column with all the kana you already know.'],
 ['は・ひ・ふ・へ・ほ', [5], 'This H column includes ふ, commonly romanized as fu.'],
 ['ま・み・む・め・も', [6], 'Keep recognizing shapes and reading them without tracing them.'],
 ['や・ゆ・よ', [7], 'This short column has three characters.'],
 ['ら・り・る・れ・ろ', [8], 'Add this column to your cumulative review.'],
 ['わ・を・ん', [9], 'This last basic set includes the standalone nasal ん and the particle kana を.']
 ],
 katakana:[
 ['Katakana introduction and chart',[], 'Tofugu assumes you have already studied hiragana. Read its introduction and chart before beginning.', 'intro'],
 ['ア・イ・ウ・エ・オ + カ・キ・ク・ケ・コ',[0,1], 'Tofugu introduces these first ten characters together.'],
 ['サ・シ・ス・セ・ソ + タ・チ・ツ・テ・ト',[2,3], 'Learn this next ten-character set, including shi, chi and tsu.'],
 ['ナ・ニ・ヌ・ネ・ノ + ハ・ヒ・フ・ヘ・ホ',[4,5], 'Continue with this ten-character block.'],
 ['マ・ミ・ム・メ・モ + ヤ・ユ・ヨ',[6,7], 'This block contains eight katakana.'],
 ['ラ・リ・ル・レ・ロ + ワ・ヲ・ン',[8,9], 'Complete the final basic katakana block.']
 ]
};
const LP_VOICED={
 hiragana:[['が','gi','ぐ','げ','ご'],['ざ','じ','ず','ぜ','ぞ'],['だ','ぢ','づ','で','ど'],['ば','び','ぶ','べ','ぼ'],['ぱ','ぴ','ぷ','ぺ','ぽ']],
 katakana:[['ガ','ギ','グ','ゲ','ゴ'],['ザ','ジ','ズ','ゼ','ゾ'],['ダ','ヂ','ヅ','デ','ド'],['バ','ビ','ブ','ベ','ボ'],['パ','ピ','プ','ペ','ポ']]
};
const LP_VOICED_READINGS=[['ga','gi','gu','ge','go'],['za','ji','zu','ze','zo'],['da','di','du','de','do'],['ba','bi','bu','be','bo'],['pa','pi','pu','pe','po']];
// Correct a deliberately explicit, source-consistent kana chart for the voiced rows.
LP_VOICED.hiragana[0]=['が','ぎ','ぐ','げ','ご'];
const LP_COMBINATIONS=[
 ['き','キ','ky'],['ぎ','ギ','gy'],['し','シ','sh'],['じ','ジ','j'],['ち','チ','ch'],['に','ニ','ny'],['ひ','ヒ','hy'],['び','ビ','by'],['ぴ','ピ','py'],['み','ミ','my'],['り','リ','ry']
];
function lpBasic(which,groups){return groups.flatMap(i=>KANA_GROUPS[which][i].cards.map(([kana,reading])=>({kana,reading})));}
function lpVoiced(which){return LP_VOICED[which].flatMap((row,i)=>row.map((kana,j)=>({kana,reading:LP_VOICED_READINGS[i][j]})));}
function lpCombo(which){return LP_COMBINATIONS.flatMap(([h,k,initial])=>['a','u','o'].map((v,j)=>({kana:(which==='hiragana'?h:k)+(which==='hiragana'?['ゃ','ゅ','ょ'][j]:['ャ','ュ','ョ'][j]),reading:initial+v})));}
function lpModule(which){const units=LP_BASE[which].map((entry,i)=>({id:`lp-${which}-${i}`,which,title:entry[0],cards:lpBasic(which,entry[1]),desc:entry[2],intro:entry[3]==='intro',cumulative:true}));
 units.push({id:`lp-${which}-voiced`,which,title:'Dakuten and handakuten',cards:lpVoiced(which),desc:'Study the voiced kana and H-column P sounds from Tofugu. The original guide has its full pattern explanations.',cumulative:false});
 units.push({id:`lp-${which}-combos`,which,title:'Small ゃ / ゅ / ょ combinations',cards:lpCombo(which),desc:'Combine an i-row kana with small ya, yu or yo. See the exact source for the full explanation.',cumulative:false});
 units.push({id:`lp-${which}-smalltsu`,which,title:'Small tsu and final source exercises',cards:[],desc:'Learn the small-tsu pause in the source guide and complete its final exercises. This is a source-reading checkpoint, not an automated speaking exercise.',intro:true});
 return {which,units};}
const LP_MODULES=[lpModule('hiragana'),lpModule('katakana')];
const LP_UNITS=LP_MODULES.flatMap(m=>m.units);
function lpSafeData(v){const o={done:{},attempts:{},last:null};if(!v||typeof v!=='object')return o;for(const u of LP_UNITS){if(v.done?.[u.id]===true)o.done[u.id]=true;const x=v.attempts?.[u.id];if(x&&typeof x==='object')o.attempts[u.id]={right:Math.max(0,Math.min(10000,Number(x.right)||0)),wrong:Math.max(0,Math.min(10000,Number(x.wrong)||0))};}if(LP_UNITS.some(u=>u.id===v.last))o.last=v.last;return o;}
state.guidedLessons=lpSafeData(state.guidedLessons);
const lpState=state.guidedLessons;
let lpCurrent=null,lpStep=0,lpQuestions=[],lpLocked=false,lpWrong=0,lpCorrect=0,lpTyped='',lpChoiceSet=null;
const lpEl=document.getElementById('lessonPlayer');
const lpHome=document.getElementById('lessonHome');
const lpCreate=(tag,content,cls)=>make(tag,content,cls);
const lpButton=(name,fn,kind='secondary')=>{let b=lpCreate('button',name,kind);b.type='button';b.addEventListener('click',fn);return b};
function lpNextUnit(){return LP_UNITS.find(x=>!lpState.done[x.id])||LP_UNITS[0]}
function lpDisplayDetails(u){
 // Every tile uses a kana sample from the verified Tofugu-backed lesson data.
 // Source-reading checkpoints use the relevant already-taught character instead.
 let glyph=u.cards.length ? u.cards.slice(0,5).map(c=>c.kana).join('・') :
    (u.which==='hiragana'?'あ・い・う':'ア・イ・ウ');
 if(u.id.endsWith('-smalltsu')) glyph=u.which==='hiragana'?'っ':'ッ';
 if(u.id.endsWith('-voiced')) glyph=u.which==='hiragana'?'が・ざ・だ':'ガ・ザ・ダ';
 if(u.id.endsWith('-combos')) glyph=u.which==='hiragana'?'きゃ・しゅ・ちょ':'キャ・シュ・チョ';
 if(u.intro && !u.id.endsWith('-smalltsu')) glyph=u.which==='hiragana'?'あ・い・う':'ア・イ・ウ';
 let title=u.title;
 if(u.intro && !u.id.endsWith('-smalltsu')) title=u.which==='hiragana'?'Pronunciation & introduction':'Katakana introduction';
 else if(u.id.endsWith('-voiced')) title='Dakuten & handakuten';
 else if(u.id.endsWith('-combos')) title='Small kana combinations';
 else if(u.id.endsWith('-smalltsu')) title='Small tsu & final practice';
 else if(u.cards.length) {
   const group=u.id.match(/-(\d+)$/);
   if(group) title=u.which==='hiragana' ?
     (Number(group[1])===1?'Vowels':`${['','', 'K','S','T','N','H','M','Y','R','W'][Number(group[1])] || 'Kana'} group`)
     : (Number(group[1])===1?'Vowels & K group':`Character set ${Number(group[1])}`);
 }
 return {glyph,title};
}
function lpList(){
 const count=LP_UNITS.filter(u=>lpState.done[u.id]).length;
 document.getElementById('lessonCount').textContent=`${count} / ${LP_UNITS.length} complete`;
 document.getElementById('lessonOverview').textContent=count===LP_UNITS.length?'All guided checkpoints complete!':'Your Japanese lesson journey';
 document.getElementById('lessonSummary').textContent='Learn, practice, review. Your progress saves automatically.';
 document.getElementById('lessonTotalFill').style.width=Math.round(100*count/LP_UNITS.length)+'%';
 const root=document.getElementById('lessonList');root.replaceChildren();
 LP_MODULES.forEach((mod,m)=>{
  const section=lpCreate('section',undefined,'lesson-module');
  const top=lpCreate('div',undefined,'lesson-module-head');
  const heading=lpCreate('div',undefined,'lesson-module-heading');
  heading.append(lpCreate('div',m===0?'あ':'ア','lesson-module-symbol'));
  const words=lpCreate('div');words.append(lpCreate('span',`CHAPTER ${String(m+1).padStart(2,'0')}`,'lesson-step-label'),lpCreate('h3',m===0?'Hiragana':'Katakana'));
  heading.append(words);top.append(heading);
  top.append(lpCreate('span',`${mod.units.filter(u=>lpState.done[u.id]).length} / ${mod.units.length} finished`,'lesson-module-status'));
  section.append(top);
  const grid=lpCreate('div',undefined,'lesson-card-grid');
  mod.units.forEach((u,i)=>{
   const detail=lpDisplayDetails(u),complete=!!lpState.done[u.id];
   const card=lpCreate('article',undefined,'lesson-session-card'+(complete?' is-complete':''));
   const upper=lpCreate('div',undefined,'lesson-session-upper');
   upper.append(lpCreate('span',`SESSION ${String(i+1).padStart(2,'0')}`,'lesson-session-number'));
   upper.append(lpCreate('span',complete?'✓ Finished':u.intro?'Reading':'Practice','lesson-session-state'));
   card.append(upper);
   card.append(lpCreate('div',detail.glyph,'lesson-session-glyph'));
   const content=lpCreate('div',undefined,'lesson-session-content');
   content.append(lpCreate('h4',detail.title));
   content.append(lpCreate('p',u.title));
   content.append(lpCreate('small',u.intro?'Read the original Tofugu section':`${u.cards.length} kana · guided practice`));
   card.append(content);
   card.append(lpButton(complete?'Review session ↗':'Start session →',()=>lpStart(u),complete?'secondary':'primary'));
   grid.append(card);
  });
  section.append(grid);root.append(section);
 });
}
function lpStart(u){
 lpCurrent=u;lpStep=0;lpWrong=0;lpCorrect=0;lpLocked=false;lpChoiceSet=null;
 lpState.last=u.id;save();
 // Quiz on the current section, with a few cumulative questions from earlier lessons.
 const mod=LP_MODULES.find(m=>m.which===u.which);let earlier=[];
 if(u.cumulative){for(const other of mod.units){if(other.id===u.id)break;if(lpState.done[other.id]&&other.cards.length)earlier.push(...other.cards);}}
 const unique=new Map([...u.cards,...earlier].map(c=>[c.kana,c]));
 const pool=[...unique.values()];
 lpQuestions=u.intro?[]:lpShuffle(pool.length<=10?pool:lpShuffle(u.cards).slice(0,Math.min(10,u.cards.length)).concat(lpShuffle(earlier).slice(0,4)));
 lpHome.hidden=true;lpEl.hidden=false;lpDraw();lpEl.scrollIntoView({behavior:'smooth',block:'start'});
}
function lpShuffle(arr){let a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a;}
function lpNavigateHome(){lpEl.hidden=true;lpHome.hidden=false;lpCurrent=null;lpList();}
function lpHeader(max){
 const header=lpCreate('div',undefined,'lesson-topline');const t=lpCreate('div');t.append(lpCreate('span',lpCurrent.which.toUpperCase(),'eyebrow'),lpCreate('h2',lpCurrent.title));
 header.append(t,lpButton('← All lessons',lpNavigateHome));lpEl.append(header);
 const bar=lpCreate('div',undefined,'lesson-meter');const fill=lpCreate('span');fill.style.width=`${Math.round(lpStep/max*100)}%`;bar.append(fill);lpEl.append(bar);
 lpEl.append(lpCreate('div',`Step ${Math.min(lpStep+1,max)} of ${max}`,'lesson-step-label'));
}
function lpSource(){return safeLink(LP_SRC[lpCurrent.which], 'Read Tofugu’s full lesson, mnemonics and exercises');}
function lpDraw(){
 lpEl.replaceChildren();if(!lpCurrent)return;
 const u=lpCurrent;const len=u.cards.length, total=u.intro?1:len+lpQuestions.length+1;
 if(lpStep>=total){lpEnd();return}
 lpHeader(total);const area=lpCreate('div',undefined,'lesson-teach');lpEl.append(area);
 if(u.intro){
 area.append(lpCreate('h3','Begin with the original source'),lpCreate('p',u.desc),lpCreate('div','Yume will save this checkpoint when you confirm you completed the source reading.','lesson-rule'),lpSource());
 lpEl.append(lpButton('I read this section · Complete ✓',()=>lpFinish(), 'primary'));return;
 }
 if(lpStep<len){const c=u.cards[lpStep];
 area.append(lpCreate('span','LEARN THE CHARACTER','lesson-step-label'),lpCreate('div',c.kana,'lesson-kana'),lpCreate('div',c.reading,'lesson-reading'),lpCreate('p',u.desc));
 const rule=lpCreate('div','Use Tofugu’s original mnemonic and pronunciation example for this character. Then try to remember the reading without looking.','lesson-rule');area.append(rule,lpSource());
 lpEl.append(lpButton('Next character →',()=>{lpStep++;lpDraw()},'primary'));
 if(lpStep>0)lpEl.append(lpButton('← Back',()=>{lpStep--;lpDraw()}));return;
 }
 const qi=lpStep-len;
 if(qi===lpQuestions.length){area.append(lpCreate('h3','Your review is finished!'),lpCreate('p',`Correct first tries: ${lpCorrect} · Missed: ${lpWrong}`),lpCreate('p','Review mistakes again whenever you need. The official Tofugu tasks and worksheets remain available at the link below.'),lpSource());
 lpEl.append(lpButton('Finish lesson ✓',lpFinish,'primary'));lpEl.append(lpButton('Try this lesson again',()=>lpStart(u)));return;
 }
 const q=lpQuestions[qi];area.append(lpCreate('span','RECALL QUIZ','lesson-step-label'),lpCreate('h3','What is the reading?'),lpCreate('div',q.kana,'lesson-kana'));
 const opts=lpCreate('div',undefined,'lesson-answer-buttons');
 // Distractors come only from existing approved kana readings.
 const all=lpBasic(u.which,[0,1,2,3,4,5,6,7,8,9]).concat(lpVoiced(u.which),lpCombo(u.which));
 const wrong=[...new Set(all.map(x=>x.reading))].filter(r=>r!==q.reading);
 if(!lpChoiceSet||lpChoiceSet.key!==qi){lpChoiceSet={key:qi,values:lpShuffle([q.reading,...lpShuffle(wrong).slice(0,3)])};}
 const feedback=lpCreate('div','','lesson-feedback');
 for(const reading of lpChoiceSet.values){const b=lpButton(reading,()=>{
 if(lpLocked)return;lpLocked=true;const yes=reading===q.reading;
 if(yes)lpCorrect++;else lpWrong++;
 const stat=lpState.attempts[u.id]||{right:0,wrong:0};stat[yes?'right':'wrong']++;lpState.attempts[u.id]=stat;save();
 feedback.textContent=yes?'Correct! 🌸':`Not quite. The correct reading is ${q.reading}.`;
 for(const child of opts.children){child.disabled=true;if(child.textContent===q.reading)child.classList.add('is-right');else if(child===b)child.classList.add('is-wrong')}
 next.disabled=false;},'');b.className='';opts.append(b)}
 const next=lpButton('Continue →',()=>{lpLocked=false;lpChoiceSet=null;lpStep++;lpDraw()},'primary');next.disabled=true;
 lpEl.append(opts,feedback,next);
 }
function lpFinish(){lpState.done[lpCurrent.id]=true;save();const u=lpCurrent;lpEl.replaceChildren();
 const end=lpCreate('div',undefined,'lesson-end');end.append(lpCreate('h2','Lesson complete! ✨'),lpCreate('p',`You finished ${u.title}. Yume saved your progress.`),lpCreate('p','To follow Tofugu’s full method, make sure you also complete its official drills and worksheets.'),lpSource());lpEl.append(end);
 lpEl.append(lpButton('Next lesson →',()=>{const idx=LP_UNITS.indexOf(u);if(idx<LP_UNITS.length-1)lpStart(LP_UNITS[idx+1]);else lpNavigateHome()},'primary'),lpButton('Back to path',lpNavigateHome));
 if(typeof setPetMood==='function')setPetMood('excited',1800);
 if(typeof renderCourse==='function')renderCourse();
 }
document.getElementById('resumeLesson').addEventListener('click',()=>lpStart(LP_UNITS.find(u=>u.id===lpState.last&&!lpState.done[u.id])||lpNextUnit()));
document.getElementById('chooseHiragana').addEventListener('click',()=>lpStart(LP_MODULES[0].units.find(u=>!lpState.done[u.id])||LP_MODULES[0].units[0]));
document.getElementById('chooseKatakana').addEventListener('click',()=>lpStart(LP_MODULES[1].units.find(u=>!lpState.done[u.id])||LP_MODULES[1].units[0]));
lpList();

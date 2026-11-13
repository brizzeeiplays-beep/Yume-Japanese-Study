
'use strict';
// Curated lesson index derived from resources explicitly recommended by the Primer.
// Source websites are NOT mirrored or scraped by the client; full explanations
// remain on the publishers' websites, with links provided for each unit.
const COURSE_DATA = [
  {
    "title": "Foundation I — Hiragana",
    "description": "Learn to recognize all basic hiragana before continuing.",
    "units": [
      {
        "id": "unit-0-0",
        "title": "Tofugu preparation: chart and pronunciation",
        "desc": "Start by reading Tofugu’s method, opening its hiragana chart, and following its pronunciation video. Recognition comes before handwriting.",
        "url": "https://www.tofugu.com/japanese/learn-hiragana/"
      },
      {
        "id": "unit-0-1",
        "title": "あ・い・う・え・お — First five hiragana",
        "desc": "Follow Tofugu’s five vowel-character explanations and original mnemonics, then do its vowel-only quiz and worksheet.",
        "url": "https://www.tofugu.com/japanese/learn-hiragana/",
        "practice": {
          "script": "hiragana",
          "group": 0
        },
        "quiz": "https://kana-quiz.tofugu.com/"
      },
      {
        "id": "unit-0-2",
        "title": "か・き・く・け・こ — K-column",
        "desc": "Read Tofugu’s K-column section, then review the vowels and K-column together as directed in its tasks.",
        "url": "https://www.tofugu.com/japanese/learn-hiragana/",
        "practice": {
          "script": "hiragana",
          "group": 1
        },
        "quiz": "https://kana-quiz.tofugu.com/"
      },
      {
        "id": "unit-0-3",
        "title": "Hiragana: S group",
        "desc": "Read the guide, then practice the corresponding group in Yume",
        "url": "https://www.tofugu.com/japanese/learn-hiragana/",
        "practice": {
          "script": "hiragana",
          "group": 2
        }
      },
      {
        "id": "unit-0-4",
        "title": "Hiragana: T group",
        "desc": "Read the guide, then practice the corresponding group in Yume",
        "url": "https://www.tofugu.com/japanese/learn-hiragana/",
        "practice": {
          "script": "hiragana",
          "group": 3
        }
      },
      {
        "id": "unit-0-5",
        "title": "Hiragana: N group",
        "desc": "Read the guide, then practice the corresponding group in Yume",
        "url": "https://www.tofugu.com/japanese/learn-hiragana/",
        "practice": {
          "script": "hiragana",
          "group": 4
        }
      },
      {
        "id": "unit-0-6",
        "title": "Hiragana: H group",
        "desc": "Read the guide, then practice the corresponding group in Yume",
        "url": "https://www.tofugu.com/japanese/learn-hiragana/",
        "practice": {
          "script": "hiragana",
          "group": 5
        }
      },
      {
        "id": "unit-0-7",
        "title": "Hiragana: M group",
        "desc": "Read the guide, then practice the corresponding group in Yume",
        "url": "https://www.tofugu.com/japanese/learn-hiragana/",
        "practice": {
          "script": "hiragana",
          "group": 6
        }
      },
      {
        "id": "unit-0-8",
        "title": "Hiragana: Y group",
        "desc": "Read the guide, then practice the corresponding group in Yume",
        "url": "https://www.tofugu.com/japanese/learn-hiragana/",
        "practice": {
          "script": "hiragana",
          "group": 7
        }
      },
      {
        "id": "unit-0-9",
        "title": "Hiragana: R group",
        "desc": "Read the guide, then practice the corresponding group in Yume",
        "url": "https://www.tofugu.com/japanese/learn-hiragana/",
        "practice": {
          "script": "hiragana",
          "group": 8
        }
      },
      {
        "id": "unit-0-10",
        "title": "Hiragana: W & N group",
        "desc": "Read the guide, then practice the corresponding group in Yume",
        "url": "https://www.tofugu.com/japanese/learn-hiragana/",
        "practice": {
          "script": "hiragana",
          "group": 9
        }
      },
      {
        "id": "unit-0-11",
        "title": "Hiragana variations",
        "desc": "Follow Tofugu’s variation and combination explanations in their original order; interactive variation exercises are still being prepared.",
        "url": "https://www.tofugu.com/japanese/learn-hiragana/"
      },
      {
        "id": "unit-0-12",
        "title": "Hiragana final review",
        "desc": "Use source exercises and Yume quizzes to review all basic kana",
        "url": "https://www.tofugu.com/japanese/learn-hiragana/"
      }
    ]
  },
  {
    "title": "Foundation II — Katakana",
    "description": "Read Tofugu’s katakana guide once you have worked through hiragana.",
    "units": [
      {
        "id": "unit-1-0",
        "title": "Katakana preparation: introduction and chart",
        "desc": "Read Tofugu’s introduction and open its katakana chart. The guide assumes you know hiragana first.",
        "url": "https://www.tofugu.com/japanese/learn-katakana/"
      },
      {
        "id": "unit-1-1",
        "title": "ア〜オ + カ〜コ — First ten katakana",
        "desc": "Tofugu teaches the vowel and K columns together as one first lesson. Study the original mnemonics, then complete its combined quiz and worksheet.",
        "url": "https://www.tofugu.com/japanese/learn-katakana/",
        "practice": {
          "script": "katakana",
          "groups": [
            0,
            1
          ]
        },
        "quiz": "https://kana-quiz.tofugu.com/"
      },
      {
        "id": "unit-1-2",
        "title": "Review the first ten katakana",
        "desc": "Repeat Tofugu’s first ten-character review until you can recall the entire set. This is an extra progress checkpoint for Yume, not a separate Tofugu lesson.",
        "url": "https://www.tofugu.com/japanese/learn-katakana/",
        "practice": {
          "script": "katakana",
          "group": 1
        }
      },
      {
        "id": "unit-1-3",
        "title": "サ〜ソ + タ〜ト — Next ten katakana",
        "desc": "Tofugu teaches the S and T columns together in its second ten-character lesson. Use the original guide and cumulative review.",
        "url": "https://www.tofugu.com/japanese/learn-katakana/",
        "practice": {
          "script": "katakana",
          "groups": [
            2,
            3
          ]
        }
      },
      {
        "id": "unit-1-4",
        "title": "Review first twenty katakana",
        "desc": "Optional Yume review checkpoint; Tofugu’s S and T lesson uses the whole set learned so far.",
        "url": "https://www.tofugu.com/japanese/learn-katakana/",
        "practice": {
          "script": "katakana",
          "group": 3
        }
      },
      {
        "id": "unit-1-5",
        "title": "Katakana: N group",
        "desc": "Read the guide, then practice the corresponding group in Yume",
        "url": "https://www.tofugu.com/japanese/learn-katakana/",
        "practice": {
          "script": "katakana",
          "group": 4
        }
      },
      {
        "id": "unit-1-6",
        "title": "Katakana: H group",
        "desc": "Read the guide, then practice the corresponding group in Yume",
        "url": "https://www.tofugu.com/japanese/learn-katakana/",
        "practice": {
          "script": "katakana",
          "group": 5
        }
      },
      {
        "id": "unit-1-7",
        "title": "Katakana: M group",
        "desc": "Read the guide, then practice the corresponding group in Yume",
        "url": "https://www.tofugu.com/japanese/learn-katakana/",
        "practice": {
          "script": "katakana",
          "group": 6
        }
      },
      {
        "id": "unit-1-8",
        "title": "Katakana: Y group",
        "desc": "Read the guide, then practice the corresponding group in Yume",
        "url": "https://www.tofugu.com/japanese/learn-katakana/",
        "practice": {
          "script": "katakana",
          "group": 7
        }
      },
      {
        "id": "unit-1-9",
        "title": "Katakana: R group",
        "desc": "Read the guide, then practice the corresponding group in Yume",
        "url": "https://www.tofugu.com/japanese/learn-katakana/",
        "practice": {
          "script": "katakana",
          "group": 8
        }
      },
      {
        "id": "unit-1-10",
        "title": "Katakana: W & N group",
        "desc": "Read the guide, then practice the corresponding group in Yume",
        "url": "https://www.tofugu.com/japanese/learn-katakana/",
        "practice": {
          "script": "katakana",
          "group": 9
        }
      },
      {
        "id": "unit-1-11",
        "title": "Katakana variations",
        "desc": "Read variation and combination sections in Tofugu",
        "url": "https://www.tofugu.com/japanese/learn-katakana/"
      },
      {
        "id": "unit-1-12",
        "title": "Katakana final review",
        "desc": "Use guide exercises and Yume quizzes to review all basic kana",
        "url": "https://www.tofugu.com/japanese/learn-katakana/"
      },
      {
        "id": "unit-1-13",
        "title": "Mixed kana recognition",
        "desc": "Switch between both scripts in Yume and review difficult characters",
        "url": "https://www.tofugu.com/japanese/learn-katakana/"
      }
    ]
  },
  {
    "title": "Basics — Grammar",
    "description": "Grammar, vocabulary, and listening can now be studied in parallel.",
    "units": [
      {
        "id": "unit-2-0",
        "title": "Read the Japanese Learning Loop basics section",
        "desc": "Learn how the study areas fit together",
        "url": "https://morg.systems/58465ab9"
      },
      {
        "id": "unit-2-1",
        "title": "Start Yokubi",
        "desc": "Read the introduction to the beginner grammar guide",
        "url": "https://morg.systems/yokubi"
      },
      {
        "id": "unit-2-2",
        "title": "Work through Yokubi — first pass",
        "desc": "Read the full grammar guide at your pace",
        "url": "https://morg.systems/yokubi"
      },
      {
        "id": "unit-2-3",
        "title": "Review confusing grammar topics",
        "desc": "Use the linked explanations and revisit as needed",
        "url": "https://morg.systems/yokubi"
      },
      {
        "id": "unit-2-4",
        "title": "Read Japanese FAQ and study tips",
        "desc": "Use Morg’s Japanese FAQ and Unlocking Japanese guidance",
        "url": "https://morg.systems/Japanese"
      }
    ]
  },
  {
    "title": "Basics — Vocabulary & Kanji",
    "description": "Use the recommended beginner deck and learn kanji through words.",
    "units": [
      {
        "id": "unit-3-0",
        "title": "Understand Anki and reviews",
        "desc": "Read the recommended Anki explanation",
        "url": "https://apps.ankiweb.net/"
      },
      {
        "id": "unit-3-1",
        "title": "Read Kaishi deck setup",
        "desc": "Read the deck documentation before importing",
        "url": "https://github.com/donkuri/Kaishi"
      },
      {
        "id": "unit-3-2",
        "title": "Begin daily vocabulary reviews",
        "desc": "Try a manageable pace: the Primer suggests about 10 new words daily at first",
        "url": "https://github.com/donkuri/Kaishi"
      },
      {
        "id": "unit-3-3",
        "title": "Build a stable review habit",
        "desc": "Continue spaced repetition without overloading yourself",
        "url": "https://github.com/donkuri/Kaishi"
      },
      {
        "id": "unit-3-4",
        "title": "Learn the kanji approach",
        "desc": "Read the Primer’s advice on learning kanji through vocabulary",
        "url": "https://morg.systems/Japanese-Primer"
      },
      {
        "id": "unit-3-5",
        "title": "Learn about furigana and Yomitan",
        "desc": "Read the recommended reading-tool guidance",
        "url": "https://yomitan.wiki/"
      }
    ]
  },
  {
    "title": "Listening & Reading — Build Independence",
    "description": "Start consuming enjoyable native material without waiting for perfect understanding.",
    "units": [
      {
        "id": "unit-4-0",
        "title": "Read beginner immersion recommendations",
        "desc": "Choose something you can enjoy reading or listening to",
        "url": "https://morg.systems/e50a5ae3"
      },
      {
        "id": "unit-4-1",
        "title": "Set up reading lookup tools",
        "desc": "Review Yomitan as suggested by the Primer",
        "url": "https://yomitan.wiki/"
      },
      {
        "id": "unit-4-2",
        "title": "Begin short listening sessions",
        "desc": "Read the Learning Loop for listening guidance",
        "url": "https://morg.systems/58465ab9"
      },
      {
        "id": "unit-4-3",
        "title": "Begin short reading sessions",
        "desc": "Use the beginner immersion sources",
        "url": "https://morg.systems/e50a5ae3"
      },
      {
        "id": "unit-4-4",
        "title": "Read practical early-reading tips",
        "desc": "Learn approaches to reading with furigana",
        "url": "https://morg.systems/Japanese-Primer"
      },
      {
        "id": "unit-4-5",
        "title": "Review unfamiliar vocabulary",
        "desc": "Use approved lookup and review recommendations",
        "url": "https://morg.systems/58465ab9"
      }
    ]
  },
  {
    "title": "Long-Term Learning Loop",
    "description": "A continuing practice stage rather than a finite promise of fluency.",
    "units": [
      {
        "id": "unit-5-0",
        "title": "Discover new material",
        "desc": "Choose another native-language resource from the guide",
        "url": "https://morg.systems/e50a5ae3"
      },
      {
        "id": "unit-5-1",
        "title": "Consume and make notes",
        "desc": "Continue reading and listening regularly",
        "url": "https://morg.systems/58465ab9"
      },
      {
        "id": "unit-5-2",
        "title": "Look up unfamiliar material",
        "desc": "Use Unlocking Japanese for study strategies",
        "url": "https://morg.systems/58465ab9"
      },
      {
        "id": "unit-5-3",
        "title": "Sentence mining introduction",
        "desc": "Read the recommended sentence-mining guidance",
        "url": "https://morg.systems/58465ab9"
      },
      {
        "id": "unit-5-4",
        "title": "Review and repeat",
        "desc": "Continue your review loop and revisit earlier checkpoints",
        "url": "https://morg.systems/58465ab9"
      },
      {
        "id": "unit-5-5",
        "title": "Optional: consider output practice",
        "desc": "Read the linked output guidance when ready",
        "url": "https://morg.systems/58465ab9"
      }
    ]
  }
];
const courseRoot=document.getElementById('courseModules');
state.courseCompleted=sanitizeCourseCompleted(state.courseCompleted);
const courseTotal=COURSE_DATA.reduce((n,c)=>n+c.units.length,0);
function allCourseUnits(){return COURSE_DATA.flatMap(c=>c.units)}
function nextCourseUnit(){return allCourseUnits().find(u=>!state.courseCompleted[u.id])}
// Decorative Japanese script markers identify every course card consistently.
// Educational kana shown for kana lessons come from the already source-checked KANA_GROUPS.
const COURSE_STAGE_MARKERS=["あ","ア","文","語","聴","学"];
const COURSE_STAGE_LABELS=["HIRAGANA","KATAKANA","GRAMMAR","VOCABULARY & KANJI","READING & LISTENING","ONGOING PRACTICE"];
function courseUnitMarker(unit, stageIndex){
  if(stageIndex===0 || stageIndex===1){
    const script=stageIndex===0?'hiragana':'katakana';
    const ix=Number(unit.id.split('-')[2]);
    const groups=coursePracticeGroups(unit,stageIndex);
    if(groups.length){
      const chars=groups.flatMap(i=>(KANA_GROUPS[script]?.[i]?.cards||[]).map(c=>c[0]));
      return chars.slice(0,10).join('・');
    }
    // Only characters from the correct writing system: no mixed or unrelated glyphs.
    return script==='hiragana'?(ix===11?'が・ぎ・ぐ・げ・ご':'あ・い・う・え・お'):(ix===11?'ガ・ギ・グ・ゲ・ゴ':'ア・イ・ウ・エ・オ');
  }
  return COURSE_STAGE_MARKERS[stageIndex] || '学';
}
// Every kana checkpoint gets the appropriate group(s), including unlinked reviews.
// Review and variation checkpoints practice the VERIFIED BASIC KANA ONLY;
// the source guide remains the place for variations not yet in our bank.
function coursePracticeGroups(unit,stageIndex){
  if(stageIndex>1)return [];
  const ix=Number(unit.id.split('-')[2]);
  if(stageIndex===0){
    if(ix===0)return [0];
    if(ix>=1 && ix<=10)return [ix-1];
    return Array.from({length:10},(_,i)=>i);
  }
  if(ix===0)return [0,1];
  if(ix===1||ix===2)return [0,1];
  if(ix===3)return [2,3];
  if(ix===4)return [0,1,2,3];
  if(ix>=5&&ix<=10)return [ix-1];
  return Array.from({length:10},(_,i)=>i);
}
function openCourseQuiz(unit,stageIndex){
  const script=stageIndex===0?'hiragana':'katakana';
  const groups=coursePracticeGroups(unit,stageIndex);
  if(typeof openKanaCourseQuiz==='function')openKanaCourseQuiz(script,groups);
  else notify('Practice is not available. Please reload the page.');
}
const COURSE_STAGE_DESCRIPTIONS=["Learn the kana in Tofugu’s order, one group at a time.","Study Tofugu’s katakana groups, then review the scripts together.","Follow the approved beginner grammar readings.","Build a steady vocabulary and kanji study routine.","Use approved resources to practice understanding Japanese.","Keep reading, listening, and reviewing at your own pace."];
function courseUnitTitle(unit, stageIndex){
  // Presentation-only titles. IDs and completion records stay unchanged.
  // Each foundation card is named for the kana columns or column review it covers.
  if(stageIndex===0 || stageIndex===1){
    const script=stageIndex===0?'Hiragana':'Katakana';
    const titles=stageIndex===0 ? {
      0:'Kana columns · Introduction',
      1:'Vowel column · あ・い・う・え・お',
      2:'K column · か・き・く・け・こ',
      3:'S column · さ・し・す・せ・そ',
      4:'T column · た・ち・つ・て・と',
      5:'N column · な・に・ぬ・ね・の',
      6:'H column · は・ひ・ふ・へ・ほ',
      7:'M column · ま・み・む・め・も',
      8:'Y column · や・ゆ・よ',
      9:'R column · ら・り・る・れ・ろ',
      10:'W & N column · わ・を・ん',
      11:'Column variations & combinations',
      12:'All-column review'
    } : {
      0:'Kana columns · Introduction',
      1:'Vowel + K columns · ア〜オ・カ〜コ',
      2:'Vowel + K columns · Review',
      3:'S + T columns · サ〜ソ・タ〜ト',
      4:'Vowel–T columns · Review',
      5:'N column · ナ・ニ・ヌ・ネ・ノ',
      6:'H column · ハ・ヒ・フ・ヘ・ホ',
      7:'M column · マ・ミ・ム・メ・モ',
      8:'Y column · ヤ・ユ・ヨ',
      9:'R column · ラ・リ・ル・レ・ロ',
      10:'W & N column · ワ・ヲ・ン',
      11:'Column variations & combinations',
      12:'All-column review',
      13:'Hiragana + Katakana · Mixed-column review'
    };
    const match=unit.id.match(/^unit-[01]-(\d+)$/);
    if(match && titles[Number(match[1])])return titles[Number(match[1])];
    return script+' · '+unit.title;
  }
  return unit.title.replace(/^Optional: /,'Optional · ');
}

function courseUnitSubtitle(unit,stageIndex){
  if(stageIndex<2){
    if(unit.practice){const names=unit.practice.groups||[unit.practice.group];
      const count=names.reduce((n,i)=>n+(KANA_GROUPS[unit.practice.script]?.[i]?.cards.length||0),0);
      return `${count} kana to practice · Tofugu source`;
    }
    return 'Read & review · Tofugu source';
  }
  return 'Source-linked study checkpoint';
}

// Preserve expand/collapse preferences across re-renders and page refreshes.
const stageFoldKey='yume-course-stages-v1';
let foldedStages={};
try{foldedStages=JSON.parse(localStorage.getItem(stageFoldKey)||'{}')||{}}catch(_){foldedStages={}}
function saveStageFold(){try{localStorage.setItem(stageFoldKey,JSON.stringify(foldedStages))}catch(_){}}
function revealCourseUnit(unit){
  if(!unit)return;
  const stageIndex=COURSE_DATA.findIndex(c=>c.units.some(u=>u.id===unit.id));
  foldedStages[stageIndex]=false;saveStageFold();renderCourse();
  const target=document.getElementById('course-'+unit.id);
  target?.scrollIntoView({behavior:'smooth',block:'center'});
  target?.classList.add('is-next');
}
function renderCourse(){
  const done=allCourseUnits().filter(u=>state.courseCompleted[u.id]).length;
  document.getElementById('courseCount').textContent=`${done} / ${courseTotal} checkpoints`;
  const pct=Math.round(done/courseTotal*100),bar=document.getElementById('courseBar');bar.setAttribute('aria-valuenow',String(pct));
  document.getElementById('courseFill').style.width=pct+'%';
  const next=nextCourseUnit(),nextIndex=next?COURSE_DATA.findIndex(stage=>stage.units.includes(next)):-1;
  document.getElementById('courseNext').textContent=next?`Up next: ${courseUnitTitle(next,nextIndex)}`:'All checkpoints checked! Continue your reading and listening loop. 🌸';
  courseRoot.replaceChildren();const hide=document.getElementById('courseShowDone').checked;
  COURSE_DATA.forEach((module,index)=>{
    const count=module.units.filter(u=>state.courseCompleted[u.id]).length;
    const section=make('section',undefined,'panel course-module');
    const collapsed=!!foldedStages[index];section.classList.toggle('is-collapsed',collapsed);
    const heading=make('button',undefined,'course-header course-stage-toggle');heading.type='button';heading.setAttribute('aria-expanded',String(!collapsed));heading.setAttribute('aria-label',`${collapsed?'Expand':'Collapse'} ${module.title}`);
    const headingInfo=make('div',undefined,'course-heading-info');const stageMark=make('span',COURSE_STAGE_MARKERS[index]||'学','course-stage-mark');stageMark.setAttribute('aria-hidden','true');const headingText=make('div');headingText.append(make('span',`STAGE ${String(index+1).padStart(2,'0')} · ${COURSE_STAGE_LABELS[index]||'JAPANESE'}`,'eyebrow'),make('h2',module.title),make('p',COURSE_STAGE_DESCRIPTIONS[index]||module.description));headingInfo.append(stageMark,headingText);
    const headerRight=make('span',undefined,'course-stage-right');headerRight.append(make('span',`${count} / ${module.units.length}`,'tag'),make('span',collapsed?'⌄':'⌃','course-chevron'));heading.append(headingInfo,headerRight);
    heading.addEventListener('click',()=>{foldedStages[index]=!foldedStages[index];saveStageFold();renderCourse()});
    section.append(heading);
    const list=make('div',undefined,'course-unit-list');list.hidden=collapsed;
    module.units.forEach(unit=>{
      const checked=!!state.courseCompleted[unit.id];if(hide&&checked)return;
      const row=make('div',undefined,'course-unit'+(checked?' done':''));row.id='course-'+unit.id;
      const check=document.createElement('input');check.type='checkbox';check.checked=checked;check.setAttribute('aria-label',`Complete ${courseUnitTitle(unit,index)}`);
      check.addEventListener('change',()=>{state.courseCompleted[unit.id]=check.checked;save();renderCourse();if(check.checked)notify('Checkpoint saved! 🌸')});
      const glyph=make('div',courseUnitMarker(unit,index),'course-unit-glyph');glyph.setAttribute('aria-hidden','true');
      const info=make('div',undefined,'course-unit-content'),titles=make('div',undefined,'course-unit-titles');
      titles.append(make('span',`LESSON ${String(module.units.indexOf(unit)+1).padStart(2,'0')} · ${COURSE_STAGE_LABELS[index]}`,'course-unit-kicker'),make('strong',courseUnitTitle(unit,index)),make('span',courseUnitSubtitle(unit,index),'course-unit-subtitle'));
      info.append(titles,make('p',unit.desc));const actions=make('div',undefined,'course-unit-actions');actions.append(safeLink(unit.url,'Source lesson'));
      if(index<2){
        const quizBtn=make('button','✏️ Quiz this section','secondary');quizBtn.type='button';quizBtn.addEventListener('click',()=>openCourseQuiz(unit,index));actions.append(quizBtn);
        // Official quiz provides additional Tofugu practice including their own group choices.
        actions.append(safeLink('https://kana-quiz.tofugu.com/','Tofugu quiz'));
        if([11,12,13].includes(Number(unit.id.split('-')[2])))actions.append(make('span','Yume quiz: basic kana only','course-quiz-note'));
      }else{
        // Do not pretend these stages have verified imported Japanese question banks.
        actions.append(make('span','In-app quiz not available for this resource yet','course-quiz-note'));
      }
      info.append(actions);
      const completion=make('label',undefined,'course-unit-completion');completion.append(check,make('span','Complete'));row.append(glyph,info,completion);list.append(row);
    });
    if(!list.children.length)list.append(make('p','All checkpoints completed in this stage!','hint'));
    section.append(list);courseRoot.append(section);
  });
}
document.getElementById('courseShowDone').addEventListener('change',renderCourse);
document.getElementById('courseContinue').addEventListener('click',()=>{
  const next=nextCourseUnit();if(next){document.getElementById('courseShowDone').checked=false;showPage('course');revealCourseUnit(next)}else notify('All checkpoints checked! 🌸')
});
renderCourse();

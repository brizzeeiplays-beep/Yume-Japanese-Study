# Yume — Collapsible stages + section-accurate quizzes

## Install
1. In your existing Yume site, go to Progress and **Export backup** before updating.
2. Copy the SIX website files in this folder into your existing VS Code project, replacing the previous files.
3. Open `index.html` again and refresh (Ctrl+F5 if necessary).
4. Your course IDs and existing browser progress keys remain unchanged.

## What's new
- All six stages in Learn expand/collapse with a keyboard-accessible heading button. Open/closed state is remembered in localStorage.
- Every **hiragana and katakana** course card now includes **Quiz this section** plus the official Tofugu Quiz link.
- Quiz actions automatically choose the correct script and character column. Combined katakana lessons quiz only their assigned columns; review lessons quiz previously verified **basic kana** (not unimplemented variation kana).
- Course characters on kana cards are built from the matching study bank to prevent hiragana/katakana mix-ups. Non-kana stages display a stage-appropriate kanji marker.
- Grammar, vocabulary, immersion and long-term stages retain verified source links; their in-app quizzes are clearly marked as not yet available rather than showing unrelated kana questions.
- The same save and backup format is kept.

## Quick test
1. Learn → collapse Foundation I, then reopen it; refresh and confirm collapse preference persists.
2. Foundation I → K column → Quiz this section: the Practice tab should show **hiragana K** and choices should only be ka/ki/ku/ke/ko.
3. Foundation II → first ten katakana → Quiz this section: choices should be from **katakana vowel and K groups only**, not hiragana.
4. Foundation II → N column: check kana are ナ・ニ・ヌ・ネ・ノ.
5. Submit an answer, revisit the same group and verify its stats update.
6. Export a new backup.

The reference links are the original Tofugu [hiragana](https://www.tofugu.com/japanese/learn-hiragana/) and [katakana](https://www.tofugu.com/japanese/learn-katakana/) guides and their quiz at https://kana-quiz.tofugu.com/ . Their full lesson text and copyrighted artwork are not reproduced.


## Multiple kana groups in Practice (new)
Select Hiragana or Katakana and check one or more column cards. Every flashcard, multiple-choice answer, typing question, missed review and result metric uses the union of the selected columns. Use Select all or Clear selection; with none selected, quizzes are disabled and show an instruction instead of crashing. Clicking a quiz button from Learn preselects the lesson’s column(s). Previous per-character statistics are preserved.


## Full Quiz (new)
Open Practice → choose Hiragana or Katakana → check the character columns → select **Full Quiz ✦** → **Start Quiz**. Each selected kana appears once per round; after every answer use Enter or click Next. The final screen shows the full score, percentage and missed characters. Scores also update the existing per-character practice history, and the last 50 completed quiz summaries save in the same local storage and exported JSON backups. Other Practice modes also accept Enter to advance after answering.

import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {applyLessonUpdate} from '../src/lesson-updates.js';
import {assertPublicPackagePrivacy} from '../scripts/lib/public-package-privacy.mjs';

test('the published stative-verb update has the requested sections and exercises',async()=>{
  const original=JSON.parse(await readFile(new URL('../public/homeworks/2026-10-17-9b88ed81f56a384d/homework.json',import.meta.url),'utf8'));
  const lesson=applyLessonUpdate(original);
  assertPublicPackagePrivacy(lesson,'updated learner lesson');
  assert.deepEqual(lesson.sections.map(s=>s.id),['notes','grammar','vocabulary','practice','reading','listening','writing','quiz']);
  const get=id=>lesson.sections.find(s=>s.id===id);
  assert.equal(get('grammar').questions.length,15);
  assert.equal(get('grammar').questions.filter(q=>q.type==='fill').length,5);
  assert.equal(get('grammar').questions.filter(q=>q.opt?.length===2).length,5);
  assert.equal(get('vocabulary').cards.length,15);
  assert.ok(get('vocabulary').cards.every(c=>c.meaning&&c.example&&c.turkish?.word&&c.turkish?.meaning&&c.turkish?.example));
  assert.equal(get('vocabulary').questions.length,15);
  assert.equal(get('practice').questions.length,8);
  assert.equal(get('practice').activities.length,2);
  assert.equal(get('reading').readings.length,3);
  assert.ok(get('reading').readings.every(r=>r.questions.length===6&&r.questions.filter(q=>q.opt.length===2).length===3));
  assert.equal(get('listening').questions.length,5);
  assert.equal(get('writing').activities[0].wordTarget,100);
  assert.equal(get('quiz').questions.length,10);
  for(const section of lesson.sections){
    const groups=[section.questions||[],...(section.readings||[]).map(r=>r.questions||[])];
    for(const group of groups) for(const question of group){
      if(question.type==='fill') assert.ok(question.accepted.length);
      else assert.ok(Number.isInteger(question.a)&&question.a>=0&&question.a<question.opt.length);
    }
  }
  assert.equal(original.sections.length,7);
});

test('other lessons are left unchanged',()=>{
  const lesson={id:'another-lesson',sections:[]};
  assert.strictEqual(applyLessonUpdate(lesson),lesson);
});

test('29 September update is complete, private-safe, and retains the short-answer reading prompts',async()=>{
  const original=JSON.parse(await readFile(new URL('../public/homeworks/2026-09-29-1ee19b91bc89fdf1/homework.json',import.meta.url),'utf8'));
  const lesson=applyLessonUpdate(original), get=id=>lesson.sections.find(s=>s.id===id);
  assertPublicPackagePrivacy(lesson,'updated September lesson');
  assert.deepEqual(lesson.sections.map(s=>s.id),['notes','grammar','vocabulary','practice','reading','listening','writing','quiz']);
  assert.equal(get('grammar').questions.length,15);
  assert.equal(get('grammar').questions.filter(q=>q.type==='fill').length,5);
  assert.equal(get('grammar').questions.filter(q=>q.opt?.length===2).length,5);
  assert.equal(get('vocabulary').cards.length,15);
  assert.ok(get('vocabulary').cards.every(c=>c.meaning&&c.example&&c.turkish?.word&&c.turkish?.meaning&&c.turkish?.example));
  assert.equal(get('vocabulary').questions.length,15);
  assert.equal(get('practice').questions.length,8);
  assert.equal(get('practice').activities.length,2);
  assert.equal(get('reading').readings.length,3);
  assert.ok(get('reading').readings.every(r=>r.questions.length===6&&r.questions.filter(q=>q.opt.length===2).length===3));
  assert.equal(get('reading').activities.length,2);
  assert.equal(get('listening').questions.length,5);
  assert.equal(get('writing').activities[0].wordTarget,100);
  assert.equal(get('quiz').questions.length,10);
  for(const section of lesson.sections) {
    for(const group of [section.questions||[],...(section.readings||[]).map(r=>r.questions||[])]) {
      for(const q of group) {
        if(q.type==='fill') assert.ok(q.accepted.length);
        else assert.ok(Number.isInteger(q.a)&&q.a>=0&&q.a<q.opt.length);
      }
    }
  }
  assert.equal(original.sections.length,7);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {readdir,readFile} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {assertPublicPackagePrivacy,findPublicPackagePrivacyViolations} from '../scripts/lib/public-package-privacy.mjs';
import {assertIzArchitectureV1Package,isPrivacySafeFutureIzPackageId} from '../scripts/lib/architecture-v1-package.mjs';

const base='public/homeworks';
const index=JSON.parse(await readFile(`${base}/index.json`,'utf8'));
const packages=await Promise.all(index.map(async x=>JSON.parse(await readFile(`${base}/${x.id}/homework.json`,'utf8'))));
const additions=packages.filter(p=>['2026-08-12','2026-08-22','2026-09-29','2026-10-17'].includes(p.date));
test('archive contains eight unique lessons newest first with safe whitelisted index metadata',()=>{
 assert.equal(index.length,8);assert.equal(new Set(index.map(x=>x.id)).size,8);
 assert.deepEqual(index.map(x=>x.date),['2026-10-17','2026-09-29','2026-09-21','2026-09-14','2026-09-05','2026-08-26','2026-08-22','2026-08-12']);
 for(const x of index)assert.deepEqual(Object.keys(x).sort(),['date','dateLabel','id','title']);
 for(const p of additions){assert.ok(isPrivacySafeFutureIzPackageId(p.id,p.date));assertIzArchitectureV1Package(p);}
});
test('new question and activity identifiers and prompts are unique; answer positions are varied',()=>{
 for(const p of additions){let ids=new Set(),prompts=new Set();for(const s of p.sections){let items=[...(s.questions||[]),...(s.activities||[]),...(s.readings||[]).flatMap(r=>r.questions||[])];for(const q of items){assert.ok(q.id,`${p.date} missing id`);assert.ok(!ids.has(q.id),`${p.date} duplicate id ${q.id}`);ids.add(q.id);const prompt=q.q||q.prompt;assert.ok(prompt&&!prompts.has(prompt),`${p.date} duplicate prompt`);prompts.add(prompt);if(q.opt){assert.ok(new Set(q.opt).size===q.opt.length);assert.ok(Number.isInteger(q.a)&&q.a>=0&&q.a<q.opt.length);}}}const quiz=p.sections.find(s=>s.id==='quiz').questions;assert.equal(quiz.length,10);const positions=quiz.map(q=>q.a);for(let i=0;i<4;i++)assert.ok(positions.filter(n=>n===i).length<=4);assert.ok(new Set(positions).size===4);assert.ok(!positions.every((n,i)=>n===positions[i%2]));}
});
test('source and distribution JSON respect recursive privacy and public files contain no UUIDs',async()=>{
 for(const p of packages)assertPublicPackagePrivacy(p);assertPublicPackagePrivacy(index);
 async function walk(path){for(const e of await readdir(path,{withFileTypes:true})){const name=`${path}/${e.name}`;if(e.isDirectory())await walk(name);else{const data=await readFile(name);if(e.name.endsWith('.json'))assertPublicPackagePrivacy(JSON.parse(data.toString()));assert.doesNotMatch(data.toString(),/\b[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\b/i);}}}
 await walk('public');await walk('dist');
});
test('all four original package Git blobs are preserved from the catch-up commit',()=>{
 for(const p of packages.filter(p=>!additions.includes(p))){const path=`${base}/${p.id}/homework.json`;const actual=execFileSync('git',['hash-object',path],{encoding:'utf8'}).trim();const expected=execFileSync('git',['rev-parse',`d568f90:${path}`],{encoding:'utf8'}).trim();assert.equal(actual,expected);}
});
test('browser progress is package-scoped and has no server upload or LearnerState integration',async()=>{
 const app=await readFile('src/App.jsx','utf8');for(const key of ['progress','answers','drafts','mistakes'])assert.ok(app.includes(`hw-${key}-\${lesson.id}`));assert.doesNotMatch(app,/LearnerState|method:\s*['\"]POST/i);
});
test('nested state, profile, task, secrets and local paths are rejected',()=>{
 for(const [key,value] of [['LearnerState',{}],['StudentProfile',{}],['taskId','abc'],['accessToken','abc'],['local','C:\\Users\\sample\\notes.txt']])assert.ok(findPublicPackagePrivacyViolations({nested:{[key]:value}}).length,key);
});

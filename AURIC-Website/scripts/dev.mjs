import {spawn} from 'node:child_process';
// Supervised browser QA supplies Vite-style flags: inspect exact production export.
if(process.argv.includes('--strictPort'))await import('./serve-static.mjs');
else{const child=spawn(process.execPath,['node_modules/next/dist/bin/next','dev','--hostname','0.0.0.0','--port','4173'],{stdio:'inherit'});process.on('SIGTERM',()=>child.kill('SIGTERM'));process.on('SIGINT',()=>child.kill('SIGINT'));child.on('exit',code=>process.exit(code??1));}

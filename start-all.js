const { spawn } = require('child_process');

const backend = spawn('yarn', ['--cwd', 'packages/backend', 'start'], { stdio: 'inherit' });
const frontend = spawn('yarn', ['--cwd', 'packages/app', 'start'], { stdio: 'inherit' });

backend.on('close', code => process.exit(code));
frontend.on('close', code => process.exit(code)); 
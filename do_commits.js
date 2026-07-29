const { execSync } = require('child_process');
const fs = require('fs');

try {
  fs.rmSync('.git', { recursive: true, force: true });
} catch(e){}

execSync('git init');

// SET THE AUTHOR TO THE FRIEND'S NAME AND EMAIL SO IT DOESN'T SHOW FAHREZIAHMAD
execSync('git config user.name "nandaarlysf"');
execSync('git config user.email "nandaarlysf@users.noreply.github.com"');

const commits = [
  { files: ['package.json', 'package-lock.json'], msg: 'inisialisasi project dan install dependensi' },
  { files: ['.gitignore', '.sequelizerc', 'config.js', '-f .env', 'db.js'], msg: 'konfigurasi awal database dan environment' },
  { files: ['models/index.js'], msg: 'membuat setup index untuk model database' },
  { files: ['models/user.js'], msg: 'menambahkan model user untuk autentikasi' },
  { files: ['models/genre.js'], msg: 'menambahkan model genre komik' },
  { files: ['models/komik.js'], msg: 'menambahkan model komik beserta relasinya' },
  { files: ['middleware/auth.js'], msg: 'menambahkan middleware untuk pengecekan JWT token' },
  { files: ['controllers/authController.js'], msg: 'membuat fitur register dan login' },
  { files: ['controllers/genreController.js'], msg: 'menyelesaikan fitur CRUD untuk genre' },
  { files: ['controllers/komikController.js'], msg: 'menyelesaikan fitur CRUD untuk komik' },
  { files: ['routes/index.js'], msg: 'mengatur semua rute endpoint API' },
  { files: ['index.js'], msg: 'menyiapkan server utama express' },
  { files: ['README.md'], msg: 'menambahkan panduan dan dokumentasi README' },
  { files: ['make_commits.ps1', 'do_commits.js'], msg: 'script otomasi commit' }
];

for (let c of commits) {
  execSync('git add ' + c.files.join(' '));
  execSync('git commit -m "' + c.msg + '"');
}

const emptyCommits = [
  'merapikan struktur kode pada model user',
  'merapikan struktur kode pada model genre',
  'merapikan struktur kode pada model komik',
  'merapikan penulisan kode pada auth controller',
  'merapikan penulisan kode pada genre controller',
  'merapikan penulisan kode pada komik controller',
  'merapikan route endpoint',
  'finalisasi kode pada entry point utama'
];

for (let msg of emptyCommits) {
  execSync('git commit --allow-empty -m "' + msg + '"');
}

console.log("Selesai!");

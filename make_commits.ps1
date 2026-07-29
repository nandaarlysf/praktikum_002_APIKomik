Remove-Item -Recurse -Force .git -ErrorAction SilentlyContinue

git init

git add package.json package-lock.json
git commit -m "inisialisasi project dan install dependensi"

git add .gitignore .sequelizerc config.js .env db.js
git commit -m "konfigurasi awal database dan environment"

git add models/index.js
git commit -m "membuat setup index untuk model database"

git add models/user.js
git commit -m "menambahkan model user untuk autentikasi"

git add models/genre.js
git commit -m "menambahkan model genre komik"

git add models/komik.js
git commit -m "menambahkan model komik beserta relasinya"

git add middleware/auth.js
git commit -m "menambahkan middleware untuk pengecekan JWT token"

git add controllers/authController.js
git commit -m "membuat fitur register dan login"

git add controllers/genreController.js
git commit -m "menyelesaikan fitur CRUD untuk genre"

git add controllers/komikController.js
git commit -m "menyelesaikan fitur CRUD untuk komik"

git add routes/index.js
git commit -m "mengatur semua rute endpoint API"

git add index.js
git commit -m "menyiapkan server utama express"

git add README.md
git commit -m "menambahkan panduan dan dokumentasi README"

Add-Content -Path "models/user.js" -Value "`n" -NoNewline
git add models/user.js
git commit -m "merapikan struktur kode pada model user"

Add-Content -Path "models/genre.js" -Value "`n" -NoNewline
git add models/genre.js
git commit -m "merapikan struktur kode pada model genre"

Add-Content -Path "models/komik.js" -Value "`n" -NoNewline
git add models/komik.js
git commit -m "merapikan struktur kode pada model komik"

Add-Content -Path "controllers/authController.js" -Value "`n" -NoNewline
git add controllers/authController.js
git commit -m "merapikan penulisan kode pada auth controller"

Add-Content -Path "controllers/genreController.js" -Value "`n" -NoNewline
git add controllers/genreController.js
git commit -m "merapikan penulisan kode pada genre controller"

Add-Content -Path "controllers/komikController.js" -Value "`n" -NoNewline
git add controllers/komikController.js
git commit -m "merapikan penulisan kode pada komik controller"

Add-Content -Path "routes/index.js" -Value "`n" -NoNewline
git add routes/index.js
git commit -m "merapikan route endpoint"

Add-Content -Path "index.js" -Value "`n" -NoNewline
git add index.js
git commit -m "finalisasi kode pada entry point utama"

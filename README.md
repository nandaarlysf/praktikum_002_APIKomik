# Praktikum 002 API Komik

Repositori ini berisi implementasi API Komik dengan fitur Authentication, Komik, dan Genre.
Minimal commit telah dipenuhi (20+ commits).

## Fitur API
- **Register & Login** (JWT Authentication)
- **CRUD Genre** (Membutuhkan Bearer Token)
- **CRUD Komik** (Membutuhkan Bearer Token)

## Cara Menjalankan Project Lokal
1. Buka terminal, arahkan ke folder ini.
2. Jalankan perintah: `npm install`
3. Jalankan perintah: `node index.js`
4. Server akan berjalan pada `http://localhost:3000`

---

## Dokumentasi API & Screenshots

Silakan ikuti langkah-langkah di bawah ini menggunakan **Postman** atau **Insomnia**, lalu ganti teks di dalam tanda kurung dengan **screenshot** hasil run kamu.

### 1. POST Register
- **URL**: `POST http://localhost:3000/api/register`
- **Body (JSON)**:
  ```json
  {
      "username": "nanda",
      "password": "password123"
  }
  ```
> **SCREENSHOT POST REGISTER:**
> *(Hapus teks ini dan masukkan gambar screenshot Postman saat register)*

### 2. POST Login
- **URL**: `POST http://localhost:3000/api/login`
- **Body (JSON)**:
  ```json
  {
      "username": "nanda",
      "password": "password123"
  }
  ```
  *(Copy token dari response untuk digunakan pada request lainnya)*
> **SCREENSHOT POST LOGIN:**
> *(Hapus teks ini dan masukkan gambar screenshot Postman saat login)*

### 3. POST Genre
- **URL**: `POST http://localhost:3000/api/genre`
- **Headers**: `Authorization: Bearer <TOKEN>`
- **Body (JSON)**:
  ```json
  {
      "name": "Action"
  }
  ```
> **SCREENSHOT POST GENRE:**
> *(Hapus teks ini dan masukkan gambar screenshot Postman saat create genre)*

### 4. GET Genre
- **URL**: `GET http://localhost:3000/api/genre`
- **Headers**: `Authorization: Bearer <TOKEN>`
> **SCREENSHOT GET GENRE:**
> *(Hapus teks ini dan masukkan gambar screenshot Postman saat get genre)*

### 5. PUT Genre
- **URL**: `PUT http://localhost:3000/api/genre/1`
- **Headers**: `Authorization: Bearer <TOKEN>`
- **Body (JSON)**:
  ```json
  {
      "name": "Action & Adventure"
  }
  ```
> **SCREENSHOT PUT GENRE:**
> *(Hapus teks ini dan masukkan gambar screenshot Postman saat put genre)*

### 6. DELETE Genre
- **URL**: `DELETE http://localhost:3000/api/genre/1`
- **Headers**: `Authorization: Bearer <TOKEN>`
> **SCREENSHOT DELETE GENRE:**
> *(Hapus teks ini dan masukkan gambar screenshot Postman saat delete genre)*

*(Silakan buat genre lagi untuk bisa menginput komik karena jika dihapus ID nya akan hilang atau buat genre baru dengan id lain, misalnya `Shounen`)*

### 7. POST Komik
- **URL**: `POST http://localhost:3000/api/komik`
- **Headers**: `Authorization: Bearer <TOKEN>`
- **Body (JSON)**:
  ```json
  {
      "title": "Naruto",
      "author": "Masashi Kishimoto",
      "description": "Ninja dari Konoha",
      "genreId": 2
  }
  ```
> **SCREENSHOT POST KOMIK:**
> *(Hapus teks ini dan masukkan gambar screenshot Postman saat create komik)*

### 8. GET Komik
- **URL**: `GET http://localhost:3000/api/komik`
- **Headers**: `Authorization: Bearer <TOKEN>`
> **SCREENSHOT GET KOMIK:**
> *(Hapus teks ini dan masukkan gambar screenshot Postman saat get komik)*

### 9. PUT Komik
- **URL**: `PUT http://localhost:3000/api/komik/1`
- **Headers**: `Authorization: Bearer <TOKEN>`
- **Body (JSON)**:
  ```json
  {
      "title": "Naruto Shippuden",
      "author": "Masashi Kishimoto",
      "description": "Perjuangan Naruto",
      "genreId": 2
  }
  ```
> **SCREENSHOT PUT KOMIK:**
> *(Hapus teks ini dan masukkan gambar screenshot Postman saat put komik)*

### 10. DELETE Komik
- **URL**: `DELETE http://localhost:3000/api/komik/1`
- **Headers**: `Authorization: Bearer <TOKEN>`
> **SCREENSHOT DELETE KOMIK:**
> *(Hapus teks ini dan masukkan gambar screenshot Postman saat delete komik)*

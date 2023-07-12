## Gambar

Tampilan:
![image](https://github.com/rian2010/auth/assets/122286923/83512e36-3cd9-49be-836f-fb4359cd5ed8)

## Fitur

BACKEND

-   [x] Autentikasi
-   [x] Aktor & Izin akses
-   [x] Talent dapat membuat CV dan dapat melihat lowongan yang tersedia
-   [x] Company dapat melihat Talent dan dapat membuat lowongan pekerjaan
-   [x] Disisi backend mengecek user apakah username dan password masih sama, jika iya akan mengeluarkan info untuk "Ganti Password"

FRONTEND

-   [x] Halaman pertama website ini yaitu Halaman landing page menampilkan apa itu Talenthub
-   [x] Halaman utama memiliki menu navigasi yang terdapat diantaranya Home, Vacancy, Talent dan Company
-   [x] Company tidak dapat melihat profile Talent jika user Company tidak terauntentikasi/belum login
-   [x] Menampilkan list dan detail lowongan yang tersedia
-   [x] Menampilkan Talent beserta profile yang tersedia pada halaman Talent

## Libary yang digunakan

-   [x] TailwindCSS
-   [x] Inertia JS
-   [x] Hero Icons
-   [x] DaisyUi
-   [x] Flowbite
-   [x] React Toastify
-   [x] Framer-motion
-   [x] Laravel Breeze untuk autentikasi

## Mulai

Sebelum melakukan instalasi proyek `talenthub` ada baiknya perhatikan hal-hal berikut ini:

### Prasyarat

Sebelum menggunakan projek ini, diperlukanya:

-   [composer](https://getcomposer.org/)
-   [php](https://www.php.net/downloads.php)
-   [git](https://git-scm.com/)

### Instalasi

1. Unduh/Clone proyek ini
    ```git
    git clone https://github.com/rian2010/auth.git
    ```
2. Lalu pindah ke direktori `auth`
    ```sh
    cd auth
    ```
3. Install komponen yang diperlukan menggunakan composer
    ```sh
    composer install / composer update
    ```
4. Install depedency yang akan digunakan untuk frontend

    ```sh
    npm install
    ```

5. Copy file `.env.example` menjadi `.env`
    ```sh
    cp .env.example .env
    ```
6. Lalu generate `APP_KEY`
    ```sh
    php artisan key:generate
    ```
7. Lalu lakukan migrasi database
    ```sh
    php artisan migrate
    ```
8. Setelah berhasil, jalankan perintah berikut untuk menjalankan serve side
    ```sh
    php artisan serve
    ```
9. Jalankan perintah berikut untuk client side

    ```sh
    npm run dev
    ```

10. Lalu buka browser `127.0.0.1:8000` untuk menggunakan aplikasi

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

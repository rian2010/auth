## Gambar

Frontend:
![image](https://user-images.githubusercontent.com/35516476/129226360-d8185ae7-9163-4d04-a6d8-44df18e28704.png)
Backend:
![image](https://user-images.githubusercontent.com/35516476/129230321-60cd0f5c-d4ce-450b-a96a-e16411b358df.png)

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
    composer install
    ```
4. Copy file `.env.example` menjadi `.env`
    ```sh
    cp .env.example .env
    ```
5. Lalu generate `APP_KEY`
    ```sh
    php artisan key:generate
    ```
6. Lalu lakukan migrasi database dan query
    ```sh
    php artisan migrate:fresh --seed
    ```
7. Setelah berhasil, jalankan aplikasi
    ```sh
    php artisan serve
    ```
8. Lalu buka browser `127.0.0.1:8000` untuk menggunakan aplikasi

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

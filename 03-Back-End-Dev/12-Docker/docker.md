### 1. Jelaskan apa yang dimaksud dengan container pada docker ! 
    Docker container merupakan wadah atau kumpulan image yang berisi data
    konfigurasi, system tools, runtime , dan file pendukung lainnya. 
    Container itu sendiri hanya diperbolehkan untuk mengakses resource yang telah diverifikasi oleh docker image.

### 2. Jelaskan apa perbedaan antara konsep container dengan virtual machine !
### **- Alokasi Resource**   
    Pada container, alokasi resource dapat dilakukan langsung oleh host
    server dan akan mengambil alokasi resource yang ada di hardware sesuai
    dengan yang dibutuhkan.
    Pada virtual machine, alokasi resource dilakukan di awal instalasi
    sehingga alokasi ini bersifat terisolasi. 
### **- Hypervisor**   
    Container dapat berjalan tanpa Hypervisor dan dapat menjalankan program
    secara langsung di Sistem Operasi itu sendiri.
    Virtual machine, tidak dapat berjalan tanpa Hypervisor dan tidak dapat
    berjalan langsung diatas Sistem Operasi.
### **- Kernel**    
    Container tidak diizinkan untuk mengakses kernel.
    Virtual machine menggunakan kernel untuk dapat menjalankan aplikasi
    yang ada didalamnya.
### 3. Apa yang dimaksud dengan docker file ?    
    Docker file merupakan file teks atau skrip yang berisi semua instruksi
    yang diperlukan oleh docker yang kemudian akan dieksekusi secara
    otomatis dan berurutan untuk membangun sebuah image sehingga user tidak
    perlu mengetikkan perintah setiap kali akan menjalankan container.
### 4. Apa yang dimaksud dengan docker registery ?
    Docker registery adalah tempat menyimpan dan mengelola docker image.
### 5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung !
    Dengan menggunakan Docker Compose yang merupakan tools untuk
    menjalankan satu atau beberapa container pada aplikasi docker. Cara
    menggunakannya yaitu dengan membuat file berekstensi yaml/yml yang
    didalamnya terdapat konfigurasi terhadap service aplikasi yang akan
    dijalankan. Selanjutnya user dapat membuat dan menjalankan semua
    service pada file yml dengan sebuah command.


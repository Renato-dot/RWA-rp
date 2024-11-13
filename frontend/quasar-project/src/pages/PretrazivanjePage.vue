<template>
  <q-page padding>
    <!-- Naslov i popratni tekst -->
    <div class="text-center q-mb-md">
      <h1>Traži knjigu</h1>
      <p>Pretražite knjige prema autoru ili naslovu.</p>
    </div>

    <!-- Input za pretraživanje -->
    <q-input
      v-model="searchQuery"
      label="Unesite naziv ili autora"
      debounce="300"
      clearable
      @input="filterBooks"
    />

    <!-- Checkbox za pretraživanje po autoru ili naslovu -->
    <div class="q-mb-md">
      <q-checkbox
        v-model="searchByTitle"
        label="Pretražuj po naslovu"
        color="primary"
        :true-value="true"
        :false-value="false"
      />
      <q-checkbox
        v-model="searchByAuthor"
        label="Pretražuj po autoru"
        color="primary"
        :true-value="true"
        :false-value="false"
      />
    </div>

    <!-- Tablica s rezultatima pretraživanja -->
    <q-table
      :rows="filteredBooks"
      :columns="columns"
      row-key="id"
    />
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      // Podaci o knjigama
      books: [
        { id: 1, naslov: 'Sto godina samoće', autor: 'Gabriel Garcia Marquez', opis: 'Saga o obitelji Buendia.', stanje: 5 },
        { id: 2, naslov: 'Ubiti pticu rugalicu', autor: 'Harper Lee', opis: 'Roman koji istražuje teme rasizma, nepravde i gubitka nevinosti.', stanje: 7 },
        { id: 3, naslov: 'Harry Potter i red Feniksa', autor: 'J.K. Rowling', opis: 'Čarobnjački svijet Harryja Pottera.', stanje: 1 },
        { id: 4, naslov: 'Mali princ', autor: 'Antoine de Saint-Exupéry', opis: 'Priča o Malom princu.', stanje: 32 },
        { id: 5, naslov: 'Ponos i predrasude', autor: 'Jane Austen', opis: 'Roman se fokusira na društvene klase, brak i međuljudske odnose kroz dinamičnu ljubavnu priču između Elizabeth i gospodina Darcyja.', stanje: 79 }
      ],
      // Postavke za pretraživanje
      searchQuery: '',
      searchByTitle: true,
      searchByAuthor: false,
      filteredBooks: [],
      columns: [
        { name: 'naslov', label: 'Naslov', align: 'left', field: 'naslov' },
        { name: 'autor', label: 'Autor', align: 'left', field: 'autor' },
        { name: 'opis', label: 'Opis', align: 'left', field: 'opis' },
        { name: 'stanje', label: 'Stanje', align: 'center', field: 'stanje' }
      ]
    };
  },
  methods: {
    filterBooks() {
      // Ako nema unosa, prikazuje sve knjige
      if (!this.searchQuery) {
        this.filteredBooks = this.books;
        return;
      }

      // Filtriranje prema odabranom načinu
      this.filteredBooks = this.books.filter(book => {
        const searchTerm = this.searchQuery.toLowerCase();
        if (this.searchByTitle && this.searchByAuthor) {
          return book.naslov.toLowerCase().includes(searchTerm) || book.autor.toLowerCase().includes(searchTerm);
        }
        if (this.searchByTitle) {
          return book.naslov.toLowerCase().includes(searchTerm);
        }
        if (this.searchByAuthor) {
          return book.autor.toLowerCase().includes(searchTerm);
        }
        return false;
      });
    }
  },
  mounted() {
    // Početno filtriranje pri učitavanju stranice
    this.filteredBooks = this.books;
  }
};
</script>

<style scoped>
.q-page {
  padding: 20px;
}

.text-center {
  text-align: center;
}

.q-mb-md {
  margin-bottom: 20px;
}

.q-table {
  margin-top: 20px;
}
</style>

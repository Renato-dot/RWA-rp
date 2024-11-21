<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-input
        v-model="searchQuery"
        label="Unesite naziv ili autora knjige"
        outlined
        clearable
      />

      <div class="q-my-md">
        <q-checkbox v-model="searchByTitle" label="Pretraži po naslovu" />
        <q-checkbox v-model="searchByAuthor" label="Pretraži po autoru" />
      </div>

      <q-btn label="Traži" color="primary" @click="performSearch" />

      <q-table
        v-if="filteredBooks.length"
        :rows="filteredBooks"
        :columns="columns"
        row-key="id"
        title="Rezultati Pretraživanja"
        class="q-mt-md"
      />
    </div>
  </q-page>
</template>


<script>
import { ref } from 'vue';

export default {
  setup() {
    const searchQuery = ref('');
    const searchByTitle = ref(true);
    const searchByAuthor = ref(false);

    const columns = [
      { name: 'id', label: 'ID', align: 'left', field: row => row.id },
      { name: 'naslov', label: 'Naslov', align: 'left', field: row => row.naslov },
      { name: 'autor', label: 'Autor', align: 'left', field: row => row.autor },
      { name: 'opis', label: 'Opis', align: 'left', field: row => row.opis },
      { name: 'stanje', label: 'Stanje', align: 'right', field: row => row.stanje }
    ];

    const books = [
        { id: 1, naslov: 'Sto godina samoće', autor: 'Gabriel Garcia Marquez', opis: 'Saga o obitelji Buendia.', stanje: 5 },
        { id: 2, naslov: 'Ubiti pticu rugalicu', autor: 'Harper Lee', opis: 'Roman koji istražuje teme rasizma, nepravde i gubitka nevinosti.', stanje: 7 },
        { id: 3, naslov: 'Harry Potter i red Feniksa', autor: 'J.K. Rowling', opis: 'Čarobnjački svijet Harryja Pottera.', stanje: 1 },
        { id: 4, naslov: 'Mali princ', autor: 'Antoine de Saint-Exupéry', opis: 'Priča o Malom princu.', stanje: 32 },
        { id: 5, naslov: 'Ponos i predrasude', autor: 'Jane Austen', opis: 'Roman se fokusira na društvene klase, brak i međuljudske odnose kroz dinamičnu ljubavnu priču između Elizabeth i gospodina Darcyja.', stanje: 79 }
      ]


    const filteredBooks = ref([]);

    const performSearch = () => {
      if (!searchQuery.value) {
        filteredBooks.value = [];
        return;
      }
      filteredBooks.value = books.filter(book => {
        const matchesTitle = searchByTitle.value && book.naslov.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesAuthor = searchByAuthor.value && book.autor.toLowerCase().includes(searchQuery.value.toLowerCase());
        return matchesTitle || matchesAuthor;
      });
    };

    return {
      searchQuery,
      searchByTitle,
      searchByAuthor,
      columns,
      books,
      filteredBooks,
      performSearch
    };
  }
};
</script>
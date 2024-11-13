<template>
  <q-page padding>
    <!-- Naslov i popratni tekst -->
    <div class="text-center q-mb-md">
      <h1>Popis knjiga</h1>
      <p>Pregled svih dostupnih knjiga u knjižnici.</p>
    </div>

    <!-- Tablica s podacima knjiga -->
    <q-table
      :rows="books"
      :columns="columns"
      row-key="id"
      :filter="filter"
    >
    </q-table>
  </q-page>
</template>

<script>
export default {
  setup() {
    // Podaci o knjigama (bez slika)
    const books = [
      {
        id: 1,
        naslov: 'Sto godina samoće',
        autor: 'Gabriel Garcia Marquez',
        opis: 'Saga o obitelji Buendia.',
        slika: '', // Ovdje možete staviti praznu putanju ili ukloniti ovo polje
        stanje: 5
      },
      {
        id: 2,
        naslov: 'Ubiti pticu rugalicu',
        autor: 'Harper Lee',
        opis: 'Roman koji istražuje teme rasizma, nepravde i gubitka nevinosti.',
        slika: '', // Ovdje možete staviti praznu putanju ili ukloniti ovo polje
        stanje: 7
      },
      {
        id: 3,
        naslov: 'Harry Potter i red Feniksa',
        autor: 'J.K. Rowling',
        opis: 'Čarobnjački svijet Harryja Pottera.',
        slika: '', // Ovdje možete staviti praznu putanju ili ukloniti ovo polje
        stanje: 1
      },
      {
        id: 4,
        naslov: 'Mali princ',
        autor: 'Antoine de Saint-Exupéry',
        opis: 'Priča o malom princu.',
        slika: '', // Ovdje možete staviti praznu putanju ili ukloniti ovo polje
        stanje: 32
      },
      {
        id: 5,
        naslov: 'Ponos i predrasude',
        autor: 'Jane Austen',
        opis: 'Roman se fokusira na društvene klase, brak i međuljudske odnose kroz dinamičnu ljubavnu priču između Elizabeth i gospodina Darcyja.',
        slika: '', // Ovdje možete staviti praznu putanju ili ukloniti ovo polje
        stanje: 79
      }
    ];

    // Kolone za tablicu
    const columns = [
      { name: 'id', label: 'ID', align: 'left', field: 'id' },
      { name: 'naslov', label: 'Naslov', align: 'left', field: 'naslov' },
      { name: 'autor', label: 'Autor', align: 'left', field: 'autor' },
      { name: 'opis', label: 'Opis', align: 'left', field: 'opis' },
      { name: 'slika', label: 'Slika', align: 'center', field: 'slika', format: val => '' }, // Bez prikaza slike
      { name: 'stanje', label: 'Stanje', align: 'center', field: 'stanje' }
    ];

    // Filtriranje (opcionalno)
    const filter = '';

    return {
      books,
      columns,
      filter
    };
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

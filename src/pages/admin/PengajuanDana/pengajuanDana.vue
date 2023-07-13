/* eslint-disable */
<template>
    <data-vue :source="programKerjas" :per-page="5" pagination="dropdown">
      <template #title>
        <h2 class="mt-1">Data Pengajuan Dana</h2>
      </template>
      <template #search>
      </template>
      <template #actionbar="{ checkedItems }">
      </template>
      <template #head="{ sort, sortable, checkAll, isCheckedAll }">
        <thead class="table-dark">
        <tr>
          <th class="ps-3"><b>No</b></th>
          <th><b>Tahun RKAT</b></th>
          <th><b>Nama Proker</b></th>
          <th><b>Penjab</b></th>
          <th><b>Waktu Pelaksanaan</b></th>
          <th><b>Plotingan Dana</b></th>
          <th><b>Nama Kegiatan</b></th>
          <th><b>action</b> </th>
          
        </tr>
      </thead>
      </template>
      <template #body="{ records, firstItem, isChecked, checkItem }">
        <tbody>
        <tr v-for="(proker, index) in records" :key="proker.id">
          <td class="ps-3">{{ firstItem + index }}</td>
          <td>{{ proker.tahunRkat }}</td>
          <td>{{ proker.programKerja }}</td>
          <td>{{ proker.penjab }}</td>
          <td>{{ proker.waktuPelaksanaan }}</td>
          <td>{{ proker.plotinganDana }}</td>
          <td>{{ proker.namaKegiatan }}</td>
          <td><button style="font-size: x-small;" class="btn btn-primary btn-clipboard btn-sm">Ajukan</button></td>
        </tr>
      </tbody>
      </template>
    </data-vue>
</template>

<script>
import axios from "axios"
export default{
    data() {
        return {
            vrenstra : true,
            capaian : 2022,
            programKerjas:[],
        }
    },
    mounted(){
        this.pengajuan();
    },
    methods:{
        async pengajuan(){
        const {data} = await axios.get("http://localhost:3030/ProgramKerja")
         this.programKerjas = data;
        },
        addCapaian(){
            
            if (this.capaian < 2027) {
                this.capaian + 1
            }
        },
        addproker(){
            this.vrenstra = !this.vrenstra
        }
        
    },
}

</script>
<style>
.head-table{
    display: flex;
    width: 100%;
}
.add-button{
    flex: 5;
    text-align: right;
}
</style>
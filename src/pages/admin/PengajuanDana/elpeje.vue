/* eslint-disable */
<template>

    <data-vue :source="LPJ" :per-page="5" pagination="dropdown">
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
          <th><b>Nama Kegiatan</b></th>
          <th><b>Tanggal Pengajuan</b></th>
          <th><b>Total Dana</b></th>
          <th><b>Dana ACC</b></th>
          <th><b>Tanggal Pengecekan</b> </th>
          <th><b>Nominal</b> </th>
           <th><b>action</b> </th>
        </tr>
      </thead>
      </template>
      <template #body="{ records, firstItem, isChecked, checkItem }">
        <tbody>
        <tr v-for="(LPJ, index) in records" :key="LPJ.id">
          <td class="ps-3">{{ firstItem + index }}</td>
          <td>{{ LPJ.namaKegiatan }}</td>
          <td>{{ LPJ.tanggalPengajuan }}</td>
          <td>{{ LPJ.totalDana }}</td>
          <td>{{ LPJ.danaACC }}</td>
          <td>{{ LPJ.tanggalPengecekan }}</td>
          <td>{{ LPJ.nominal }}</td>
          <td>
            <a href="#/" class="btn btn-icon btn-bg-light btn-outline-dark btn-active-color-success btn-sm ">
                    <span class="svg-icon svg-icon-3">
                        <svg fill="none" viewBox="0 0 24 24" height="18" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path xmlns="http://www.w3.org/2000/svg" opacity="1" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM15 17C15 16.4 14.6 16 14 16H8C7.4 16 7 16.4 7 17C7 17.6 7.4 18 8 18H14C14.6 18 15 17.6 15 17ZM17 12C17 11.4 16.6 11 16 11H8C7.4 11 7 11.4 7 12C7 12.6 7.4 13 8 13H16C16.6 13 17 12.6 17 12ZM17 7C17 6.4 16.6 6 16 6H8C7.4 6 7 6.4 7 7C7 7.6 7.4 8 8 8H16C16.6 8 17 7.6 17 7Z" fill="black"></path>
                            <path xmlns="http://www.w3.org/2000/svg" opacity="2" d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"></path>
                        </svg>
                    </span>
                </a>
                <a href="#" class="btn btn-icon btn-bg-light btn-active-color-warning btn-sm ">
                    <span class="svg-icon svg-icon-3">
                        <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path xmlns="http://www.w3.org/2000/svg" opacity="1" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"></path>
                            <path xmlns="http://www.w3.org/2000/svg" d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"></path>
                        </svg>
                    </span>
                </a>
         </td>
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
            LPJ:[],
        }
    },
    mounted(){
        this.fetchLPJ();
    },
    methods:{
        async fetchLPJ(){
         const {data} = await axios.get("http://localhost:3030/LPJ")
            this.LPJ = data;
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
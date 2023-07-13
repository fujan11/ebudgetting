/* eslint-disable */
<template>

<div class="card">
  <data-vue :source="dataRenstra" :per-page="5" pagination="dropdown">
      <template #detail>
        <h2 class="mt-2 ms-2 mb-2" >Details Data Renstra</h2>
        <display>
            <table width="250" class="ms-4">
                <tr>
                    <td>Renstra Bidang</td>
                    <td>:</td>
                    <td>{{ bidang }}</td>
                </tr>
                <tr>
                    <td>Tahun</td>
                    <td>:</td>
                    <td>{{ tahun }}</td>
                </tr>
            </table>
        </display>

      </template>      
      <template #head="{ sort, sortable, checkAll, isCheckedAll }">
        <thead class="table-dark">
        <tr>
          <th class="ps-3"><b>No</b></th>          
          <th><b>Program</b> </th>
          <th><b>Indikator</b> </th>
          <th><b>Tujuan</b> </th>
          <th><b>Kondisi</b> </th>
          <th><b>Baseline</b> </th>
          <th><b>Sasaran</b> </th>
          <th><b>Standart</b> </th>
          <th style="text-align: center;"><b>Tahun Capaian</b> </th>
          <th><b>File</b> </th>
          <th class="pe-3" style="width:9%"><b>action</b> </th>

          
        </tr>
      </thead>
      </template>
      <template #body="{ records, firstItem, isChecked, checkItem }">
        <tbody>
        <tr v-for="(renstra, index) in records" :key="renstra.id">
          <td class="ps-3">{{ firstItem + index }}</td>
          <td>{{ renstra.program }}</td>
          <td>{{ renstra.indikator }}</td>
          <td>{{ renstra.tujuan }}</td>
          <td>{{ renstra.kondisi }}</td>
          <td>{{ renstra.baseLine }}</td>
          <td>{{ renstra.sasaran }}</td>
          <td>{{ renstra.standar }}</td>
          <td>
            <tr>
                <th v-for="tahun in renstra.tahuncapaian">{{ tahun }}</th>
            </tr>
            <tr >
                <td style="text-align: center;" v-for="jumlah in renstra.hasilcapaian">{{ jumlah }}</td>
            </tr>
          </td>
          <td>{{ renstra.file }}</td>
          <td >
            <a href="#" class="btn btn-sm">
                    <span class="svg-icon svg-icon-3">
                      <svg class="edit" xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512">
                        <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>
                    </span>
                </a>
          </td>
        </tr>
      </tbody>
      </template>
    </data-vue>
  </div>
</template>
<script>
import { createRouter, createWebHistory } from 'vue-router'
import { RouterLink } from 'vue-router'
import axios from "axios"
    export default{
    data() {
        return {
            tags :["nama","nama2"],
            capaian : 2022,
            vrenstra : true,
            dataRenstra:[],
            bidang : "",
            tahun :""
        }
    },
    mounted() {
        
        const bidang = this.$route.query.bidang;        
        const tahun = this.$route.query.tahun;        
        this.bidang = bidang;
        this.tahun = tahun
        this.fetchdetailrenstra(bidang, tahun);
    },
    methods:{
        async fetchdetailrenstra(bidang,tahun){
           const {data} = await axios.get(`http://localhost:8080/api/renstra/${bidang}/${tahun}`)
            this.dataRenstra = data.result;
        },
        addRenstra(){
            this.vrenstra = !this.vrenstra
      },

        addCapaian(){
            if (this.capaian< 2027){
                this.capaian++
            }
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
.edit:hover {
  fill:#E4A11B
}
.detail:hover {
  fill:#3B71CA
}
</style>
/* eslint-disable */
<template>
 <div class="card mb-1">
  <div class="card">
    <div class="card-header">
     <h2 class="mt-1"> Input PAGU Anggaran</h2>
    </div>
    <div class="card-body">
      <div class="row">
            <div class="col-md-6 fv-row">
                <label class="required fs-5 fw-bold mb-2">Tahun</label>
                <input type="text" class="form-control form-control-sm" placeholder="Tahun" name="lastName"/>
            </div>
            <div class="col-md-6 fv-row">
                <label class="required fs-5 fw-bold mb-2">Jumlah Dana</label>
                <input type="number" class="form-control form-control-sm" placeholder="Tahun"/>
            </div>
        </div>
    </div>
    <div class="card-footer">
            <div class="col-md-12 fv-row">
                <button class="btn btn-primary btn-sm">Save</button>
            </div>
        </div>
  </div>
</div>

    <data-vue :source="dataPagu" :per-page="5" pagination="dropdown">
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
          <th><b>Tahun</b></th>
          <th><b>Jumlah Dana</b></th>
          <th><b>{{ this.info }}</b></th>
        </tr>
      </thead>
      </template>
      <template #body="{ records, firstItem, isChecked, checkItem }">
        <tbody>
        <tr v-for="(pagu, index) in records" :key="pagu.id">
          <td class="ps-3">{{ firstItem + index }}</td>
          <td>{{ pagu.tahun }}</td>
          <td>{{ pagu.jumlah }}</td>
          <td>{{ pagu.status }}</td>
        </tr>
      </tbody>
      </template>
    </data-vue>

</template>

<script>
import axios from "axios";
export default{

    data() {
        return {
            vrenstra : true,
            capaian : 2022,
            dataPagu:[],
            info : null
        }
    },
    mounted(){
        this.fetchPagu();
    },
    methods:{
        async fetchPagu(){
         const {data} = await axios.get('http://localhost:3030/PAGU')
           this.dataPagu = data
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
/* eslint-disable */
<template>


  <div class="card mb-2">
    <app-notify :message="flashMessage" :open="showFlash" @close="showFlash = false" type="success" position="tl"></app-notify>
    <div class="card-header">
     <h2 class="mt-2"> Input Tahun Renstra</h2>
    </div>
    <form @submit.prevent="handleTahun">
    <div class="card-body">
      <div class="row">
            <div class="col-md-12 fv-row my-1">
                <label class="required fs-6 fw-bold mb-1">Tahun Renstra</label>
                <input type="text" class="form-control form-control-sm" v-model="form.nama_tahun" placeholder="Tahun Renstra"/>
            </div>
        </div>
    </div>
    
    <div class="card-footer">
            <div class="col-md-12 my-1 fv-row">
              <input class="buttonn button2"  type="submit" value="Save">
            </div>
        </div>
      </form>
  </div>

<div class="card">
  <data-vue :source="recordTahunRenstra" :per-page="5" pagination="dropdown" searchKey="nama_tahun">
      <template #title>
        <h2 class="mt-2">Data Tahun  Renstra</h2>
      </template>
      <template #search>
      </template>
      <template #actionbar="{ checkedItems }">
      </template>
      <template #head="{ sort, sortable, checkAll, isCheckedAll }">
        <thead class="table-dark">
        <tr>
          <th class="ps-3"><b>No</b></th>
          <th scope="col"><b> Tahun Renstra</b></th>
          <th scope="col">
            <b>Status</b>
          </th>
          <th><b>action</b> </th>
          
        </tr>
      </thead>
      </template>
      <template #body="{ records, firstItem, isChecked, checkItem }">
        <tbody>
        <tr v-for="(renstra, index) in records" :key="renstra.id">
          <td class="ps-3">{{ firstItem + index }}</td>
          <td>{{ renstra.nama_tahun }}</td>
          <td>{{ renstra.status }}</td>
          <td>
            <a href="#" class="btn btn-sm">
                    <span class="svg-icon svg-icon-3">
                      <svg class="edit" xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>
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
import axios from "axios"
export default{
    data() {
        return {
            showFlash : false ,
            flashMessage : "",
            recordTahunRenstra:[],
            form:{
              nama_tahun : "",
              status : "a"

            }
        }
    },
    mounted() {
        this.fetchRKAT();
    },
    methods:{
      addRecord(record){
        this.recordTahunRenstra.push(record)
        this.flashMessage = "Tahun Renstra has been saved";
        this.showFlash = true
        this.form.nama_tahun = ""
      },
        async fetchRKAT(){
          const { data } = await axios.get("http://localhost:8080/api/tahun_renstra")
          this.recordTahunRenstra = data.result;            
        },
        async handleTahun(){
          try {
            const {data : Brecord} = await axios.post("http://localhost:8080/api/tahun_renstra/simpan", this.form)
            this.addRecord(Brecord.result)
          } catch (error) {
            console.error(error);
          }
          
        },

        addCapaian(){
            
            if (this.capaian < 2027) {
                this.capaian + 1
            }
        },
        deleteSelected(items) {
      if (confirm("Are you sure?")) {
        Array.from(items).forEach((item) => {
          const index = this.tahunRenstra.findIndex(
            (renstra) => renstra.id === item.id
          );
          this.tahunRenstra.splice(index, 1);
        });
        items.clear();
      }
    },
        
    },
}

</script>
<style scoped>
.head-table{
    display: flex;
    width: 100%;
}
.add-button{
    flex: 5;
    text-align: right;
}
.card-header {
  background: #fff;
  padding-top: 16px;
  padding-bottom: 10px;
}

.cardFooter {
  font-size: 12px;
  background-color: #fff;
  margin-left: 12px;
  margin-right: 12px;
}

.table,
.pagination {
  margin-bottom: 0;
}

.sort-control {
  cursor: pointer;
}
.ascending:after {
  content: "\25b2";
}
.descending:after {
  content: "\25bc";
}
.buttonn {
  background-color: #3B71CA; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  border-radius: 4px;
}
.button2:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
.edit:hover {
  fill:#E4A11B
}

</style>
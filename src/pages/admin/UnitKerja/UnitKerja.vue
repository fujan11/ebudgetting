<template>
     <div class="card mb-1">
    <app-notify :message="flashMessage" :open="showFlash" @close="showFlash = false" type="success" position="tl"></app-notify>
    <div class="card-header">
     <h2 class="mt-2"> Input Data Unit Kerja</h2>
    </div>
    <form @submit.prevent="handleSubmit">
    <div class="card-body">                
      <div class="row">
            <div class="col-md-4 fv-row my-2">
              <label for="bidangrenstra" class="required fs-6 fw-bold mb-2">Nama Unit Kerja</label>
                <input type="text" v-model="form.namaUnitKerja" required class=" form-control form-control-sm" id="bidangrenstra">
            </div>
            <div class="col-md-4 fv-row my-2">
              <label for="bidangrenstra" class="required fs-6 fw-bold mb-2">Username</label>
                <input type="text" v-model="form.username" required class=" form-control form-control-sm" id="bidangrenstra">
            </div>
            <div class="col-md-4 fv-row my-2">
              <label for="bidangrenstra" class="required fs-6 fw-bold mb-2">Password</label>
                <input type="password" v-model="form.password"  required class=" form-control form-control-sm" id="bidangrenstra">
            </div>
        </div>           
    </div>
    <button type="submit"></button>
  
    <div class="card-footer">
            <div class="col-md-12 my-1 fv-row">
              <input class="buttonn button2"  type="submit" value="Save">
            </div>
        </div>
      </form>
  </div>

  <data-vue :source="unit_kerja" :per-page="5" pagination="dropdown">
      <template #title>
        <h2 class="mt-2">Data Unit Kerja</h2>
      </template>
      <template #actionbar="{ checkedItems }">
      </template>
      <template #head="{ sort, sortable, checkAll, isCheckedAll }">
        <thead class="table-dark">
        <tr>
          <th class="ps-3"><b>No</b></th>
          <th scope="col"><b>Nama Unit</b></th>
          <th scope="col"><b>User</b></th>
          <th scope="col"><b>Status</b></th>
          <th><b>action</b> </th>
          
        </tr>
      </thead>
      </template>
      <template #body="{ records, firstItem, isChecked, checkItem }">
        <tbody>
        <tr v-for="(unit, index) in records" :key="unit.id">
          <td class="ps-3">{{ firstItem + index }}</td>
          <td>{{ unit.namaUnitKerja }}</td>
          <td>{{ unit.username }}</td>
          <td>{{ unit.status }}</td>
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
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
            unit_kerja :[],
            form:{
                namaUnitKerja:"",
                username:"",
                password: "",
                status :"aktif"
            }
        }
    },
    mounted() {
        this.fetchUnitKerja();
    },
    methods: {
        addRecords(records){
        this.unit_kerja.push(records);
        this.flashMessage = "Bidang Renstra has been saved";
        this.showFlash = true
        this.form={
            namaUnitKerja:"",
            username:"",
            password: "",
            status :"aktif"
        }
      },
        async fetchUnitKerja(){
            const {data} = await axios.get("http://localhost:3030/UnitKerja")
            this.unit_kerja = data
        },
        async handleSubmit(){
            try {
        const {data: bRenstra} = await axios.post("http://localhost:3030/UnitKerja", this.form)
        this.addRecords(bRenstra)
        
      } catch (error) {
        if(error.response && error.response.status === 422){
          this.errors = error.response.data.errors
        }else{
          console.error(error);
        }
      }
        }
    },
}
</script>
<style scoped>
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
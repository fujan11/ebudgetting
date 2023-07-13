<template>

  <div class="card" v-if="!vrenstra">
    <form @submit.prevent="handleRenstra">
    <app-notify :message="flashMessage" :open="showFlash" @close="showFlash = false" type="success" position="tl"></app-notify>
        <div class="card-header">
            <h3 class="card-title">
                Entry Data Renstra
            </h3>
        </div>
        
        <div class="card-body">
            <div class="row ">
                <div class="col-md-4 fv-row my-2">
                    <base-select
                    label="Bidang Renstra"
                    :options="bRenstra"
                    placeholder="Select Bidang Renstra"
                    v-model="form.id_bidang_renstra"
                     ></base-select>
                </div>
                <div class="col-md-4 fv-row my-2">
                    <base-select
                    label="Tahun Renstra"
                    :options="option_tahun"
                    placeholder="Select Tahun Renstra"
                    v-model="form.id_tahun_restra"
                     ></base-select>
                </div>
                <div class="col-md-4 fv-row my-2">
                    <label class="required fs- fw-bold mb-2" for="sasaran">Sasaran Renstra</label>
                    <input type="text" v-model="form.sasaran_renstra" class="form-control form-control-sm" placeholder="" id="sasaran"/>
                </div>
                <div class="col-md-4 fv-row my-2">
                    <label class="required fs- fw-bold mb-2">Program</label>
                    <textarea v-model="form.program" class="form-control form-control-sm" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                
                <div class="col-md-4 fv-row my-2">
                    <label class="required fs- fw-bold mb-2">Indikator</label>
                    <textarea v-model="form.indikator" class="form-control form-control-sm" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="col-md-4 fv-row my-2">
                    <label class="required fs- fw-bold mb-2">Tujuan</label>
                    <textarea v-model="form.tujuan" class="form-control form-control-sm" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="col-md-3 fv-row my-2">
                    <label class="required fs- fw-bold mb-2">Kondisi Existing</label>
                    <textarea v-model="form.kondisi_existing" class="form-control form-control-sm" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="col-md-3 fv-row my-2">
                    <label class="required fs- fw-bold mb-2">Baseline</label>
                    <textarea v-model="form.baseline" class="form-control form-control-sm" rows="3"></textarea>
                </div>
                <div class="col-md-3 fv-row my-2">
                    <label class="required fs- fw-bold mb-2">Standart Ditetapkan</label>
                    <textarea v-model="form.standart_ditetapkan" class="form-control form-control-sm" rows="3"></textarea>
                </div>
                <div class="col-md-3 fv-row my-2">
                    <label class="required fs- fw-bold mb-2">Strategi</label>
                    <textarea v-model="form.strategi" class="form-control form-control-sm" rows="3"></textarea>
                </div>
                <div class="col-md-1 fv-row">
                  <h5>Capaian</h5>
                </div>
                <div class="col-md-2 fv-row my-2">   
                    <input v-model="form.tahun.tahun1" type="text" class="form-control form-control-sm me-1" style="display: inline-block; width: 35%;" placeholder="Tahun" id="sasaran"/>
                    <input v-model="form.jumlah.jumlah1" type="text" class="form-control form-control-sm " style="display: inline-block; width: 60%;" placeholder="Jumlah" id="sasaran"/>
                </div>
                <div class="col-md-2 fv-row my-2">   
                    <input v-model="form.tahun.tahun2" type="text" class="form-control form-control-sm me-1" style="display: inline-block; width: 35%;" placeholder="Tahun" id="sasaran"/>
                    <input v-model="form.jumlah.jumlah2" type="text" class="form-control form-control-sm " style="display: inline-block; width: 60%;" placeholder="Jumlah" id="sasaran"/>
                </div>
                <div class="col-md-2 fv-row my-2">   
                    <input v-model="form.tahun.tahun3" type="text" class="form-control form-control-sm me-1" style="display: inline-block; width: 35%;" placeholder="Tahun" id="sasaran"/>
                    <input v-model="form.jumlah.jumlah3" type="text" class="form-control form-control-sm " style="display: inline-block; width: 60%;" placeholder="Jumlah" id="sasaran"/>
                </div>
                <div class="col-md-2 fv-row my-2">   
                    <input v-model="form.tahun.tahun4" type="text" class="form-control form-control-sm me-1" style="display: inline-block; width: 35%;" placeholder="Tahun" id="sasaran"/>
                    <input v-model="form.jumlah.jumlah4" type="text" class="form-control form-control-sm " style="display: inline-block; width: 60%;" placeholder="Jumlah" id="sasaran"/>
                </div>
                <div class="col-md-2 fv-row my-2">   
                    <input v-model="form.tahun.tahun5" type="text" class="form-control form-control-sm me-1" style="display: inline-block; width: 35%;" placeholder="Tahun" id="sasaran"/>
                    <input v-model="form.jumlah.jumlah5" type="text" class="form-control form-control-sm " style="display: inline-block; width: 60%;" placeholder="Jumlah" id="sasaran"/>
                </div>
                <br>
                <div class="col-md-12 fv-row my-2">
                    <label class="required fs- fw-bold mb-2">Dokumen Renstra</label>
                    <input v-model="form.nama_dokumen" type="text" class="form-control form-control-sm" placeholder="" name="lastName"/>
                </div>   
            </div>
          </div>
            <div class="card-footer">
                    <a  @click="addRenstra" class="btn btn-dark">Back</a>
                    <input class="buttonn button2"  type="submit" value="Save">
            </div> 
           </form>
  </div>
    
  <data-vue v-if="vrenstra"  :per-page="5" :source="dataRenstra" pagination="dropdown" searchKey="nama_bidang" >
    <app-notify :message="flashMessage" :open="showFlash" @close="showFlash = false" type="success" position="tl"></app-notify>npmnp 
      <template #title>
        <h2 class="mt-7">Data Bidang Renstra</h2>
      </template>
      <template #search>
      </template>
      <template #add>
        <button @click="addRenstra" class="btn btn-primary btn-sm ms-5"><i class="bi bi-plus-circle"></i> Add Data</button>
      </template>
      <template #head="{ sort, sortable, checkAll, isCheckedAll }">
        <thead class="table-dark">
        <tr>
          <th class="ps-3"><b>No</b></th>
          <!-- <th widht="20">
            <input type="checkbox" @change="checkAll" :checked="isCheckedAll" />
          </th> -->
          <th scope="col" :class="sortable('bidangRenstra')" @click="sort('bidangRenstra')"><b> Bidang Renstra</b></th>
          <th scope="col" :class="sortable('tahun')" @click="sort('tahun')">
            <b>Tahun Renstra</b>
          </th>
          <th><b>action</b> </th>
          
        </tr>
      </thead>
      </template>
      <template #body="{ records, firstItem, isChecked, checkItem }">
        <tbody>
        <tr v-for="(renstra, index) in records" :key="renstra.id">
          <td class="ps-3">{{ firstItem + index }}</td>
          <td>{{ renstra.nama_bidang }}</td>
          <td>{{ renstra.nama_tahun }}</td>
          <td>
              <router-link class="btn btn-sm" :to="{ path: '/admin/detailrenstra', query: { bidang: renstra.nama_bidang, tahun : renstra.nama_tahun } }">
                <span class="svg-icon svg-icon-3">
                  <svg class="detail" viewBox="0 0 24 24" height="1.5em"  xmlns="http://www.w3.org/2000/svg">
                      <path xmlns="http://www.w3.org/2000/svg" opacity="1" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM15 17C15 16.4 14.6 16 14 16H8C7.4 16 7 16.4 7 17C7 17.6 7.4 18 8 18H14C14.6 18 15 17.6 15 17ZM17 12C17 11.4 16.6 11 16 11H8C7.4 11 7 11.4 7 12C7 12.6 7.4 13 8 13H16C16.6 13 17 12.6 17 12ZM17 7C17 6.4 16.6 6 16 6H8C7.4 6 7 6.4 7 7C7 7.6 7.4 8 8 8H16C16.6 8 17 7.6 17 7Z"></path>
                      <path xmlns="http://www.w3.org/2000/svg" opacity="2" d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="#2d0268"></path>
                  </svg>
                  </span>
              </router-link>
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
</template>

  
<script >
import axios from "axios"
import { createRouter, createWebHistory } from 'vue-router'
import { RouterLink } from 'vue-router'
export default{
data() {
    return {
        showFlash : false ,
        flashMessage : "",
        vrenstra : true,
        capaian : [],
        dataRenstra:[],
        bRenstra: [],
        option_tahun:[],
        form:{
          id_unit_kerja : 1,
          id_bidang_renstra : "",
          id_tahun_restra : "",
          sasaran_renstra : "",
          program :"",
          indikator: "",
          tujuan : "",
          kondisi_existing : "",
          baseline : "",
          status :"a",
          standart_ditetapkan : "",
          strategi : "",
          tahun : {
            tahun1: "",
            tahun2:"",
            tahun3:"",
            tahun4:"",
            tahun5:""
          },
          jumlah : {
            jumlah1: "",
            jumlah2:"",
            jumlah3:"",
            jumlah4:"",
            jumlah5:""
          },
          nama_dokumen : ""
        }
    }
},
components:{
},
mounted() {
        this.fetchRenstra();
        this.fetchBidangRenstra();
        this.fetchTahun()
        this.populateItems(this.tahun)
        
    },
    methods:{ 
      addRecord(record){
        this.dataRenstra.push(record)
        this.flashMessage = "Tahun Renstra has been saved";
        this.showFlash = true
        this.form={
          id_bidang_renstra : "",
          id_bidang_renstra : "",
          id_tahun_restra : "",
          sasaran_renstra : "",
          program :"",
          indikator: "",
          tujuan : "",
          kondisi_existing : "",
          baseline : "",
          status :"a",
          standart_ditetapkan : "",
          strategi : "",
          tahun : "",
          jumlah : "",
          nama_dokumen : ""
        },
        this.vrenstra = true
      },
      async handleRenstra(){
          try {
            const {data : Brecord} = await axios.post("http://localhost:8080/api/renstra/multi/insert", this.form)
            console.log(Brecord);
            this.addRecord(Brecord)
            
          } catch (error) {
            console.error(error);
          }
          
        },
        async fetchTahun(){
            try {
            const {data }  = await axios.get("http://localhost:8080/api/tahun_renstra");
            this.option_tahun = data.result.map((category) => {
             return {
                value:category.id_tahun_restra,
                text: category.nama_tahun,
                };
            });
            } catch (error) {
                console.error(error);
            }
        },
        async fetchBidangRenstra(){
            try {
            const { data } = await axios.get("http://localhost:8080/api/bidang_renstra");
                this.bRenstra = data.result.map((category) => {
            return {
                value: category.id_bidang_renstra,
                text: category.nama_bidang,
            };
        });
            } catch (error) {
                
            }
        },
        async fetchRenstra(){
           const {data} = await axios.get("http://localhost:8080/api/renstra")
           this.dataRenstra = data.result
            
        },
        addRenstra(){
            this.vrenstra = !this.vrenstra
      },
      getCurrentYear() {
      
    },
      populateItems(){
        const date = new Date();
        let tahun = date.getFullYear();
        let counter = 0;
        while (counter < 5) {
        this.capaian.push({ id: counter, name: `${ tahun + counter}` });
        counter++;
      }

    },
    
        
    },
}
</script>
<style scoped>
.edit:hover {
  fill:#E4A11B
}
.detail:hover {
  fill:#3B71CA
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
</style>

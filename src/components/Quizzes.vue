<template>
    <div class="container-fluid dashboard">
      <div class="row">
        <div class="col-sm">
          <div class="card" id="qoutes">
            <b-row>
              <b-col>
                <div id="title-code">
                  <h4>Select Example Code</h4>
                </div>
                <b-row class="my-1">
                  <b-col sm="12">
                    <b-form-select v-model="optionSelected" :options="options"></b-form-select>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>
        </div>

        <div class="col-sm">
          <div class="card search">
              <center>
                <h4 id="title-search">Search Student ID</h4>
                <b-container class="bv-example-row">
                  <b-row>
                    <b-col class="col-8"><b-form-input v-model="keyword" type="text" debounce="500" placeholder="Search Student by ID" id="keyword-input"></b-form-input></b-col>
                    <b-col class="col-4"><b-button>Search</b-button></b-col>
                  </b-row>
                </b-container>
              </center>
          </div>
        </div> 
      </div>

      <div class="col main" >
        <div class="card main-height">
          <div id="title">
            <h4>Quizzes</h4>
          </div>
          <div id="table-quizzes">
            <table v-if="items.length" class="table table-hover">
              <thead>
                <tr>
                  <th class="pick">
                    <label>
                      <input type="checkbox" v-model="selectAll" @click="select">
                    </label>
                  </th>
                  <!-- <th>ID</th> -->
                  <th class="colData">Sender ID</th>
                  <th class="colData">Student ID</th>
                  <th class="colData">Fullname</th>
                  <th class="colData">Class</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in resultQuery" :key="item.sender_id">
                  <td>
                    <label>
                      <input v-model="selected" :value="item.sender_id" type="checkbox">
                    </label>
                  </td>
                  <!-- <td>{{ item.No }}</td> -->
                  <td>{{ item.sender_id }}</td>
                  <td>{{ item.studentID }}</td>
                  <td>{{ item.sender_name }}</td>
                  <td>{{ item.ClassName }}</td>
                </tr>
              </tbody>
            </table>

          </div>

          <div class="submit">
            <div class="row justify-content-md-center">
              <div class="col-md-auto" id="btn-submit">
                <b-button class="send" v-on:click="sendTest()">Send</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'quizzes',
    data() {
      return {
        keyword: '',
        selectAll: false,
        selected: [],
        optionSelected: 0,
        options: [],
        items: [],
      }
    },
    methods: {
      select() {
        this.selected = [];
        if (!this.selectAll) {
          for (let i in this.items) {
            this.selected.push(this.items[i].sender_id);
          }
        }
        // console.log(this.selected)
      },

      // show() {
      //   console.log(this.selected)
      // }

      sendTest() {
        const dataSend = {
          sender_id: this.selected,
          MaDe: this.optionSelected
        }

        axios.post(`http://3104e08ae08b.ngrok.io/SendFistQuestion`, {
          dataSend
        })
      }
    },
    computed: {
      resultQuery() {
        if(this.keyword) {
          return this.items.filter((item) => {
            return this.keyword.toLowerCase().split(' ').every(v => item.studentID.toLowerCase().includes(v))
          })
        }else {
          return this.items
        }
      }
    },
    mounted() {
      axios.get(`http://3104e08ae08b.ngrok.io/getStudentList`)
      .then(response => { this.items = response.data })

      axios.get(`http://3104e08ae08b.ngrok.io/getDeThi`)
      .then(response => { this.options = response.data })
    }      
}
</script>

<style>

</style>

<style scoped src="../assets/css/Quizzes.css"></style>
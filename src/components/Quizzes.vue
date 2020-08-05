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
                  <th>ID</th>
                  <th>Sender ID</th>
                  <th>Student ID</th>
                  <th>Fullname</th>
                  <th>Class</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in resultQuery" :key="item.No">
                  <td>
                    <label>
                      <input type="checkbox" :value="item.No" v-model="selected">
                    </label>
                  </td>
                  <td>{{ item.No }}</td>
                  <td>{{ item.SenderID }}</td>
                  <td>{{ item.StudentID }}</td>
                  <td>{{ item.FullName }}</td>
                  <td>{{ item.Class }}</td>
                </tr>
              </tbody>
            </table>

          </div>

          <div class="submit">
            <div class="row justify-content-md-center">
              <div class="col-md-auto" id="btn-submit">
                <b-button class="send">Send</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'quizzes',
    data() {
      return {
        keyword: '',
        selectAll: false,
        selected: [],
        optionSelected: 1,
        options: [
          { value: 1, text: 'Test Summit 1 Final' },
          { value: 2, text: 'Test Summit 2 Final' }
        ],
        items: [
          { No: 1, SenderID: 123456789, StudentID: 'GCH12345', FullName: 'Chatbot Edu', Class: 'GCH0717' },
          { No: 2, SenderID: 123456789, StudentID: 'GCH43212', FullName: 'Chatbot Edu', Class: 'GCH0717' },
          { No: 3, SenderID: 123456789, StudentID: 'GCH12312', FullName: 'Chatbot Edu', Class: 'GCH0717' },
          { No: 4, SenderID: 123456789, StudentID: 'GCH34534', FullName: 'Chatbot Edu', Class: 'GCH0717' },
          { No: 5, SenderID: 123456789, StudentID: 'GCH45454', FullName: 'Chatbot Edu', Class: 'GCH0717' },
          { No: 6, SenderID: 123456789, StudentID: 'GCH89786', FullName: 'Chatbot Edu', Class: 'GCH0717' },
          { No: 7, SenderID: 123456789, StudentID: 'GCH23423', FullName: 'Chatbot Edu', Class: 'GCH0717' },
          { No: 8, SenderID: 123456789, StudentID: 'GCH98098', FullName: 'Chatbot Edu', Class: 'GCH0717' },
          { No: 9, SenderID: 123456789, StudentID: 'GCH23423', FullName: 'Chatbot Edu', Class: 'GCH0717' },
          { No: 10, SenderID: 123456789, StudentID: 'GCH23421', FullName: 'Chatbot Edu', Class: 'GCH0717' },
          { No: 11, SenderID: 123456789, StudentID: 'GCH99999', FullName: 'Chatbot Edu', Class: 'GCH0717' },
          { No: 12, SenderID: 123456789, StudentID: 'GCH88888', FullName: 'Chatbot Edu', Class: 'GCH0717' },
          { No: 13, SenderID: 123456789, StudentID: 'GCH11111', FullName: 'Chatbot Edu', Class: 'GCH0717' },
        ]
      }
    },
    methods: {
      select() {
        this.selected = [];
        if (!this.selectAll) {
          for (let i in this.items) {
            this.selected.push(this.items[i].No);
          }
        }
        console.log(this.selected)
      }
    },
    computed: {
      resultQuery() {
        if(this.keyword) {
          return this.items.filter((item) => {
            return this.keyword.toLowerCase().split(' ').every(v => item.StudentID.toLowerCase().includes(v))
          })
        }else {
          return this.items
        }
      }
    }
}
</script>

<style>

</style>

<style scoped src="../assets/css/Quizzes.css"></style>
<template>
  <div class="container-fluid dashboard">
    <div class="row row-top">

      <div class="col-lg col-sm">

        <div class="card" id="qoutes">
          <div class="col-sm">
            <div class="card-body">
              <div class="media align-items-center">
                <div class="media-body">
                  <span>"Your time is limited, so don't waste it living someone else's life." <br> "Thời gian của bạn luôn có hạn, vì vậy đừng lãng phí nó để sống cuộc đời khác."</span>
                  </div>
                      <div class="text-center">
                          <i class="icofont-education"></i>
                      </div>
                  </div>
              </div>
            </div>
          </div>

      </div>

      <div class="col-lg col-sm">
        <div class="card" id="search">
          <center>
            <h4 id="title">Questions and Answers</h4>
            <b-container class="bv-example-row">
              <b-row>
                <b-col class="col-8"><b-form-input v-model="keyword" type="text" debounce="500" placeholder="Search Question" id="keyword-input"></b-form-input></b-col>
                <b-col class="col-4"><b-button>Search</b-button></b-col>
              </b-row>
            </b-container>
          </center>
        </div>
      </div>

    </div>

    <div class="row">

      <div class="col">
        <div class="card pickQuestion">
          <div class="title">
            <h4>Create Example Code</h4>
          </div>
          <div class="code">
            <b-row>
              <!-- <b-col>
                <b-row class="my-1">
                  <b-col sm="2">
                    <label for="code">Code</label>
                  </b-col>
                  <b-col sm="12">
                    <b-form-input v-model="code" :readonly="true" id="code"></b-form-input>
                  </b-col>
                </b-row>
              </b-col> -->
              <b-col>
                <b-row class="my-1">
                  <b-col sm="2">
                    <label for="detailCode">Name for Example Code</label>
                  </b-col>
                  <b-col sm="12">
                    <b-form-input v-model="detailCode" id="detailCode"></b-form-input>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>

          <div class="question-list">
            <table v-if="items.length" class="table table-hover">
              <thead>
                <tr>
                  <th class="pick">
                    <label>
                      <input type="checkbox" v-model="selectAll" @click="select">
                    </label>
                  </th>
                  <th>ID</th>
                  <th>Question</th>
                  <th>Answer A</th>
                  <th>Answer B</th>
                  <th>Answer C</th>
                  <th>Answer</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in resultQuery" :key="item.QuestionID">
                  <td>
                    <label>
                      <input type="checkbox" :value="item.QuestionID" v-model="selected">
                    </label>
                  </td>
                  <td>{{ item.QuestionID }}</td>
                  <td>{{ item.Question }}</td>
                  <td>{{ item.A }}</td>
                  <td>{{ item.B }}</td>
                  <td>{{ item.C }}</td>
                  <td>{{ item.Answer }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="row justify-content-md-center">
            <div class="col-md-auto" id="btn-submit">
              <b-button>Submit</b-button>
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
    name: 'ExampleCode',
    data() {
      return {
        keyword: '',
        addQuestion: '',
        detailCode: '', 
        selectAll: false,
        selected: [],
        items: []
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
      }
    },
    computed: {
      resultQuery() {
        if(this.keyword) {
          return this.items.filter((item) => {
            return this.keyword.toLowerCase().split(' ').every(v => item.Question.toLowerCase().includes(v))
          })
        }else {
          return this.items
        }
      }
    },
    mounted() {
      axios.get(`http://cedf32badbb0.ngrok.io/getAllQuestionList`)
      .then(response => { this.items = response.data })
    }
}
</script>

<style>

</style>

<style scoped src="../assets/css/ExampleCode.css"></style>
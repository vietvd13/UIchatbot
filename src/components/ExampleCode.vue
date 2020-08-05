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
              <b-col>
                <b-row class="my-1">
                  <b-col sm="2">
                    <label for="code">Code</label>
                  </b-col>
                  <b-col sm="12">
                    <b-form-input v-model="code" disabled="false" id="code"></b-form-input>
                  </b-col>
                </b-row>
              </b-col>
              <b-col>
                <b-row class="my-1">
                  <b-col sm="2">
                    <label for="detailCode">Detail code</label>
                  </b-col>
                  <b-col sm="12">
                    <b-form-input v-model="detailCode" id="detailCode"></b-form-input>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>

          <div class="question-list">
            <table class="table table-hover">
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
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.No">
                  <td>
                    <label>
                      <input type="checkbox" :value="item.No" v-model="selected">
                    </label>
                  </td>
                  <td>{{item.No}}</td>
                  <td>{{item.Question}}</td>
                  <td>{{item.AnswerA}}</td>
                  <td>{{item.AnswerB}}</td>
                  <td>{{item.AnswerC}}</td>
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
export default {
    name: 'ExampleCode',
    data() {
      return {
        keyword: '',
        addQuestion: '',
        code: 'GCH0717',
        detailCode: '', 
        fields: [
          {
            key: 'No',
            label: 'ID',
            sortable: true,
            class: 'no'
          },
          {
            key: 'Question',
            label: 'Question',
            sortable: true,
            class: 'question'
          },
          {
            key: 'AnswerA',
            label: 'Answer A',
            sortable: true,
            class: 'answera'
          },
          {
            key: 'AnswerB',
            label: 'Answer B',
            sortable: true,
            class: 'answerb'
          },
          {
            key: 'AnswerC',
            label: 'Answer C',
            sortable: true,
            class: 'answerc'
          },
          {
            key: 'Actions',
            label: 'Actions',
            sortable: false,
            class: 'actions'
          }
        ],
        selectAll: false,
        selected: [],
        items: [
          { No: 1, Question: 'Pariatur minim sunt occaecat nulla duis.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },
          { No: 2, Question: 'Pariatur minim sunt occaecat nulla duis.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 3, Question: 'Pariatur minim sunt occaecat nulla duis.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 4, Question: 'Pariatur minim sunt occaecat nulla duis.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 5, Question: 'Pariatur minim sunt occaecat nulla duis.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 6, Question: 'Pariatur minim sunt occaecat nulla duis.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 7, Question: 'Pariatur minim sunt occaecat nulla duis.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 8, Question: 'Pariatur minim sunt occaecat nulla duis.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 9, Question: 'Pariatur minim sunt occaecat nulla duis.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 10, Question: 'Pariatur minim sunt occaecat nulla duis.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 11, Question: 'Pariatur minim sunt occaecat nulla duis.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 12, Question: 'Pariatur minim sunt occaecat nulla duis.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 13, Question: 'Pariatur minim sunt occaecat nulla duis.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 14, Question: 'Pariatur minim sunt occaecat nulla duis.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 15, Question: 'Pariatur minim sunt occaecat nulla duis.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 16, Question: 'Pariatur minim sunt occaecat nulla duis.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 17, Question: 'Pariatur minim sunt occaecat nulla duis.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },          
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
    }
}
</script>

<style>

</style>

<style scoped src="../assets/css/ExampleCode.css"></style>
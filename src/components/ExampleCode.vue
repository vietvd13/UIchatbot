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
                    <b-form-input v-model="code" :readonly="true" id="code"></b-form-input>
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
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in resultQuery" :key="item.No">
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
        selectAll: false,
        selected: [],
        items: [
          { No: 1, Question: 'Pariatur minim sunt occaecat nulla duis.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },
          { No: 2, Question: 'Consequat culpa nostrud nostrud Lorem nulla enim tempor ut.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 3, Question: 'Pariatur sunt irure aliquip exercitation eiusmod reprehenderit voluptate laboris elit do cillum nisi..', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 4, Question: 'Consectetur nostrud consequat occaecat cillum nostrud dolore excepteur aliqua fugiat aliqua velit.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 5, Question: 'Deserunt nulla duis adipisicing consectetur tempor incididunt excepteur pariatur irure.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 6, Question: 'Magna mollit ad est consectetur enim aliqua ea reprehenderit esse ea sunt.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 7, Question: 'Consequat reprehenderit quis ut est enim voluptate tempor duis minim id.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 8, Question: 'Irure eu laboris do esse exercitation dolor consectetur velit velit officia amet ea in.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 9, Question: 'Enim ut ea officia in voluptate est ad dolore.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 10, Question: 'Voluptate reprehenderit aute commodo excepteur aute ullamco et velit.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 11, Question: 'Deserunt velit ex Lorem id sit est velit non ex excepteur.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 12, Question: 'Exercitation consectetur enim aliquip occaecat eu officia proident ipsum occaecat occaecat do sit.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 13, Question: 'Non consequat commodo ipsum fugiat et minim proident.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 14, Question: 'Amet fugiat laborum anim nulla dolor ea eiusmod ullamco deserunt.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 15, Question: 'Minim aliquip in nisi minim ex irure.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 16, Question: 'Sit quis sunt consequat cupidatat in do quis in consequat laboris.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },       
          { No: 17, Question: 'Esse aliqua nulla fugiat sit sint.', AnswerA: 'DDolore ut adipisicing occaecat ex adipisicing laboris aute enim quis irure et minim id.', AnswerB: 'Fugiat amet in velit tempor minim consectetur.', AnswerC: 'Incididunt deserunt exercitation ad ex.' },          
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
    }
}
</script>

<style>

</style>

<style scoped src="../assets/css/ExampleCode.css"></style>
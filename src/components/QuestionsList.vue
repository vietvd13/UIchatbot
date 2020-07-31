<template>
  <div class="container-fluid dashboard">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col-sm">
            <div class="card" id="qoutes">
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

          <div class="col-sm">
            <div class="card search">
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

        <div class="card question-list">
          <div class="title-card">
            <h4>Question List</h4>
          </div>
            <div class="questionList">
              <b-table stacked="md" hover :items="items" :fields="fields">
                <template v-slot:cell(Actions)>
                  <b-button size="sm edit">
                    <i class="icofont-ui-edit"></i><span> Edit</span>
                  </b-button>

                  <b-button size="sm delete">
                    <i class="icofont-ui-delete"></i><span> Delete</span>
                  </b-button>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'questionlist',
    data() {
      return {
        keyword: '',
        fields: [
          {
            key: 'No',
            sortable: true,
            class: 'no'
          },
          {
            key: 'Question',
            sortable: true,
            class: 'question'
          },
          {
            key: 'AnswerA',
            sortable: true,
            class: 'answera'
          },
          {
            key: 'AnswerB',
            sortable: true,
            class: 'answerb'
          },
          {
            key: 'AnswerC',
            sortable: true,
            class: 'answerc'
          },
          {
            key: 'Actions',
            sortable: false,
            class: 'actions'
          }
        ],
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
    }
}
</script>

<style>

</style>

<style scoped src="../assets/css/QuestionList.css"></style>
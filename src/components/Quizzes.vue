<template>
    <div class="container-fluid dashboard">
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
                <h4 id="title-search">Search Name Student</h4>
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

      <div class="col main" >
        <div class="card main-height">
          <div id="title">
            <h4>Quizzes</h4>
          </div>
          <div id="table-quizzes">
            <b-table stacked="md" hover :items="items" :fields="fields">
                <template v-slot:cell(Actions)>
                  <input type="checkbox">
              </template>
            </b-table>
          </div>

          <div class="submit">
            <div class="row justify-content-md-center">
              <div class="col-md-auto" id="btn-submit">
                <b-button class="send">Send</b-button>
                <b-button class="send-all">Send All Student</b-button>
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
        fields: [
          {
            key: 'No',
            sortable: true,
            class: 'no-quizzes'
          },
          {
            key: 'SenderID',
            sortable: true,
            class: 'senderid-quizzes'
          },
          {
            key: 'StudentID',
            sortable: true,
            class: 'studentid-quizzes'
          },
          {
            key: 'FullName',
            sortable: true,
            class: 'fullname-quizzes'
          },
          {
            key: 'Class',
            sortable: true,
            class: 'class-quizzes'
          },
          {
            key: 'Actions',
            sortable: false,
            class: 'table-checkbox'
          }
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
    }
}
</script>

<style>

</style>

<style scoped src="../assets/css/Quizzes.css"></style>
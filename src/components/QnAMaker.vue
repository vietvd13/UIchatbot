<template>
  <div id="qna">
    <div class="container-fluid dashboard">
      <div class="row">

          <div class="col-lg-5 col-sm">
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
          
          <div class="col-lg col-sm">
              <div class="card" id="qoutes">
                  <div class="card-body">
                      <div class="media align-items-center">
                          <div class="media-body">
                              <span>"Wisdom is not a product from school, but a lifelong learning process." <br> "Trí tuệ không phải là một sản phẩm từ trường học, mà là một quá trình học tập suốt đời."</span>
                          </div>
                          <div class="text-center">
                              <i class="icofont-education"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </div>

      <div class="row">

        <div class="col-lg-5 col-sm">
          <div class="card" id="maker">
            <center>
              <h4 id="title">Maker Question and Answers</h4>
            </center>

            <b-row class="my-0">
              <b-col sm="2">
                <label for="textarea-auto-height">Question</label>
              </b-col>
              <b-col sm="12">
                <b-form-textarea
                  id="question"
                  rows="5"
                  max-rows="8"
                ></b-form-textarea>
              </b-col>
            </b-row>
            
            <b-row class="my-1">
              <b-col sm="2">
                <label for="answerA">Answer A</label>
              </b-col>
              <b-col sm="12">
                <b-form-input v-model="answerA" id="answerA"></b-form-input>
              </b-col>
            </b-row>

            <b-row class="my-1">
              <b-col sm="2">
                <label for="answerB">Answer B</label>
              </b-col>
              <b-col sm="12">
                <b-form-input v-model="answerB" id="answerB"></b-form-input>
              </b-col>
            </b-row>

            <b-row class="my-1">
              <b-col sm="2">
                <label for="answerC">Answer C</label>
              </b-col>
              <b-col sm="12">
                <b-form-input v-model="answerC" id="answerC"></b-form-input>
              </b-col>
            </b-row>

            <b-row class="my-1">
              <b-col sm="5">
                <label for="correct">Select anser correct: </label>
              </b-col>
              <b-col sm="11">
                <b-form-radio-group id="correct" v-model="selected" name="radio-sub-component">
                  <b-form-radio value="A">Answer A</b-form-radio>
                  <b-form-radio value="B">Answer B</b-form-radio>
                  <b-form-radio value="C">Answer C</b-form-radio>
                </b-form-radio-group>
              </b-col>
            </b-row>

            <div class="row justify-content-md-center">
              <div class="col-md-auto" id="btn-submit">
                <b-button>Submit</b-button>
              </div>
            </div>

          </div>
        </div>

        <div class="col-lg col-sm">
          <div class="card" id="preview">
            <center>
              <h4 id="title">Question List</h4>
            </center>
            <div class="question-list">
              <b-table striped hover :items="items" :fields="fields"></b-table>
            </div>
          </div>
        </div>

      </div>

      <div class="messages">
        <div id="box-mess" v-show="box">
          <div id="title-box">Test chatbot</div>
          <div id="show-mess">

            <div class="bot-send">
              <div class="row">
                <div class="col-3 ava">
                  <img src="../assets/bot.png" alt="Avatar">
                </div>
                <div class="col-8 text">
                  <p>Hello. How are you today?</p>
                </div>
              </div>
            </div>

            <div class="people-send">
              <div class="row">
                <div class="col-8 people-text">
                  <p>I fine and you? I fine and you? I fine and you? I fine and you?</p>
                </div>
                <div class="col-3 ava-people">
                  <img src="../assets/avatar.png" alt="Avatar">
                </div>
              </div>
            </div>

          </div>
          <div id="send" class="row">
              <b-form-input v-model="textSend" id="textSend" class="col-10"></b-form-input>
              <b-button class="col-2"><i class="icofont-location-arrow"></i></b-button>
          </div>
        </div>
        <b-button id="openMessages" @click="box = !box"><i class="icofont-facebook-messenger"></i></b-button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    name: 'QnAMaker',
    data() {
      return {
        keyword: '',
        answerA: '',
        answerB: '',
        answerC: '',
        box: false,
        textSend: '',
        selected: 'A',
        fields: [
          {
            key: 'No',
            sortable: true
          },
          {
            key: 'Question',
            sortable: true
          },
        ],
        items: [
          { No: 1, Question: 'Dickerson' },
          { No: 2, Question: 'Dickerson' },
          { No: 3, Question: 'Dickerson' },
          { No: 4, Question: 'Dickerson' },
          { No: 5, Question: 'Dickerson' },
          { No: 6, Question: 'Dickerson' },
          { No: 7, Question: 'Dickerson' },
          { No: 8, Question: 'Dickerson' },
          { No: 9, Question: 'Dickerson' },
          { No: 10, Question: 'Dickerson' },
          { No: 11, Question: 'Dickerson' },
          { No: 12, Question: 'Dickerson' },
          { No: 13, Question: 'Dickerson' },
          { No: 14, Question: 'Dickerson' },
          { No: 15, Question: 'Dickerson' },
          { No: 16, Question: 'Dickerson' },
          { No: 17, Question: 'Dickerson' },
          { No: 18, Question: 'Dickerson' },
        ]
      }
    }
}
</script>

<style>

</style>

<style scoped src="../assets/css/QnAMaker.css"></style>
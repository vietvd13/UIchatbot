<template>
  <div class="container-fluid">

      <div class="filter">
        <b-row>
            <b-col sm>
                <div class="card filter-type">
                    <b-form-select v-model="classSelected" :options="allClass"></b-form-select>
                </div>
            </b-col>

            <b-col sm>
                <div class="card filter-type">
                    <b-form-select v-model="testSelected" :options="allTest"></b-form-select>
                </div>
            </b-col>

            <b-col sm>
                <div class="card filter-button">
                    <button>Filter</button>
                </div>
            </b-col>
        </b-row>
      </div>

      <div class="row">
          <div class="col">
              <div class="card table-card">
                  <div class="title">
                      <h4>Test Result</h4>
                  </div>
                  <div class="table-testResult">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Fullname</th>
                                <th>Student ID</th>
                                <th>Grade</th>
                                <th>Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in items" :key="item.sender_id">
                                <td>{{item.sender_name}}</td>
                                <td>{{item.studentID}}</td>
                                <td>{{item.totalResult}}/{{item.totalQuestion}}</td>
                                <td>{{item.time}}</td>
                                <td>
                                    <div class="btnDetail">
                                        <b-button>Show Detail</b-button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- <b-table :items="items" :fields="fields" hover responsive="sm">
                        <template v-slot:cell(action)>
                            <div class="btnDetail">
                                <b-button>Show Detail</b-button>
                            </div>
                        </template>
                    </b-table> -->
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'TestResult',
    data() {
        return {
            allClass: [
                { value: 0, text: 'GCH0717' },
                { value: 1, text: 'GCH0718' }
            ],
            classSelected: 0,
            allTest: [
                { value: 0, text: 'Test Mid' },
                { value: 1, text: 'Test Final' }
            ],
            testSelected: 0,
            items: []
        }
    },
    mounted() {
      axios.get(`http://cedf32badbb0.ngrok.io/getTestResult`)
      .then(response => { this.items = response.data })
    }
}
</script>

<style>

</style>

<style scoped src="../assets/css/TestResult.css"></style>
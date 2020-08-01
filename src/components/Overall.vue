<template>
    <div class="container-fluid dashboard">
      <div class="col filter">
        <b-row>

          <b-col sm>
            <div class="card filter-type">
              <b-form-select v-model="selected" :options="options"></b-form-select>
            </div>
          </b-col>

          <b-col sm>
            <div class="card filter-fdate">
              <input type="date" class="form-control" v-model="startDate">
            </div>
          </b-col>

          <b-col sm>
            <div class="card filter-ldate">
              <input type="date" class="form-control" v-model="endDate">
            </div>
          </b-col>

          <b-col sm>
            <div class="card filter-button">
              <button>Filter</button>
            </div>
          </b-col>

        </b-row>
      </div>

      <div class="col">
        <div class="row">
          <b-col sm>
            <div class="card area">
              <div class="title">
                <h4>Area Chart: Students' anticipation</h4>
              </div>

              <AreaChart/>

            </div>
          </b-col>

          <b-col sm>
            <div class="card pie">
              <div class="title">
                <h4>Pie Chart: Students' anticipation</h4>
              </div>

              <PieChart/>

            </div>
          </b-col>
        </div>
      </div>

    </div>
</template>

<script>

import AreaChart from '../components/AreaChart'
import PieChart from '../components/PieChart'

export default {
    name: 'overall',
    components: {
      AreaChart,
      PieChart
    },
    data() {
      return {
        selected: 'all',
        options: [
          { value: 'all', text: 'All Channles' },
          { value: 'class', text: 'Class' },
          { value: 'student', text: 'Student' },
        ],
        startDate: '',
        endDate: '',
        
      }
    }
}
</script>

<style>

</style>

<style scoped src="../assets/css/Overall.css"></style>
<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun"
        ],
        datasets: [
          {
            label: "Number of Incorrect Answers",
            backgroundColor: "#f87979",
            data: [40, 20, 12, 39, 10, 40, 39]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>

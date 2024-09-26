<!-- Source data can be edited in /data/diary.csv -->

<script setup>
import { data } from '../data/csv.data.ts'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)
const dateFormat = 'DD/MM/YYYY'
const displayDateFormat = 'ddd D/M/YY'
const weeks = data.diary.map( (el) => el.week ).filter((value, index, array) => array.indexOf(value) === index);
const formatDate = function(dateInput) { 
  return dayjs(dateInput, dateFormat).format(displayDateFormat); 
};
</script>

# Lecture diary

<div v-if="data.diary">
<div v-for="week in weeks">

### Week {{ week }}

<ul>
  <li  v-for="diaryItem in data.diary.filter((el) => el.week == week )">
    {{ formatDate(diaryItem.date) }}, 
    {{ diaryItem.time }}: 
    <strong>
        {{ diaryItem.topic }} 
    </strong>
    <span v-if="diaryItem.instructor"> ({{ diaryItem.instructor }})</span>
  </li>
</ul>

</div>
</div>

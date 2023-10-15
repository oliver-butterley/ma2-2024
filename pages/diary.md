---
footer: true
---

<script setup>
import { data } from '../data/csv.data.ts'
const weeks = data.diary.map( (el) => el.week ).filter((value, index, array) => array.indexOf(value) === index);
</script>

# Lesson diary

<div v-if="data.diary">

<div v-for="week in weeks">

### Week {{ week }}

  <ul>
    <li  v-for="diaryItem in data.diary.filter((value, index, array) => value.week == week )">
      {{ diaryItem.date }},
      {{ diaryItem.time }}:
      {{ diaryItem.topic }}
    </li>
  </ul>

</div>

</div>

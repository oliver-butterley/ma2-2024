---
footer: true
---

<script setup>
import { data } from './data/csv.data.ts'
</script>

# Overview

**Mathematical Analysis 2** is a 9 CFU course, part of the [Engineering Sciences](https://engineering-sciences.uniroma2.it/) bachelor course.
These pages contain the [lecture notes](/pages/part1.md) and practical details related to the course.

Instructors:

- [Oliver Butterley](https://www.mat.uniroma2.it/butterley/) (60 hours)
- [Rafael Greenblatt](https://www.mat.uniroma2.it/~greenblatt/) (30 hours)

Teams code: **3pddgbg** (use this to join on Microsoft Teams)

Classroom: **Aula 8**

## General advice

- Develop your intuition, it's a powerful skill – But don’t trust it completely
- Don’t aim to memorize but rather seek to understand – It is easy to remember anything when you understand it.
- Question always, be sceptical of all statements presented to you. Don’t
  accept them until you are sure they are believable.
- Observe, question how everything fits together, notice all the details.
- Part of the process of mathematical reasoning is creative - to be creative we must drop our inhibitions and be ready to be wrong, repeatedly.

## Schedule

The material of the course is divided into six parts as listed below. Each part takes two weeks and is accompanied with a set of exercises. Mathematically the parts are intimately linked.

| Topic (2 weeks each)                                         | Teaching period | Instructor |
| ------------------------------------------------------------ | --------------- | ---------- |
| [Mathematical reasoning](/pages/part1.md)                    | 25 Sep - 6 Oct  | Butterley  |
| [Differential calculus in higher dimension](/pages/part2.md) | 9 - 20 Oct      | Butterley  |
| [Extrema and other applications](/pages/part3.md)            | 23 Oct - 3 Nov  | Butterley  |
| [Curves and line integrals](/pages/part4.md)                 | 6 - 17 Nov      | Butterley  |
| [Multiple integrals](/pages/part5.md)                        | 20 Nov - 1 Dec  | Greenblatt |
| [Surfaces and surface integrals](/pages/part6.md)            | 4 - 15 Dec      | Greenblatt |

The final weeks of the course are devoted to a mini-project.

| Project          | Teaching period | Instructor |
| ---------------- | --------------- | ---------- |
| Project - week 1 | 18-22 Dec       |            |
| Project - week 2 | 8-12 Jan        |            |
| Project - week 3 | 15-19 Dec       |            |

### Previous years

Course material from previous years and other instructors is available.

- 2022/23 [Butterley](https://www.mat.uniroma2.it/butterley/archive/2022/MA2/)
- 2021/22 [Butterley](https://www.mat.uniroma2.it/butterley/archive/2021/MA2/)
- 2020/21 [Butterley](https://www.mat.uniroma2.it/butterley/archive/2020/MA2/)
- 2019/20 [Butterley](https://www.mat.uniroma2.it/butterley/archive/2019/MA2/) / [Tanimoto](http://www.mat.uniroma2.it/~tanimoto/teaching/2019MA2/2019MA2.html)
- 2018/19 [Tanimoto](http://www.mat.uniroma2.it/~tanimoto/teaching/2018MA2/2018MA2.html) / [Morsella](http://www.mat.uniroma2.it/~morsella/didattica/2018-19/didattica.html)

### Lesson diary

<span v-if="data.diary">

<table>
  <thead>
    <tr ><th>Date</th><th>Time</th><th>Topic</th></tr>
  </thead>
  <tbody>
    <tr  v-for="diaryItem in data.diary">
      <td>{{ diaryItem.date }} </td>
      <td>{{ diaryItem.time }}</td>
      <td> {{ diaryItem.topic }}</td>
    </tr>
  </tbody>
</table>

</span>

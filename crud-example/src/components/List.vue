<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Records</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveRecord(record, index)"
        >
          {{ tutorial.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllRecords">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentRecord">
        <h4>Tutorial</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentRecord.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentRecord.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentRecord.published ? "Published" : "Pending" }}
        </div>

        <a class="badge badge-warning"
          :href="'/tutorials/' + currentRecord.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Record...</p>
      </div>
    </div>
  </div>
</template>
<script>
import DataService from '../services/DataService';

export default {
    name: 'Records',
    data() {
        return {
            records: [],
            currentRecord: null,
            currentIndex: -1,
            title: ''
        };
    },
    methods: {
        retrieveRecords() {
            DataService.getAll()
                       .then(response => {
                           this.records = response.data;
                       })
        }
    }
    
}
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>

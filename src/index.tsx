import { render } from "react-dom";
import { createServer, Model } from 'miragejs'

import { App } from './App'

createServer({
  models: {
    task: Model
  },

  routes() {
    this.namespace = 'api'

    this.get('/tasks', (schema, request) => {
      return schema.all('task')
    })

    this.post('/tasks', (schema, request) => {
      let data = JSON.parse(request.requestBody)
      return schema.create('task', data)
    })
  },

  seeds(server) {
    server.create("task", { id:'1', title: "Clean my room", isChecked: false })
    server.create("task", { id:'2', title: "Walk with my dog", isChecked: false })
    server.create("task", { id:'3', title: "Study 1hr of development", isChecked: false })
  },
})

render(<App />, document.getElementById('root'))
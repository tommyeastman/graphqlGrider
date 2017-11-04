#Setup

Run
```bash
npm run dev
```
in terminal to launch server

Navigate to http://localhost:4000 in browser to see React app.
Navigate to http://localhost:4000/graphql to see graphiql interface.

[Mongo DB database console](mlab.com)

# Graph QL + React Strategy

1. Identify data required
We only want to display the song title on the songlist component, so we will only grab that data, not the song lyrics, id, date created, etc.

2. Write query in Graphiql then in component file
```js
import gql from library 'graphql-tag'
```

3. Bond query and component
```js
import {graphql} from 'react-apollo'
//execute query when component is rendered to screen
export default graphql(query)(SongList);
```

# Queries vs Mutations
Queries give you access to props.data
Mutations give you access to props.mutate

# React
Need to provide a key to every item that we render in a list
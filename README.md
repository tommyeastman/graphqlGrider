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

# React
Need to provide a key to every item that we render in a list
## Ducks Redux Module

Ducks - [Github URL](https://github.com/erikras/ducks-modular-redux)

Ducks is a design pattern for Redux based actionCreators, reducers and constants. It can be heavy when it comes to file sizes so I have broken the ducks design pattern into files seperated by concern.

```
actionCreators.ts       - Holds all exportable action creators.
index.ts                - Exports code used externally (reducer, actions etc).
interfaces.ts           - Defines all the modules interfaces
reducer.ts              - Defines the main reducer.
actionTypes.ts          - Defines Action Types and exports them.
tests                   - Folder containing all jest tests.
   actionCreator.test   - Tests for the action creators.
   reducer.test         - Tests for the reducer function.
```

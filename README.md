## Ducks Redux Module

Ducks - [Github URL](https://github.com/erikras/ducks-modular-redux)

Ducks is a design pattern for Redux based actionCreators, reducers and constants. It can be heavy when it comes to file sizes so I have broken the ducks design pattern into files seperated by concern.


 ```
 actionCreators.js       - Holds all exportable action creators.
 index.js                - Inports supporting code and exports the main reducer.
 reducer.js              - Defines the main reducer.
 actionTypes.js          - Defines Action Types and exports them.
 tests                   - Folder containing all jest tests.
    actionCreator.test   - Tests for the action creators.
    reducer.test         - Tests for the reducer function.
 ```

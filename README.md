## Ducks Redux Module

Ducks - [Github URL](https://github.com/erikras/ducks-modular-redux)

Ducks is a design pattern for Redux based actionCreators, reducers and constants. It can be heavy when it comes to file sizes so I have broken the ducks design pattern into files seperated by concern.


 ```
 actionCreators.js    - Holds all exportable acttion creators
 index.js             - Compiles and exports the main reducer
 reducer.js           - Defines the main reducer
 actionTypes.js       - Defines Action Types and exports them.
 ```

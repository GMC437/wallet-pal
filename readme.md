# WalletPal

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `npm test`

Launches the test runner on all test files<br />

### `npm run build`

Creates a build that can be used for deployments<br />

## Architecture

Components
* app
  * Wallet
    * WalletDetails
    * WalletInputs
  * BalanceHistory
    * BalanceHistoryList
    * BalanceHistoryIncreaseListItem
    * BalanceHistoryDecreaseListItem
    * BalanceHistoryInitialListItem
    * BalanceHistoryEmptyListItem

To Do
* ~~update readme.md~~
* ~~create reducer~~
  * ~~write tests first for reducer logic~~
  * ~~create reducer logic for tests~~
  * ~~add store to index.js~~
* ~~create actions~~
  * ~~write tests first for action creators~~
  * ~~create actions~~
    *  ~~increase balance of account~~
    *  ~~decrease balance of account~~
* Wallet component
  * tests for Wallet component
  * ~~create Wallet component~~
  * ~~add Wallet component to App.js~~
* BalanceHistory Component
  * tests for BalanceHistory component
  * create BalanceHistory component
    * test for BalanceHistoryList component
    * create BalanceHistoryList component
    * test for BalanceHistoryIncreaseListItem component
    * create BalanceHistoryIncreaseListItem component
    * test for BalanceHistoryDecreaseListItem component
    * create BalanceHistoryDecreaseListItem component
    * test for BalanceHistoryInitialListItem component
    * create BalanceHistoryInitialListItem component
    * test for BalanceHistoryEmptyListItem component
    * create BalanceHistoryEmptyListItem component
  * add BalanceHistory component to App.js
* styling Wallet component
* styling BalanceHistory component
* browser testing
* check input for bad data
* accessibility
* responsiveness
* green focus ring on seleted item
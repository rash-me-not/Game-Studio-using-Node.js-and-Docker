# Bootstrap 4 + Tether & JQuery dependancies
Bootstra 4 has recently been released but does not include the required Tether and JQuery dependancies. This can be a headache for those using ES6 module loading to build applications in Angular 2 etc.

# Current Bootstrap 4 Vr: 4.0.0-alpha.2

# Installation
```sh
npm install bootstrap4-plus-jquery --save
npm install jquery --save
```

# JavaScript ES6 Usage
## app.js
```js
import 'bootstrap4-plus-jquery';
import {Http} from 'angular2/http';
//more code etc...
```

# Updates
I will be attempting to make a pull request to Bootstrap 4. If the official dist will not include these deps, I will maintain this package to ensure it matches current version.

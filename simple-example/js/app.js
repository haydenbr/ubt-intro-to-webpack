console.log('App loaded');

require('../css/bootstrap.css');
require('../css/app.scss');

import * as _ from 'lodash';
import 'lodash/each';

import { Person } from './person.class';

let bob = new Person();

bob.greet();
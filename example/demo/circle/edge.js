'use strict';

// const Edge = require('../../../index.js').Edge;
import { Edge } from 'butterfly-dag';

const $ = require('jquery');
require('./edge.less');

class BaseEdge extends Edge {
  draw(obj) {
    let path = super.draw(obj);
    $(path).addClass('orange-dash-path');
    return path;
  }
};
module.exports = BaseEdge;
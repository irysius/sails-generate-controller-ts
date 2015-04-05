/// <reference path="../../typings/tsd.d.ts" />
/**
 * <%= controllerName %>
 *
 * @description :: Server-side logic for managing <%= modelName %>
 * @help 		:: See http://links.sailsjs.org/docs/controllers
 */

import e = require('express');

var <%= controllerName %> = {
	index: function (req: e.Request, res: e.Response, next: Function) {
		res.status(200).send('OK');
	}
};

module.exports = <%= controllerName %>;

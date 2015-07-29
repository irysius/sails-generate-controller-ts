![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

# sails-generate-controller-ts

This is a generator for sails controllers that use TypeScript.

It is currently intended to work with the [TypeScript 1.5 alpha](http://blogs.msdn.com/b/typescript/archive/2015/03/27/announcing-typescript-1-5-alpha.aspx), and the [TypeScript Definition manager](https://github.com/DefinitelyTyped/tsd/tree/master). 

Instead of generating a `Controller.js` within your `/api/controllers/` folder, it generates a `Controller.ts` instead.

I'm choosing to jump in at TypeScript 1.5 instead of earlier because of its wider implementation of ES6 syntax.  (The implementation of which is still incomplete, but enough to get started with.)

If you want a way of getting started with using TypeScript in your sails project, please refer to my [Getting Started](#) post.

### Installation

Certain generators are installed by default in Sails, but they can be overridden.  Check the [Sails docs](http://sailsjs.org/#!documentation) for information on installing generator overrides / custom generators.

In order to use a generator you will need the latest Sails, ~0.11, which can be installed with:

	$ npm install sails -g

Once that's all set, install the generator:

	$ npm install sails-generate-controller-ts
	$ tsd init
	$ tsd install express node --save

### Production Usage

##### On the command line

	$ sails generate controller-ts

##### In a node script

	var path = require('path');
	var sailsgen = require('sails-generate');
	var scope = {
		rootPath: path.resolve(__dirname)
	};
	sailsgen(require('sails-generate-controller-ts'), scope, function (err) {
		if (err) throw err;
	
		// It worked.
	});

##### Requirements

TypeScript 1.5, alpha

	npm install typescript@1.5.0-alpha -g

TypeScript Definition manager

	npm install tsd -g

You can read more about an approach to using TypeScript with sails at my [Getting Started](#) post.

### Questions?

See `FAQ.md`.

### More Resources

- [Stackoverflow](http://stackoverflow.com/questions/tagged/sails.js)
- [#sailsjs on Freenode](http://webchat.freenode.net/) (IRC channel)
- [Twitter](https://twitter.com/sailsjs)
- [Professional/enterprise](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#are-there-professional-support-options)
- [Tutorials](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#where-do-i-get-help)
- <a href="http://sailsjs.org" target="_blank" title="Node.js framework for building realtime APIs."><img src="https://github-camo.global.ssl.fastly.net/9e49073459ed4e0e2687b80eaf515d87b0da4a6b/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67" width=60 alt="Sails.js logo (small)"/></a>

---

Copyright &copy; 2015 [Lester Sy](https://github.com/irysius). Licensed under the terms of the [MIT license](LICENSE.md).

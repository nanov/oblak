'use strict';

const modelBuilder = require('./builders/modelBuilder');

const buildRepository = (collections, definitions) => Object.entries(collections).reduce(
	(repository, [collectionName, collection]) => {
		const collectionFile = collection.path;
		repository[collectionName] = modelBuilder(require(collectionFile), definitions); // eslint-disable-line
		return repository;
	},
	{},
);

// Domain may be a path to the domain dir or a loaded domain object
// Definitions come from cqrs-domain module
module.exports = ({ collections }, definitions) => buildRepository(collections, definitions);

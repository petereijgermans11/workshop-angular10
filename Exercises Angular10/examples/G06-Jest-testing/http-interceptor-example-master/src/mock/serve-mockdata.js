'use strict';

const ngApimock= require('ng-apimock')();
const express = require('express');
const cors = require('cors');
const app = express();
const ngApimockRequest = require('ng-apimock/lib/utils').ngApimockRequest;

const CONFIG = {
    ngApiMock: {
        port: 3000,
        appPath: 'build/ng-apimock',
        url: '/mocking',
        mockFilesPath: 'cypress/mocks'
    }
}

ngApimock.run({
    'src': CONFIG.ngApiMock.mockFilesPath,
    'outputDir': CONFIG.ngApiMock.appPath,
    'done': function() {
    }
});

ngApimock.watch(CONFIG.ngApiMock.mockFilesPath);
app.use(ngApimockRequest);
app.use(CONFIG.ngApiMock.url, express.static(CONFIG.ngApiMock.appPath));
app.use(cors());
app.listen(3000, 'localhost');


//DATA ADAPTER
//DS.RESTAdapter: Default adapter, Http server using Json
Jt76EmberBase.ApplicationAdapter = DS.RESTAdapter.extend({
    host: "http://localhost:58259", //Production alter this to desired host
    namespace: "api/v1"
});

//DS.FixtureAdapter: Loads data from memory (mock ups or constants - Data/dataFixtures.js)
//Jt76EmberBase.ApplicationAdapter = DS.FixtureAdapter.extend({
//});
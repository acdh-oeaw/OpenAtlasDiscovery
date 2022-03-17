import Vue from 'vue';
import caseStudies from '../assets/casestudies.json';

export const state = () => ({
  geoItems: {},
  events: [],
  eventTypes: [],
  caseStudies,
  persons: [],
  groups: [],
  eventToPerson: {},
  eventsLoaded: false,
  personsLoaded: false,
});


export const getters = {
  getEvents: (s) => s.events,
  getEventTypes: (s) => s.eventTypes,
  getGeoItems: (s) => s.geoItems,
  getCaseStudies: (s) => s.caseStudies,
  getCaseStudyColor: (s) => (id) => s.caseStudies.find(x => x.id === id || x.subtypes.some(y => y === id))?.color,
  getEventToPerson: (s) => s.eventToPerson,
  getPersons: (s) => s.persons,
  getEventsLoaded: (s) => s.eventsLoaded,
  getPersonsLoaded: (s) => s.personsLoaded,

}
export const mutations = {
  SET_GEO_ITEMS(state, geoItems) {
    state.geoItems = geoItems;
  },
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENT_TYPES(state, eventTypes) {
    state.eventTypes = eventTypes;
  },
  SET_PERSONS(state, persons) {
    state.persons = persons;
  },
  SET_GROUPS(state, groups) {
    state.groups = groups;
  },
  SET_EVENT_TO_PERSON(state, eventToPerson) {
    state.eventToPerson = eventToPerson;
  },
  SET_EVENTS_LOADED(state, eventsLoaded) {
    state.eventsLoaded = eventsLoaded;
  },
  SET_PERSONS_LOADED(state, personsLoaded) {
    state.personsLoaded = personsLoaded;
  }

}
export const actions = {
  async loadTypeTree({ commit }) {
    const g = await Vue.prototype.$api.Nodes.get_api_0_3_type_tree_();
    const eventTypes = Object.values(g.body.typeTree).filter(x => x.root.includes(27));
    commit('SET_EVENT_TYPES', eventTypes);

  },
  async loadGeoItems({ commit }) {
    const g = await Vue.prototype.$api.Content.get_api_0_3_geometric_entities_();
    const dict = g.body.features.reduce((map, item) => ({ ...map, [item.properties.objectId]: item }), {});
    commit('SET_GEO_ITEMS', dict);
  },
  async loadEvents({ commit }) {
    commit('SET_EVENTS_LOADED', false);
    const localItems = await loadAllFromCidocClass('E9');
    console.time('fix')
    const list = localItems.map(x => {

      const fromPlace = x.features[0].relations.find(y => y.relationType === 'crm:P27 moved from')?.relationTo.split('/').pop();
      const toPlace = x.features[0].relations.find(y => y.relationType === 'crm:P26 moved to')?.relationTo.split('/').pop();
      return {
        ...x.features[0],
        fromPlace: parseInt(fromPlace)-1 ,
        toPlace: parseInt(toPlace)-1,
        id: x.features[0]['@id'].split('/').pop(),
      }
    })
    console.timeEnd('fix')
    commit('SET_EVENTS', list);
    commit('SET_EVENTS_LOADED', true);

  },
  async loadPersons({ commit }) {
    commit('SET_PERSONS_LOADED', false);
    const localItems = await loadAllFromCidocClass('E21');
    const list = localItems.map(x =>( {...x.features[0], id: x.features[0]['@id'].split('/').pop()}));

    const eventToPerson = list.reduce((dict, current) => {
      const id = current.id;
      const sex  = current.types?.find(x => x.hierarchy === 'Sex')?.label
      const connections = current.relations?.filter(x => x.relationType === 'crm:P11i participated in' && x.relationSystemClass === 'move')
      .reduce((relations, currentRelation) => ({ ...relations, [`${currentRelation.type} ${currentRelation.relationTo?.split('/').pop()}`]: {id,sex}}),{});
      return ({ ...dict, ...connections });
    }, {})
    commit('SET_PERSONS', list);
    commit('SET_EVENT_TO_PERSON', eventToPerson);
    commit('SET_PERSONS_LOADED', true);
  },
  async loadGroups({ commit }) {
    const localItems = await loadAllFromCidocClass('E74');
    const list = localItems.map(x => x.features[0]);
    commit('SET_GROUPS', list);
  },
}


async function loadAllFromCidocClass(cidocClass) {
  console.time(`load ${cidocClass}`);

  const p = await Vue.prototype.$api.Entities.get_api_0_3_cidoc_class__cidoc_class_({
    limit: 30,
    cidoc_class: cidocClass,
  });
  let localItems = [...p.body.results]
  await Promise.all(Array.from({ length: p.body.pagination.totalPages - 55 }, async (x, i) => {
    const q = await Vue.prototype.$api.Entities.get_api_0_3_cidoc_class__cidoc_class_({
      limit: 30,
      cidoc_class: cidocClass,
      show: ['when', 'relations', 'types'],
      page: i + 2
    });

    localItems = [...localItems, ...q.body.results];
  }));
  console.timeEnd(`load ${cidocClass}`)
  return localItems
}

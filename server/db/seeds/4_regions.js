// seed regions table with regions
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('regions').del()
  await knex('regions').insert([
    {id: 1, region: 'Northland'},
    {id: 2, region: 'Waitematā'},
    {id: 3, region: 'Auckland'},
    {id: 4, region: 'Counties Manukau'},
    {id: 5, region: 'Waikato'},
    {id: 6, region: 'Bay of Plenty'},
    {id: 7, region: 'Taranaki'},
    {id: 8, region: 'Lakes'},
    {id: 9, region: 'Tairawhiti'},
    {id: 10, region: 'MidCentral'},
    {id: 11, region: 'Hawke\'s Bay'},
    {id: 12, region: 'Capital and Coast'},
    {id: 13, region: 'Hutt Valley'},
    {id: 14, region: 'Nelson Marlborough'},
    {id: 15, region: 'West Coast'},
    {id: 16, region: 'Canterbury'},
    {id: 17, region: 'South Canterbury'},
    {id: 18, region: 'Southern'},
  ]);
};

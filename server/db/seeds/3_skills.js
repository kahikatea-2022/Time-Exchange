// seed skills table
exports.seed = async function (knex) {
  await knex('skills').del()
  await knex('skills').insert([
    {
      id: 1,
      user_id: 1,
      category_id: 1,
      skill: 'Tuvan Singing',
      role: 'learn',
    },
    { id: 2, user_id: 1, category_id: 3, skill: 'Knitting', role: 'learn' },
    { id: 3, user_id: 1, category_id: 2, skill: 'BJJ', role: 'teach' },
    { id: 4, user_id: 1, category_id: 5, skill: 'Fencing', role: 'teach' },
    {
      id: 5,
      user_id: 1,
      category_id: 1,
      skill: 'Vampire Lore',
      role: 'teach',
    },
    {
      id: 6,
      user_id: 2,
      category_id: 1,
      skill: 'Unlimited self love',
      role: 'learn',
    },
    { id: 7, user_id: 3, category_id: 3, skill: 'Oil painting', role: 'learn' },
    { id: 8, user_id: 3, category_id: 2, skill: 'Soccer', role: 'teach' },
    { id: 9, user_id: 3, category_id: 5, skill: 'Gym', role: 'teach' },
    { id: 10, user_id: 3, category_id: 2, skill: 'Skating', role: 'learn' },
    {
      id: 11,
      user_id: 4,
      category_id: 6,
      skill: 'Twitch Streaming',
      role: 'teach',
    },
    {
      id: 12,
      user_id: 4,
      category_id: 1,
      skill: 'How to drive',
      role: 'learn',
    },
    { id: 13, user_id: 4, category_id: 2, skill: 'Airsoft', role: 'teach' },
    {
      id: 14,
      user_id: 4,
      category_id: 3,
      skill: 'My Little Unicorns',
      role: 'learn',
    },
    {
      id: 15,
      user_id: 4,
      category_id: 3,
      skill: 'My Little Unicorns',
      role: 'teach',
    },
    { id: 16, user_id: 5, category_id: 2, skill: 'Soccer', role: 'teach' },
    { id: 17, user_id: 5, category_id: 5, skill: 'Gym', role: 'teach' },
    { id: 18, user_id: 5, category_id: 2, skill: 'Skating', role: 'learn' },
    {
      id: 19,
      user_id: 5,
      category_id: 3,
      skill: 'Oil painting',
      role: 'learn',
    },
    {
      id: 20,
      user_id: 5,
      category_id: 3,
      skill: 'Forge weapons and armour',
      role: 'teach',
    },
    { id: 21, user_id: 5, category_id: 1, skill: 'Roleplaying', role: 'teach' },
    {
      id: 22,
      user_id: 5,
      category_id: 3,
      skill: 'Growing mushrooms and herbs',
      role: 'learn',
    },
    {
      id: 23,
      user_id: 5,
      category_id: 3,
      skill: 'Dog grooming',
      role: 'learn',
    },
    {
      id: 24,
      user_id: 6,
      category_id: 3,
      skill: 'Mandalorian cooking',
      role: 'teach',
    },
    {
      id: 25,
      user_id: 6,
      category_id: 3,
      skill: 'Weapons and armour maintenance',
      role: 'learn',
    },
    {
      id: 26,
      user_id: 6,
      category_id: 2,
      skill: 'Bluurg racing',
      role: 'teach',
    },
    {
      id: 27,
      user_id: 7,
      category_id: 1,
      skill: 'Beer drinking and making',
      role: 'teach',
    },
    {
      id: 28,
      user_id: 7,
      category_id: 2,
      skill: 'Salsa Dancing',
      role: 'teach',
    },
    {
      id: 29,
      user_id: 7,
      category_id: 3,
      skill: 'Toe sock and shoe making',
      role: 'teach',
    },
    {
      id: 30,
      user_id: 7,
      category_id: 1,
      skill: 'NFT and Crypto trading',
      role: 'learn',
    },
    { id: 31, user_id: 7, category_id: 1, skill: 'Photography', role: 'learn' },
    { id: 32, user_id: 8, category_id: 1, skill: 'Fine dining', role: 'teach' },
    {
      id: 33,
      user_id: 8,
      category_id: 1,
      skill: 'How to buy handbags',
      role: 'teach',
    },
    {
      id: 34,
      user_id: 8,
      category_id: 1,
      skill: 'NFT and Crypto trading',
      role: 'teach',
    },
    { id: 35, user_id: 8, category_id: 2, skill: 'Tennis', role: 'learn' },
    { id: 36, user_id: 8, category_id: 1, skill: 'Spanish', role: 'learn' },
    { id: 37, user_id: 9, category_id: 1, skill: 'Fishing', role: 'teach' },
    {
      id: 38,
      user_id: 9,
      category_id: 1,
      skill: 'Engine maintenance and motorbikes',
      role: 'teach',
    },
    { id: 39, user_id: 9, category_id: 1, skill: 'Philosopy', role: 'learn' },
    { id: 40, user_id: 9, category_id: 1, skill: 'Meditation', role: 'learn' },
    { id: 41, user_id: 2, category_id: 5, skill: 'Redux', role: 'teach' },
    {
      id: 42,
      user_id: 2,
      category_id: 5,
      skill: 'Mosh Pit moves',
      role: 'teach',
    },
    { id: 43, user_id: 2, category_id: 1, skill: 'Javascript', role: 'teach' },
    { id: 44, user_id: 3, category_id: 5, skill: 'Yoga', role: 'teach' },
    { id: 45, user_id: 3, category_id: 1, skill: 'Narcissism ', role: 'learn' },
    {
      id: 46,
      user_id: 3,
      category_id: 1,
      skill: 'Unlimited Self-love',
      role: 'teach',
    },
    { id: 47, user_id: 3, category_id: 5, skill: 'Connect4', role: 'teach' },
  ])
}

// seed categories table
exports.seed = async function (knex) {
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      auth0_id: 'auth0|62734d140b600f00693e3f51',
      first_name: 'Tracey',
      last_name: 'Anon',
      username: 'Traceyliveshere',
      email: 'tracey@doghome.com',
      about:
        'I love all things Vampire! I am pretty good at fencing and Brazilian Jiu Jitsu and keen to find someone to teach me how to sing; Tuvan Throat singing style in particular. Would also love to learn knitting to make coats for my blessing of cats.',
    },
    {
      id: 2,
      auth0_id: 'auth0|62734d140b600f00693e3f50',
      first_name: 'Test',
      last_name: 'User',
      username: 'testUser01',
      email: 'testemail@test.com',
      about: 'This is my test user account. Cool!',
      location: 2,
    },
    {
      id: 3,
      auth0_id: 'auth0|62733e75737d38006ab5d194',
      first_name: 'Garrett',
      last_name: 'Do-ble',
      username: 'Gdog',
      email: 'garrettwon@gmail.com',
      about: 'I love myself',
    },
    {
      id: 4,
      auth0_id: 'auth0|62734d140b600f00693e3f52',
      first_name: 'Benneto',
      last_name: 'De Silva',
      username: '1stBen',
      email: 'whodafiam@twitch.com',
      about:
        'My friends call me Ben, I stream on twitch most days. Can anyone teach me how to drive? Have failed my restricted license three times this month. Can teach you about gaming and streaming and also am pretty decent at airsoft. Am the biggest collector of My little Unicorns.',
    },
    {
      id: 5,
      auth0_id: 'auth0|62734d140b600f00693e3f53',
      first_name: 'Terrance Trent',
      last_name: 'Darby',
      username: 'GabanEternal',
      email: 'dogooder@kittenmail.com',
      about:
        'I am a keen RPGer and love crafting suits of armour and weapons in my home forge. Have been interested in learning to grow mushrooms, and other interesting plants... My Papillon - Pappy constantly needs a groom as he always steals my Lasercap<sup>TM</sup>, desperately need someone to teach me how to groom Pappy!.',
    },
    {
      id: 6,
      auth0_id: 'auth0|62734d140b600f00693e3f54',
      first_name: 'King',
      last_name: 'Korg',
      username: 'ladiesman217',
      email: 'korgbat79@hottiemail.com',
      about:
        'Would like to connect with any other Mandalorian refugees. Will teach Mandolore culinary arts in exchange for armor and weapons maintenance skills. I am also an experienced Blurrg racer. This is the way.',
    },
    {
      id: 7,
      auth0_id: 'auth0|62734d140b600f00693e3f55',
      first_name: 'Reginald',
      last_name: 'Voncraft Beer',
      username: 'Reggy',
      email: 'smidgearmy@gomail.xyz',
      about:
        'My interests are drinking, making and then drinking more beer. I am a competitive Salsa dancer and I also make my own shoes and toe socks.',
    },
    {
      id: 8,
      auth0_id: 'auth0|62734d140b600f00693e3f56',
      first_name: 'Beverly',
      last_name: 'Cumberbatch',
      username: 'AuntBeverly',
      email: 'dontcallmeabatch@batchery.com',
      about:
        'My passions are fine dining and high end handbags. I am an expert crypto-trader and can teach you how to sell NFTs back to yourself for tax minimisation strats. I do not provide any financial advice. Looking for a tennis partner/teacher and to improve my Spanish skills.',
    },
    {
      id: 9,
      auth0_id: 'auth0|62734d140b600f00693e3f57',
      first_name: 'Brent',
      last_name: 'Office',
      username: 'NotOnlyfan',
      email: 'calmlaker444@retter.com',
      about:
        'Hi my name is Brent. I am new to this site and happy to meet you all. I am a keen fisherman and tinker around a lot with engines and motorbikes in my spare time. I would like to learn more about philosopy and meditation. Have also been trying to learn Yoga for a while on my own, but these old bones are not very flexible.',
    },
  ])
}

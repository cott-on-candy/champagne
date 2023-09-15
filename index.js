const { Command } = require('commander');
const { name, version } = require('./package.json');

const { Bullseye } = require('bullseye');
const { Camping } = require('camping');
const { Compass } = require('compass');
const { Eagle } = require('eagle');
const { FireExtinguisher } = require('fire-extinguisher');
const { Flashlight } = require('flashlight');
const { GasStation } = require('gas-station');
const { Joystick } = require('joystick');
const { Magnet } = require('magnet');
const { PepperSpray } = require('pepper-spray');
const { Placard } = require('placard');
const { Snowflake } = require('snowflake');
const { Sunflower } = require('sunflower');
const { TaxiCab } = require('taxi-cab');
const { Telephone } = require('telephone');
const { Tennis } = require('tennis');
const { Tent } = require('tent');
const { TrashCan } = require('trash-can');
const { Umbrella } = require('umbrella');
const { Watch } = require('watch');

const program = new Command();

program
  .name(name)
  .description('Go on charlie wonka.')
  .version(version);

program.command('parse')
  .description('Parse a string into cangjie keyboard input letters')
  .argument('<string>', 'string to parse')
  .option('-d, --debug', 'debug')
  .action((s, { debug }) => {
    let camping = new Camping(s).result.map((r) => r.wide);
    let placard = new Placard(s).result.map((r) => r.wide);
    let compass = new Compass(s).result.map((r) => r.wide);
    let gas_station = new GasStation(s).result.map((r) => r.wide);
    let pepper_spray = new PepperSpray(s).result.map((r) => r.wide);
    let fire_extinguisher = new FireExtinguisher(s).result.map((r) => r.wide);
    let umbrella = new Umbrella(s).result.map((r) => r.wide);
    let eagle = new Eagle(s).result.map((r) => r.wide);
    let snowflake = new Snowflake(s).result.map((r) => r.wide);
    let sunflower = new Sunflower(s).result.map((r) => r.wide);
    let watch = new Watch(s).result.map((r) => r.wide);
    let tent = new Tent(s).result.map((r) => r.wide);
    let taxi_cab = new TaxiCab(s).result.map((r) => r.wide);
    let tennis = new Tennis(s).result.map((r) => r.wide);
    let bullseye = new Bullseye(s).result.map((r) => r.wide);
    let joystick = new Joystick(s).result.map((r) => r.wide);
    let telephone = new Telephone(s).result.map((r) => r.wide);
    let trash_can = new TrashCan(s).result.map((r) => r.wide);
    let magnet = new Magnet(s).result.map((r) => r.wide);
    let flashlight = new Flashlight(s).result.map((r) => r.wide);

    console.log(`PHRASE: ${s}`);
    console.log('-----------------------------------------------')
    console.log(`camping (hand -> Shǒu): ${camping}`);
    console.log(`placard (field -> Tián): ${placard}`);
    console.log(`compass (water -> Shuǐ): ${compass}`);
    console.log(`gas-station (predict -> Bo): ${gas_station}`);
    console.log(`pepper-spray (mountain -> Shān): ${pepper_spray}`);
    console.log(`fire-extinguisher (dagger-axe -> Gē): ${fire_extinguisher}`);
    console.log(`umbrella (people -> Rén): ${umbrella}`);
    console.log(`eagle (heart -> Xīn): ${eagle}`);
    console.log(`snowflake (day -> Rì): ${snowflake}`);
    console.log(`sunflower (corpse -> Shī): ${sunflower}`);
    console.log(`watch (wood -> Mù): ${watch}`);
    console.log(`tent (fire -> Huǒ): ${tent}`);
    console.log(`taxi-cab (earth -> Tǔ): ${taxi_cab}`);
    console.log(`tennis (ten -> Shí): ${tennis}`);
    console.log(`bullseye (big -> Dà): ${bullseye}`);
    console.log(`joystick (middle -> Zhōng): ${joystick}`);
    console.log(`telephone (disaster -> Nán): ${telephone}`);
    console.log(`trash-can (gold -> Jīn): ${trash_can}`);
    console.log(`magnet (bow -> Gōng): ${magnet}`);
    console.log(`flashlight (one -> Yī): ${flashlight}`);
    console.log('-----------------------------------------------')
    
  });


program.parse();
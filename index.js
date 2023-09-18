const { Command } = require('commander');
const { name, version } = require('./package.json');
const parser_keys = require('./src/parser_keys.json');

const { Bullseye } = require('bullseye');
const { Calendar } = require('calendar');
const { Camping } = require('camping');
const { ChristmasTree } = require('christmas-tree');
const { Compass } = require('compass');
const { Eagle } = require('eagle');
const { FireExtinguisher } = require('fire-extinguisher');
const { Flashlight } = require('flashlight');
const { GasStation } = require('gas-station');
const { Guitar } = require('guitar');
const { Joystick } = require('joystick');
const { Magnet } = require('magnet');
const { PepperSpray } = require('pepper-spray');
const { Placard } = require('placard');
const { Snowflake } = require('snowflake');
const { Sunflower } = require('sunflower');
const { Sunglasses } = require('sunglasses');
const { TaxiCab } = require('taxi-cab');
const { Telephone } = require('telephone');
const { Tennis } = require('tennis');
const { Tent } = require('tent');
const { Toolbox } = require('toolbox');
const { TrashCan } = require('trash-can');
const { Umbrella } = require('umbrella');
const { Watch } = require('watch');

const parser = {
  camping: (s) => { return new Camping(s).result },
  placard: (s) => { return new Placard(s).result },
  compass: (s) => { return new Compass(s).result },
  christmas_tree: (s) => { return new ChristmasTree(s).result },
  sunglasses: (s) => { return new Sunglasses(s).result },
  gas_station: (s) => { return new GasStation(s).result },
  pepper_spray: (s) => { return new PepperSpray(s).result },
  fire_extinguisher: (s) => { return new FireExtinguisher(s).result },
  umbrella: (s) => { return new Umbrella(s).result },
  eagle: (s) => { return new Eagle(s).result },
  snowflake: (s) => { return new Snowflake(s).result },
  sunflower: (s) => { return new Sunflower(s).result },
  watch: (s) => { return new Watch(s).result },
  tent: (s) => { return new Tent(s).result },
  taxi_cab: (s) => { return new TaxiCab(s).result },
  toolbox: (s) => { return new Toolbox(s).result },
  tennis: (s) => { return new Tennis(s).result },
  bullseye: (s) => { return new Bullseye(s).result },
  joystick: (s) => { return new Joystick(s).result },
  telephone: (s) => { return new Telephone(s).result },
  trash_can: (s) => { return new TrashCan(s).result },
  guitar: (s) => { return new Guitar(s).result },
  calendar: (s) => { return new Calendar(s).result },
  magnet: (s) => { return new Magnet(s).result },
  flashlight: (s) => { return new Flashlight(s).result }
};

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
    console.log(`PHRASE: ${s}`);
    console.log('-----------------------------------------------');
    console.log(`camping (hand -> Shǒu): ${parser.camping(s).map((r) => r.wide)}`);
    console.log(`placard (field -> Tián): ${parser.placard(s).map((r) => r.wide)}`);
    console.log(`compass (water -> Shuǐ): ${parser.compass(s).map((r) => r.wide)}`);
    console.log(`christmas-tree (mouth -> Kǒu): ${parser.christmas_tree(s).map((r) => r.wide)}`);
    console.log(`sunglasses (twenty -> Niàn): ${parser.sunglasses(s).map((r) => r.wide)}`);
    console.log(`gas station (predict -> Bo): ${parser.gas_station(s).map((r) => r.wide)}`);
    console.log(`pepper spray (mountain -> Shān): ${parser.pepper_spray(s).map((r) => r.wide)}`);
    console.log(`fire extinguisher (dagger-axe -> Gē): ${parser.fire_extinguisher(s).map((r) => r.wide)}`);
    console.log(`umbrella (people -> Rén): ${parser.umbrella(s).map((r) => r.wide)}`);
    console.log(`eagle (heart -> Xīn): ${parser.eagle(s).map((r) => r.wide)}`);
    console.log(`snowflake (day -> Rì): ${parser.snowflake(s).map((r) => r.wide)}`);
    console.log(`sunflower (corpse -> Shī): ${parser.sunflower(s).map((r) => r.wide)}`);
    console.log(`watch (wood -> Mù): ${parser.watch(s).map((r) => r.wide)}`);
    console.log(`tent (fire -> Huǒ): ${parser.tent(s).map((r) => r.wide)}`);
    console.log(`taxi cab (earth -> Tǔ): ${parser.taxi_cab(s).map((r) => r.wide)}`);
    console.log(`toolbox (bamboo -> Zhú): ${parser.toolbox(s).map((r) => r.wide)}`);
    console.log(`tennis (ten -> Shí): ${parser.tennis(s).map((r) => r.wide)}`);
    console.log(`bullseye (big -> Dà): ${parser.bullseye(s).map((r) => r.wide)}`);
    console.log(`joystick (middle -> Zhōng): ${parser.joystick(s).map((r) => r.wide)}`);
    console.log(`telephone (disaster -> Nán): ${parser.telephone(s).map((r) => r.wide)}`);
    console.log(`trash can (gold -> Jīn): ${parser.trash_can(s).map((r) => r.wide)}`);
    console.log(`guitar (female -> Nǚ): ${parser.guitar(s).map((r) => r.wide)}`);
    console.log(`calendar (moon -> Yuè): ${parser.calendar(s).map((r) => r.wide)}`);
    console.log(`magnet (bow -> Gōng): ${parser.magnet(s).map((r) => r.wide)}`);
    console.log(`flashlight (one -> Yī): ${parser.flashlight(s).map((r) => r.wide)}`);
    console.log('-----------------------------------------------');
    
  });

  program.command('acguitar')
    .description('the sound of the acustic guitar in your ears')
    .argument('<string>', 'string to get the sound of')
    .action((s) => {
      let result = [];
      
      parser.eagle(s).map((r) => {
        let foreign = parser[parser_keys[r.wide]](r.word)[0].wide;

        result.push({
          word: r.word,
          wide: r.wide,
          foreign
        });
      });

      console.log(result);
    });
  
  program.command('bass')
    .description('the sound of bass in your ears')
    .argument('<string>', 'string to get the sound of')
    .action((s) => {
      let result = [];
      
      parser.snowflake(s).map((r) => {
        let foreign = parser[parser_keys[r.wide]](r.word)[0].wide;

        result.push({
          word: r.word,
          wide: r.wide,
          foreign
        });
      });

      console.log(result);
    });
  
  program.command('basson')
    .description('the sound of basson in your ears')
    .argument('<string>', 'string to get the sound of')
    .action((s) => {
      let result = [];
    
      parser.gas_station(s).map((r) => {
        result.push({
          word: r.word,
          wide: r.wide,
          foreign: parser[parser_keys[r.wide]](r.word)[0].wide
        });
      });

      console.log(result);
    });

  program.command('cello')
    .description('the sound of cello in your ears')
    .argument('<string>', 'string to get the sound of')
    .action((s) => {
      let result = [];
      
      parser.tent(s).map((r) => {
        let foreign = parser[parser_keys[r.wide]](r.word)[0].wide;

        result.push({
          word: r.word,
          wide: r.wide,
          foreign
        });
      });

      console.log(result);
    });

  program.command('clarinet')
    .description('the sound of clarinet in your ears')
    .argument('<string>', 'string to get the sound of')
    .action((s) => {
      let result = [];
      
      parser.tennis(s).map((r) => {
        let foreign = parser[parser_keys[r.wide]](r.word)[0].wide;

        result.push({
          word: r.word,
          wide: r.wide,
          foreign
        });
      });

      console.log(result);
    });

  program.command('dna')
    .description('the dna of the input word')
    .argument('<string>', 'string to get the dna of')
    .option('-e, --expand', 'expand method')
    .option('-ee, --expanded', 'expanded method')
    .action((s, { expand, expanded }) => {
      let result = [];

      let adenina = parser.sunglasses(s)[0].wide;
      let citosina = parser.umbrella(s)[0].wide;
      let timina = parser.tent(s)[0].wide;
      let guanina = parser.magnet(s)[0].wide;
      
      result.push({
        adenina,
        citosina,
        timina,
        guanina
      });

      if (expand) {
        let r = result[0];

        let adenina = parser[parser_keys[result[0].guanina]](result[0].adenina)[0].wide;
        let citosina = parser[parser_keys[result[0].guanina]](result[0].citosina)[0].wide;
        let timina = parser[parser_keys[result[0].guanina]](result[0].timina)[0].wide;
        let guanina = parser[parser_keys[result[0].guanina]](result[0].guanina)[0].wide;

        result = [];

        result.push({
          adenina,
          citosina,
          timina,
          guanina
        });

        result.push(r);
      }

      if (expanded) {
        for (let i = 0; i <= 3; i++) {
          let adenina = parser[parser_keys[result[i].adenina]](s)[0].wide;
          let citosina = parser[parser_keys[result[i].citosina]](s)[0].wide;
          let timina = parser[parser_keys[result[i].timina]](s)[0].wide;
          let guanina = parser[parser_keys[result[i].guanina]](s)[0].wide;

          result.push({
            adenina,
            citosina,
            timina,
            guanina
          });
        }
      }

      console.log(result);
    });

  program.command('flute')
    .description('the sound of flute in your ears')
    .argument('<string>', 'string to get the sound of')
    .action((s) => {
      let result = [];
      
      parser.watch(s).map((r) => {
        let foreign = parser[parser_keys[r.wide]](r.word)[0].wide;

        result.push({
          word: r.word,
          wide: r.wide,
          foreign
        });
      });

      console.log(result);
    });

  program.command('hat')
    .description('the sound of a hat in your ears')
    .argument('<string>', 'string to get the sound of')
    .action((s) => {
      let result = [];
      
      parser.tennis(s).map((r) => {
        let foreign = parser[parser_keys[r.wide]](r.word)[0].wide;

        result.push({
          word: r.word,
          wide: r.wide,
          foreign
        });
      });

      console.log(result);
    });

  program.command('kick')
    .description('the sound of kick in your ears')
    .argument('<string>', 'string to get the sound of')
    .action((s) => {
      let result = [];
      
      parser.sunflower(s).map((r) => {
        let foreign = parser[parser_keys[r.wide]](r.word)[0].wide;

        result.push({
          word: r.word,
          wide: r.wide,
          foreign
        });
      });

      console.log(result);
    });

  program.command('piano')
    .description('the sound of piano in your ears')
    .argument('<string>', 'string to get the sound of')
    .action((s) => {
      let result = [];
      
      parser.pepper_spray(s).map((r) => {
        let foreign = parser[parser_keys[r.wide]](r.word)[0].wide;

        result.push({
          word: r.word,
          wide: r.wide,
          foreign
        });
      });

      console.log(result);
    });

  program.command('rna')
    .description('the rna of the input word')
    .argument('<string>', 'string to get the rna of')
    .option('-e, --expanded', 'expanded method')
    .action((s, { expanded }) => {
      let result = [];

      let adenina = parser.sunglasses(s)[0].wide;
      let citosina = parser.umbrella(s)[0].wide;
      let uracila = parser.tennis(s)[0].wide;
      let guanina = parser.magnet(s)[0].wide;
      
      result.push({
        adenina,
        citosina,
        uracila,
        guanina
      });

      if (expanded) {
        let key = null;

        for (let i = 0; i <= 3; i++) {

          switch(i) {
            case 0:
              key = parser[parser_keys[result[i].guanina]](s)[0].wide;
              break;

            case 1:
              key = parser[parser_keys[result[i].adenina]](s)[0].wide;
              break;

            case 2:
              key = parser[parser_keys[result[i].uracila]](s)[0].wide;
              break;

            case 3:
              key = parser[parser_keys[result[i].guanina]](s)[0].wide;
              break;
          }

          adenina = parser[parser_keys[key]](result[i].adenina)[0].wide;
          citosina = parser[parser_keys[key]](result[i].citosina)[0].wide;
          uracila = parser[parser_keys[key]](result[i].uracila)[0].wide;
          guanina = parser[parser_keys[key]](result[i].guanina)[0].wide;

          result.push({
            adenina,
            citosina,
            uracila,
            guanina
          });
        }
      }

      console.log(result);
    });

  program.command('snare')
    .description('the sound of snare in your ears')
    .argument('<string>', 'string to get the sound of')
    .action((s) => {
      let result = [];
      
      parser.fire_extinguisher(s).map((r) => {
        let foreign = parser[parser_keys[r.wide]](r.word)[0].wide;

        result.push({
          word: r.word,
          wide: r.wide,
          foreign
        });
      });

      console.log(result);
    });

  program.command('tambourine')
    .description('the sound of tambourine in your ears')
    .argument('<string>', 'string to get the sound of')
    .action((s) => {
      let result = [];
      
      parser.camping(s).map((r) => {
        let foreign = parser[parser_keys[r.wide]](r.word)[0].wide;

        result.push({
          word: r.word,
          wide: r.wide,
          foreign
        });
      });

      console.log(result);
    });

  program.command('violin')
    .description('the sound of violin in your ears')
    .argument('<string>', 'string to get the sound of')
    .action((s) => {
      let result = [];
      
      parser.taxi_cab(s).map((r) => {
        let foreign = parser[parser_keys[r.wide]](r.word)[0].wide;

        result.push({
          word: r.word,
          wide: r.wide,
          foreign
        });
      });

      console.log(result);
    });


program.parse();
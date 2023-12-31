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
    console.log('-----------------------------------------------');
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

  program.command('alumina')
    .argument('<string>', 'string to get the alumina from')
    .action((s) => {
      let oxygen = {
        _oxygen: 1,
        oxygen: parser.trash_can(s)[0].wide
      };

      let alluminium = {
        _alluminium: 1,
        alluminium: parser.tennis(s)[0].wide
      };

      let corner_oxygenn = {
        _oxygen: 1,
        oxygen: parser[parser_keys[alluminium.alluminium]](s)[0].wide
      };

      console.log([
        corner_oxygenn,
        alluminium,
        oxygen,
        alluminium,
        corner_oxygenn
      ]);
    });

  program.command('calcium-oxide')
    .argument('<string>', 'string to get the calcium-oxide from')
    .action((s) => {
      let calcium = {
        _calcium: 1,
        calcium: parser.umbrella(s)[0].wide
      };

      let oxygen = {
        _oxygen: 1,
        oxygen: parser[parser_keys[calcium.calcium]](s)[0].wide
      };

      console.log([
        calcium,
        oxygen
      ]);
    });

  program.command('calcium-sulfate')
    .argument('<string>', 'string to get the calcium sulfate from')
    .action((s) => {
      let calcium = {
        _calcium: 1,
        calcium: parser.umbrella(s)[0].wide
      };

      let sulfur = {
        _sulfur: 1,
        sulfur: parser.pepper_spray(s)[0].wide
      };

      let oxygen = parser[parser_keys[sulfur.sulfur]](s)[0].wide;
      oxygen = {
        _oxygen: 4,
        oxygen: [oxygen, oxygen, oxygen, oxygen]
      };

      console.log({
        calcium,
        sulfur,
        oxygen
      });
    });
  
  program.command('carbon-dioxide')
    .argument('<string>', 'string to get the carbon dioxide from')
    .action((s) => {
      let oxygen = parser.trash_can(s)[0].wide;
      let result = {
        _carbon: 1,
        _oxygen: 2,
        carbon: parser.tent(s)[0].wide,
        oxygen: [oxygen, parser[parser_keys[oxygen]](s)[0].wide]
      };

      console.log(result);
    });

  program.command('cocaine')
    .argument('<string>', 'string to get the cocaine from')
    .action((s) => {
      let h3cn = {
        _carbon: 1,
        _hydrogen: 3,
        _nitrogen: 1,
        carbon: parser.tent(s)[0].wide,
        hydrogen: [parser.sunglasses(s)[0].wide],
        nitrogen: parser.placard(s)[0].wide
      };

      for (let i = 1; i <= 2; i++) {
        h3cn.hydrogen.push(parser[parser_keys[h3cn.hydrogen[h3cn.hydrogen.length - 1]]](s)[0].wide);
      }

      // o_1
      let o_1 = {
        _oxygen: 1,
        oxygen: parser.trash_can(s)[0].wide
      };

      // o_2
      let o_2 = {
        _oxygen: 1,
        oxygen: parser[parser_keys[o_1.oxygen]](s)[0].wide
      };

      // ch3
      let ch3 = {
        _carbon: 1,
        _hydrogen: 3,
        carbon: parser[parser_keys[h3cn.carbon]](s)[0].wide,
        hydrogen: [h3cn.hydrogen[2]]
      };

      for (let i = 1; i <= 2; i++) {
        ch3.hydrogen.push(parser[parser_keys[ch3.hydrogen[ch3.hydrogen.length - 1]]](s)[0].wide);
      }

      // o_3
      let o_3 = {
        _oxygen: 1,
        oxygen: parser[parser_keys[o_2.oxygen]](s)[0].wide
      };

      // o_4
      let o_4 = {
        _oxygen: 1,
        oxygen: parser[parser_keys[o_3.oxygen]](s)[0].wide
      };

      let benzeno = {
        _carbon: 6,
        _hydrogen: 6,
        carbon: [h3cn.carbon],
        hydrogen: [h3cn.hydrogen[2]]
      }

      for (let i = 1; i <= 5; i++) {
        benzeno.carbon.push(parser[parser_keys[benzeno.carbon[benzeno.carbon.length - 1]]](s)[0].wide);
      }

      for (let i = 1; i <= 5; i++) {
        benzeno.hydrogen.push(parser[parser_keys[benzeno.hydrogen[benzeno.hydrogen.length - 1]]](s)[0].wide);
      }

      console.log(h3cn);
      console.log(o_1);
      console.log(o_2);
      console.log(ch3);
      console.log(o_3);
      console.log(o_4);
      console.log(benzeno);
    });

  program.command('diesel')
    .argument('<string>', 'string to get the diesel from')
    .action((s) => {
      let left_ch_ch2_ch3 = null;
      let left_ch_ch2 = null;
      let left_ch_ch3 = null;
      let left_ch = null;
      let left_hn = null;
      let middle_carbon_hc_left = null;
      let middle_carbon_ch_left = null;
      let middle_carbon_left = null;
      let middle_benzeno_carbon_left = {};
      let middle_benzeno_carbon = {};
      let middle_benzeno_carbon_right = {};
      let middle_carbon_right = null;
      let middle_carbon_ch_right = null;
      let middle_carbon_hc_right = null;
      let right_hn = null;
      let right_ch = null;
      let right_ch_ch3 = null;
      let right_ch_ch2 = null;
      let right_ch_ch2_ch3 = null;

      // helpers
      let hydrogen = null;

      ////////////////////
      // middle carbons //
      ////////////////////
      middle_carbon_left = { _carbon: 1, carbon: parser.tent(s)[0].wide }; 
      middle_carbon_right = { _carbon: 1, carbon: parser.tent(s)[0].wide };

      middle_carbon_hc_left = { 
        _hydrogen: 1,
        _carbon: 1,
        hydrogen: parser.sunglasses(s)[0].wide,
        carbon: parser[parser_keys[middle_carbon_left.carbon]](s)[0].wide
      };

      middle_carbon_ch_left = { 
        _carbon: 1,
        _hydrogen: 1,
        carbon: parser[parser_keys[middle_carbon_hc_left.carbon]](s)[0].wide,
        hydrogen: parser.sunglasses(s)[0].wide
      };

      middle_carbon_hc_right = { 
        _hydrogen: 1,
        _carbon: 1,
        hydrogen: parser.sunglasses(s)[0].wide,
        carbon: parser[parser_keys[middle_carbon_right.carbon]](s)[0].wide
      };

      middle_carbon_ch_right = { 
        _carbon: 1,
        _hydrogen: 1,
        carbon: parser[parser_keys[middle_carbon_hc_right.carbon]](s)[0].wide,
        hydrogen: parser.sunglasses(s)[0].wide
      };

      /////////////////////
      // benzeno carbons //
      /////////////////////
      middle_benzeno_carbon_left = { _carbon: 1, carbon: parser[parser_keys[middle_carbon_ch_left.carbon]](s)[0].wide };
      middle_benzeno_carbon = { _carbon: 1, carbon: parser[parser_keys[middle_carbon_hc_left.carbon]](s)[0].wide };
      middle_benzeno_carbon_right = { _carbon: 1, carbon: parser[parser_keys[middle_carbon_ch_right.carbon]](s)[0].wide };

      ////////////////////
      // left structure //
      ////////////////////
      left_hn = {
        _hydrogen: 1,
        _nitrogen: 1,
        hydrogen: parser.sunglasses(s)[0].wide,
        nitrogen: parser.placard(s)[0].wide
      };

      left_ch = {
        _carbon: 1,
        _hydrogen: 1,
        carbon: parser[parser_keys[middle_carbon_ch_left.carbon]](s)[0].wide,
        hydrogen: parser[parser_keys[left_hn.hydrogen]](s)[0].wide
      }

      ////////////////////
      // left ch group  //
      ////////////////////
      hydrogen = [parser.sunglasses(s)[0].wide];

      for (let i = 1; i <= 2; i++) {
        hydrogen.push(parser[parser_keys[hydrogen[hydrogen.length - 1]]](s)[0].wide);
      }

      left_ch_ch3 = {
        _carbon: 1,
        _hydrogen: 3,
        carbon: parser[parser_keys[left_ch.carbon]](s)[0].wide,
        hydrogen
      };

      hydrogen = [parser.sunglasses(s)[0].wide];
      hydrogen.push(parser[parser_keys[hydrogen[hydrogen.length - 1]]](s)[0].wide);

      left_ch_ch2 = {
        _carbon: 1,
        _hydrogen: 2,
        carbon: parser[parser_keys[left_ch.carbon]](s)[0].wide,
        hydrogen
      };

      left_ch_ch2_ch3 = {
        _carbon: 1,
        _hydrogen: 3,
        carbon: parser[parser_keys[left_ch.carbon]](s)[0].wide,
        hydrogen: [...hydrogen, parser[parser_keys[hydrogen[hydrogen.length - 1]]](s)[0].wide]
      };

      /////////////////////
      // right structure //
      /////////////////////
      right_hn = {
        _hydrogen: 1,
        _nitrogen: 1,
        hydrogen: parser.sunglasses(s)[0].wide,
        nitrogen: parser.placard(s)[0].wide
      };

      right_ch = {
        _carbon: 1,
        _hydrogen: 1,
        carbon: parser[parser_keys[middle_carbon_ch_right.carbon]](s)[0].wide,
        hydrogen: parser[parser_keys[right_hn.hydrogen]](s)[0].wide
      }

      ////////////////////
      // right ch group //
      ////////////////////
      hydrogen = [parser.sunglasses(s)[0].wide];

      for (let i = 1; i <= 2; i++) {
        hydrogen.push(parser[parser_keys[hydrogen[hydrogen.length - 1]]](s)[0].wide);
      }

      right_ch_ch3 = {
        _carbon: 1,
        _hydrogen: 3,
        carbon: parser[parser_keys[right_ch.carbon]](s)[0].wide,
        hydrogen
      };

      hydrogen = [parser.sunglasses(s)[0].wide];
      hydrogen.push(parser[parser_keys[hydrogen[hydrogen.length - 1]]](s)[0].wide);

      right_ch_ch2 = {
        _carbon: 1,
        _hydrogen: 2,
        carbon: parser[parser_keys[right_ch.carbon]](s)[0].wide,
        hydrogen
      };

      right_ch_ch2_ch3 = {
        _carbon: 1,
        _hydrogen: 3,
        carbon: parser[parser_keys[right_ch.carbon]](s)[0].wide,
        hydrogen: [...hydrogen, parser[parser_keys[hydrogen[hydrogen.length - 1]]](s)[0].wide]
      };

      console.log(left_ch_ch2_ch3);
      console.log(left_ch_ch2);
      console.log(left_ch_ch3);
      console.log(left_ch);
      console.log(left_hn);
      console.log(middle_carbon_hc_left);
      console.log(middle_carbon_ch_left);
      console.log(middle_carbon_left);
      console.log(middle_benzeno_carbon_left);
      console.log(middle_benzeno_carbon);
      console.log(middle_benzeno_carbon_right);
      console.log(middle_carbon_right);
      console.log(middle_carbon_ch_right);
      console.log(middle_carbon_hc_right);
      console.log(right_hn);
      console.log(right_ch);
      console.log(right_ch_ch3);
      console.log(right_ch_ch2);
      console.log(right_ch_ch2_ch3);
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

  program.command('ethanol')
    .argument('<string>', 'string to get the ethanol from')
    .action((s) => {
      let result = [];
      let carbon = parser.tent(s)[0].wide;

      carbon = {
        _carbon: 2,
        carbon: [carbon, parser[parser_keys[carbon]](s)[0].wide]
      }

      let hydrogen = {
        _hydrogen: 5,
        hydrogen: [parser.sunglasses(s)[0].wide]
      };

      for (let i = 1; i <= 4; i++) {
        hydrogen.hydrogen.push(parser[parser_keys[hydrogen.hydrogen[hydrogen.hydrogen.length - 1]]](s)[0].wide);
      }

      let oxygen = {
        _oxygen: 1,
        oxygen: parser.trash_can(s)[0].wide
      };

      let oxygen_hydrogen = {
        _hydrogen: 1,
        hydrogen: parser.sunglasses(s)[0].wide
      };      

      console.log(carbon);
      console.log(hydrogen);
      console.log(oxygen);
      console.log(oxygen_hydrogen)
    });

  program.command('iron-oxide')
    .argument('<string>', 'string to get the iron-oxide from')
    .action((s) => {
      let iron = {
        _iron: 1,
        iron: parser.magnet(s)[0].wide
      };

      let oxygen = {
        _oxygen: 1,
        oxygen: parser[parser_keys[iron.iron]](s)[0].wide
      };

      console.log([
        oxygen,
        iron,
        oxygen,
        iron,
        oxygen
      ]);
    });

  program.command('gasoline')
    .argument('<string>', 'string to get the gasoline formula of')
    .action((s) => {
      let left_ch3 = [];
      let left_carbon = null;
      let middle_ch2 = {};
      let right_carbon = null;
      let right_ch3 = [];

      let hydrogen = parser.sunglasses(s)[0].wide;

      // middle CH2
      middle_ch2 = {
        _carbon: 1,
        _hydrogen: 2,
        carbon: parser.tent(s)[0].wide,
        hydrogen: [hydrogen, parser[parser_keys[hydrogen]](s)[0].wide]
      }

      // left Carbon
      left_carbon = {
        _carbon: 1,
        carbon: parser[parser_keys[middle_ch2.carbon]](s)[0].wide
      };
      

      // left CH3
      hydrogen = parser[parser_keys[hydrogen]](s)[0].wide;
      hydrogen_group = [];

      for (let i = 1; i <= 3; i++) {
        hydrogen = parser[parser_keys[hydrogen]](s)[0].wide;
        hydrogen_group.push(hydrogen);
      }

      left_ch3.push({
        _carbon: 1,
        _hydrogen: 3,
        carbon: parser[parser_keys[left_carbon.carbon]](s)[0].wide,
        hydrogen: hydrogen_group 
      });

      hydrogen_group = [];

      for (let i = 1; i <= 3; i++) {
        hydrogen = parser[parser_keys[hydrogen]](s)[0].wide;
        hydrogen_group.push(hydrogen);
      }

      left_ch3.push({
        _carbon: 1,
        _hydrogen: 3,
        carbon: parser[parser_keys[left_ch3[0].carbon]](s)[0].wide,
        hydrogen: hydrogen_group
      });

      hydrogen_group = [];

      for (let i = 1; i <= 3; i++) {
        hydrogen = parser[parser_keys[hydrogen]](s)[0].wide;
        hydrogen_group.push(hydrogen);
      }

      left_ch3.push({
        _carbon: 1,
        _hydrogen: 3,
        carbon: parser[parser_keys[left_ch3[1].carbon]](s)[0].wide,
        hydrogen: hydrogen_group
      });
      // end left CH3

      // right Carbon
      right_carbon = {
        _carbon: 1,
        carbon: parser[parser_keys[middle_ch2.carbon]](s)[0].wide
      };
      // end of right Carbon

      // right CH3
      hydrogen = parser[parser_keys[middle_ch2.hydrogen[0]]](s)[0].wide;

      right_ch3.push({
        _hydrogen: 1,
        hydrogen
      });

      hydrogen_group = [];

      for (let i = 1; i <= 3; i++) {
        hydrogen = parser[parser_keys[hydrogen]](s)[0].wide;
        hydrogen_group.push(hydrogen);
      }

      right_ch3.push({
        _carbon: 1,
        _hydrogen: 3,
        carbon: parser[parser_keys[left_carbon.carbon]](s)[0].wide,
        hydrogen: hydrogen_group
      });

      hydrogen_group = [];

      for (let i = 1; i <= 3; i++) {
        hydrogen = parser[parser_keys[hydrogen]](s)[0].wide;
        hydrogen_group.push(hydrogen);
      }

      right_ch3.push({
        _carbon: 1,
        _hydrogen: 3,
        carbon: parser[parser_keys[right_ch3[1].carbon]](s)[0].wide,
        hydrogen: hydrogen_group
      });
      // end left CH3

      console.log(left_ch3);
      console.log(left_carbon);
      console.log(middle_ch2);
      console.log(right_carbon);
      console.log(right_ch3);
    });

  program.command('glucose')
    .argument('<string>', 'string to get the glucose from')
    .action((s) => {
      let glucose = {
        _carbon: 6,
        _hydrogen: 12,
        _oxygen: 6,
        carbon: [parser.tent(s)[0].wide],
        hydrogen: [parser.sunglasses(s)[0].wide],
        oxygen: [parser.trash_can(s)[0].wide]
      };

      for (let i = 1; i <= 5; i++) {
        glucose.carbon.push(parser[parser_keys[glucose.carbon[glucose.carbon.length - 1]]](s)[0].wide);
      }

      for (let i = 1; i <= 11; i++) {
        glucose.hydrogen.push(parser[parser_keys[glucose.hydrogen[glucose.hydrogen.length - 1]]](s)[0].wide);
      }

      for (let i = 1; i <= 5; i++) {
        glucose.oxygen.push(parser[parser_keys[glucose.oxygen[glucose.oxygen.length - 1]]](s)[0].wide);
      }

      console.log(glucose);
    });

  program.command('lithium-hydroxide')
    .argument('<string>', 'string to get the lithium hydroxide from')
    .action((s) => {
      let oxygen = {
        _oxygen: 1,
        oxygen: parser.trash_can(s)[0].wide
      };

      let lithium = {
        _lithium: 1,
        lithium: parser[parser_keys[oxygen.oxygen]](s)[0].wide
      };

      let hydrogen = {
        _hydrogen: 1,
        hydrogen: parser[parser_keys[oxygen.oxygen]](s)[0].wide
      };

      console.log([
        lithium,
        oxygen,
        hydrogen
      ]);
    });

  program.command('magnesia')
    .argument('<string>', 'string to get the magnesia from')
    .action((s) => {
      let magnesium = {
        _magnesium: 1,
        magnesium: parser.flashlight(s)[0].wide 
      };

      let oxygen = {
        _oxygen: 1,
        oxygen: parser.trash_can(s)[0].wide
      };

      console.log({
        magnesium,
        oxygen
      });
    });

  program.command('ozone')
    .argument('<string>', 'string to get the ozone from')
    .action((s) => {
      let ozone = {
        _oxygen: 3,
        oxygen: [parser.bullseye(s)[0].wide]
      };

      for (let j = 1; j <= 2; j++) {
        ozone.oxygen.push(parser[parser_keys[ozone.oxygen[ozone.oxygen.length - 1]]](s)[0].wide);
      }

      console.log(ozone);
    });

  program.command('red-phosporus')
    .argument('<string>', 'string to get the red phosporus of')
    .action((s) => {
      let phosporus = [];
      
      for (let i = 1; i <= 3; i++) {
        let a = {
          _phosporus: 4,
          phosporus: [parser.bullseye(s)[0].wide]
        };

        for (let j = 1; j <= 3; j++) {
          a.phosporus.push(parser[parser_keys[a.phosporus[a.phosporus.length - 1]]](s)[0].wide);
        }

        phosporus.push(a);
      }

      console.log(phosporus);
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

  program.command('silica')
    .argument('<string>', 'string to get the silica from')
    .action((s) => {
      let silicon = {
        _silicon: 1,
        silicon: parser.guitar(s)[0].wide
      };

      let oxygen = {
        _oxygen: 1,
        oxygen: parser[parser_keys[silicon.silicon]](s)[0].wide
      };

      console.log([
        oxygen,
        silicon,
        oxygen
      ]);
    });

  program.command('sucrose')
    .argument('<string>', 'string to get the sucrose from')
    .action((s) => {
      let oxygen = {
        _oxygen: 1,
        oxygen: parser.trash_can(s)[0].wide
      };

      let left_oxygen = {
        _oxygen: 1,
        oxygen: parser[parser_keys[oxygen.oxygen]](s)[0].wide
      };

      let hydrogen = parser.sunglasses(s)[0].wide;

      let left_ch2_oh = [
        {
          _carbon: 1,
          _hydrogen: 2,
          carbon: parser.tent(s)[0].wide,
          hydrogen: [hydrogen, parser[parser_keys[hydrogen]](s)[0].wide]
        },
        {
          _oxygen: 1,
          _hydrogen: 1,
          oxygen: parser[parser_keys[left_oxygen.oxygen]](s)[0].wide,
          hydrogen: parser[parser_keys[hydrogen]](s)[0].wide
        }
      ];

      console.log([
        left_ch2_oh[0],
        left_ch2_oh[1],
        left_oxygen,
        oxygen,
      ]);
    });

  program.command('sugar')
    .argument('<string>', 'string to get the sugar from')
    .action((s) => {
      let sugar = {
        _carbon: 12,
        _hydrogen: 22,
        _oxygen: 11,
        carbon: [parser.tent(s)[0].wide],
        hydrogen: [parser.sunglasses(s)[0].wide],
        oxygen: [parser.trash_can(s)[0].wide]
      };

      for (let i = 1; i <= 11; i++) {
        sugar.carbon.push(parser[parser_keys[sugar.carbon[sugar.carbon.length - 1]]](s)[0].wide);
      }

      for (let i = 1; i <= 21; i++) {
        sugar.hydrogen.push(parser[parser_keys[sugar.hydrogen[sugar.hydrogen.length - 1]]](s)[0].wide);
      }

      for (let i = 1; i <= 10; i++) {
        sugar.oxygen.push(parser[parser_keys[sugar.oxygen[sugar.oxygen.length - 1]]](s)[0].wide);
      }

      console.log(sugar);
    });

  program.command('sulfur-trioxide')
    .argument('<string>', 'string to get the sulfur trioxide from')
    .action((s) => {
      let sulfur = {
        _sulfur: 1,
        sulfur: parser.pepper_spray(s)[0].wide
      };

      let oxygen = {
        _oxygen: 1,
        oxygen: parser[parser_keys[sulfur.sulfur]](s)[0].wide
      };

      console.log([
        sulfur,
        oxygen,
        oxygen,
        oxygen
      ]);
    });


  program.command('water')
    .argument('<string>', 'string to get the water from')
    .action((s) => {
      let water = {
        _hydrogen: 2,
        _oxygen: 1,
        hydrogen: [parser.sunglasses(s)[0].wide],
        oxygen: [parser.trash_can(s)[0].wide]
      };

      for (let i = 1; i <= 1; i++) {
        water.hydrogen.push(parser[parser_keys[water.hydrogen[water.hydrogen.length - 1]]](s)[0].wide);
      }

      console.log(water);
    });

program.parse();
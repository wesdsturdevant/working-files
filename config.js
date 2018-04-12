/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
        {
            module: 'MMM-AlarmClock',
            position: "top_left",
            config: {
            alarms: [
            {time: "22:00", days: [1,2,3,4,5,6,7], title: "Alarm", message: "Don't Ignore Me!"},
            ]
            }    
        }, 
		{
			module: "MMM-MyCalendar",
			header: "Events",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-alt",
						url:"https://calendar.google.com/calendar/ical/wesdsturdevant%40gmail.com/private-91dc5f69eff1b585a248585d18fd35d6/basic.ics"
					}
				]
			}
		},
            /*{
  module: 'MMM-Assistant',
  position: 'bottom_left',
  config: {
    assistant: {
      auth: {
        keyFilePath: "secret.json", //When you want to change the location of this file, set this.
        savedTokensPath: "resources/tokens.js" //When you want to change the location of this file, set this.
      },
      audio: {
        encodingIn: "LINEAR16", //Ignore this. I think you don't need to change this.
        sampleRateOut: 16000 //Ignore this. I think you don't need to change this.
      }
    },
    snowboy: {
      models: [
        {
          file: "resources/smart_mirror.umdl",
          sensitivity: 0.5,
          hotwords : "MIRROR" //One of models should be "MIRROR"
        },
        {
          file: "resources/snowboy.umdl",
          sensitivity: 0.5,
          hotwords : "ASSISTANT" //One of models should be "ASSISTANT"
        }
      ]
    },
    record: {
      threshold: 0, //Ignore this. I think you don't need to change this.
      verbose:false, //true for checking recording status.
      recordProgram: 'arecord', //You can use 'rec', 'sox'. But I recommend use 'arecord'.
      silence: 2.0 //Ignore this. I think you don't need to change this.
    },
    stt: {
      auth: [{
        projectId: 'newagent-df131', //ProjectId from Google Console
        keyFilename: '559ac00032634460a1dcb3f803a96fad'
      }], //You can use multi accounts for saving money.
      request: {
        encoding: 'LINEAR16', //Ignore this. I think you don't need to change this.
        sampleRateHertz: 16000, //Ignore this. I think you don't need to change this.
        languageCode: 'en-US' //See https://cloud.google.com/speech/docs/languages
      },
    },
    speak: {
      useAlert: true, //If you want to show the text of speech, set this true. But It could be ignored by command of modules directly.
      language: 'en-US', //If you want to set the default language of speech of command result, set this.
    },
    alias: [
      {
        "help :command" : ["teach me :command", "what is :command"]
      }
    ] // You can use aliases for difficult pronunciation or easy using.
  }
},*/
        
        
        {
		module: 'MMM-iFrame',
		position: 'bottom_center',	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
				url: [/*"https://www.youtube.com/embed/?listType=playlist&list=PL2MueO_8wNjUSmhbQDXSYQR8479NWIPDk&autoplay=1&enablejsapi=1&loop=1&color=white",*/"https://www.youtube.com/embed/?listType=playlist&list=PLvCvQKDJNRNY8rTuYvAEnereF4AGQf9hs&autoplay=1&enablejsapi=1&loop=1&color=white"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
				//updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
				width: "720px", // Optional. Default: 100%
				height: "480px" //Optional. Default: 100px 
			}
	    },
        {
				module: "random_quotes",
				position: "bottom_bar",
				config: {
						// The config property is optional
						// Without a config, a random quote is shown,
						// selected from all of the categories available.
				}
        },
       /* {
			module: "compliments",
			position: "top_third"
		},*/
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Bethany US",
				locationID: "5054079",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "d39c0c6634d3fe1c698aebc468364c27"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Bethany US",
				locationID: "5054079",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "d39c0c6634d3fe1c698aebc468364c27"
			}
		},
        {
    module: "MMM-GoogleFit",
    position: "top_right",
    config: {        
        stepCountLabel: "true",
        stepGoal: "3000"
            }
        },
  /*   {
    module: 'MMM-Assistant',
    disabled: false,
    position: 'bottom_right',
    config: {
        assistant: {
            auth: {
                keyFilePath:     "assets/google-client-secret.json",  // REQUIRED (Google Assistant API) -- OAuth2 x509 cert
                savedTokensPath: "assets/google-access-tokens.json"   // REQUIRED (Google Assistant API) -- accesss_token & refresh_token
            },
            conversation: {
                lang: 'en-US',
                audio: {
                    encodingIn: "LINEAR16",             // Default. No need to change.
                    sampleRateOut: 16000                // Default. No need to change.
                }
            },
        },
        snowboy: {
            models: [
                {
                    file: "resources/smart_mirror.umdl",// This file define your MM wake word. (See doc notes.)
                    sensitivity: 0.5,
                    hotwords : "MIRROR"                 // Default model: "MIRROR". (This is not the wake word!)
                },
                {
                    file: "resources/snowboy.umdl",     // This file define your GA wake word. (See doc notes.)
                    sensitivity: 0.5,
                    hotwords : "ASSISTANT"              // Default model: "ASSISTANT". (This is not the wake word!)
                }
            ]
        },
        record: {
            threshold: 0,                 // Default. No need to change.
            verbose:false,                // Deafult: true  -- for checking recording status.
            recordProgram: 'rec',         // You can use 'arecord', 'sox', but we recommend 'rec'
            silence: 2.0                  // Default. No need to change.
        },
        stt: {
            auth: [{                                             // You can use multiple accounts to save money
                projectId:   'YOUR_PROJECT_ID',                  // REQUIRED (Google Voice API) -- project_id
                keyFilename: './assets/google-private-key.json'  // REQUIRED (Google Voice API) -- service_account / private_key
            }],
            request: {
                encoding: 'LINEAR16',     // Default. No need to change.
                sampleRateHertz: 16000,   // Default. No need to change.
                languageCode: 'en-US'     // [en-US]  To set the default GA speech request language.
                                          // (See: https://cloud.google.com/speech/docs/languages)
            },
        },
        speak: {
            useAlert: true,               // [true]  Enable this to show the understood text of your speech
            language: 'en-US',            // [en-US] To set the default GA speech reply language.
        },
        alias: [{                         // You can use aliases for difficult pronunciation or easy using.
                "help :command" : ["teach me :command", "what is :command"]
        }]
    }
},
        {
			module: 'voicecontrol',
			position: 'bottom_right',
			config: {
				models: [
					{
						keyword: "playMusic",   // keyword 
						description: "Say 'Play Music' to start playing",
						file: "playMusic.pmdl", // trained model file name
						message: "PLAY_MUSIC"   // notification message that's broadcast in the MagicMirror app
					},
					{
						keyword: "stopMusic",
						description: "Say 'Stop Music' to stop playing",
						file: "stopMusic.pmdl",
						message: "STOP_MUSIC"
					},
				]
			}
		}*/
        /*{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Bethany News",
						url: "https://news.google.com/news/rss/local/section/geo/Bethany,%20MO,%20United%20States/Bethany,%20Missouri?ned=us&hl=en&gl=US"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		}, */
		/*{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},*/
        
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

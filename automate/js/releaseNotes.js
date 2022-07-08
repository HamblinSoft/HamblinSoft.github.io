// releaseNotes.js

var releases = [
    {
        version: '2.6',
        features: [
            {
                name: 'Battery Widget',
                description:
                    'Added a new battery widget (iOS 14 required).'
            },
            {
                name: 'iOS 14 Support',
                description:
                    'Improved support for iOS 14.'
            }
        ]
    },
    {
        version: '2.5.2',
        features: [
            {
                name: 'Siri Shortcuts',
                description:
                    'Fixed an issue that caused Siri Shortcuts to timeout.'
            }
        ]
    },
    {
        version: '2.5.1',
        features: [
            {
                name: 'Model Y',
                description:
                    'Added support for Model Y'
            }
        ]
    },
    {
        version: '2.5',
        features: [
            {
                name: '',
                description:
                    'On the charge screen, a "Open" button is displayed when the vehicle has completed charging and unlocks the charge port when tapped.'
            },
            { name: '', description: 'Support for the new Shortcuts app' }
        ]
    },
    {
        version: '2.4.2',
        features: [{ name: '', description: 'Added support for iOS 13' }]
    },
    { version: '2.4.1', features: [{ name: '', description: 'Bug fixes' }] },
    {
        version: '2.4',
        features: [
            {
                name: '',
                description:
                    'Battery screen shows the estimated range when fully charged.'
            }
        ]
    },
    {
        version: '2.3.2',
        features: [
            {
                name: '',
                description:
                    'Fixed an issue where front trunk and rear trunk commands were switched when using Siri to open a trunk using Apple Watch.'
            }
        ]
    },
    {
        version: '2.3.1',
        features: [
            {
                name: '',
                description:
                    'Fixed an issue where watch app would not be available on Series 0 (1 generation) Apple Watches.'
            }
        ]
    },
    {
        version: '2.3',
        features: [
            {
                name: '',
                description:
                    'Added Sentry Mode controls to watch app and iMessage app. Sentry Mode can also be activated through Siri Shortcuts.'
            },
            {
                name: '',
                description:
                    "Improvements to Siri's responses when using Siri Shortcuts."
            }
        ]
    },
    {
        version: '2.2.2',
        features: [
            {
                name: '',
                description:
                    'Fixed an issue with Supercharger list not loading.'
            }
        ]
    },
    {
        version: '2.2.1',
        features: [
            {
                name: '',
                description:
                    'Fixed an issue where Siri commands sent through the watch app would stop working.'
            },
            {
                name: '',
                description:
                    'Fixed an issue where status bar banner would get stuck.'
            }
        ]
    },
    {
        version: '2.2',
        features: [
            { name: '', description: 'New status bar banner' },
            {
                name: '',
                description:
                    'Choose whether to see battery percent or range in mi/km on the Dashboard'
            },
            {
                name: '',
                description:
                    'Improved reliability when sending commands through Siri Shortcut'
            }
        ]
    },
    {
        version: '2.1.1',
        features: [
            {
                name: '',
                description: 'Potential fix for crash issue on Dashboard.'
            }
        ]
    },
    {
        version: '2.1',
        features: [
            { name: '', description: 'Added seat heaters to climate controls.' }
        ]
    },
    {
        version: '2.0',
        features: [
            {
                name: '',
                description: 'We have updated a lot of our user interfaces.'
            },
            {
                name: '',
                description:
                    'Heads-up-display featuring a full screen speedometer.'
            },
            {
                name: '',
                description:
                    'Control your in-car music controls through the new widget. Add it to your notification center today view.'
            },
            {
                name: '',
                description:
                    'You can now start or cancel Software Updates for your car.'
            },
            { name: '', description: 'More details battery information.' },
            {
                name: '',
                description:
                    'Send navigation requests to your car using the share sheet actions in other apps including Contacts, Maps, and more.'
            }
        ]
    },
    {
        version: '1.9.2',
        features: [{ name: '', description: 'Added support for 24-hour time.' }]
    },
    {
        version: '1.9.1',
        features: [{ name: '', description: 'Stability improvements' }]
    },
    {
        version: '1.9',
        features: [
            {
                name: '',
                description:
                    'Siri Shortcuts have now been updated to support the Shortcuts app and can now execute in the background!'
            },
            {
                name: '',
                description:
                    'Watch app background tasks have been improved to connect with your car and update complications more reliably.'
            }
        ]
    },
    {
        version: '1.8',
        features: [
            {
                name: '',
                description:
                    'Updated climate controls on Dashboard to only show driver temperature when driver and passenger temperatures are the same'
            },
            {
                name: '',
                description:
                    'Dashboard now displays battery level percentage next to the battery icon'
            },
            { name: '', description: 'Updated the control list layout' }
        ]
    },
    {
        version: '1.7.2',
        features: [
            {
                name: '',
                description: 'Fixed a crash on iOS 11 and watchOS 4 devices'
            }
        ]
    },
    {
        version: '1.7.1',
        features: [
            { name: '', description: 'Improved watch complication syncing' }
        ]
    },
    {
        version: '1.7',
        features: [
            {
                name: '',
                description:
                    'You can now close the charge port door on your car through AutoMate!'
            },
            {
                name: '',
                description:
                    'Improvements to the Watch App user interface on Series 4 watches.'
            },
            {
                name: '',
                description:
                    'Fixed an issue causing the watch app to stop running in the background.'
            }
        ]
    },
    {
        version: '1.6',
        features: [
            {
                name: '',
                description:
                    "AutoMate has been updated to support the all Apple's new devices and latest operating systems!"
            },
            {
                name: '',
                description:
                    'AutoMate now features amazing new complications for the new Infographic watch faces on Apple Watch Series 4! View up to 3 different complications displaying tons of information about your car!'
            },
            {
                name: '',
                description:
                    'Create customized voice phrases to send commands to your car using Siri!'
            },
            {
                name: '',
                description:
                    'Relevant vehicle actions and information will be displayed on the Siri watch face!'
            },
            {
                name: '',
                description:
                    'Minor UI update. Faster response time when sending commands to your car through the watch app.'
            },
            {
                name: '',
                description:
                    'Added additional energy saving options for Apple Watch App.'
            }
        ]
    },
    {
        version: '1.5',
        features: [
            {
                name: '',
                description:
                    'Model 3 owners will now see an image of their car in the app'
            },
            {
                name: '',
                description:
                    'Reduce your car battery drain by specifying a period of time in which your Apple Watch is not allowed to wake your car.'
            },
            {
                name: '',
                description:
                    'Have an aftermarket paint job or wrap? You can now customize the color of your in-app vehicle image.'
            },
            {
                name: '',
                description:
                    'Watch owners will now receive a notification on their watch when AutoMate detects that the vehicle is improperly connected to the charger.'
            },
            {
                name: '',
                description:
                    'Fixes an issue where app could continue to request data from your vehicle while in the background.'
            }
        ]
    },
    {
        version: '1.4',
        features: [
            {
                name: '',
                description:
                    'New UI for Speed Limit Mode. Speed Limit is only accessible when the vehicle is parked.'
            },
            {
                name: '',
                description:
                    'The Modular Large Charge complication has been updated to show when your vehicle charging is scheduled along with the scheduled start date and charge limit percentage.'
            },
            {
                name: '',
                description:
                    'The iMessage app now displays current lock status of your car.'
            },
            {
                name: '',
                description:
                    'Fixed an issue where odometer value would display in miles instead of kilometers.'
            },
            {
                name: '',
                description:
                    'Fixed an issue where trim badging would be displayed in lowercase.'
            }
        ]
    },
    {
        version: '1.3.2',
        features: [
            {
                name: '',
                description:
                    'Fixed an issue in which Speed Limit controls would be accessible to vehicles that do not support Speed Limit Mode.'
            }
        ]
    },
    {
        version: '1.3.1',
        features: [
            {
                name: '',
                description:
                    'The Apple Watch app controls list now has an option to open the rear or front trunk. If you own a Model S or X, this will also close the rear trunk.'
            },
            {
                name: '',
                description:
                    'Fixed a few issues with localizations not displaying correctly.'
            }
        ]
    },
    {
        version: '1.3',
        features: [
            {
                name: '',
                description:
                    'Introducing the new iMessage App! Quickly view some information about your vehicle and send commands.'
            },
            {
                name: '',
                description:
                    'AutoMate is not multilingual! Support for Chinese (Simplified), Dutch, English, French, Germain, Italian, Japanese, and Korean in the iPhone and iPad apps. Support for Apple Watch is coming soon.'
            },
            {
                name: '',
                description:
                    'Fixed issue where open trunk/frunk controls stopped working.'
            }
        ]
    },
    {
        version: '1.2',
        features: [
            {
                name: '',
                description:
                    'You can now limit vehicle speed with Speed Limit controls. Maximum vehicle speed can be set between 50-90 mph (80-145 kph). Access the Speed Limit controls by swiping the control panel at the bottom of the Dashboard. NOTE: Requires vehicle software version 2018.24 or above.'
            },
            {
                name: '',
                description:
                    "Enter your PIN using Face ID and Touch ID! When you set your PIN, it is encrypted and securely stored in your device Keychain. Using Face ID and Touch ID, your PIN will be automatically filled in so you don't have to remember it."
            },
            {
                name: '',
                description:
                    'Updated Valet Mode UI and flow to be similar to Speed Limit Mode. Like Speed Limit Mode, Valet Mode will now remember your PIN and allow you to autofill when using Face ID/Touch ID'
            },
            {
                name: '',
                description:
                    'Added lines between trunk buttons and charge port buttons and the vehicle image on the Dashboard.'
            }
        ]
    },
    {
        version: '1.1.3',
        features: [
            {
                name: '',
                description:
                    'Added referral code link for free Supercharging when purchasing a Model S or Model X.'
            },
            {
                name: '',
                description:
                    'Fixed an issue where iCloud synchronization of Force Touch Shortcuts would sometimes timeout and fail. Fixed an issue Force Touch Shortcut would fail to send command if the app was not already running.'
            },
            {
                name: '',
                description:
                    'Improvements to the Charge Limit control on the watch app.'
            },
            {
                name: '',
                description:
                    'Increased the connection-idle duration so the connection banner appears less frequently.'
            }
        ]
    },
    {
        version: '1.1.2',
        features: [
            {
                name: '',
                description:
                    'Fixed an issue where metric units would not be displayed. Units displayed match the unit/formatting setting in your vehicle.'
            },
            {
                name: '',
                description:
                    'Fixed an issue where the remote start button would sometimes be disabled.'
            }
        ]
    },
    {
        version: '1.1',
        features: [
            {
                name: '',
                description:
                    'Added Lock Status Complication for several watch faces.'
            },
            {
                name: '',
                description:
                    'Customize up to 4 force touch shortcuts! These changes are saved and synchronized through your iCloud account. Activate Force Touch Shortcuts by pressing on the AutoMate icon from your Home screen. This requires a device with Force Touch.'
            },
            {
                name: '',
                description:
                    'Added buttons to quickly set temperature to maximum (HI) or minimum (LO) values.'
            },
            {
                name: '',
                description:
                    'Added buttons to quickly set charge limit to max or standard charge. Added +/- buttons to adjust charge limit more precisely.'
            },
            {
                name: '',
                description:
                    'The controls at the bottom of the Dashboard screen now have a colored background to make it more apparent that this area is swipeable.'
            },
            {
                name: '',
                description:
                    'Improved UI of subscription purchasing screen to include feature list and screenshots. Verbiage updated to more clearly indicate that a subscription is required.'
            },
            {
                name: '',
                description:
                    'We will be periodically offering short-duration free trials. When you purchase a subscription through the app you will be alerted whether a free trial is available along with duration of the trial. The free trial will take effect immediately when you purchase the subscription. You will not be charged for the subscription until the free trial expires. To not be charged for the subscription, you must cancel the subscription before the trial period is over.'
            },
            {
                name: '',
                description:
                    'Bug reports now include what type of phone you have and what software version you are running to help us troubleshoot your issue. Your email address will also be included in the bug report. This is so we can reach out to you individual to acquire additional information about your issue if required. Your email address will not be shared with anyone under any circumstances.'
            },
            {
                name: '',
                description:
                    'New Develop screen has been added where users can view open source software used by AutoMate. You can also request to become a beta tester.'
            },
            { name: '', description: 'Improved iPad support.' },
            {
                name: '',
                description:
                    'The Lock/Unlock, Start/Stop Charge, and Start/Stop HVAC commands have each been combined into a single command. The command displayed is based on the status of the vehicle. If the car is locked, you will see the Unlock command. Fixed issue where control names would appear truncated.'
            },
            {
                name: '',
                description:
                    'Fixed issue where Siri on Apple Watch would stop working.'
            }
        ]
    },
    {
        version: '1.0.3',
        features: [
            {
                name: '',
                description:
                    'Fixed an issue where some values would not be formatted correctly.'
            }
        ]
    },
    {
        version: '1.0.2',
        features: [
            {
                name: '',
                description:
                    'Owners can now view raw vehicle data and export as .csv'
            },
            { name: '', description: 'AutoMate now supports Spanish language' },
            {
                name: '',
                description:
                    'Watch Complications are now saved and synchronized through iCloud.'
            },
            {
                name: '',
                description:
                    "Fixed issue with watch app which resulted in the watch's battery to be drained quicker than normal."
            },
            {
                name: '',
                description:
                    'Fixed an issue where Watch App Controls list (4th screen) would display the text "Label" instead of the control/command name.'
            }
        ]
    },
    { version: '1.0.1', features: [] },
    { version: '1.0', features: [] }
];

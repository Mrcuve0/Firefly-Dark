var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "10",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "561",
                    "ToolBoxButtonY": "28",
                    "iconSize": "2",
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.image/General": {
                    // "Image": "file:///home/sem/Pictures/Wallpapers/Aritim-Light_DEV/05.jpg",
                    "SlidePaths": "/usr/share/wallpapers"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "561",
                    "filterMimeTypes": "\\0",
                    "iconSize": "2",
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.image/General": {
                    // "Image": "file:///home/sem/Pictures/Wallpapers/Aritim-Light_DEV/05.jpg",
                    "SlidePaths": "/home/sem/.local/share/wallpapers,/usr/share/wallpapers"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "1023",
                    "DialogWidth": "1878"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "561",
                    "iconSize": "2",
                    "positions": "10,19,desktop:/Your Stuff Here,2,2,desktop:/trash.desktop,9,18,desktop:/Home.desktop,2,1",
                    "previews": "false",
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.image/General": {
                    // "Image": "/home/sem/Pictures/Firefly-Dark/Official/Chrysalis_desktop_butterfly_dark_1920x1080.png",
                    // "SlidePaths": "/home/sem/.local/share/wallpapers,/usr/share/wallpapers"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "9"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "actionScrollMinimize": "false",
                            "containmentType": "Plasma",
                            "filterActivityInfo": "false",
                            "maximumLength": "850",
                            "placeHolder": "Plasma Desktop",
                            "showIcon": "false",
                            "showTooltip": "false",
                            "spacing": "0"
                        }
                    },
                    "plugin": "org.kde.windowtitle"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "containmentType": "Plasma",
                            "fillWidth": "true"
                        }
                    },
                    "plugin": "org.kde.windowappmenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "15",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "33"
                        },
                        "/Configuration/Configuration/General": {
                            "history": "#ffdfda,#e1f7ff"
                        },
                        "/Configuration/General": {
                            "history": "#415d73,#213443,#ffdfda\\,#e1f7ff"
                        }
                    },
                    "plugin": "org.kde.plasma.colorpicker"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "18"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "18"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "4"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.netspeedWidget"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "4"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Appearance": {
                            "fontColor": "#000000",
                            "icon": "de.haeckerfelix.gradio-symbolic"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.advancedradio"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "4"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "10"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "1023",
                            "DialogWidth": "1878"
                        },
                        "/Configuration/General": {
                            "clockLine2HeightRatio": "0.35",
                            "clockMouseWheelDown": "qdbus-qt5 org.kde.kglobalaccel /component/kmix invokeShortcut \"decrease_volume\"",
                            "clockMouseWheelUp": "qdbus-qt5 org.kde.kglobalaccel /component/kmix invokeShortcut \"increase_volume\"",
                            "clockShowLine2": "true",
                            "clockTimeFormat1": "hh:mm:ss",
                            "clockTimeFormat2": "yyyy-MM-dd",
                            "v71Migration": "true",
                            "v72Migration": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.eventcalendar"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "18"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "8"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "4"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.nightcolorcontrol"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "show_lockScreen": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.lock_logout"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "4"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "83",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 1.5555555555555556,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "favoritesPortedToKAstats": "true",
                            "systemApplications": "systemsettings.desktop,org.kde.kinfocenter.desktop",
                            "systemFavorites": "suspend\\,hibernate\\,reboot\\,shutdown"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "launchers": "applications:org.kde.konsole.desktop,applications:org.kde.dolphin.desktop,applications:telegram-desktop.desktop,preferred://browser,applications:org.kde.kmail2.desktop,applications:clementine.desktop,applications:code.desktop,applications:YaST2-org.opensuse.yast.SWSingle.desktop,applications:org.kde.ksysguard.desktop,applications:org.keepassxc.KeePassXC.desktop,applications:systemsettings.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.trash"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "3",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "1080",
                    "DialogWidth": "168"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 2.3333333333333335,
            "hiding": "normal",
            "location": "left",
            "maximumLength": 41.27777777777778,
            "minimumLength": 38.94444444444444,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
    ;

plasma.loadSerializedLayout(layout);

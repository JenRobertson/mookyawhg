var locations = [
    {
        name: 'CASTLE',
        x: 1265,
        y: 262,
        activities: [
            {
                label: "Socialise",
                outcomes: [
                    {
                        requirements: "game.stats.wealth < 1",
                        text: [
                            "You ask the baker if you can make a crumble.", 
                            "You don\'t have enough money to buy any flower or apples."
                        ],
                        result: {
                            gain: {},
                            lose: {
                                finesse: 1
                            }
                        }
                    },
                    {
                        requirements: "game.stats.wealth > 0 && game.stats.baking < 2",
                        text: [
                            "You ask the baker if you can make a crumble. ", 
                        "You make a massive mess all over the kitchen and the crumble looks a bit burned on top, but you learned a lot!"
                        ],
                        result: {
                            gain: {
                                baking: 3,
                            },
                            lose: {
                                wealth: 1
                            }
                        }
                    },
                    {
                        requirements: "game.stats.baking > 0 && game.stats.baking > 2",
                        text: [
                            {
                                text: "You ask the baker if you can make a crumble. "
                            }, 
                            {
                                text:"The baker is wowed by your skills and amazing appley smells waft from the oven.",
                            },
                            {
                                text:"He offers to buy the crumble off you.",
                            },
                        ],
                        result: {
                            gain: {
                                baking: 2,
                                finesse: 1,
                                charm: 1,
                                wealth: 2
                            },
                            lose: {
                                baking: 1 //remove
                            }
                        }
                    },
                ]

            },
            {
                label: "Water flowers",
                outcomes: [
                    {
                        requirements: "game.stats.wealth < 1",
                        text: [
                            "You ask the baker if you can make a crumble.", 
                            "You don\'t have enough money to buy any flower or apples."
                        ],
                        result: {
                            gain: {},
                            lose: {
                                finesse: 1
                            }
                        }
                    },
                    {
                        requirements: "game.stats.wealth > 0 && game.stats.baking < 2",
                        text: [
                            "You ask the baker if you can make a crumble. ", 
                        "You make a massive mess all over the kitchen and the crumble looks a bit burned on top, but you learned a lot!"
                        ],
                        result: {
                            gain: {
                                baking: 3,
                            },
                            lose: {
                                wealth: 1
                            }
                        }
                    },
                    {
                        requirements: "game.stats.baking > 0 && game.stats.baking > 2",
                        text: [
                            {
                                text: "You ask the baker if you can make a crumble. "
                            }, 
                            {
                                text:"The baker is wowed by your skills and amazing appley smells waft from the oven.",
                            },
                            {
                                text:"He offers to buy the crumble off you.",
                            },
                        ],
                        result: {
                            gain: {
                                baking: 2,
                                finesse: 1,
                                charm: 1,
                                wealth: 2
                            },
                            lose: {
                                baking: 1 //remove
                            }
                        }
                    },
                ]
            }
        ]
    },
    {
        name: 'BAKERY',
        x: 748,
        y: 513,
        activities: [
            {
                label: "Study recipes",
                outcomes: [
                    {
                        requirements: "game.stats.wealth < 1",
                        text: [
                            "You ask the baker if you can make a crumble.", 
                            "You don\'t have enough money to buy any flower or apples."
                        ],
                        result: {
                            gain: {},
                            lose: {
                                finesse: 1
                            }
                        }
                    },
                    {
                        requirements: "game.stats.wealth > 0 && game.stats.baking < 2",
                        text: [
                            "You ask the baker if you can make a crumble. ", 
                        "You make a massive mess all over the kitchen and the crumble looks a bit burned on top, but you learned a lot!"
                        ],
                        result: {
                            gain: {
                                baking: 3,
                            },
                            lose: {
                                wealth: 1
                            }
                        }
                    },
                    {
                        requirements: "game.stats.baking > 0 && game.stats.baking > 2",
                        text: [
                            {
                                text: "You ask the baker if you can make a crumble. "
                            }, 
                            {
                                text:"The baker is wowed by your skills and amazing appley smells waft from the oven.",
                            },
                            {
                                text:"He offers to buy the crumble off you.",
                            },
                        ],
                        result: {
                            gain: {
                                baking: 2,
                                finesse: 1,
                                charm: 1,
                                wealth: 2
                            },
                            lose: {
                                baking: 1 //remove
                            }
                        }
                    },
                ]
            },
            {
                label: "Bake crumble",
                outcomes: [
                    {
                        requirements: "game.stats.wealth < 1",
                        text: [
                            "You ask the baker if you can make a crumble.", 
                            "You don\'t have enough money to buy any flower or apples."
                        ],
                        result: {
                            gain: {},
                            lose: {
                                finesse: 1
                            }
                        }
                    },
                    {
                        requirements: "game.stats.wealth > 0 && game.stats.baking < 2",
                        text: [
                            "You ask the baker if you can make a crumble. ", 
                        "You make a massive mess all over the kitchen and the crumble looks a bit burned on top, but you learned a lot!"
                        ],
                        result: {
                            gain: {
                                baking: 3,
                            },
                            lose: {
                                wealth: 1
                            }
                        }
                    },
                    {
                        requirements: "game.stats.baking > 0 && game.stats.baking > 2",
                        text: [
                            {
                                text: "You ask the baker if you can make a crumble. "
                            }, 
                            {
                                text:"The baker is wowed by your skills and amazing appley smells waft from the oven.",
                            },
                            {
                                text:"He offers to buy the crumble off you.",
                            },
                        ],
                        result: {
                            gain: {
                                baking: 2,
                                finesse: 1,
                                charm: 1,
                                wealth: 2
                            },
                            lose: {
                                baking: 1 //remove
                            }
                        }
                    },
                ]
            }
        ]
    },
    {
        name: 'ORCHARD',
        x: 1200,
        y: 640,
        activities: [
            {
                label: "Study recipes",
                outcomes: [
                    {
                        requirements: "game.stats.wealth < 1",
                        text: [
                            "You ask the baker if you can make a crumble.", 
                            "You don\'t have enough money to buy any flower or apples."
                        ],
                        result: {
                            gain: {},
                            lose: {
                                finesse: 1
                            }
                        }
                    },
                    {
                        requirements: "game.stats.wealth > 0 && game.stats.baking < 2",
                        text: [
                            "You ask the baker if you can make a crumble. ", 
                        "You make a massive mess all over the kitchen and the crumble looks a bit burned on top, but you learned a lot!"
                        ],
                        result: {
                            gain: {
                                baking: 3,
                            },
                            lose: {
                                wealth: 1
                            }
                        }
                    },
                    {
                        requirements: "game.stats.baking > 0 && game.stats.baking > 2",
                        text: [
                            {
                                text: "You ask the baker if you can make a crumble. "
                            }, 
                            {
                                text:"The baker is wowed by your skills and amazing appley smells waft from the oven.",
                            },
                            {
                                text:"He offers to buy the crumble off you.",
                            },
                        ],
                        result: {
                            gain: {
                                baking: 2,
                                finesse: 1,
                                charm: 1,
                                wealth: 2
                            },
                            lose: {
                                baking: 1 //remove
                            }
                        }
                    },
                ]
            },
            {
                label: "Bake crumble",
                outcomes: [
                    {
                        requirements: "game.stats.wealth < 1",
                        text: [
                            "You ask the baker if you can make a crumble.", 
                            "You don\'t have enough money to buy any flower or apples."
                        ],
                        result: {
                            gain: {},
                            lose: {
                                finesse: 1
                            }
                        }
                    },
                    {
                        requirements: "game.stats.wealth > 0 && game.stats.baking < 2",
                        text: [
                            "You ask the baker if you can make a crumble. ", 
                        "You make a massive mess all over the kitchen and the crumble looks a bit burned on top, but you learned a lot!"
                        ],
                        result: {
                            gain: {
                                baking: 3,
                            },
                            lose: {
                                wealth: 1
                            }
                        }
                    },
                    {
                        requirements: "game.stats.baking > 0 && game.stats.baking > 2",
                        text: [
                            {
                                text: "You ask the baker if you can make a crumble. "
                            }, 
                            {
                                text:"The baker is wowed by your skills and amazing appley smells waft from the oven.",
                            },
                            {
                                text:"He offers to buy the crumble off you.",
                            },
                        ],
                        result: {
                            gain: {
                                baking: 2,
                                finesse: 1,
                                charm: 1,
                                wealth: 2
                            },
                            lose: {
                                baking: 1 //remove
                            }
                        }
                    },
                ]
            }
        ]
    },
    {
        name: 'MEADOWS',
        x: 929,
        y: 221,
        activities: [
            {
                label: "Study recipes",
                outcomes: [
                    {
                        requirements: "game.stats.wealth < 1",
                        text: [
                            "You ask the baker if you can make a crumble.", 
                            "You don\'t have enough money to buy any flower or apples."
                        ],
                        result: {
                            gain: {},
                            lose: {
                                finesse: 1
                            }
                        }
                    },
                    {
                        requirements: "game.stats.wealth > 0 && game.stats.baking < 2",
                        text: [
                            "You ask the baker if you can make a crumble. ", 
                        "You make a massive mess all over the kitchen and the crumble looks a bit burned on top, but you learned a lot!"
                        ],
                        result: {
                            gain: {
                                baking: 3,
                            },
                            lose: {
                                wealth: 1
                            }
                        }
                    },
                    {
                        requirements: "game.stats.baking > 0 && game.stats.baking > 2",
                        text: [
                            {
                                text: "You ask the baker if you can make a crumble. "
                            }, 
                            {
                                text:"The baker is wowed by your skills and amazing appley smells waft from the oven.",
                            },
                            {
                                text:"He offers to buy the crumble off you.",
                            },
                        ],
                        result: {
                            gain: {
                                baking: 2,
                                finesse: 1,
                                charm: 1,
                                wealth: 2
                            },
                            lose: {
                                baking: 1 //remove
                            }
                        }
                    },
                ]
                
            },
            {
                label: "Bake crumble",
                outcomes: [
                    {
                        requirements: "game.stats.wealth < 1",
                        text: [
                            "You ask the baker if you can make a crumble.", 
                            "You don\'t have enough money to buy any flower or apples."
                        ],
                        result: {
                            gain: {},
                            lose: {
                                finesse: 1
                            }
                        }
                    },
                    {
                        requirements: "game.stats.wealth > 0 && game.stats.baking < 2",
                        text: [
                            "You ask the baker if you can make a crumble. ", 
                        "You make a massive mess all over the kitchen and the crumble looks a bit burned on top, but you learned a lot!"
                        ],
                        result: {
                            gain: {
                                baking: 3,
                            },
                            lose: {
                                wealth: 1
                            }
                        }
                    },
                    {
                        requirements: "game.stats.baking > 0 && game.stats.baking > 2",
                        text: [
                            {
                                text: "You ask the baker if you can make a crumble. "
                            }, 
                            {
                                text:"The baker is wowed by your skills and amazing appley smells waft from the oven.",
                            },
                            {
                                text:"He offers to buy the crumble off you.",
                            },
                        ],
                        result: {
                            gain: {
                                baking: 2,
                                finesse: 1,
                                charm: 1,
                                wealth: 2
                            },
                            lose: {
                                baking: 1 //remove
                            }
                        }
                    },
                ]
            }
        ]
    }
];

var game = {
    day: 1,
    screen: "town",
    location: locations[0],
    activity: null,
    outcome: null,
    outcomeText: null,
    stats: {
        wealth: {
            label: 'Wealth',
            value: 0,
        },
        baking: {
            label: 'Baking',
            value: 2,
        },
        farming: {
            label: 'Farming',
            value: 1,
        },
        finesse: {
            label: 'Finesse',
            value: 1,
        },
        charm: {
            label: 'Charm',
            value: 2,
        }
    }
}


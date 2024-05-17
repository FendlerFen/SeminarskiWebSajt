document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const cardInfo = document.getElementById('card-info');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function(e) { 
            const cardName = card.getAttribute('data-card');
            showCardInfo(card, cardName,e.clientX,e.clientY);
            e.clientX;
            console.log(e.clientX);
            e.clientY;
        });

        card.addEventListener('mouseleave', () => {
            hideCardInfo();
        });
    });

    function showCardInfo(card, cardName, clientX, clientY) {
        const cardData = getCardData(cardName);
        cardInfo.innerHTML = `
            <h2>${cardData.name}</h2>
            <h4>${cardData.info}</h4>
            <h4>${cardData.mat}</h4>
            <p>${cardData.description}</p>
            <h4>${cardData.stats}</h4>
        `;
        const cardRect = card.getBoundingClientRect();
        cardInfo.style.top = `${clientY - cardInfo.offsetHeight + 20}px`;
        cardInfo.style.left = `${cardRect.left + (cardRect.width / 2) - (cardInfo.offsetWidth / 2)}px`;
        cardInfo.classList.add('show');
    }

    function hideCardInfo() {
        cardInfo.classList.remove('show');
    }

    function getCardData(cardName) {
        const cardDatabase = {
            'Maxx C': {
                name: 'Maxx C',
                info: 'Level:2 Earth Insect/Effect',
                mat: '',
                description: 'During either players turn: You can send this card from your hand to the Graveyard; this turn, each time your opponent Special Summons a monster(s), immediately draw 1 card. You can only use 1 "Maxx "C"" per turn.',
                stats: 'ATK/500 DEF/200'
            },
            'Devh': {
                name: 'Deviner of the Herald',
                info: 'Level:2 Light Fairy/Tuner/Effect',
                mat: '',
                description: 'If this card is Normal or Special Summoned: You can send 1 Fairy monster from your Deck or Extra Deck to the GY, and if you do, increase this cards Level by that monsters Level, until the end of this turn. If this card is Tributed: You can Special Summon 1 Level 2 or lower Fairy monster from your hand or Deck, except "Diviner of the Herald". You can only use each effect of "Diviner of the Herald" once per turn.',
                stats: 'ATK/500 DEF/300'
            },
            'AshB': {
                name: 'Ash Blossom & Joyous Spring',
                info: 'Level:3 Fire Zombie/Tuner/Effect',
                mat: '',
                description: 'When a card or effect is activated that includes any of these effects (Quick Effect): You can discard this card; negate that effect. ●Add a card from the Deck to the hand. ●Special Summon from the Deck. ●Send a card from the Deck to the GY. You can only use this effect of "Ash Blossom & Joyous Spring" once per turn.',
                stats: 'ATK/0 DEF/1800'
            },
            'LGeek': {
                name: 'Libromancer Geek Boy',
                info: 'Level:3 Wind Psychic/Effect',
                mat: '',
                description: 'You can reveal 1 Ritual Monster in your hand: Special Summon this card from your hand. If this card is Special Summoned: You can add 1 "Libromancer" Spell from your Deck to your hand. You can only use each effect of "Libromancer Geek Boy" once per turn.',
                stats: 'ATK/800 DEF/800'
            },
            'LFire': {
                name: 'Libromancer Fire',
                info: 'Level:4 Fire Cyberse/Effect',
                mat: '',
                description: 'You can reveal 1 Ritual Monster in your hand: Special Summon this card from your hand. If this card is Special Summoned: You can add 1 "Libromancer" monster from your Deck to your hand, except "Libromancer Fire". You can only use each effect of "Libromancer Fire" once per turn.',
                stats: 'ATK/1800 DEF/1800'
            },
            'Dmax': {
                name: 'Dogmatika Maximus',
                info: 'Level:8 Light Spellcaster/Effect',
                mat: '',
                description: 'You can reveal 1 Ritual Monster in your hand: Special Summon this card from your hand. If this card is Special Summoned: You can add 1 "Libromancer" monster from your Deck to your hand, except "Libromancer Fire". You can only use each effect of "Libromancer Fire" once per turn.',
                stats: 'ATK/1500 DEF/3000'
            },
            'Libromancer Agent': {
                name: 'Libromancer Agent',
                info: 'Level:6 Earth Warrior/Effect',
                mat: '',
                description: 'You can banish 1 Fusion, Synchro, Xyz, or Link Monster from your GY; Special Summon this card from your hand. During your Main Phase: You can activate this effect; send 2 monsters with different names from your Extra Deck to the GY, also your opponent sends 2 monsters from their Extra Deck to the GY, also you cannot Special Summon from the Extra Deck for the rest of this turn. You can only use each effect of "Dogmatika Maximus" once per turn.',
                stats: 'ATK/100 DEF/2100'
            },

            'Nib': {
                name: 'Nibiru, the Primal Being',
                info: 'Level:11 Light Rock/Effect',
                mat: '',
                description: 'During the Main Phase, if your opponent Normal or Special Summoned 5 or more monsters this turn (Quick Effect): You can Tribute as many face-up monsters on the field as possible, and if you do, Special Summon this card from your hand, then Special Summon 1 "Primal Being Token" (Rock/LIGHT/Level 11/ATK ?/DEF ?) to your opponents field. (This Tokens ATK/DEF become the combined original ATK/DEF of the Tributed monsters.) You can only use this effect of "Nibiru, the Primal Being" once per turn.',
                stats:'ATK/3000 DEF/600'
            },

            'Cben': {
                name: 'Cyber Angel Benten',
                info: 'Level:6 Light Fairy/Ritual/Effect',
                mat: '',
                description: 'You can Ritual Summon this card with "Machine Angel Ritual". If this card destroys a monster by battle and sends it to the GY: Inflict damage to your opponent equal to that monsters original DEF in the GY. If this card is Tributed: You can add 1 LIGHT Fairy monster from your Deck to your hand.',
                stats:'ATK/1800 DEF/1500'
            },

            'Ldoom': {
                name: 'Libromancer Doombroker',
                info: 'Level:6 Dark Fiend/Ritual/Effect',
                mat: '',
                description: 'You can Ritual Summon this card with a "Libromancer" card. If this card is Ritual Summoned by using a monster(s) on the field, it can attack directly. You can only use each of the following effects of "Libromancer Doombroker" once per turn. During your Main Phase: You can Set 1 "Libromancer" Trap directly from your Deck. When this card inflicts battle damage to your opponent: You can target 1 face-up monster your opponent controls; shuffle it into the Deck.',
                stats:'ATK/2500 DEF/2000'
            },

            'OhimeM': {
                name: 'Ohime the Manifested Mikanko',
                info: 'Level:6 Light Fairy/Ritual/Effect',
                mat: '',
                description: 'You can Ritual Summon this card with "Mikanko Kagura". Cannot be destroyed by battle, also your opponent takes any battle damage you would have taken from battles involving this card. You can only use each of the following effects of "Ohime the Manifested Mikanko" once per turn. You can reveal this card in your hand; add 1 "Mikanko" card from your Deck to your hand, except "Ohime the Manifested Mikanko", then discard 1 card. (Quick Effect): You can target 1 Equip Spell in your GY; equip it to 1 appropriate monster on the field.',
                stats:'ATK/0 DEF/0'
            },

            'LFB': {
                name: 'Libromancer Fireburst',
                info: 'Level:7 Fire Cyberse/Ritual/Effect',
                mat: '',
                description: 'You can Ritual Summon this card with a "Libromancer" card. If this card was Ritual Summoned by using a monster(s) on the field, it cannot be destroyed by battle, also any battle damage it inflicts to your opponent is doubled. This card can make up to 2 attacks on monsters during each Battle Phase. When a monster declares an attack: You can banish 1 "Libromancer" Ritual Monster from your GY; this card gains 200 ATK.',
                stats:'ATK/2800 DEF/2800'
            },

            'PoR': {
                name: 'Preparation of Rites',
                info: 'Normal Spell',
                mat: '',
                description: 'Add 1 Level 7 or lower Ritual Monster from your Deck to your hand, then you can add 1 Ritual Spell from your GY to your hand.',
                stats:''
            },

            'Nadir': {
                name: 'Nadir Servant',
                info: 'Normal Spell',
                mat: '',
                description: 'Send 1 monster from your Extra Deck to the GY, then add 1 "Dogmatika" monster or "Fallen of Albaz" from your Deck or GY to your hand, that has ATK less than or equal to that sent monster in the GY, also, for the rest of this turn after this card resolves, you cannot Special Summon monsters from the Extra Deck. You can only activate 1 "Nadir Servant" per turn.',
                stats:''
            },

            'Mref': {
                name: 'Mikanko Reflection Rondo',
                info: 'Equip Spell',
                mat: '',
                description: 'Equip only to an opponents monster. While you control a "Mikanko" monster, take control of that equipped monster. Neither player can activate the effects of the equipped monster while you control it. When this card leaves the field, send the equipped monster to the GY. You can only control 1 "Mikanko Reflection Rondo". You can only activate 1 "Mikanko Reflection Rondo" per turn.',
                stats:''
            },

            'LFA': {
                name: 'Libromancer First Appearance',
                info: 'Field Spell',
                mat: '',
                description: 'When this card is activated: You can add 1 "Libromancer" monster from your Deck to your hand, with a different name than the cards you control. During your Main Phase: You can Ritual Summon 1 "Libromancer" Ritual Monster from your hand, by Tributing monsters from your hand or field whose total Levels equal or exceed its Level. You can only activate 1 "Libromancer First Appearance" per turn.',
                stats:''
            },

            'LOS': {
                name: 'Libromancer Origin Story',
                info: 'Continuous Spell',
                mat: '',
                description: 'When this card is activated: You can Set 1 "Libromancer" Spell/Trap directly from your Deck, except "Libromancer Origin Story". "Libromancer" Ritual Monsters you control gain ATK equal to their own Level x 100. If a Ritual Monster is Ritual Summoned to your field (except during the Damage Step): You can target 1 Spell/Trap your opponent controls; destroy it. You can only use this effect of "Libromancer Origin Story" once per turn. You can only activate 1 "Libromancer Origin Story" per turn.',
                stats:''
            },

            'ET': {
                name: 'Emergency Teleport',
                info: 'Quick-Play Spell',
                mat: '',
                description: 'Special Summon 1 Level 3 or lower Psychic monster from your hand or Deck, but banish it during the End Phase of this turn.',
                stats:''
            },

            'CBTG': {
                name: 'Called by the Grave',
                info: 'Quick-Play Spell',
                mat: '',
                description: 'Target 1 monster in your opponents GY; banish it, and if you do, until the end of the next turn, its effects are negated, as well as the activated effects and effects on the field of monsters with the same original name.',
                stats:''
            },

            'Cross': {
                name: 'Crossout Designator',
                info: 'Quick-Play Spell',
                mat: '',
                description: 'Declare 1 card name; banish 1 of that declared card from your Main Deck, and if you do, negate its effects, as well as the activated effects and effects on the field of cards with the same original name, until the end of this turn. You can only activate 1 "Crossout Designator" per turn.',
                stats:''
            },

            'Cross': {
                name: 'Crossout Designator',
                info: 'Quick-Play Spell',
                mat: '',
                description: 'Declare 1 card name; banish 1 of that declared card from your Main Deck, and if you do, negate its effects, as well as the activated effects and effects on the field of cards with the same original name, until the end of this turn. You can only activate 1 "Crossout Designator" per turn.',
                stats:''
            },

            'GMC': {
                name: 'The Great Mikanko Ceremony',
                info: 'Quick-Play Spell',
                mat: '',
                description: 'Special Summon 1 "Mikanko" monster from your hand, ignoring its Summoning conditions, but return it to the hand during your opponents End Phase. During your Main Phase: You can banish this card from your GY; send 1 "Mikanko" card from your Deck to the GY, except "The Great Mikanko Ceremony". You can only use each effect of "The Great Mikanko Ceremony" once per turn.',
                stats:''
            },

            'IMP': {
                name: 'Infinite Impermanence',
                info: 'Normal Trap',
                mat: '',
                description: 'Target 1 face-up monster your opponent controls; negate its effects (until the end of this turn), then, if this card was Set before activation and is on the field at resolution, for the rest of this turn all other Spell/Trap effects in this column are negated. If you control no cards, you can activate this card from your hand.',
                stats:''
            },

            'IMP': {
                name: 'Infinite Impermanence',
                info: 'Normal Trap',
                mat: '',
                description: 'Target 1 face-up monster your opponent controls; negate its effects (until the end of this turn), then, if this card was Set before activation and is on the field at resolution, for the rest of this turn all other Spell/Trap effects in this column are negated. If you control no cards, you can activate this card from your hand.',
                stats:''
            },

            'Lint': {
                name: 'Libromancer Intervention',
                info: 'Normal Trap',
                mat: '',
                description: 'When your opponent activates a card or effect: Target 1 "Libromancer" Ritual Monster you control; return it to the hand, and if you do, negate that activated effect, then you can Special Summon 1 "Libromancer" monster from your hand or GY. You can only activate 1 "Libromancer Intervention" per turn.',
                stats:''
            },

            'Ldis': {
                name: 'Libromancer Displaced',
                info: 'Normal Trap',
                mat: '',
                description: 'Target 1 "Libromancer" monster you control and 1 monster your opponent controls; return your monster to the hand, and if you do, take control of that opponents monster. If your "Libromancer" monster you targeted was not a Ritual Monster, the monster you took control of returns to the hand during the End Phase. You can only activate 1 "Libromancer Displaced" per turn.',
                stats:''
            },

            'SSCH': {
                name: 'Shaddoll Schism',
                info: 'Continuous Trap',
                mat: '',
                description: 'During the Main Phase, you can: Fusion Summon 1 "Shaddoll" Fusion Monster from your Extra Deck, by banishing Fusion Materials mentioned on it from your field or GY, but it cannot attack directly. Then, you can send to the GY 1 monster your opponent controls with the same Attribute as that Fusion Summoned monster. You can only use this effect of "Shaddoll Schism" once per turn.',
                stats:''
            },

            'EEN': {
                name: 'Elder Entity Ntss',
                info: 'Level:4 Light Fairy/Fusion/Effect',
                mat: '1 Synchro Monster + 1 Xyz Monster',
                description: 'During the Main Phase, you can: Fusion Summon 1 "Shaddoll" Fusion Monster from your Extra Deck, by banishing Fusion Materials mentioned on it from your field or GY, but it cannot attack directly. Then, you can send to the GY 1 monster your opponent controls with the same Attribute as that Fusion Summoned monster. You can only use this effect of "Shaddoll Schism" once per turn.',
                stats:'ATK/2500 DEF/1200'
            },

            'ESW': {
                name: 'El Shaddoll Winda',
                info: 'Level:5 Dark Spellcaster/Fusion/Effect',
                mat: '1 "Shaddoll" monster + 1 DARK monster',
                description: 'Must first be Fusion Summoned. Cannot be destroyed by an opponents card effects. Each player can only Special Summon monster(s) once per turn while this card is face-up on the field. If this card is sent to the GY: You can target 1 "Shaddoll" Spell/Trap in your GY; add it to your hand.',
                stats:'ATK/2200 DEF/800'
            },

            'ESA': {
                name: 'El Shaddoll Apkallone',
                info: 'Level:6 Dark Spellcaster/Fusion/Effect',
                mat: '2 "Shaddoll" monsters with different Attributes',
                description: 'Must first be Fusion Summoned. Cannot be destroyed by battle. You can only use each of the following effects of "El Shaddoll Apkallone" once per turn. ●If this card is Special Summoned: You can target 1 face-up card on the field; negate its effects. ●If this card is sent to the GY: You can add 1 "Shaddoll" card from your Deck or GY to your hand, then discard 1 card.',
                stats:'ATK/2500 DEF/2000'
            },

            'Gar': {
                name: 'Garura, Wings of Resonant Life',
                info: 'Level:6 Dark Winged Beast/Fusion/Effect',
                mat: '2 monsters with the same Type and Attribute, but different names',
                description: 'Any battle damage your opponent takes from battles involving this card is doubled. If this card is sent to the GY: You can draw 1 card. You can only use this effect of "Garura, Wings of Resonant Life" once per turn.',
                stats:'ATK/1200 DEF/2400'
            },

            'HotA': {
                name: 'Herald of the Arc Light',
                info: 'Level:4 Light Fairy/Synchro/Effect',
                mat: '1 Tuner + 1+ non-Tuner monsters',
                description: 'Any monster sent from the hand or Main Deck to the GY is banished instead. When a Spell/Trap Card, or monster effect, is activated (Quick Effect): You can Tribute this card; negate the activation, and if you do, destroy that card. If this card is sent to the GY: You can add 1 Ritual Monster or 1 Ritual Spell from your Deck to your hand.',
                stats:'ATK/600 DEF/1000'
            },

            'Bar': {
                name: 'Baronne de Fleur',
                info: 'Level:10 Wind Warrior/Synchro/Effect',
                mat: '1 Tuner + 1+ non-Tuner monsters',
                description: 'Once per turn: You can target 1 card on the field; destroy it. Once while face-up on the field, when a card or effect is activated (Quick Effect): You can negate the activation, and if you do, destroy that card. You can only use the previous effect of "Baronne de Fleur" once per turn. Once per turn, during the Standby Phase: You can target 1 Level 9 or lower monster in your GY; return this card to the Extra Deck, and if you do, Special Summon that monster.',
                stats:'ATK/3000 DEF/2400'
            },

            'LG': {
                name: 'Linguriboh',
                info: 'Link:1 Dark Cyberse/Link/Effect',
                mat: '1 Level 4 or lower Cyberse monster',
                description: 'When your opponent activates a Trap Card (Quick Effect): You can Tribute this card; negate that cards effect, and if you do, banish it. If this card is in your GY (Quick Effect): You can Tribute 1 "@Ignister" monster that was Summoned from the Extra Deck; Special Summon this card. You can only use each effect of "Linguriboh" once per turn.',
                stats:'ATK/300 Link:1'
            },

            'FCH': {
                name: 'Hiita the Fire Charmer, Ablaze',
                info: 'Link:2 Fire Spellcaster/Link/Effect',
                mat: '2 monsters, including a FIRE monster',
                description: '(This card is always treated as a "Familiar-Possessed" card.). You can target 1 FIRE monster in your opponents GY; Special Summon it to your zone this card points to. If this Link Summoned card is destroyed by battle, or is destroyed by an opponents card effect while in its owners Monster Zone: You can add 1 FIRE monster with 1500 or less DEF from your Deck to your hand. You can only use each effect of "Hiita the Fire Charmer, Ablaze" once per turn.',
                stats:'ATK/1850 Link:2'
            },

            'IP': {
                name: 'I:P Masquerena',
                info: 'Link:2 Dark Cyberse/Link/Effect',
                mat: '2 non-Link Monsters',
                description: '(During your opponents Main Phase, you can (Quick Effect): Immediately after this effect resolves, Link Summon 1 Link Monster using materials you control, including this card. You can only use this effect of "I:P Masquerena" once per turn. A Link Monster that used this card as material cannot be destroyed by your opponents card effects.',
                stats:'ATK/800 Link:2'
            },

            'Self': {
                name: 'Spright Elf',
                info: 'Link:2 Fire Thunder/Link/Effect',
                mat: '2 monsters, including a Level/Rank/Link 2 monster',
                description: '(Cannot be used as Link Material the turn it is Link Summoned. Your opponent cannot target monsters this card points to with card effects. During the Main Phase (Quick Effect): You can target 1 Level 2 monster in your GY, or, if your opponent controls a monster, you can target 1 Rank/Link 2 monster instead; Special Summon it. You can only use this effect of "Spright Elf" once per turn.',
                stats:'ATK/1400 Link:2'
            },

            'SP': {
                name: 'S:P Little Knight',
                info: 'Link:2 Dark Warrior/Link/Effect',
                mat: '2 Effect Monsters',
                description: 'If this card is Link Summoned using a Fusion, Synchro, Xyz, or Link Monster as material: You can target 1 card on the field or in either GY; banish it, also your monsters cannot attack directly this turn. When your opponent activates a card or effect (Quick Effect): You can target 2 face-up monsters on the field, including a monster you control; banish both until the End Phase. You can only use each effect of "S:P Little Knight" once per turn.',
                stats:'ATK/1600 Link:2'
            },

            'KU': {
                name: 'Knightmare Unicorn',
                info: 'Link:3 Dark Fiend/Link/Effect',
                mat: '2+ monsters with different names',
                description: 'If this card is Link Summoned: You can discard 1 card, then target 1 card on the field; shuffle it into the Deck, then, if this card was co-linked when this effect was activated, you can draw 1 card. You can only use this effect of "Knightmare Unicorn" once per turn. While any co-linked "Knightmare" monsters are on the field, for your normal draw in your Draw Phase, draw 1 card for each different card name among those co-linked "Knightmare" monsters, instead of drawing just 1 card.',
                stats:'ATK/2200 Link:3'
            },

            'Access': {
                name: 'Accesscode Talker',
                info: 'Link:4 Dark Cyberse/Link/Effect',
                mat: '2+ Effect Monsters',
                description: 'If this card is Link Summoned: You can discard 1 card, then target 1 card on the field; shuffle it into the Deck, then, if this card was co-linked when this effect was activated, you can draw 1 card. You can only use this effect of "Knightmare Unicorn" once per turn. While any co-linked "Knightmare" monsters are on the field, for your normal draw in your Draw Phase, draw 1 card for each different card name among those co-linked "Knightmare" monsters, instead of drawing just 1 card.',
                stats:'ATK/2300 Link:4'
            },

            'TriB': {
                name: 'Tri-Brigade Arms Bucephalus II',
                info: 'Link:5 Dark Winged Beast/Link/Effect',
                mat: '3+ Beast, Beast-Warrior, and/or Winged Beast monsters',
                description: 'Cannot be Special Summoned from the Extra Deck unless you have 3 or more "Tri-Brigade" Spells/Traps in your GY. Your opponent cannot activate cards or effects when you Special Summon a monster(s). When a monster declares an attack: You can banish this card, also banish all cards your opponent controls. If this card is sent to the GY: You can send 1 Beast, Beast-Warrior, or Winged Beast monster from your Extra Deck to the GY. You can only use this effect of "Tri-Brigade Arms Bucephalus II" once per turn.',
                stats:'ATK/3500 Link:5'
            }
        };
        return cardDatabase[cardName] || { name: 'Unknown',info: 'Unknown',mat: 'None',description: 'No data available.',stats: 'None'};
    }
});

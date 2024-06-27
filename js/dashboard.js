

function openpop(zodiacId) {
	document.getElementById("myForm").style.display = "block";
    
        const zodiacInfo = {
            aries: {
                title: 'Aries',
                symbol: 'The Ram',
                planet: 'Mars',
                house: 'First House of Self',
                traits: 'Competitive, energetic, impulsive, fearless',
                
            },
            taurus: {
                title: 'Taurus',
                symbol: 'The Bull',
                planet: 'Venus',
                house: 'Second House of Income',
                traits: 'Resolute, grounded, tenacious, sensual',
             
            },
            gemini: {
                title: 'Gemini',
                symbol: "The Twins",
                planet: "Mercury",
                house: "Third House of Communication",
                traits: "Witty, curious, charming, flighty"
            },
            cancer: {
                title: 'Cancer',
                symbol: "The Crab",
                planet: "Moon",
                house: "Fourth House of Home Life",
                traits: "Compassionate, giving, sentimental, nurturing"
            },
            leo: {
                title: 'Leo',
                symbol: "The Lion",
                planet: "Sun",
                house: "Fifth House of Romance and Self-Expression",
                traits: "Dramatic, outgoing, fiery, self-assured"
            },
            virgo: {
                title: 'Virgo',
                symbol: "The Virgin or Maiden",
                planet: "Mercury",
                house: "Sixth House of Wellness and Daily Routine",
                traits: "Health-conscious, analytical, service-oriented, detail-focused"
            },
            libra: {
                title: 'Libra',
                symbol: "The Scales",
                planet: "Venus",
                house: "Seventh House of Partnership",
                traits: "Romantic, artistic, indecisive, diplomatic"
            },
            scorpio: {
                title: 'Scorpio',
                symbol: "The Scorpion",
                planet: "Pluto and Mars",
                house: "Eighth House of Emotional Bonds and Sexual Intimacy",
                traits: "Mysterious, magnetic, power-seeking, spiritual"
            },
            sagittarius: {
                title: 'Sagittarius',
                symbol: "The Archer",
                planet: "Jupiter",
                house: "Ninth House of Adventure and Higher Learning",
                traits: "Philosophical, free-spirited, unfiltered, wanderlusting"
            },
            capricorn: {
                title: 'Capricorn',
                symbol: "The Goat",
                planet: "Saturn",
                house: "Tenth House of Career and Public Image",
                traits: "Traditional, down-to-earth, industrious, disciplined"
            },
            aquarius: {
                title: 'Aquarius',
                symbol: "The Water Bearer",
                planet: "Uranus",
                house: "Eleventh House of Networking",
                traits: "Humanitarian, eccentric, individualistic, cool"
            },
            pisces: {
                title: 'Pisces',
                symbol: "The Fish",
                planet: "Neptune",
                house: "Twelfth House of Spirituality",
                traits: "Empathic, artistic, psychic, dreamy"
            }
    };

    const Zodiactitle = document.getElementById('zodiac-title');
    const Zodiacsymbol = document.getElementById('zodiac-symbol');
    const Zodiacplanet = document.getElementById('zodiac-planet');
    const Zodiachouse= document.getElementById('zodiac-house');
    const Zodiactraits= document.getElementById('zodiac-traits');

    const info = zodiacInfo[zodiacId];
    Zodiactitle.textContent = info.title;
    Zodiacsymbol.textContent = info.symbol;
    Zodiacplanet.textContent = info.planet;
    Zodiachouse.textContent = info.house;
    Zodiactraits.textContent = info.traits;
    }

  
  function closepop() {
	document.getElementById("myForm").style.display = "none";
  }

  function alertDialog(){
    document.getElementById("cookie").style.display="none";
  }

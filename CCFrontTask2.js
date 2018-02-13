const runes = [
		{
			name:"El",
			power:"28",
			blocked:"Ort"

		},{
			name:"Eld",
			power:"33",
			blocked:"Sur"

		},{
			name:"Tir",
			power:"9",
			blocked:"Eth"

		},{
			name:"Nef",
			power:"7",
			blocked:"Ist"

		},{
			name:"Eth",
			power:"31",
			blocked:"Tir"

		},{
			name:"Ith",
			power:"22",
			blocked:"Pul"

		},{
			name:"Tal",
			power:"8",
			blocked:"lo"

		},{
			name:"Ral",
			power:"25",
			blocked:"Um"

		},{
			name:"Ort",
			power:"18",
			blocked:"Eth"

		},{
			name:"Thul",
			power:"13",
			blocked:"Sol"

		},{
			name:"Amn",
			power:"6",
			blocked:"Fal"

		},{
			name:"Sol",
			power:"10",
			blocked:"Thul"

		},{
			name:"Shael",
			power:"17",
			blocked:"Lem"
		},{
			name:"Dol",
			power:"11",
			blocked:"Hel"
		},{
			name:"Hel",
			power:"12",
			blocked:"Dol"
		},{
			name:"Io",
			power:"20",
			blocked:"Tal"
		},{
			name:"Lum",
			power:"32",
			blocked:"Gul"
		},{
			name:"Ko",
			power:"27",
			blocked:"Mal"
		},{
			name:"Fal",
			power:"14",
			blocked:"Amn"
		},{
			name:"Lem",
			power:"26",
			blocked:"Shall"
		},{
			name:"Pul",
			power:"15",
			blocked:"Ith"
		},{
			name:"Um",
			power:"16",
			blocked:"Ral"
		},{
			name:"Ko",
			power:"21",
			blocked:"Ko"
		},{
			name:"Ist",
			power:"4",
			blocked:"Nef"
		},{
			name:"Guk",
			power:"23",
			blocked:"Lum"
		},{
			name:"Vex",
			power:"24",
			blocked:"Ohm"
		},{
			name:"Ohm",
			power:"1",
			blocked:"Vex"
		},{
			name:"Lo",
			power:"2",
			blocked:"Cham"
		},{
			name:"Sur",
			power:"30",
			blocked:"Eld"
		},{
			name:"Ber",
			power:"3",
			blocked:""
		},{
			name:"Jah",
			power:"5",
			blocked:"Zod"
		},{
			name:"Cham",
			power:"29",
			blocked:"Lo"
		},{
			name:"Io",
			power:"20",
			blocked:"Tal"
		},{
			name:"Zood",
			power:"19",
			blocked:"Jah"
		},
	]
exports.generateRunicWords = length => {
if (isNaN(length) || length == null) {
	}else{
	    var choicedRunes = [],
	        result,
	        sortedRunes = [];
	    const runicWords = [];
	    for (var x = 0; x < Math.pow(2, runes.length); x++) {
	        result = [];
	        let i = runes.length - 1;
	        do {
	            if ((x & (1 << i)) !== 0) {
	                result.push(runes[i]);
	            }
	        } while (i--);
	        if (result.length == length) {
	            choicedRunes.push(result);
	        }
	    }
	    
	    choicedRunes.map(arrRunes => {
	        let word = '';
	        let goodspell = '';
	        let pwrd = null;
	        let blocked = [];
	        arrRunes.sort((a, b)=> {
	            return b.power - a.power;
	        });
	        word = arrRunes.map(obj => obj.name).join('-')
	        for (var j = 0; j < arrRunes.length; j++) {
	            pwrd += parseFloat(arrRunes[j].power);
	            blocked.push(arrRunes[j].blocked);
	        }
	        // wiem ze to zły sposob,
	        let include = 0;
	        blocked.map(a => {
	            if (word.includes(a)) {
	                include++;
	            }
	        })
	        if (include == 0) {
	            sortedRunes.push({
	                word: word,
	                power: pwrd - length
	            });
	        }
	    })

	    sortedRunes.sort((a, b)=> {
	        return b.power - a.power;
	    });
	    for (var i = 0; i < 10; i++) {
	        if (sortedRunes[i] !== undefined) {
	            runicWords.push(sortedRunes[i]);
	        }
	    }
	}
    return runicWords
}

exports.checkRunicWord = runicWord => {
let runicWordObject;
// niestety brak walidacji słowa ktore nie jest runem
    if (!isNaN(runicWord) || runicWord == '' || runicWord == null) {
        return 'error'
    } else {
        let spellpower = null;
        const run = runicWord.split('-');
        run.map(a => {
            runes.map(b => {
                if (b.name.includes(a)) {
                    spellpower += parseFloat(b.power);
                }
            })
        })
        runicWordObject = spellpower - run.length;
    }
    return runicWordObject;
}

// sorry za brak komentarzy, brak czasu troszke przeszkodził

const calculateTemp= ()=>{
    const numbertemp= document.getElementById('temp').value;
    console.log(numbertemp);

    const tempselected=document.getElementById('temp_diff')
    const valuetemp=temp_diff.options[tempselected.selectedIndex].value;


    const celtofah = (cel) =>{
        let fehrenheit=Math.round(((cel*9)/5)+32)//this round function is used to get int values
        return fehrenheit;
    }

    const fehtocel = (feh) =>{
        let fehrenheit=Math.round((feh-32)*5/9)//this round function is used to get int values
        return fehrenheit;
    }

    let result;
    if (valuetemp=='cel'){
        result=celtofah(numbertemp);
        document.getElementById('resultContainer').innerHTML=`= ${result} Fehrenheit`//body of celtofah function
    }
    else{
        result =fehtocel(numbertemp)
        document.getElementById('resultContainer').innerHTML=`= ${result} Celsius`;//this syntax wrinte in span tag
    }
}
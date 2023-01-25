var displacement_Day = 0;

function displacementDay() {
    if (datetimecore1.get("%Day")==accweathercore1.get("%dayNumb1") && displacement_Day==1) {
        displacement_Day = 0;
        Day1_lowTemp.coreFormat = "${lowTemp1}°";
        Day2_lowTemp.coreFormat = "/${lowTemp2}°";
        Day3_lowTemp.coreFormat = "/${lowTemp3}°";
        Day4_lowTemp.coreFormat = "/${lowTemp4}°";
        Day5_lowTemp.coreFormat = "/${lowTemp5}°";
        Day6_lowTemp.coreFormat = "/${lowTemp6}°";
        Day7_lowTemp.coreFormat = "/${lowTemp7}°";
        Day8_lowTemp.coreFormat = "/${lowTemp8}°";

        Day1_highTemp.coreFormat = "${highTemp1}°";
        Day2_highTemp.coreFormat = "${highTemp2}°";
        Day3_highTemp.coreFormat = "${highTemp3}°";
        Day4_highTemp.coreFormat = "${highTemp4}°";
        Day5_highTemp.coreFormat = "${highTemp5}°";
        Day6_highTemp.coreFormat = "${highTemp6}°";
        Day7_highTemp.coreFormat = "${highTemp7}°";
        Day8_highTemp.coreFormat = "${highTemp8}°";

        Day2_Date.coreFormat = "${weekShort2}.${dayNumb2} ${monthText2}";
        Day3_Date.coreFormat = "${weekShort3}.${dayNumb3} ${monthText3}";
        Day4_Date.coreFormat = "${weekShort4}.${dayNumb4} ${monthText4}";
        Day5_Date.coreFormat = "${weekShort5}.${dayNumb5} ${monthText5}";
        Day6_Date.coreFormat = "${weekShort6}.${dayNumb6} ${monthText6}";
        Day7_Date.coreFormat = "${weekShort7}.${dayNumb7} ${monthText7}";
        Day8_Date.coreFormat = "${weekShort8}.${dayNumb8} ${monthText8}";

        Day2_WeatherIcon.Src = "wth\\"+accweathercore1.get("%WeatherIconNum2")+".png";
        Day3_WeatherIcon.Src = "wth\\"+accweathercore1.get("%WeatherIconNum3")+".png";
        Day4_WeatherIcon.Src = "wth\\"+accweathercore1.get("%WeatherIconNum4")+".png";
        Day5_WeatherIcon.Src = "wth\\"+accweathercore1.get("%WeatherIconNum5")+".png";
        Day6_WeatherIcon.Src = "wth\\"+accweathercore1.get("%WeatherIconNum6")+".png";
        Day7_WeatherIcon.Src = "wth\\"+accweathercore1.get("%WeatherIconNum7")+".png";
        Day8_WeatherIcon.Src = "wth\\"+accweathercore1.get("%WeatherIconNum8")+".png";
        
        Day2_WeatherIcon.Hint = accweathercore1.get("%weatherText2");
        Day3_WeatherIcon.Hint = accweathercore1.get("%weatherText3");
        Day4_WeatherIcon.Hint = accweathercore1.get("%weatherText4");
        Day5_WeatherIcon.Hint = accweathercore1.get("%weatherText5");
        Day6_WeatherIcon.Hint = accweathercore1.get("%weatherText6");
        Day7_WeatherIcon.Hint = accweathercore1.get("%weatherText7");
        Day8_WeatherIcon.Hint = accweathercore1.get("%weatherText8");        
    } 
    if (datetimecore1.get("%Day")!=accweathercore1.get("%dayNumb1") && displacement_Day==0) {
        displacement_Day = 1;
        Day1_lowTemp.coreFormat = "${lowTemp2}°";
        Day2_lowTemp.coreFormat = "/${lowTemp3}°";
        Day3_lowTemp.coreFormat = "/${lowTemp4}°";
        Day4_lowTemp.coreFormat = "/${lowTemp5}°";
        Day5_lowTemp.coreFormat = "/${lowTemp6}°";
        Day6_lowTemp.coreFormat = "/${lowTemp7}°";
        Day7_lowTemp.coreFormat = "/${lowTemp8}°";
        Day8_lowTemp.coreFormat = "/${lowTemp9}°";

        Day1_highTemp.coreFormat = "${highTemp2}°";
        Day2_highTemp.coreFormat = "${highTemp3}°";
        Day3_highTemp.coreFormat = "${highTemp4}°";
        Day4_highTemp.coreFormat = "${highTemp5}°";
        Day5_highTemp.coreFormat = "${highTemp6}°";
        Day6_highTemp.coreFormat = "${highTemp7}°";
        Day7_highTemp.coreFormat = "${highTemp7}°";
        Day8_highTemp.coreFormat = "${highTemp9}°";

        Day2_Date.coreFormat = "${weekShort3}.${dayNumb3} ${monthText3}";
        Day3_Date.coreFormat = "${weekShort4}.${dayNumb4} ${monthText4}";
        Day4_Date.coreFormat = "${weekShort5}.${dayNumb5} ${monthText5}";
        Day5_Date.coreFormat = "${weekShort6}.${dayNumb6} ${monthText6}";
        Day6_Date.coreFormat = "${weekShort7}.${dayNumb7} ${monthText7}";
        Day7_Date.coreFormat = "${weekShort8}.${dayNumb8} ${monthText8}";
        Day8_Date.coreFormat = "${weekShort9}.${dayNumb9} ${monthText9}";
        
        Day2_WeatherIcon.Src = "wth\\"+accweathercore1.get("%WeatherIconNum3")+".png";
        Day3_WeatherIcon.Src = "wth\\"+accweathercore1.get("%WeatherIconNum4")+".png";
        Day4_WeatherIcon.Src = "wth\\"+accweathercore1.get("%WeatherIconNum5")+".png";
        Day5_WeatherIcon.Src = "wth\\"+accweathercore1.get("%WeatherIconNum6")+".png";
        Day6_WeatherIcon.Src = "wth\\"+accweathercore1.get("%WeatherIconNum7")+".png";
        Day7_WeatherIcon.Src = "wth\\"+accweathercore1.get("%WeatherIconNum8")+".png";
        Day8_WeatherIcon.Src = "wth\\"+accweathercore1.get("%WeatherIconNum9")+".png";
        
        Day2_WeatherIcon.Hint = accweathercore1.get("%weatherText3");
        Day3_WeatherIcon.Hint = accweathercore1.get("%weatherText4");
        Day4_WeatherIcon.Hint = accweathercore1.get("%weatherText5");
        Day5_WeatherIcon.Hint = accweathercore1.get("%weatherText6");
        Day6_WeatherIcon.Hint = accweathercore1.get("%weatherText7");
        Day7_WeatherIcon.Hint = accweathercore1.get("%weatherText8");
        Day8_WeatherIcon.Hint = accweathercore1.get("%weatherText9");
    }
}

function layer1OnChange(Sender){
  numbimage1.values = Sender.value;
  //displacementDay();
}

function layer2OnChange(Sender){
  numbimage2.values = Sender.value
  displacementDay();
}

function accweathercore1OnUpdate(Sender){
   displacementDay();
   //SaveAsDefIni();  
}

function WeatherIconOnDblClick(day){
  var lang = GetIni("accweathercore1.lang","");
  var cityName = GetIni("accweathercore1.cityName",""); 
  var citycode = GetIni("accweathercore1.citycode","");
  OpenURL("https://www.accuweather.com/"+lang+"/"+cityName+"/"+citycode+"/daily-weather-forecast/"+citycode+"?day="+day);
}

function Day2_WeatherIconOnDblClick(){WeatherIconOnDblClick(2)}

function Day3_WeatherIconOnDblClick(){WeatherIconOnDblClick(3)}

function Day4_WeatherIconOnDblClick(){WeatherIconOnDblClick(4)}

function Day5_WeatherIconOnDblClick(){WeatherIconOnDblClick(5)}

function Day6_WeatherIconOnDblClick(){WeatherIconOnDblClick(6)}

function Day7_WeatherIconOnDblClick(){WeatherIconOnDblClick(7)}

function Day8_WeatherIconOnDblClick(){WeatherIconOnDblClick(8)}

function Cur_WeatherIconOnDblClick(){
  var lang = GetIni("accweathercore1.lang","");
  var cityName = GetIni("accweathercore1.cityName","");
  var citycode = GetIni("accweathercore1.citycode","");
  OpenURL("https://www.accuweather.com/"+lang+"/"+cityName+"/"+citycode+"/weather-forecast/"+citycode);
}

function menuitem7_checked(){
  menuitem7.checked = layer3.Visible;
  if(layer3.Visible == false){
    backgroundImage.Src = WidgetPath+"base_2.png";
  }else{
    backgroundImage.Src = WidgetPath+"base.png";
  }  
}

function menuitem7OnClick(Sender){
  widget.cmd("!ShowHideObj=layer3");
  setValue('layer3.visible',layer3.Visible);
  saveIni;
  menuitem7_checked();
}

function widgetOnLoad(){
  if (datetimecore1.get("%Day")==accweathercore1.get("%dayNumb1")) {
    displacement_Day = 1;
  }else{
    displacement_Day = 0;
  }
  displacementDay();
  layer3.Visible = getValue('layer3.visible',layer3.Visible);
  menuitem7_checked();
}


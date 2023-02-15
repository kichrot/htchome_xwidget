var widget_OnLoad = 1;
var displacement_Day = 0;               
var wth_icon = "1";
var WeatherIcon_DblClick = "0";
var UpdateWeather_day;
var UpdateWeather_hour;
var UpdateWeather_minute;
var WeatherUpgrTime;
var accweathercore_interval;


function Forced_always_below(){
  if(menuitem20.checked){
    widget.WindowZPosition = -1;
  }
}

function widget_reload(){
  var wsc = new ActiveXObject("WScript.Shell");
  widget.ForceToFround();
  wsc.SendKeys("{f5}");
  Forced_always_below();
}

function WeatherIcon_src(){
  var p = "wth\\wth";
  curWeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%curWeatherIconNum")+".png";
  if (datetimecore1.get("%Day")==accweathercore1.get("%dayNumb1")){
        Day2_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum2")+".png";
        Day3_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum3")+".png";
        Day4_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum4")+".png";
        Day5_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum5")+".png";
        Day6_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum6")+".png";
        Day7_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum7")+".png";
        Day8_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum8")+".png";
  }
  if (datetimecore1.get("%Day")!=accweathercore1.get("%dayNumb1")) {
        Day2_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum3")+".png";
        Day3_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum4")+".png";
        Day4_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum5")+".png";
        Day5_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum6")+".png";
        Day6_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum7")+".png";
        Day7_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum8")+".png";
        Day8_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum9")+".png";
  }
}

function displacementDay() {
  try{
    var p = "wth\\wth";
    curWeatherIcon.Src = "wth\\wth"+wth_icon+"\\"+accweathercore1.get("%curWeatherIconNum")+".png";
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

        Day2_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum2")+".png";
        Day3_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum3")+".png";
        Day4_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum4")+".png";
        Day5_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum5")+".png";
        Day6_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum6")+".png";
        Day7_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum7")+".png";
        Day8_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum8")+".png";
        
        Day2_WeatherIcon.Hint = accweathercore1.get("%weatherText2");
        Day3_WeatherIcon.Hint = accweathercore1.get("%weatherText3");
        Day4_WeatherIcon.Hint = accweathercore1.get("%weatherText4");
        Day5_WeatherIcon.Hint = accweathercore1.get("%weatherText5");
        Day6_WeatherIcon.Hint = accweathercore1.get("%weatherText6");
        Day7_WeatherIcon.Hint = accweathercore1.get("%weatherText7");
        Day8_WeatherIcon.Hint = accweathercore1.get("%weatherText8"); 
        
        layer8.Hint = accweathercore1.get("%weatherText2");
        layer9.Hint = accweathercore1.get("%weatherText3");
        layer10.Hint = accweathercore1.get("%weatherText4");
        layer11.Hint = accweathercore1.get("%weatherText5");
        layer12.Hint = accweathercore1.get("%weatherText6");
        layer13.Hint = accweathercore1.get("%weatherText7");
        layer14.Hint = accweathercore1.get("%weatherText8");       
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
        
        Day2_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum3")+".png";
        Day3_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum4")+".png";
        Day4_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum5")+".png";
        Day5_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum6")+".png";
        Day6_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum7")+".png";
        Day7_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum8")+".png";
        Day8_WeatherIcon.Src = p+wth_icon+"\\"+accweathercore1.get("%WeatherIconNum9")+".png";
        
        Day2_WeatherIcon.Hint = accweathercore1.get("%weatherText3");
        Day3_WeatherIcon.Hint = accweathercore1.get("%weatherText4");
        Day4_WeatherIcon.Hint = accweathercore1.get("%weatherText5");
        Day5_WeatherIcon.Hint = accweathercore1.get("%weatherText6");
        Day6_WeatherIcon.Hint = accweathercore1.get("%weatherText7");
        Day7_WeatherIcon.Hint = accweathercore1.get("%weatherText8");
        Day8_WeatherIcon.Hint = accweathercore1.get("%weatherText9");
        
        layer8.Hint = accweathercore1.get("%weatherText3");
        layer9.Hint = accweathercore1.get("%weatherText4");
        layer10.Hint = accweathercore1.get("%weatherText5");
        layer11.Hint = accweathercore1.get("%weatherText6");
        layer12.Hint = accweathercore1.get("%weatherText7");
        layer13.Hint = accweathercore1.get("%weatherText8");
        layer14.Hint = accweathercore1.get("%weatherText9");
    }
  }catch(er){widget_reload()}
}

function layer1OnChange(Sender){
  numbimage1.values = Sender.value;
}

function timercore1OnUpdate(Sender){
  if(WeatherUpgrTime==curWeatherUpgrTime.text || curWeatherUpgrTime.text==""){
    widget_reload();
  }
  timercore1.Enabled = 0;
}

function checkDateTime(){
  try {
    var UpdateWeather_minute_interval = UpdateWeather_minute + ((accweathercore_interval-5000)/60000); 
    var cur_Date = new Date();
    var core_Day =  cur_Date.getDate();
    var core_Hour = cur_Date.getHours();
    var core_Minute = cur_Date.getTime()/60000;
    WeatherUpgrTime = curWeatherUpgrTime.text;
    if(core_Minute>UpdateWeather_minute_interval){
      accweathercore1.Enabled = -1;
      accweathercore1.cmd(null,"!UpdateWeather");
      timercore1.Enabled = -1;
      accweathercore1.Enabled = 0;
      return(0);
    }
    if(UpdateWeather_day!=core_Day || UpdateWeather_hour!=core_Hour){
       accweathercore1.Enabled = -1;
       accweathercore1.cmd(null,"!UpdateWeather");
       accweathercore1.Enabled = 0;
    } 
  } catch(er){widget_reload();}
}

function layer2OnChange(Sender){
  numbimage2.values = Sender.value
  displacementDay();
  if(widget_OnLoad==0){checkDateTime();}
}

function indicator_OnUpdate(){
  indicator.Visible = -1;
  sleep(400);
  for(var i = 0; i < 2; i++){
    indicator.Visible = 0;
    sleep(400);
    indicator.Visible = -1;
    sleep(400);
  }
  indicator.Visible = 0;
}

function accweathercore1OnUpdate(Sender){
  try{
    displacementDay();
    accweathercore1.Enabled = 0;
    curWeatherUpgrTime.text = datetimecore1.get("%Hour0")+':'+datetimecore1.get("%Minute0");
    var cur_Date = new Date();
    UpdateWeather_day = cur_Date.getDate();
    UpdateWeather_hour = cur_Date.getHours();
    UpdateWeather_minute = cur_Date.getTime()/60000;
    var m_s = accweathercore1.get("%curWindSpeed")*0.277778;
    m_s = m_s.toFixed(1);
    curWeather3_2.Text =  accweathercore1.get("%curWindSpeed") + " êì/÷" + " (" + m_s + " ì/ñ)";
    var m_s = accweathercore1.get("%curPressure")*0.750063755419211;
    m_s = Math.round(m_s);
    curWeather2_2.Text = Math.round(accweathercore1.get("%curPressure")) + " mb" + " (" + m_s + " mm Hg)";
    if(menuitem21.checked){
      setTimeout(indicator_OnUpdate(),0);
    }
  } catch(er){widget_reload();}
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
  if(layer3.Visible==0){
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

function WeatherIcon_click_ch(ch){
  if(ch=="1"){
    menuitem19.Checked = 0;
    curWeatherIcon.MouseThrough = -1;
    Day2_WeatherIcon.MouseThrough = -1;
    Day3_WeatherIcon.MouseThrough = -1;
    Day4_WeatherIcon.MouseThrough = -1;
    Day5_WeatherIcon.MouseThrough = -1;
    Day6_WeatherIcon.MouseThrough = -1;
    Day7_WeatherIcon.MouseThrough = -1;
    Day8_WeatherIcon.MouseThrough = -1;

    Day2_lowTemp.MouseThrough = -1;
    Day3_lowTemp.MouseThrough = -1;
    Day4_lowTemp.MouseThrough = -1;
    Day5_lowTemp.MouseThrough = -1;
    Day6_lowTemp.MouseThrough = -1;
    Day7_lowTemp.MouseThrough = -1;
    Day8_lowTemp.MouseThrough = -1;

    Day2_highTemp.MouseThrough = -1;
    Day3_highTemp.MouseThrough = -1;
    Day4_highTemp.MouseThrough = -1;
    Day5_highTemp.MouseThrough = -1;
    Day6_highTemp.MouseThrough = -1;
    Day7_highTemp.MouseThrough = -1;
    Day8_highTemp.MouseThrough = -1;

    Day2_Date.MouseThrough = -1;
    Day3_Date.MouseThrough = -1;
    Day4_Date.MouseThrough = -1;
    Day5_Date.MouseThrough = -1;
    Day6_Date.MouseThrough = -1;
    Day7_Date.MouseThrough = -1;
    Day8_Date.MouseThrough = -1;
  }else{
    menuitem19.Checked = -1;
    curWeatherIcon.MouseThrough = 0;
    Day2_WeatherIcon.MouseThrough = 0;
    Day3_WeatherIcon.MouseThrough = 0;
    Day4_WeatherIcon.MouseThrough = 0;
    Day5_WeatherIcon.MouseThrough = 0;
    Day6_WeatherIcon.MouseThrough = 0;
    Day7_WeatherIcon.MouseThrough = 0;
    Day8_WeatherIcon.MouseThrough = 0;

    Day2_lowTemp.MouseThrough = 0;
    Day3_lowTemp.MouseThrough = 0;
    Day4_lowTemp.MouseThrough = 0;
    Day5_lowTemp.MouseThrough = 0;
    Day6_lowTemp.MouseThrough = 0;
    Day7_lowTemp.MouseThrough = 0;
    Day8_lowTemp.MouseThrough = 0;

    Day2_highTemp.MouseThrough = 0;
    Day3_highTemp.MouseThrough = 0;
    Day4_highTemp.MouseThrough = 0;
    Day5_highTemp.MouseThrough = 0;
    Day6_highTemp.MouseThrough = 0;
    Day7_highTemp.MouseThrough = 0;
    Day8_highTemp.MouseThrough = 0;

    Day2_Date.MouseThrough = 0;
    Day3_Date.MouseThrough = 0;
    Day4_Date.MouseThrough = 0;
    Day5_Date.MouseThrough = 0;
    Day6_Date.MouseThrough = 0;
    Day7_Date.MouseThrough = 0;
    Day8_Date.MouseThrough = 0;
  }
}

function WeatherIcon_DblClick_ch(){
  if(WeatherIcon_DblClick=="1"){
    WeatherIcon_DblClick = "0";
    Setvalue("WeatherIcon_DblClick",WeatherIcon_DblClick);
    saveIni;
    WeatherIcon_click_ch("0");
  }else{
    WeatherIcon_DblClick = "1";
    Setvalue("WeatherIcon_DblClick",WeatherIcon_DblClick);
    saveIni;
    WeatherIcon_click_ch("1");
  }
}

function backgroundImage_opacity(opacity,ch32,ch33,ch34,ch35,ch36,ch37,ch38,ch39,ch40,ch41,ch42){
  menuitem32.checked = ch32;
  menuitem33.checked = ch33;
  menuitem34.checked = ch34;
  menuitem35.checked = ch35;
  menuitem36.checked = ch36;
  menuitem37.checked = ch37;
  menuitem38.checked = ch38;
  menuitem39.checked = ch39;
  menuitem40.checked = ch40;
  menuitem41.checked = ch41;
  menuitem42.checked = ch42;
  backgroundImage.Opacity = opacity;
  backgroundImage_2.Opacity = opacity;
  if(widget_OnLoad==0){
    setValue('backgroundImage.Opacity',opacity);
    saveIni;  
  }
}

function awcore_interval(interval,ch24,ch25,ch26,ch27,ch28,ch29){
  menuitem24.checked = ch24;
  menuitem25.checked = ch25;
  menuitem26.checked = ch26;
  menuitem27.checked = ch27;
  menuitem28.checked = ch28;
  menuitem29.checked = ch29;
  if(widget_OnLoad==0){
    setValue('accweathercore.interval',interval);
    saveIni;
  }
}

function widgetOnLoad(){
  try{    
    timercore1.Interval = 3000;
    timercore1.Enabled = 0;
    if (datetimecore1.get("%Day")==accweathercore1.get("%dayNumb1")) {
      displacement_Day = 1;
    }else{
      displacement_Day = 0;
    }
    displacementDay();
    layer3.Visible = getValue('layer3.visible',layer3.Visible);
    menuitem7_checked(); 
    wth_icon = getValue('wth_icon',wth_icon);
    if(wth_icon=="1"){menuitem10.checked = -1;}
    if(wth_icon=="2"){menuitem11.checked = -1;}
    if(wth_icon=="3"){menuitem12.checked = -1;}
    if(wth_icon=="4"){menuitem13.checked = -1;}
    WeatherIcon_src();
    var Metric = GetValue("accweathercore1.isMetric","1");
    if(Metric==1){
      accweathercore1.cmd(null,"!SetCelcius");
      menuitem4.checked = -1;
      menuitem5.checked = 0;
    }
    if(Metric==0){
      accweathercore1.cmd(null,"!SetFahrenheit");
      menuitem4.checked = 0;
      menuitem5.checked = -1;
    }
    var hr = GetValue("datetimecore1.is12hr","0");
    if(hr=="0"){
      datetimecore1.cmd(null,"!24hr");
      menuitem18.checked = -1;
      menuitem17.checked = 0;
    }
    if(hr=="1"){
      datetimecore1.cmd(null,"!12hr");
      menuitem18.checked = 0;
      menuitem17.checked = -1;
    }
    WeatherIcon_DblClick = GetValue("WeatherIcon_DblClick","1");
    WeatherIcon_click_ch(WeatherIcon_DblClick);
    menuitem20.checked = GetValue("below_all_the_windows",-1);
    menuitem21.checked = GetValue("show_indicator",-1);
    accweathercore_interval = getValue('accweathercore.interval', 900000);
    if(accweathercore_interval==300000){
      awcore_interval(300000,-1,0,0,0,0,0);  
    }
    if(accweathercore_interval==600000){
      awcore_interval(600000,0,-1,0,0,0,0);
    }
    if(accweathercore_interval==900000){
      awcore_interval(900000,0,0,-1,0,0,0);
    }
    if(accweathercore_interval==1200000){
      awcore_interval(1200000,0,0,0,-1,0,0);
    }
    if(accweathercore_interval==1800000){
      awcore_interval(1800000,0,0,0,0,-1,0);
    }
    if(accweathercore_interval==3600000){
      awcore_interval(3600000,0,0,0,0,0,-1);
    }
    menuitem30.checked = GetValue("show_sec",0);
    if(menuitem30.checked){
      sec.Visible = -1;
    }else{
      sec.Visible = 0;
    }  
    var op = GetValue("backgroundImage.Opacity",1);
    if(op==1){
      backgroundImage_opacity(1,-1,0,0,0,0,0,0,0,0,0,0);
    }
    if(op==0.9){
      backgroundImage_opacity(0.9,0,-1,0,0,0,0,0,0,0,0,0);
    }
    if(op==0.8){
      backgroundImage_opacity(0.8,0,0,-1,0,0,0,0,0,0,0,0);
    }
    if(op==0.7){
      backgroundImage_opacity(0.7,0,0,0,-1,0,0,0,0,0,0,0);
    }
    if(op==0.6){
      backgroundImage_opacity(0.6,0,0,0,0,-1,0,0,0,0,0,0);
    }
    if(op==0.5){
      backgroundImage_opacity(0.5,0,0,0,0,0,-1,0,0,0,0,0);
    }
    if(op==0.4){
      backgroundImage_opacity(0.4,0,0,0,0,0,0,-1,0,0,0,0);
    }
    if(op==0.3){
      backgroundImage_opacity(0.3,0,0,0,0,0,0,0,-1,0,0,0);
    }
    if(op==0.2){
      backgroundImage_opacity(0.2,0,0,0,0,0,0,0,0,-1,0,0);
    }
    if(op==0.1){
       backgroundImage_opacity(0.1,0,0,0,0,0,0,0,0,0,-1,0);
    }
    if(op==0.01){
      backgroundImage_opacity(0.01,0,0,0,0,0,0,0,0,0,0,-1);
    }
    Forced_always_below();
  } catch(er){widget_reload()}
  widget_OnLoad = 0;
}

function menuitem10OnClick(Sender){
  if(menuitem10.checked==0){
    wth_icon = "1"; 
    setValue('wth_icon',"1");
    saveIni;
    menuitem10.checked = -1;
    menuitem11.checked = 0;
    menuitem12.checked = 0;
    menuitem13.checked = 0; 
  }
  WeatherIcon_src();
}

function menuitem11OnClick(Sender){
if(menuitem11.checked==0){
    wth_icon = "2";
    setValue('wth_icon',"2");
    saveIni;
    menuitem10.checked = 0;
    menuitem11.checked = -1;
    menuitem12.checked = 0;
    menuitem13.checked = 0;
  } 
  WeatherIcon_src();  
}

function menuitem12OnClick(Sender){
if(menuitem12.checked==0){
    wth_icon = "3";
    setValue('wth_icon',"3");
    saveIni;
    menuitem10.checked = 0;
    menuitem11.checked = 0;
    menuitem12.checked = -1;
    menuitem13.checked = 0;
  }
  WeatherIcon_src(); 
}

function menuitem13OnClick(Sender){
if(menuitem13.checked==0){
    wth_icon = "4";
    setValue('wth_icon',"4");
    saveIni;
    menuitem10.checked = 0;
    menuitem11.checked = 0;
    menuitem12.checked = 0;
    menuitem13.checked = -1;
  } 
  WeatherIcon_src();
}

function menuitem4OnClick(Sender){
  accweathercore1.cmd(null,"!SetCelcius");
  menuitem4.checked = -1;
  menuitem5.checked = 0;
}

function menuitem5OnClick(Sender){
  accweathercore1.cmd(null,"!SetFahrenheit");
  menuitem4.checked = 0;
  menuitem5.checked = -1;
}
 
function menuitem17OnClick(Sender){
  datetimecore1.cmd(null,"!12hr");
  menuitem17.checked = -1;
  menuitem18.checked = 0;  
}

function menuitem18OnClick(Sender){
  datetimecore1.cmd(null,"!24hr");
  menuitem17.checked = 0;
  menuitem18.checked = -1;  
}

function menuitem19OnClick(Sender){
  WeatherIcon_DblClick_ch();
}

function Update_Weather(){
  accweathercore1.Enabled = -1;
  accweathercore1.cmd(null,"!UpdateWeather");
}

function cityNameOnChange(Sender){
  if(widget_OnLoad==0 && cityName.Text!=accweathercore1.cityName){
    var wsc = new ActiveXObject("WScript.Shell");
    wsc.SendKeys("{ESC}");
    sleep(500);
    Update_Weather();
    sleep(500);
    widget_reload();
  }  
} 

function widgetOnEnter(){
  widget.SetFocus();
  Forced_always_below();
}

function menuitem20OnClick(Sender){
  if(menuitem20.checked==0){
    menuitem20.checked = -1;
  }else{
    menuitem20.checked = 0;
  }   
  setValue('below_all_the_windows',menuitem20.checked);
  saveIni;
}

function menuitem21OnClick(Sender){
  if(menuitem21.checked==0){
    menuitem21.checked = -1;
  }else{
    menuitem21.checked = 0;
  }  
  setValue('show_indicator',menuitem21.checked);
  saveIni;
}

function menuitem24OnClick(Sender){
  accweathercore_interval = 300000;
  awcore_interval(300000,-1,0,0,0,0,0);
}

function menuitem25OnClick(Sender){
  accweathercore_interval = 600000;
  awcore_interval(600000,0,-1,0,0,0,0);  
}

function menuitem26OnClick(Sender){
  accweathercore_interval = 900000;
  awcore_interval(900000,0,0,-1,0,0,0);
}

function menuitem27OnClick(Sender){
  accweathercore_interval = 1200000;
  awcore_interval(1200000,0,0,0,-1,0,0);
}

function menuitem28OnClick(Sender){
  accweathercore_interval = 1800000;
  awcore_interval(1800000,0,0,0,0,-1,0);
}

function menuitem29OnClick(Sender){
  accweathercore_interval = 3600000;
  awcore_interval(3600000,0,0,0,0,0,-1); 
}

function serverUpgrTimeOnChange(Sender){
  if(serverUpgrTime.text.length<5){
    var str = serverUpgrTime.text;
    var i = str.indexOf(':');
    if(i==1){
      str = "0" + str;
    }
    i = str.indexOf(':');
    if(i==2){
      if(str.length<5){
        str = str.replace(":", ":0");
      }   
    }
    serverUpgrTime.text = str;
  }  
  if(Sender.Text==""){
    Sender.Text = "íåò äàííûõ";
  }
}

function menuitem1OnClick(Sender){
  accweathercore1.Enabled = -1;
  accweathercore1.cmd(null,"!ChangeLocation");  
}

function menuitem30OnClick(Sender){
  if(menuitem30.checked==0){
    menuitem30.checked = -1;
    sec.Visible = -1; 
  }else{
    menuitem30.checked = 0;
    sec.Visible = 0;
  }
  setValue('show_sec',menuitem30.checked);
  saveIni; 
}

function curWeatherOnChange(Sender){
  if(Sender.Text==""){
    Sender.Text = "íåò äàííûõ";
  }
}

function menuitem32OnClick(Sender){
  backgroundImage_opacity(1,-1,0,0,0,0,0,0,0,0,0,0);
}

function menuitem33OnClick(Sender){
  backgroundImage_opacity(0.9,0,-1,0,0,0,0,0,0,0,0,0);
}

function menuitem34OnClick(Sender){
  backgroundImage_opacity(0.8,0,0,-1,0,0,0,0,0,0,0,0);
}

function menuitem35OnClick(Sender){
  backgroundImage_opacity(0.7,0,0,0,-1,0,0,0,0,0,0,0);
}

function menuitem36OnClick(Sender){
  backgroundImage_opacity(0.6,0,0,0,0,-1,0,0,0,0,0,0);
}

function menuitem37OnClick(Sender){
  backgroundImage_opacity(0.5,0,0,0,0,0,-1,0,0,0,0,0);
}

function menuitem38OnClick(Sender){
  backgroundImage_opacity(0.4,0,0,0,0,0,0,-1,0,0,0,0);
}

function menuitem39OnClick(Sender){
  backgroundImage_opacity(0.3,0,0,0,0,0,0,0,-1,0,0,0);
}

function menuitem40OnClick(Sender){
  backgroundImage_opacity(0.2,0,0,0,0,0,0,0,0,-1,0,0);
}

function menuitem41OnClick(Sender){
  backgroundImage_opacity(0.1,0,0,0,0,0,0,0,0,0,-1,0);
}

function menuitem42OnClick(Sender){
  backgroundImage_opacity(0.01,0,0,0,0,0,0,0,0,0,0,-1);
}

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
        Day1_lowTemp.coreFormat = "${lowTemp1}�";
        Day2_lowTemp.coreFormat = "/${lowTemp2}�";
        Day3_lowTemp.coreFormat = "/${lowTemp3}�";
        Day4_lowTemp.coreFormat = "/${lowTemp4}�";
        Day5_lowTemp.coreFormat = "/${lowTemp5}�";
        Day6_lowTemp.coreFormat = "/${lowTemp6}�";
        Day7_lowTemp.coreFormat = "/${lowTemp7}�";
        Day8_lowTemp.coreFormat = "/${lowTemp8}�";

        Day1_highTemp.coreFormat = "${highTemp1}�";
        Day2_highTemp.coreFormat = "${highTemp2}�";
        Day3_highTemp.coreFormat = "${highTemp3}�";
        Day4_highTemp.coreFormat = "${highTemp4}�";
        Day5_highTemp.coreFormat = "${highTemp5}�";
        Day6_highTemp.coreFormat = "${highTemp6}�";
        Day7_highTemp.coreFormat = "${highTemp7}�";
        Day8_highTemp.coreFormat = "${highTemp8}�";

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
        Day1_lowTemp.coreFormat = "${lowTemp2}�";
        Day2_lowTemp.coreFormat = "/${lowTemp3}�";
        Day3_lowTemp.coreFormat = "/${lowTemp4}�";
        Day4_lowTemp.coreFormat = "/${lowTemp5}�";
        Day5_lowTemp.coreFormat = "/${lowTemp6}�";
        Day6_lowTemp.coreFormat = "/${lowTemp7}�";
        Day7_lowTemp.coreFormat = "/${lowTemp8}�";
        Day8_lowTemp.coreFormat = "/${lowTemp9}�";

        Day1_highTemp.coreFormat = "${highTemp2}�";
        Day2_highTemp.coreFormat = "${highTemp3}�";
        Day3_highTemp.coreFormat = "${highTemp4}�";
        Day4_highTemp.coreFormat = "${highTemp5}�";
        Day5_highTemp.coreFormat = "${highTemp6}�";
        Day6_highTemp.coreFormat = "${highTemp7}�";
        Day7_highTemp.coreFormat = "${highTemp7}�";
        Day8_highTemp.coreFormat = "${highTemp9}�";

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
  indicator.Visible = true;
  sleep(400);
  for(var i = 0; i < 2; i++){
    indicator.Visible = false;
    sleep(400);
    indicator.Visible = true;
    sleep(400);
  }
  indicator.Visible = false;
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

function WeatherIcon_click_ch(ch){
  if(ch=="1"){
    menuitem19.Checked = false;
    curWeatherIcon.MouseThrough = true;
    Day2_WeatherIcon.MouseThrough = true;
    Day3_WeatherIcon.MouseThrough = true;
    Day4_WeatherIcon.MouseThrough = true;
    Day5_WeatherIcon.MouseThrough = true;
    Day6_WeatherIcon.MouseThrough = true;
    Day7_WeatherIcon.MouseThrough = true;
    Day8_WeatherIcon.MouseThrough = true;

    Day2_lowTemp.MouseThrough = true;
    Day3_lowTemp.MouseThrough = true;
    Day4_lowTemp.MouseThrough = true;
    Day5_lowTemp.MouseThrough = true;
    Day6_lowTemp.MouseThrough = true;
    Day7_lowTemp.MouseThrough = true;
    Day8_lowTemp.MouseThrough = true;

    Day2_highTemp.MouseThrough = true;
    Day3_highTemp.MouseThrough = true;
    Day4_highTemp.MouseThrough = true;
    Day5_highTemp.MouseThrough = true;
    Day6_highTemp.MouseThrough = true;
    Day7_highTemp.MouseThrough = true;
    Day8_highTemp.MouseThrough = true;

    Day2_Date.MouseThrough = true;
    Day3_Date.MouseThrough = true;
    Day4_Date.MouseThrough = true;
    Day5_Date.MouseThrough = true;
    Day6_Date.MouseThrough = true;
    Day7_Date.MouseThrough = true;
    Day8_Date.MouseThrough = true;
  }else{
    menuitem19.Checked = true;
    curWeatherIcon.MouseThrough = false;
    Day2_WeatherIcon.MouseThrough = false;
    Day3_WeatherIcon.MouseThrough = false;
    Day4_WeatherIcon.MouseThrough = false;
    Day5_WeatherIcon.MouseThrough = false;
    Day6_WeatherIcon.MouseThrough = false;
    Day7_WeatherIcon.MouseThrough = false;
    Day8_WeatherIcon.MouseThrough = false;

    Day2_lowTemp.MouseThrough = false;
    Day3_lowTemp.MouseThrough = false;
    Day4_lowTemp.MouseThrough = false;
    Day5_lowTemp.MouseThrough = false;
    Day6_lowTemp.MouseThrough = false;
    Day7_lowTemp.MouseThrough = false;
    Day8_lowTemp.MouseThrough = false;

    Day2_highTemp.MouseThrough = false;
    Day3_highTemp.MouseThrough = false;
    Day4_highTemp.MouseThrough = false;
    Day5_highTemp.MouseThrough = false;
    Day6_highTemp.MouseThrough = false;
    Day7_highTemp.MouseThrough = false;
    Day8_highTemp.MouseThrough = false;

    Day2_Date.MouseThrough = false;
    Day3_Date.MouseThrough = false;
    Day4_Date.MouseThrough = false;
    Day5_Date.MouseThrough = false;
    Day6_Date.MouseThrough = false;
    Day7_Date.MouseThrough = false;
    Day8_Date.MouseThrough = false;
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
    if(wth_icon=="1"){menuitem10.checked = true;}
    if(wth_icon=="2"){menuitem11.checked = true;}
    if(wth_icon=="3"){menuitem12.checked = true;}
    if(wth_icon=="4"){menuitem13.checked = true;}
    WeatherIcon_src();
    var Metric = GetValue("accweathercore1.isMetric","1");
    if(Metric==1){
      accweathercore1.cmd(null,"!SetCelcius");
      menuitem4.checked = true;
      menuitem5.checked = false;
    }
    if(Metric==0){
      accweathercore1.cmd(null,"!SetFahrenheit");
      menuitem4.checked = false;
      menuitem5.checked = true;
    }
    var hr = GetValue("datetimecore1.is12hr","0");
    if(hr=="0"){
      datetimecore1.cmd(null,"!24hr");
      menuitem18.checked = true;
      menuitem17.checked = false;
    }
    if(hr=="1"){
      datetimecore1.cmd(null,"!12hr");
      menuitem18.checked = false;
      menuitem17.checked = true;
    }
    WeatherIcon_DblClick = GetValue("WeatherIcon_DblClick","1");
    WeatherIcon_click_ch(WeatherIcon_DblClick);
    menuitem20.checked = GetValue("menuitem20.checked",true);
    menuitem21.checked = GetValue("menuitem21.checked",true);
    menuitem24.checked = getValue('menuitem24.checked', false);
    menuitem25.checked = getValue('menuitem25.checked', false);
    menuitem26.checked = getValue('menuitem26.checked', true);
    menuitem27.checked = getValue('menuitem27.checked', false);
    menuitem28.checked = getValue('menuitem28.checked', false);
    menuitem29.checked = getValue('menuitem29.checked', false);
    if(menuitem24.checked){
      accweathercore_interval = 300000;
    }
    if(menuitem25.checked){
      accweathercore_interval = 600000;
    }
    if(menuitem26.checked){
      accweathercore_interval = 900000;
    }
    if(menuitem27.checked){
      accweathercore_interval = 1200000;
    }
    if(menuitem28.checked){
      accweathercore_interval = 1800000;
    }
    if(menuitem29.checked){
      accweathercore_interval = 3600000;
    }
    Forced_always_below()
  } catch(er){widget_reload()}
  widget_OnLoad = 0;
}

function menuitem10OnClick(Sender){
  if(menuitem10.checked==false){
    wth_icon = "1"; 
    setValue('wth_icon',"1");
    saveIni;
    menuitem10.checked = true;
    menuitem11.checked = false;
    menuitem12.checked = false;
    menuitem13.checked = false; 
  }
  WeatherIcon_src();
}

function menuitem11OnClick(Sender){
if(menuitem11.checked==false){
    wth_icon = "2";
    setValue('wth_icon',"2");
    saveIni;
    menuitem10.checked = false;
    menuitem11.checked = true;
    menuitem12.checked = false;
    menuitem13.checked = false;
  } 
  WeatherIcon_src();  
}

function menuitem12OnClick(Sender){
if(menuitem12.checked==false){
    wth_icon = "3";
    setValue('wth_icon',"3");
    saveIni;
    menuitem10.checked = false;
    menuitem11.checked = false;
    menuitem12.checked = true;
    menuitem13.checked = false;
  }
  WeatherIcon_src(); 
}

function menuitem13OnClick(Sender){
if(menuitem13.checked==false){
    wth_icon = "4";
    setValue('wth_icon',"4");
    saveIni;
    menuitem10.checked = false;
    menuitem11.checked = false;
    menuitem12.checked = false;
    menuitem13.checked = true;
  } 
  WeatherIcon_src();
}

function menuitem4OnClick(Sender){
  accweathercore1.cmd(null,"!SetCelcius");
  menuitem4.checked = true;
  menuitem5.checked = false;
}

function menuitem5OnClick(Sender){
  accweathercore1.cmd(null,"!SetFahrenheit");
  menuitem4.checked = false;
  menuitem5.checked = true;
}
 
function menuitem17OnClick(Sender){
  datetimecore1.cmd(null,"!12hr");
  menuitem17.checked = true;
  menuitem18.checked = false;  
}

function menuitem18OnClick(Sender){
  datetimecore1.cmd(null,"!24hr");
  menuitem17.checked = false;
  menuitem18.checked = true;  
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
    Update_Weather();
    var str = "��� ���������� �������� ����� ����������� ������ ������� ������������� ������. ����� ������������ ������� ����������� �������� ���� ��������� ��������������. ������������� ������?";
    if(confirm(str)){widget_reload();}
  }  
} 

function widgetOnEnter(){
  widget.SetFocus();
  Forced_always_below();
}

function menuitem20OnClick(Sender){
  if(menuitem20.checked==false){
    menuitem20.checked = true;
  }else{
    menuitem20.checked = false;
  }   
  setValue('menuitem20.checked',menuitem20.checked);
  saveIni;
}

function menuitem21OnClick(Sender){
  if(menuitem21.checked==false){
    menuitem21.checked = true;
  }else{
    menuitem21.checked = false;
  }  
  setValue('menuitem21.checked',menuitem21.checked);
  saveIni;
}

function setValue_menuitem_24_29(ch24, ch25, ch26, ch27, ch28, ch29, interval){
  menuitem24.checked = ch24;
  menuitem25.checked = ch25;
  menuitem26.checked = ch26;
  menuitem27.checked = ch27;
  menuitem28.checked = ch28;
  menuitem29.checked = ch29;
  setValue('menuitem24.checked',menuitem24.checked);
  setValue('menuitem25.checked',menuitem25.checked);
  setValue('menuitem26.checked',menuitem26.checked);
  setValue('menuitem27.checked',menuitem27.checked);
  setValue('menuitem28.checked',menuitem28.checked);
  setValue('menuitem29.checked',menuitem29.checked);
  saveIni;
  accweathercore_interval = interval;
}

function menuitem24OnClick(Sender){
  setValue_menuitem_24_29(true, false, false, false, false, false, 300000);
}

function menuitem25OnClick(Sender){
  setValue_menuitem_24_29(false, true, false, false, false, false, 600000);  
}

function menuitem26OnClick(Sender){
  setValue_menuitem_24_29(false, false, true, false, false, false, 900000);
}

function menuitem27OnClick(Sender){
  setValue_menuitem_24_29(false, false, false, true, false, false, 1200000);
}

function menuitem28OnClick(Sender){
  setValue_menuitem_24_29(false, false, false, false, true, false, 1800000);
}

function menuitem29OnClick(Sender){
  setValue_menuitem_24_29(false, false, false, false, false, true, 3600000); 
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
}

function menuitem1OnClick(Sender){
  accweathercore1.Enabled = -1;
  accweathercore1.cmd(null,"!ChangeLocation");  
}

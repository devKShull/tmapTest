import React from 'react';
import {View, Text} from 'react-native';
import WebView from 'react-native-webview';

const Tmap = () => {

    const tmapNavigate =
        `<html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                <title>simpleMap</title>
                <script src="https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=l7xxaa988ec5c97f499186a2545e0ab433fe"></script>
                <script type="text/javascript">
		            function initTmap(){
		        		var map = new Tmapv2.Map("map_div",
		        		{
		        			center: new Tmapv2.LatLng(37.566481622437934,126.98502302169841),
		        			width: "100%", 
		        			height: "100%",
		        			zoom: 19
		        		});
                        var marker = new Tmapv2.Marker({
                            position: new Tmapv2.LatLng(37.566481622437934,126.98502302169841),
                            map: map
                        });	 
		        	}
                    
		        </script>
            </head>
            <body onload="initTmap()">
                <div id="map_div">
                </div>        
            </body>
        </html>	`;


    // error발생시
    const errorHandler = ({nativeEvent}) =>
        console.log('WebView error: ', nativeEvent);

    return (
        <View style={{flex:1,backgroundColor:"#aa1511",height:"100%", width:"100%"}}>
            <WebView
                style={{backgroundColor:"#aa15aa",margin:10}}
                originWhitelist={['*']}
                // source={{ uri: 'https://www.naver.com/' }}
                source={{ html: tmapNavigate }}
                javaScriptEnabled={true}
            />
        </View>
    );
};

export default Tmap;
